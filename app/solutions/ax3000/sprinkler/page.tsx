import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Sprinkler - Aluplan",
  description: "Sprinkler sistemleri tasarımı",
};

export default function Page() {
  return <ClientPage />;
}
