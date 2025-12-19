import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Aluplan",
  description: "Bizimle iletişime geçin",
};

export default function Page() {
  return <ClientPage />;
}
