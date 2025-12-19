import { Metadata } from "next";
import ImarYonetmeligiClient from "./ClientPage";

export const metadata: Metadata = {
  title: "Planlı Alanlar İmar Yönetmeliği - Aluplan",
  description: "İmar yönetmeliği kontrolleri ve hesaplamaları",
};

export default function Page() {
  return <ImarYonetmeligiClient />;
}
