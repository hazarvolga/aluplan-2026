import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Yeni Lisans Etkinleştirme - Aluplan",
    description: "Yeni Allplan lisansınızın etkinleştirilmesi için talep ve beyan formu.",
};

export default function ActivationPage() {
    return <ClientPage />;
}
