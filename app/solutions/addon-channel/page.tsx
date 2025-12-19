import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eklenti Kanalı - Aluplan",
  description: "Özelleştirilmiş Allplan eklentileri",
};

export default function Page() {
  return <ClientPage />;
}
