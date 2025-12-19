import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Elektrik - Aluplan",
  description: "Elektrik sistemleri tasarımı",
};

export default function Page() {
  return <ClientPage />;
}
