import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Yapı Fiziği - Aluplan",
  description: "Enerji performansı ve yapı fiziği analizleri",
};

export default function Page() {
  return <ClientPage />;
}
