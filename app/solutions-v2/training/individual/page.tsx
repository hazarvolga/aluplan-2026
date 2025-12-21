import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";

export default function IndividualTrainingPage() {
    return (
        <TrainingDetailTemplate
            title="Bireysel & Kurumsal Özel Eğitim"
            subtitle="Tamamen size ve projenize özel, terzi işi eğitim programı."
            overview="Standart müfredatların dışına çıkın. Bireysel eğitimlerimiz, tamamen sizin ihtiyaçlarınıza, projenizin gereksinimlerine ve ekibinizin mevcut bilgi seviyesine göre tasarlanır. İster ofisinizde, ister online, ister bizim ofisimizde."
            heroCategory="ÖZEL EĞİTİM"
            stats={[
                { value: "%100", label: "Kişiselleştirilmiş" },
                { value: "Proje", label: "Odaklı" },
                { value: "Esnek", label: "Zamanlama" },
                { value: "Gizlilik", label: "Garantisi" }
            ]}
            benefits={[
                {
                    title: "İhtiyaca Yönelik Müfredat",
                    description: "Sadece öğrenmeniz gereken konuları belirleyelim, vakit kaybetmeyin."
                },
                {
                    title: "Kendi Projeniz Üzerinde Çalışma",
                    description: "Eğitimi, devam eden gerçek bir projeniz üzerinden yaparak işinizi ilerletin."
                },
                {
                    title: "Esnek Planlama",
                    description: "Eğitim gün ve saatlerini kendi takviminize göre siz belirleyin."
                },
                {
                    title: "Danışmanlık Yaklaşımı",
                    description: "Sadece yazılımı değil, ofis standartlarınızı ve iş akışlarınızı da optimize edelim."
                }
            ]}
            audience={[
                "Özel projelerinde spesifik sorunlar yaşayan firmalar",
                "Yeni bir ekibi hızla adapte etmek isteyen ofis yöneticileri",
                "Standart eğitimlerin ötesinde ileri düzey teknikleri öğrenmek isteyen uzmanlar",
                "Zamanı kısıtlı olan ve en hızlı sürede sonuç almak isteyen yöneticiler"
            ]}
            ctaText="Özel Eğitim Teklifi Al"
            ctaSubject="Bireysel Eğitim Teklifi"
        />
    );
}
