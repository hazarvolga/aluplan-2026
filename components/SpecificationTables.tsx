import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

interface TableRow { keyTR: string }
interface SpecTable { rows: TableRow[] }

export default function SpecificationTables({ title, tables }: { title: string; tables: SpecTable[] }) {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 gap-8">
          {tables.map((t, idx) => (
            <Card key={idx} className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <ul className="columns-1 md:columns-2 gap-x-12 gap-y-4">
                {t.rows.map((r, i) => (
                  <li key={i} className="mb-3 break-inside-avoid text-gray-300 font-medium flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <span>{r.keyTR}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

