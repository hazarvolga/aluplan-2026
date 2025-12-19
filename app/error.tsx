'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { logger } from "@/lib/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    logger.error('Unhandled runtime error in App Router', error);
  }, [error]);

  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold tracking-tight">Bir şeyler ters gitti!</h2>
      <p className="text-muted-foreground">
        Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => window.location.href = '/'} variant="outline">
          Ana Sayfa
        </Button>
        <Button onClick={() => reset()}>
          Tekrar Dene
        </Button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <pre className="mt-8 max-w-lg overflow-auto rounded bg-slate-950 p-4 text-left text-xs text-slate-50">
          {error.message}
          {'\n'}
          {error.stack}
        </pre>
      )}
    </div>
  );
}
