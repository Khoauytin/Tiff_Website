import type { InfoTableContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function InfoTableSection({
  content,
  id,
}: {
  content: InfoTableContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <Table>
            <TableBody>
              {content.rows.map((row) => (
                <TableRow key={row.left} className="align-top">
                  <TableCell className="w-[38%] bg-secondary/40 font-medium text-foreground">
                    {row.left}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.right}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
