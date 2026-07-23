import type { ComparisonTableContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { ScrollableTable } from "@/components/common/data-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonTableSection({
  content,
  id,
}: {
  content: ComparisonTableContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-8">
          <ScrollableTable>
            <Table className="min-w-[720px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[220px] bg-secondary/50">Hạng mục</TableHead>
                  {content.columns.map((col) => (
                    <TableHead key={col} className="bg-secondary/50 font-semibold text-foreground">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-semibold text-foreground">
                      {row.name}
                    </TableCell>
                    {row.cells.map((cell, i) => (
                      <TableCell key={i} className="text-muted-foreground">
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollableTable>
        </div>
        {content.note ? (
          <p className="mt-4 text-sm italic text-muted-foreground">
            {content.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
