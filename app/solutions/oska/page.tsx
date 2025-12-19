import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSKA - Aluplan",
  description: "Maliyet yönetimi ve hakediş çözümleri",
};

export default function Page() {
  return <ClientPage />;
}
