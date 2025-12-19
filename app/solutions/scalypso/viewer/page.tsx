import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalypso Viewer - Aluplan",
  description: "Nokta bulutu görüntüleyici",
};

export default function Page() {
  return <ClientPage />;
}
