import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SketchUp Converter - Aluplan",
  description: "SketchUp modellerini Allplan'a aktarma",
};

export default function Page() {
  return <ClientPage />;
}
