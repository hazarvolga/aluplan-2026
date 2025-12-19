import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Curve - Aluplan",
  description: "Araç dönüş simülasyonu",
};

export default function Page() {
  return <ClientPage />;
}
