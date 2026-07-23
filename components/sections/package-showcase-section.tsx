"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type {
  ComparisonTableContent,
  MatrixTableContent,
  CtaTableContent,
} from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { PlaceholderImage } from "@/components/common/placeholder-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Replaces the old ComparisonTableSection + MatrixTableSection + (matching)
 * CtaTableSection rows with a pill-tab switcher — pivoting the same three
 * content pieces (no data changes) into "pick a package, see everything
 * about it below" instead of a table. Any CTA row that doesn't match a
 * package by name (e.g. a "chưa rõ concept" catch-all) renders as a
 * standalone button below instead of being dropped.
 */
export function PackageShowcaseSection({
  comparisonTable,
  matrixTable,
  ctaTable,
  id,
}: {
  comparisonTable: ComparisonTableContent;
  matrixTable: MatrixTableContent;
  ctaTable: CtaTableContent;
  id?: string;
}) {
  const packages = comparisonTable.rows.map((row, i) => ({
    name: row.name,
    imageKey: row.imageKey,
    stats: comparisonTable.columns.map((label, j) => ({
      label,
      value: row.cells[j],
    })),
    checklist: matrixTable.rows.map((matrixRow) => ({
      label: matrixRow.category,
      value: matrixRow.values[i],
    })),
    cta: ctaTable.rows.find((r) => r.label === row.name),
  }));

  const [active, setActive] = React.useState(0);
  const pkg = packages[active];

  const extraCtas = ctaTable.rows.filter(
    (r) => !comparisonTable.rows.some((row) => row.name === r.label)
  );

  return (
    <section id={id} className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={comparisonTable.eyebrow}
          title={comparisonTable.title}
        />
        {comparisonTable.note ? (
          <p className="mt-3 text-sm italic text-muted-foreground">
            {comparisonTable.note}
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-2.5" role="tablist">
          {packages.map((p, i) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                i === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <motion.article
            key={pkg.name}
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[220px_1fr] lg:gap-8"
          >
              {pkg.imageKey ? (
                <PlaceholderImage
                  imageKey={pkg.imageKey}
                  className="rounded-tr-[2.5rem] rounded-bl-[2.5rem] lg:h-full"
                />
              ) : null}

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {pkg.name}
                  </h3>
                  {pkg.cta ? (
                    <Button asChild size="lg" className="shrink-0">
                      <a href={pkg.cta.href}>
                        {pkg.cta.ctaText}
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {pkg.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-muted p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="eyebrow mb-3">Hạng mục bao gồm</p>
                  <div className="grid gap-x-8 sm:grid-cols-2">
                    {pkg.checklist.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start justify-between gap-3 border-b border-border py-2.5 text-sm"
                      >
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="text-right font-medium text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </motion.article>
        </div>

        {extraCtas.length > 0 ? (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {extraCtas.map((row) => (
              <Button key={row.label} asChild size="lg" variant="outline">
                <a href={row.href}>{row.ctaText}</a>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
