"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";

export default function PrivacyPolicyPage() {
    return (
        <PageWrapper>
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-[1000px]">
                    <h1 className="text-3xl md:text-5xl font-bold mb-12">Gizlilik Politikası</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <p>
                            www.aluplan.com.tr ‘de form doldurarak bizimle paylaştığınız kişisel bilgilerinizi ve fikirlerinizi korumak bizim görevimizdir. Aşağıdaki ilkeler, bu kişisel bilgilerinizi ve fikirlerinizi nasıl değerlendireceğimizi tanımlar.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Kişisel Verilerin Korunması Hakkında Açıklama ve Gizlilik Politikası</h2>
                            <p>
                                Bu siteye verdiğiniz, aşağıda sayılan kişisel veriler (toplu olarak “Verileriniz”);
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>
                                    <strong>Siteyi ziyaretiniz ve kullanımınız ile ilgili veriler:</strong> Sitemizi ziyaretiniz sırasında IP adresiniz, coğrafi konumunuz, web tarayıcısı türü, gönderen kaynağınız, ziyaret süreniz ve sayfa/içerik gösterim sayısı gibi veriler.
                                </li>
                                <li>
                                    <strong>Site üzerinden yaptığınız her türlü işlem ve uygulama ile ilgili veriler.</strong>
                                </li>
                            </ul>
                            <p className="mt-4">
                                Bu veriler Şirket tarafından şu amaçlarla işlenmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Siteyi ziyaret ettiğinizde bilgisayarınızı tanımak ve böylece siteyi kişiselleştirerek ziyaretinizi daha verimli hale getirmek.</li>
                                <li>Teklif alma uygunluğunuzu anlamak ve konu ile ilgili sizinle iletişime geçmek.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">İnternet Sitesi Çerezlerin Kullanımı</h2>
                            <p>
                                Bu sitede çerezler kullanılmaktadır. Web sunucusu tarafından web tarayıcısına gönderilen ve tarayıcı tarafından kaydedilen metin dosyasına çerez denir ve bu dosya tarayıcı sunucudan her sayfa istediğinde sunucuya geri gönderilmekte ve bu sayede, web sunucusu sizin tarayıcınızı tanımlamakta ve takip etmektedir.
                            </p>
                            <p className="mt-4">
                                Bilgisayarınızın sabit diski üzerinde kaydedilmek üzere size çerez gönderebileceğimizi ve bu çerezlerden edineceğimiz bilgileri, sitenin yönetimi ve sitenin kullanılabilirliği artırma amaçlı kullanabileceğimiz belirtiriz. Bunun dışında, reklam sağlayıcılarımız da size çerez gönderebilecektir.
                            </p>
                            <p className="mt-4">
                                Çoğu tarayıcı, çerez kabul etmeyi engelleyici ayarlara sahiptir. Bunun için tarayıcınızın yardım dosyalarını inceleyebilirsiniz. Ancak çerez kabul etmezseniz, sitemiz de dahil olmak üzere, pek çok siteyi kullanırken kullanılabilirliği büyük ölçüde azaltacağınızı dikkatinize sunarız.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Kişisel Verilerin Güvenliği</h2>
                            <p>
                                Şirket, yürürlükteki ilgili mevzuat hükümleri gereğince bilginin gizliliğinin ve bütünlüğünün korunması amacıyla gerekli organizasyonu kurmak ve teknik önlemleri almak ve uyarlamak konusunda veri sorumlusu sıfatıyla sorumluluğu üstlenmiştir. Bu konudaki yükümlülüğümüz doğrultusunda veri işleme politikalarımızı belirli aralıklarla güncellediğimizi bilginize sunarız.
                            </p>
                            <p className="mt-4">
                                Kişisel bilgilerinizin ve fikirlerinizin kaybı, yanlış kullanımı ve değiştirilmesini engelleyici gerekli önlemler alınacaktır. Ancak, internet üzerinden veri akışı, doğası gereği güvensiz olduğu için, bu verilerin internet üzerinden akışının güvenliği tarafımızca garanti edilememektedir. Şifrenizi gizli tutmak sizin sorumluluğunuzdadır. Site yönetimi şifrenize bilgi ve onayınız olmadan erişememektedir.
                            </p>
                        </div>

                        <div className="border-t border-border pt-8 mt-12">
                            <p className="text-sm text-muted-foreground">
                                Daha detaylı bilgi ve KVKK (&quot;Kişisel Verilerin Korunması Kanunu&quot;) kapsamındaki haklarınız için lütfen <a href="/kvkk" className="text-accent hover:underline">KVKK Aydınlatma Metni</a> sayfamızı ziyaret ediniz.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
