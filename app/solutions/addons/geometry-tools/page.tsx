import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geometry Tools - Aluplan",
  description: "Geometri düzenleme ve analiz araçları",
};

export default function Page() {
  return <ClientPage />;
}
