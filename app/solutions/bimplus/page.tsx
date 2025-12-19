import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimplus - Aluplan",
  description: "Bulut tabanlı BIM işbirliği platformu",
};

export default function Page() {
  return <ClientPage />;
}
