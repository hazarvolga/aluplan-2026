import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni',
    description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.',
};

export default function KVKKPage() {
    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <h1>KVKK Aydınlatma Metni</h1>
                <p className="lead">
                    Aluplan olarak kişisel verilerinizin güvenliğine önem veriyoruz.
                    Bu metin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hazırlanmıştır.
                </p>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-muted-foreground">
                        Detaylı KVKK metni hazırlanmaktadır. Lütfen bilgi almak için <a href="/contact" className="text-accent underline">iletişime geçiniz</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
