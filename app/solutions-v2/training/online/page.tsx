import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";

export default function OnlineTrainingPage() {
    return (
        <TrainingDetailTemplate
            title="Online Eğitimler"
            subtitle="Mekandan bağımsız, etkileşimli ve profesyonel uzaktan eğitim deneyimi."
            overview="Online eğitimlerimiz, fiziksel bir sınıfta olma zorunluluğu olmadan, tamamen canlı ve interaktif bir şekilde Allplan uzmanlarıyla buluşmanızı sağlar. Ekran paylaşımı, sesli iletişim ve anlık soru-cevap imkanlarıyla, ofisinizin konforunda maksimal verim almanızı hedefler."
            heroCategory="UZAKTAN EĞİTİM"
            stats={[
                { value: "%100", label: "Canlı Etkileşim" },
                { value: "0", label: "Seyahat Süresi" },
                { value: "Full", label: "HD Kayıtlar" },
                { value: "7/24", label: "Erişim" }
            ]}
            benefits={[
                {
                    title: "Mekandan Bağımsız",
                    description: "İnternet bağlantısı olan her yerden katılın. Seyahat masraflarını ve zaman kaybını ortadan kaldırın."
                },
                {
                    title: "Canlı & İnteraktif",
                    description: "Eğitmenle anlık iletişim kurun, ekranınızı paylaşın ve sorularınızın cevabını hemen alın."
                },
                {
                    title: "Eğitim Kayıtları",
                    description: "Eğitim oturumları kaydedilir, böylece kaçırdığınız bölümleri daha sonra tekrar izleyebilirsiniz."
                },
                {
                    title: "Küçük Gruplar",
                    description: "Maksimum ilgiyi sağlamak için katılımcı sayısı sınırlandırılmıştır."
                }
            ]}
            audience={[
                "Seyahat engeli olan veya ofisten ayrılmak istemeyen profesyoneller",
                "Farklı şehirlerdeki ekiplerini aynı anda eğitmek isteyen firmalar",
                "Evden çalışan (Home-office) mimar ve mühendisler",
                "Esnek zaman yönetimine ihtiyaç duyan bireysel kullanıcılar"
            ]}
            ctaText="Online Eğitime Başvur"
            ctaSubject="Online Eğitim Başvurusu"
        />
    );
}
