import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDS2 Load Planning - Aluplan",
  description: "Load planning solutions for steel fabricators",
};

export default function Page() {
  return <ClientPage />;
}
