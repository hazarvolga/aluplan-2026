import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Three Dimensioning - Aluplan",
  description: "3D ölçülendirme ve notlandırma",
};

export default function Page() {
  return <ClientPage />;
}
