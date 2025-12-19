export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-background text-foreground px-3 py-2 rounded-md shadow-sm"
    >
      İçeriğe geç
    </a>
  );
}

