import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphical Text - Aluplan",
  description: "Allplan için 3D metin oluşturma aracı",
};

export default function Page() {
  return <ClientPage />;
}
