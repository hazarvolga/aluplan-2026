import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eklentiler - Aluplan",
  description: "Allplan için güçlü eklenti çözümleri",
};

export default function Page() {
  return <ClientPage />;
}
