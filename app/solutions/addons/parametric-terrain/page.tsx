import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parametric Terrain - Aluplan",
  description: "Parametrik arazi modelleme",
};

export default function Page() {
  return <ClientPage />;
}
