import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Components - Aluplan",
  description: "Çelik bağlantı ve bileşen kütüphanesi",
};

export default function Page() {
  return <ClientPage />;
}
