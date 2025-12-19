import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-graphite-950 text-white p-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="text-2xl font-semibold">Sayfa Bulunamadı</h2>
        <p className="text-gray-400">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          Lütfen adresi kontrol edin veya ana sayfaya dönün.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 text-white">
            <Link href="/contact">İletişime Geç</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
