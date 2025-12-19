import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDS2 Home - Aluplan",
  description: "Automated steel detailing software",
};

export default function Page() {
  return <ClientPage />;
}
