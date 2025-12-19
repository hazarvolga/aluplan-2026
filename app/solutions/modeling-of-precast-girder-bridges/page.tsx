import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prefabrik Kirişli Köprü Modelleme - Aluplan",
  description: "Prefabrik kirişli köprülerin modellenmesi için Allplan Bridge çözümleri.",
};

export default function Page() {
  return <ClientPage />;
}
