import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

interface TableRow { keyTR: string }
interface SpecTable { rows: TableRow[] }

export default function SpecificationTables({ title, tables }: { title: string; tables: SpecTable[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 gap-8">
          {tables.map((t, idx) => (
            <Card key={idx} className="p-6">
              <ul className="columns-1 md:columns-2 gap-4">
                {t.rows.map((r, i) => (
                  <li key={i} className="mb-3 break-inside-avoid text-gray-900 font-medium">{r.keyTR}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

