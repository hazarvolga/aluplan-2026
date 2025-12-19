import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Precast Detail - Aluplan',
  description: 'Advanced precast detailing solutions',
}

export default function Page() {
  return <ClientPage />
}
