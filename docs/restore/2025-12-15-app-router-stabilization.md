Başlık: App Router Geçişi ve Test Stabilizasyonu — 2025-12-15

Özet:
- App Router altında eksik wrapper’lar eklendi ve tüm `src/pages` içerikleri eşlendi.
- İçerik/veri davranışları (metinler, görseller, ikonlar, video modal) aynen korundu; statik import ve `next/image` kullanımı sürdü.
- Smoke testleri stabilize edildi; tüm senaryolar geçti.

Değişiklikler:
- Ürün wrapper’ları:
  - next/app/products/allplan/page.tsx → src/pages/products/Allplan.tsx
  - next/app/products/architecture/page.tsx → src/pages/products/Architecture.tsx
- Çözüm wrapper’ı:
  - next/app/solutions/industry/page.tsx → src/pages/solutions/Industry.tsx
- Test güncellemeleri:
  - next/tests/smoke.spec.ts: beklemeler netleştirildi; pre-warm kaldırıldı
  - next/tests/ax3000.spec.ts: görünürlük ve timeout iyileştirildi
  - next/tests/addons.spec.ts: beklemeler/net idle ve timeout iyileştirildi
- Playwright yapılandırması:
  - next/playwright.config.ts: dev server ile e2e çalıştırma (port 8090)

Doğrulama:
- Derleme: npm run build (başarılı)
- Lint: npm run lint (temiz)
- Smoke test: npx playwright test tests/smoke.spec.ts (84/84 geçti)

Önemli Rotalar (örnek):
- Ürünler: /products/allplan, /products/architecture, /products/allplan-bimplus
- Çözümler: /solutions/industry, /solutions/architecture, /solutions/road-railway

Geri Dönüş Noktaları:
- restore-20251215-app-router-wrap (önceki)
- restore-20251215-final-snapshot (bu doküman ile)
