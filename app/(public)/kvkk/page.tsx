"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";

export default function KvkkPage() {
    return (
        <PageWrapper>
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-[1000px]">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
                    <p className="text-xl text-muted-foreground mb-12">Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                        <div>
                            <p className="font-medium text-lg">
                                ALUPLAN BİLGİSAYAR PROGRAM SİSTEMLERİ SANAYİ VE TİCARET LTD. ŞTİ. (<span className="text-foreground font-bold">&quot;Aluplan Bilgisayar&quot;</span> veya <span className="text-foreground font-bold">&quot;Şirket&quot;</span>) olarak, Kişisel Verilerinizin İşlenmesi ile ilgili uygulamalarımız ve Kişisel Verilerin Korunması Kanunu kapsamındaki haklarınız hususunda sizleri bilgilendirmek isteriz.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Veri Sorumlusu Kimliği</h2>
                            <p>
                                Veri sorumlusu sıfatıyla Aluplan Program Sistemleri Kurumsal ("Şirket") olarak, müşterilerimizden/potansiyel müşterilerimizden elde ettiğimiz kişisel verilere istinaden Kişisel Verilerin Korunması Kanunu’na (“Kanun”) uygun hareket edebilmemizi teminen aydınlatma yükümlülüğü kapsamında aşağıdaki hususları bilgilerinize sunuyoruz.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
                            <p>
                                Kişisel verileriniz, Kanun’da öngörülen temel ilkelere ve Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şart ve amaçlarına uygun olarak, fiziken ve elektronik ortamda, Şirket müşterisi olmanız nedeniyle, kanunlarda öngörülen sebeplerle ve sözleşmesel ilişkinin ifası gereğince faaliyetlerimizin yürütülmesi, hizmetlerimizin işleyişi ve geliştirilmesi çerçevesinde toplanabilmektedir.
                            </p>
                            <p className="mt-4">
                                Teklif alma uygunluğunuzu anlamak ve konu ile ilgili sizinle iletişime geçmek amaçlarıyla işlenmektedir. İlgili teklifin verilmesini takiben bir sözleşme kurulması halinde, bilgiler aynı zamanda teklif hazırlama sürecini yürütmek ve sözleşme onayını bildirmek amaçlarıyla kullanılacaktır.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçlar İle Aktarılabileceği</h2>
                            <p>
                                Toplanan Verileriniz, işbu Aydınlatma Metni’nde açıklanan amaçlarla; bayilere, tedarikçilere ve Kanunen yetkili kamu kurumları ve özel kişilere Kanun’un 8. ve 9. maddeleri çerçevesinde aktarılabilecektir.
                            </p>
                            <p className="mt-4">
                                Aktarım amaçları şunları kapsar: Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak, beğeni ve kullanım alışkanlıklarınıza göre özelleştirmek, hukuki ve ticari güvenliği sağlamak (idari operasyonlar, fiziksel güvenlik, denetim vb.), ve ticari stratejilerin belirlenmesi.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Verileriniz, otomatik veya otomatik olmayan yollarla (internet sitesi, telefon, sosyal medya, yazılı formlar vb.), sözleşmesel ilişkinin ifası gereğince veya kanunlarda öngörülen sair sebeplerle toplanabilmektedir.
                            </p>
                            <p className="mt-4">
                                Bu hukuki sebeplerle toplanan Verileriniz, Kanun’un 5/2-c ve e maddeleri uyarınca bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması kaydıyla, açık rızanız alınmaksızın işlenebilmektedir. Ayrıca Kanun’un 5/1 maddesi uyarınca açık rızanıza binaen de işlenebilmekte ve aktarılabilmektedir.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Veri Sahibinin Hakları</h2>
                            <p className="mb-4">
                                Kanun’un 11. maddesi uyarınca, kişisel verileri işlenen veri sahibi, Aluplan Bilgisayar Program Sistemleri’ne başvurarak aşağıdaki konulara ilişkin taleplerde bulunabilir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
                                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                                <li>Kişisel verilerinin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                                <li>Kişisel verilerinin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                                <li>Kişisel verilerinin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
                                <li>Kişisel verilerinin silinmesini veya yok edilmesini isteme,</li>
                                <li>İşlenen verilerinin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                                <li>Kişisel verilerinin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">İletişim ve Başvuru</h2>
                            <p>
                                Kişisel veri sahipleri, haklarını kullanmak için kimliğini tespit edici gerekli bilgiler ve kullanmak istediği hakkına yönelik açıklamalarıyla birlikte talebini yazılı olarak iletebilir.
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">İletişim Adresi</h3>
                                    <p className="text-muted-foreground">
                                        Quick Tower – Workinton<br />
                                        İçerenköy Mah. Topçu İbrahim Sok.<br />
                                        8/10D No: 5, 34752 Ataşehir / İstanbul
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">İletişim Kanalları</h3>
                                    <p className="text-muted-foreground">
                                        <strong>E-posta:</strong> info@aluplan.com.tr<br />
                                        <strong>Telefon:</strong> (+90) 216 325 06 61
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
