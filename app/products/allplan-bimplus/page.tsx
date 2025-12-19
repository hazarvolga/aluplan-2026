import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allplan Bimplus - Aluplan",
  description: "BIM işbirliği ve veri yönetimi",
};

export default function Page() {
  return <ClientPage />;
}
