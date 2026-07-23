"use client";

import type { ConsultationFormContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { useConsultationForm } from "@/hooks/use-consultation-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function ConsultationFormSection({
  content,
}: {
  content: ConsultationFormContent;
}) {
  const { form, status, onSubmit } = useConsultationForm(
    content.fields,
    content.source
  );

  return (
    <section id="tu-van" className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.description}
        />

        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-10"
          >
            {content.fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: rhfField }) => (
                  <FormItem
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                  >
                    <FormLabel>
                      {field.label}
                      {field.required ? (
                        <span className="text-destructive"> *</span>
                      ) : null}
                    </FormLabel>
                    <FormControl>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder}
                          {...rhfField}
                        />
                      ) : field.type === "select" ? (
                        <Select
                          onValueChange={rhfField.onChange}
                          value={rhfField.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          {...rhfField}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="sm:col-span-2"
            >
              {status === "submitting" ? "Đang gửi..." : content.submitLabel}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
