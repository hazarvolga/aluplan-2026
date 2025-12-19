import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 - Aluplan",
  description: "Mekanik, elektrik ve sıhhi tesisat (MEP) çözümleri",
};

export default function Page() {
  return <ClientPage />;
}
