"use client";

import * as React from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import type { FormFieldConfig } from "@/content/types";
import {
  ConsultationEndpointNotConfiguredError,
  submitConsultation,
} from "@/lib/google-sheets";

function buildSchema(fields: FormFieldConfig[]) {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const field of fields) {
    let schema: z.ZodTypeAny = z.string();
    if (field.required) {
      schema = (schema as z.ZodString).min(1, "Vui lòng điền thông tin này");
    } else {
      schema = schema.optional().or(z.literal(""));
    }
    shape[field.name] = schema;
  }

  return z.object(shape);
}

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useConsultationForm(
  fields: FormFieldConfig[],
  source: string
) {
  const schema = React.useMemo(() => buildSchema(fields), [fields]);
  const defaultValues = React.useMemo(
    () =>
      Object.fromEntries(fields.map((f) => [f.name, ""])) as Record<
        string,
        string
      >,
    [fields]
  );

  const form = useForm<Record<string, string>>({
    resolver: zodResolver(schema) as unknown as Resolver<
      Record<string, string>
    >,
    defaultValues,
  });

  const [status, setStatus] = React.useState<SubmitStatus>("idle");

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("submitting");
    try {
      await submitConsultation(source, values);
      setStatus("success");
      toast.success("Đã gửi thông tin thành công!", {
        description: "TIFF sẽ liên hệ tư vấn trong thời gian sớm nhất.",
      });
      form.reset();
    } catch (error) {
      setStatus("error");
      if (error instanceof ConsultationEndpointNotConfiguredError) {
        toast.error("Form chưa được kết nối.", {
          description:
            "Hệ thống nhận tư vấn đang được thiết lập, vui lòng liên hệ trực tiếp qua số điện thoại/email bên dưới.",
        });
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại.", {
          description: "Hoặc liên hệ trực tiếp qua số điện thoại/email bên dưới.",
        });
      }
    }
  });

  return { form, status, onSubmit };
}
