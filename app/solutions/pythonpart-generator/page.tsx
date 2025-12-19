import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PythonPart Generator - Aluplan",
  description: "Kod yazmadan parametrik nesne oluşturma",
};

export default function Page() {
  return <ClientPage />;
}
