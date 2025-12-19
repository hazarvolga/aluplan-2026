import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prefabrik Çözümler - Aluplan",
  description: "Prefabrik beton tasarım ve üretim çözümleri",
};

export default function Page() {
  return <ClientPage />;
}
