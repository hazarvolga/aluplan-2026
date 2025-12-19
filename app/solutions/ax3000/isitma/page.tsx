import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Isıtma - Aluplan",
  description: "Isıtma sistemleri tasarım ve analizi",
};

export default function Page() {
  return <ClientPage />;
}
