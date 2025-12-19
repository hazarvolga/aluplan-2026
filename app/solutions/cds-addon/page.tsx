import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDS Eklentisi - Aluplan",
  description: "Kablo ve boru sistemleri için eklenti çözümü",
};

export default function Page() {
  return <ClientPage />;
}
