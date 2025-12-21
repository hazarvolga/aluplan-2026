import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";

export default function ELearningPage() {
    return (
        <TrainingDetailTemplate
            title="E-Learning & Video Eğitimler"
            subtitle="Kendi hızınızda, istediğiniz zaman, istediğiniz yerde öğrenin."
            overview="Allplan E-Learning platformu, yüzlerce video ders, adım adım rehberler ve sertifika programları sunar. Eğitim takvimlerine bağlı kalmadan, 7/24 erişebileceğiniz bu kütüphane, sürekli öğrenme için en büyük kaynağınızdır."
            heroCategory="DİJİTAL KÜTÜPHANE"
            stats={[
                { value: "100+", label: "Video Ders" },
                { value: "7/24", label: "Sınırsız Erişim" },
                { value: "Mobil", label: "Uyumlu" },
                { value: "Sertifika", label: "Tamamlama" }
            ]}
            benefits={[
                {
                    title: "Kendi Hızınızda Öğrenme",
                    description: "Videoları durdurun, geri sarın, tekrar izleyin. Anlamadığınız yeri atlamayın."
                },
                {
                    title: "Geniş İçerik Arşivi",
                    description: "Temel seviyeden ileri uzmanlık konularına kadar her seviyede içerik."
                },
                {
                    title: "Maliyet Avantajı",
                    description: "Diğer eğitim formatlarına göre çok daha ekonomik bir çözüm."
                },
                {
                    title: "Sürekli Güncel",
                    description: "Yeni versiyonlar çıktıkça güncellenen içeriklerle hep güncel kalın."
                }
            ]}
            audience={[
                "Kendi kendine öğrenmeyi seven bağımsız kullanıcılar",
                "Mesai saatleri dışında kendini geliştirmek isteyenler",
                "Takıldıkları noktada hızlıca referans videoya bakmak isteyen profesyoneller",
                "Bütçe dostu eğitim arayan öğrenciler"
            ]}
            ctaText="E-Learning Platformuna Git"
            ctaLink="https://learnnow.allplan.com/course/search.php"
        />
    );
}
