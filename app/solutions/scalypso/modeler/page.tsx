import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso Modeler - Aluplan",
  description: "Nokta bulutundan 3D modelleme",
};

export default function Page() {
  return <ClientPage />;
}
