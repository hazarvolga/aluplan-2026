import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ramp - Aluplan",
  description: "Rampa modelleme ve analiz",
};

export default function Page() {
  return <ClientPage />;
}
