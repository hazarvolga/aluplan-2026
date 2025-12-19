import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PythonPart - Aluplan",
  description: "Python tabanlı parametrik nesneler",
};

export default function Page() {
  return <ClientPage />;
}
