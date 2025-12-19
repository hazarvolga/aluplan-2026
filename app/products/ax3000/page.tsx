import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Ürünleri - Aluplan",
  description: "Enerji ve tesisat mühendisliği yazılımları",
};

export default function Page() {
  return <ClientPage />;
}
