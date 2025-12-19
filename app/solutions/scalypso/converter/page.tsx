import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso Converter - Aluplan",
  description: "Nokta bulutu dönüştürücü",
};

export default function Page() {
  return <ClientPage />;
}
