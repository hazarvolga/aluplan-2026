import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - Aluplan",
  description: "Aluplan hakkında bilgi",
};

export default function Page() {
  return <ClientPage />;
}
