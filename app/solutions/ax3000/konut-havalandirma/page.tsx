import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 Konut Havalandırma - Aluplan",
  description: "Konut havalandırma sistemleri",
};

export default function Page() {
  return <ClientPage />;
}
