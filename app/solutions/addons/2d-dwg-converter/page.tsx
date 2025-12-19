import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2D DWG Converter - Aluplan",
  description: "DWG dosyalarını Allplan bileşenlerine dönüştürme",
};

export default function Page() {
  return <ClientPage />;
}
