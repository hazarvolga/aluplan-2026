# AX3000 doküman merkezi

Sayfa: `/products/ax3000/dokumanlar`. Dokuz AX3000 sayfasındaki on doküman düğmesi bu adrese gider.

## Belge güncelleme

1. PDF veya DOCX dosyasını `assets/documents/ax3000/` içine ekleyin ya da mevcut dosyayı değiştirin.
2. `app/products/ax3000/dokumanlar/documents.ts` kataloğunda import, indirme adı, açıklama, dil, boyut ve sayfa sayısını güncelleyin. Kapak değişmişse ilgili kapak JPG dosyasını da yenileyin.
3. Yeni kategori veya kart için aynı katalogdaki dizilere kayıt ekleyin. Diğer sayfalardaki düğmeleri değiştirmeniz gerekmez.
4. TypeScript kontrolünü ve `tests/ax3000.spec.ts` testlerini çalıştırın; belge listesi değişirse beklenen dosya listesini de güncelleyin. Sayfayı mobil ve masaüstünde kontrol edin.

Katalog `ClientPage.tsx` tarafından içe aktarılmalıdır. Mevcut webpack asset/resource yapılandırmasıyla yalnızca Server Component üzerinden içe aktarılan belgeler public static çıktısında bulunmayabilir. `page.tsx` metadata ve canonical adresini tutar. PDF/DOCX bağlantıları derlemede içerik hash'i alır; güncellemenin yayına yansıması için yeniden build/deploy gerekir.

## Kaynaklar

Altı dosya `AX3000_For Hazar/` klasöründen içerikleri değiştirilmeden kopyalandı. Kaynak klasörü korunur; uygulama bu klasöre bağımlı değildir.

- `Brochure english.pdf`: öne çıkan İngilizce broşür.
- `Brochure AX3000 EN.pdf`: küçük metin farkları bulunan alternatif İngilizce broşür.
- `Brochure AX3000 DE.pdf`: Almanca broşür, 15 PDF sayfası ve çift sayfalı düzen.
- `Function description_EN.pdf` ve `.docx`: teknik fonksiyon belgeleri.
- `Function description_Hexagon 22-10-20_final.docx`: DWG/Brics-BIM vurgulu, Allplan uyumluluğu ifadeleri içermeyen sürüm.

Teknik PDF'nin metadata başlığı CADWorx olarak kalmıştır; sayfa başlıkları katalogdan gelir. Belgeler güncel ürün sürümü veya mevzuat uygunluğu kanıtı olarak etiketlenmez.
