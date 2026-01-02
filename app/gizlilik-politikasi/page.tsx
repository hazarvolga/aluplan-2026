import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası',
    description: 'Aluplan Gizlilik Politikası ve veri işleme kuralları.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <h1>Gizlilik Politikası</h1>
                <p className="lead">
                    Veri gizliliğiniz ve güvenliğiniz bizim için önceliklidir.
                </p>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-muted-foreground">
                        Gizlilik politikası metni güncellenmektedir. Sorularınız için <a href="/contact" className="text-accent underline">iletişime geçiniz</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
