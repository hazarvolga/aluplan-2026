import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso Mobile - Aluplan",
  description: "Mobil nokta bulutu uygulamaları",
};

export default function Page() {
  return <ClientPage />;
}
