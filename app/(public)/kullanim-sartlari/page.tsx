"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";

export default function TermsOfUsePage() {
    return (
        <PageWrapper>
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-[1000px]">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
                    <p className="text-xl text-muted-foreground mb-12">Son Güncelleme: 14 Mayıs 2024</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                        <div>
                            <p>
                                Bu web sitesini (<strong>www.aluplan.com.tr</strong>) ziyaret ederek ve kullanarak, aşağıda belirtilen Kullanım Şartları&apos;nı kabul etmiş sayılırsınız. Eğer bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Genel Hükümler</h2>
                            <p>
                                Bu web sitesinin sahibi <strong>ALUPLAN BİLGİSAYAR PROGRAM SİSTEMLERİ SANAYİ VE TİCARET LTD. ŞTİ.</strong>&apos;dir (bundan böyle &quot;Şirket&quot; olarak anılacaktır). Şirket, sitede yer alan bilgileri, formları ve içeriği dilediği zaman değiştirme hakkını saklı tutar.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Fikri Mülkiyet Hakları</h2>
                            <p>
                                İşbu web sitesinde yer alan unvan, işletme adı, marka, patent, logo, tasarım, bilgi ve yöntem gibi tescilli veya tescilsiz tüm fikri mülkiyet hakları site işleteni ve sahibi firmaya veya belirtilen ilgilisine ait olup, ulusal ve uluslararası hukukun koruması altındadır. İşbu sitenin ziyaret edilmesi veya bu sitedeki hizmetlerden yararlanılması, söz konusu fikri mülkiyet hakları konusunda hiçbir hak vermez.
                            </p>
                            <p className="mt-4">
                                Site içerisinde yer alan bilgiler çoğaltılamaz, yayınlanamaz, kopyalanamaz, sunulamaz ve/veya aktarılamaz. Sitenin bütünü veya bir kısmı, diğer bir internet sitesinde izinsiz olarak kullanılamaz.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Kullanım Kuralları</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kullanıcılar, siteyi yalnızca hukuka uygun amaçlarla kullanabilirler.</li>
                                <li>Site güvenliğini tehdit edecek, çalışmasını engelleyecek, virüs vb. zararlı yazılımlar gönderecek veya sistemin güvenliğini açık edecek her türlü girişim yasaktır.</li>
                                <li>Sitede yer alan formlar aracılığıyla paylaşılan bilgilerin doğruluğu kullanıcının sorumluluğundadır. Yanlış veya yanıltıcı bilgi verilmesinden doğacak zararlardan Şirket sorumlu tutulamaz.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Sorumluluk Reddi</h2>
                            <p>
                                Aluplan, web sitesinde yer alan içeriklerin doğruluğu ve güncelliği konusunda azami özeni göstermekle birlikte, olası hatalar, eksiklikler veya güncellemelerin gecikmesinden dolayı sorumlu tutulamaz. Sitedeki bilgiler genel bilgilendirme amacı taşır ve profesyonel/resmi tavsiye niteliğinde değildir.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
                            <p>
                                İşbu kullanım şartlarının uygulanmasında ve yorumlanmasında Türkiye Cumhuriyeti yasaları geçerlidir. Site kullanımı veya içerikleri ile ilgili doğabilecek her türlü uyuşmazlığın çözümünde <strong>İstanbul Anadolu Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
                            </p>
                        </div>

                        <div className="border-t border-border pt-8 mt-12">
                            <h3 className="font-bold text-foreground mb-4">İletişim</h3>
                            <p className="text-muted-foreground">
                                Kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:<br />
                                <strong>E-posta:</strong> info@aluplan.com.tr
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
