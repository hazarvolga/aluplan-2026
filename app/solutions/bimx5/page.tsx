import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import { FileCheck, Building2, Briefcase } from "lucide-react";
import VideoGrid from "@/components/VideoGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <EnhancedSolutionTemplate
            badge="DİĞER ÇÖZÜMLER"
            title="Allplan’le BIM modellemesi ve metraj…"
            subtitle="İhale, Metraj, Hakediş ve BIM modellemesi için nihai çözüm"
            description="Allplan ve 2b dwg Converter hızıyla doğru ve kesin metraja yönelik BIM modellemesi"
            customHero={(
                <SolutionHero
                    badge="DİĞER ÇÖZÜMLER"
                    title="Allplan’le BIM modellemesi ve metraj…"
                    subtitle="İhale, Metraj, Hakediş ve BIM modellemesi için nihai çözüm"
                    description="Allplan ve 2b dwg Converter hızıyla doğru ve kesin metraja yönelik BIM modellemesi"
                    customBackground={(
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 opacity-50 mix-blend-luminosity"
                                src="https://www.youtube.com/embed/6hkzky2tY44?autoplay=1&mute=1&controls=0&loop=1&playlist=6hkzky2tY44&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{ border: 'none' }}
                                allowFullScreen
                            />
                        </div>
                    )}
                />
            )}
            showHeroButtons={true}
            postHeroSection={
                <>
                    <InfoMediaTwoColumn
                        title="Oska e-HakedişPro"
                        description="e-HakedişPro, derin bir yaklaşık maliyet, analiz ve hakediş bilgisini gerektirmeyen tasarım özellikleri ve kullanıcı dostu arayüzleri sayesinde yapı sektöründeki teknik elemanların yapı yaklaşık maliyeti ve hakediş hesaplamadaki tüm zorluklarını ortadan kaldırır."
                        videoUrl="https://www.youtube.com/embed/sAR1LFIe12k"
                    />
                    <section className="py-16 bg-background">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <SectionHeader
                                title="Aynı metrajları tekrar tekrar girme devri kapandı!"
                                subtitle="Bir pozun metrajı, bir veya birden çok poz içeriyorsa, pozlara birer köprü yeter. Köprülenmiş metraj cetvelinde yapılan değişiklikler anında her yere yansır."
                                align="center"
                            />
                        </div>
                    </section>
                    <section className="py-16 bg-background">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <BenefitsGrid
                                items={[
                                    {
                                        title: "e-HakedişPro ne iş yapar?",
                                        description: "4734 sayılı Kanuna uygun olarak, Yaklaşık Maliyet, Hakediş ve Kesin Hesap işlemlerini hızlı, kolay ve hatasız yapar.",
                                        icon: <FileCheck className="w-6 h-6 text-accent" />
                                    },
                                    {
                                        title: "e-HakedişPro kimler içindir?",
                                        description: "Bayındırlık, MSB, MEB, Sağlık, Kültür ve diğer bakanlıklar ile TCK, DSİ, Belediyeler… kısaca 4734 sayılı Kamu İhale Kanunu kapsamına giren tüm kurumlar ve bunlara iş yapan yükleniciler içindir.",
                                        icon: <Building2 className="w-6 h-6 text-accent" />
                                    },
                                    {
                                        title: "e-HakedişPro ne tür işlerde kullanılır?",
                                        description: "Kamu İhale Kanunu’na göre ihale edilen, Anahtar Teslimi Götürü Bedel ve Birim Fiyat Teklif türündeki yapım işlerinde kullanılır.",
                                        icon: <Briefcase className="w-6 h-6 text-accent" />
                                    }
                                ]}
                            />
                        </div>
                    </section>
                    <VideoGrid
                        items={[
                            {
                                youtubeId: "7H74u2fz81w",
                                title: "Kurum Raporları Eklentisi",
                                description: "Allplan ve Oska e-HakedişPro ile birlikte ve entegre çalışan bir eklentidir. Yıllardır süregelen kurumların metraj listesi istek ve ihtiyaçları doğrultusunda deneyimlenmiş bir istisnai çözümdür. İstediğiniz tüm metraj bilgilerini ister Resmi Pozlar ile üretilmiş olsun ister Özel Firma Pozları veya belirlenmiş Bütçe Kodları ile üretilmiş olsun Metraj sayfalarını icmalleri ile birlikte çıkartabilecek ve Yaklaşık Maliyet tablolarını oluşturabileceksiniz"
                            },
                            {
                                youtubeId: "z_5snW0K-nU",
                                title: "2B dwg Converter",
                                description: "İhaleye teklif vereceksiniz Allplan’de modelleme yapmaya zamanınız yok, 2B dwg dönüştürücü ile tek tuşla çoklu çizgileri mahallere, çizgileri duvara, kirişe, odaların etrafını duvarlara dönüştürün, BIM modellemede büyük hız kazanın."
                            },
                            {
                                youtubeId: "0W6k7W5KtzE",
                                title: "İmar Yönetmeliği Akıllı BIM Eklentisi",
                                description: "Allplan ile projelerinizi doğrudan 2018’de yürürlüğe giren Planlı Alanlar İmar Yönetmeliğine uyumlu üreteceksiniz. Saatlerinizi ve hatta günlerinizi vererek yaptığınız hesaplar Allplan’e entegre akıllı yönetmelik eklentisi ile kolayca yapılabiliyor."
                            }
                        ]}
                    />
                    <div className="py-12 bg-background flex justify-center">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                            <Link href="/solutions/imar-yonetmeligi-bim-eklentisi">
                                İmar Yönetmeliği BIM Eklentisi Hakkında Detaylı Bilgi
                            </Link>
                        </Button>
                    </div>
                </>
            }
            showCta={false}
        />
    );
}
