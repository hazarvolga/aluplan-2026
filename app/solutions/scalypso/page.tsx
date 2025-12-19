import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso - Aluplan",
  description: "Nokta bulutu işleme ve modelleme yazılımı",
};

export default function Page() {
  return <ClientPage />;
}
