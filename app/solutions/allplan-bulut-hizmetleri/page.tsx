import AllplanBulutHizmetleriPage from "@/components/solutions/AllplanBulutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALLPLAN Bulut Hizmetleri - Aluplan",
  description: "Plan paylaşımları, ekip çalışması ve model kontrolü için Allplan bulut hizmetleri.",
};

export default function Page() {
  return <AllplanBulutHizmetleriPage />;
}
