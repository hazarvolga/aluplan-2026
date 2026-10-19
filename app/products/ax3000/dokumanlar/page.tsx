import type { Metadata } from "next";
import DocumentsPage from "./ClientPage";

export const metadata: Metadata = {
  title: "AX3000 Dokümanları",
  description: "AX3000 broşürlerini ve teknik fonksiyon açıklamalarını PDF ve Word formatında indirin. İngilizce ve Almanca dokümanlar.",
  alternates: { canonical: "/products/ax3000/dokumanlar" },
};

export default function Page() {
  return <DocumentsPage />;
}
