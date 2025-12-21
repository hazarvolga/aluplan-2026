import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";

export default function ClassroomTrainingPage() {
    return (
        <TrainingDetailTemplate
            title="Sınıf İçi Eğitim (Yüz Yüze)"
            subtitle="Tam odaklanma, birebir iletişim ve pratik uygulama."
            overview="Modern eğitim merkezlerimizde gerçekleştirdiğimiz sınıf içi eğitimler, tamamen öğrenmeye odaklanabileceğiniz, dış dünyadan izole bir ortam sunar. Eğitmeninizle aynı odada olmanın verdiği iletişim kolaylığı ve diğer katılımcılarla kuracağınız network, bu formatı benzersiz kılar."
            heroCategory="YERİNDE EĞİTİM"
            stats={[
                { value: "Birebir", label: "İletişim" },
                { value: "Max 8", label: "Katılımcı" },
                { value: "PC", label: "Donanım Hazır" },
                { value: "Sertifika", label: "Katılım Belgesi" }
            ]}
            benefits={[
                {
                    title: "Tam Odaklanma",
                    description: "Ofis ve ev ortamındaki dikkat dağıtıcılardan uzak, sadece öğrenmeye konsantre olun."
                },
                {
                    title: "Anında Müdahale",
                    description: "Eğitmeniniz ekranınızı görebilir ve takıldığınız yerde anında fiziksel olarak yardımcı olabilir."
                },
                {
                    title: "Networking",
                    description: "Sektördeki diğer profesyonellerle tanışın, bilgi alışverişinde bulunun ve ağınızı genişletin."
                },
                {
                    title: "Hazır Altyapı",
                    description: "Yüksek performanslı iş istasyonlarımızda, kurulum derdi olmadan eğitime başlayın."
                }
            ]}
            audience={[
                "Derinlemesine ve yoğun bir öğrenme süreci arayanlar",
                "Teknik sorunlarla uğraşmadan hazır bir ortamda çalışmak isteyenler",
                "Ekip arkadaşlarıyla birlikte öğrenip sinerji yaratmak isteyenler",
                "Birebir eğitmen ilgisine önem veren yeni başlayanlar"
            ]}
            ctaText="Sınıf İçi Eğitim Planla"
            ctaSubject="Sınıf İçi Eğitim Başvurusu"
        />
    );
}
