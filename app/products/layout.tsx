import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ALLPLAN Ürünleri | Aluplan",
    description: "Mimari, mühendislik ve inşaat projeleriniz için en kapsamlı BIM ve CAD çözümlerini keşfedin. ALLPLAN AEC, Civil, Precast ve daha fazlası.",
    alternates: {
        canonical: '/products',
    },
    openGraph: {
        title: "ALLPLAN Ürünleri | Aluplan",
        description: "Mimari, mühendislik ve inşaat projeleriniz için en kapsamlı BIM ve CAD çözümlerini keşfedin.",
        url: "https://aluplan.com.tr/products",
    }
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
