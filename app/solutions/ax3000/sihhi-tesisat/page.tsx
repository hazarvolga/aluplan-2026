import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Sıhhi Tesisat - Aluplan",
  description: "Sıhhi tesisat sistemleri tasarımı",
};

export default function Page() {
  return <ClientPage />;
}
