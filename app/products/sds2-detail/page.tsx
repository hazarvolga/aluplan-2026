import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDS2 Detailing - Aluplan",
  description: "Advanced steel detailing software",
};

export default function Page() {
  return <ClientPage />;
}
