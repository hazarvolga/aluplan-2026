import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AX3000 VR - Aluplan",
  description: "Sanal gerçeklik ile proje görselleştirme",
};

export default function Page() {
  return <ClientPage />;
}
