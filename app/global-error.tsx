'use client';
import "../styles/globals.css";

import { logger } from "@/lib/logger";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  logger.error('Global error caught', error);

  return (
    <html lang="tr" className="dark">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center bg-background text-foreground">
          <h2 className="text-2xl font-bold tracking-tight">Kritik Hata</h2>
          <p className="text-muted-foreground">
            Uygulama kritik bir hata ile karşılaştı.
          </p>
          <Button onClick={() => reset()} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Tekrar Dene
          </Button>
        </div>
      </body>
    </html>
  );
}
