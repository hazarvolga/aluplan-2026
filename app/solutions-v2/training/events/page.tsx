import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";

export default function EventsPage() {
    return (
        <TrainingDetailTemplate
            title="Etkinlik ve Fuarlar"
            subtitle="Sektörle buluşma, vizyon ve teknoloji şöleni."
            overview="Allplan olarak katıldığımız veya düzenlediğimiz etkinlikler, sadece bir yazılım tanıtımı değil, inşaat sektörünün geleceğinin konuşulduğu platformlardır. Ürün lansmanları, kullanıcı zirveleri ve fuar katılımlarımızla sizlerle yüz yüze gelmekten mutluluk duyuyoruz."
            heroCategory="ETKİNLİK"
            stats={[
                { value: "Yıllık", label: "Zirveler" },
                { value: "Demo", label: "Canlı Sunum" },
                { value: "Network", label: "Fırsatları" },
                { value: "Vizyon", label: "Gelecek Teknolojileri" }
            ]}
            benefits={[
                {
                    title: "Teknoloji Deneyimi",
                    description: "En yeni donanım ve yazılımları yerinde deneyimleyin, VR/AR teknolojilerini test edin."
                },
                {
                    title: "Sektör Liderleriyle Tanışma",
                    description: "Allplan üst düzey yöneticileri ve sektör uzmanlarıyla birebir görüşme fırsatı yakalayın."
                },
                {
                    title: "İlham Verici Sunumlar",
                    description: "Başarı hikayelerini dinleyin, global projelerin nasıl hayata geçirildiğini öğrenin."
                },
                {
                    title: "Özel Kampanyalar",
                    description: "Etkinliklere özel sürpriz indirim ve avantajlardan faydalanın."
                }
            ]}
            audience={[
                "Sektörel trendleri yakından takip etmek isteyen vizyoner liderler",
                "Firmaları için yeni teknoloji yatırımları planlayan karar vericiler",
                "Allplan topluluğunun bir parçası olmak isteyen kullanıcılar",
                "Kariyer fırsatlarını değerlendirmek isteyen öğrenciler"
            ]}
            ctaText="Etkinlik Takvimi"
            ctaSubject="Etkinlik Bilgi Talebi"
        />
    );
}
