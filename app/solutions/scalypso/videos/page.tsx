import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso Eğitim Videoları - Aluplan",
  description: "Scalypso kullanım videoları",
};

export default function Page() {
  return <ClientPage />;
}
