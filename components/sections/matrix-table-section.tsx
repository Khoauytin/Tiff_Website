import type { MatrixTableContent } from "@/content/types";
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

export function MatrixTableSection({
  content,
  id,
}: {
  content: MatrixTableContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        {content.note ? (
          <p className="mt-3 text-sm italic text-muted-foreground">
            {content.note}
          </p>
        ) : null}
        <div className="mt-8">
          <ScrollableTable>
            <Table className="min-w-[720px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[220px] bg-card">Hạng mục</TableHead>
                  {content.packageColumns.map((col) => (
                    <TableHead key={col} className="bg-card font-semibold text-foreground">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.rows.map((row) => (
                  <TableRow key={row.category}>
                    <TableCell className="font-medium text-foreground">
                      {row.category}
                    </TableCell>
                    {row.values.map((value, i) => (
                      <TableCell key={i} className="text-muted-foreground">
                        {value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollableTable>
        </div>
      </div>
    </section>
  );
}
