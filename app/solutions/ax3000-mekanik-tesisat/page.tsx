import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Mekanik Tesisat - Aluplan",
  description: "Mekanik tesisat tasarım ve analizi",
};

export default function Page() {
  return <ClientPage />;
}
