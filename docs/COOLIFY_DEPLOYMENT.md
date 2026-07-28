# Coolify ile Aluplan 2026 Projesi Dağıtım Rehberi

Bu rehber, `aluplan-2026` Next.js projesinin Coolify panelini kullanarak VPS sunucusu üzerine nasıl deploy edileceğini adım adım anlatır.

## Ön Gereksinimler

1.  **VPS Sunucusu**: Ubuntu 22.04 (veya benzeri) yüklü, SSH erişimi olan bir sunucu.
2.  **Domain**: Projeyi yayınlayacağınız domain (örn: `aluplan.com.tr` veya `app.aluplan.com.tr`).
3.  **GitHub Deposu**: `hazarvolga/aluplan-2026` deposuna Coolify'ın erişim yetkisi.

---

## Adım 1: Coolify Kurulumu (Eğer Kurulu Değilse)

Sunucunuza henüz Coolify kurmadıysanız, SSH ile bağlanıp aşağıdaki komutu çalıştırın:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Kurulum tamamlandığında size `http://<sunucu-ip>:8000` adresinden erişebileceğiniz bir panel linki ve giriş bilgileri verilecektir.

---

## Adım 2: Projeyi Coolify'a Ekleme

1.  **Coolify Paneli**ne giriş yapın.
2.  **Projects** sekmesine gidin.
3.  Sağ üstteki **+ New** butonuna tıklayın.
4.  Proje ismi girin (örn: `Aluplan Production`) ve oluşturun.
5.  Environment seçin (genellikle `Production` varsayılandır).
6.  **+ New Resource** butonuna tıklayın.
7.  **Private Repository (with Deploy Key)** veya **Public Repository** seçeneğini kullanın.
    *   *Not: Deponuz 'Private' ise Deploy Key yöntemini seçin. Coolify size bir SSH anahtarı verecek, bunu GitHub reponuzun `Settings > Deploy Keys` kısmına ekleyin.*

### Repo Bilgileri
*   **Repository URL**: `https://github.com/hazarvolga/aluplan-2026`
*   **Branch**: `main` (veya deploy etmek istediğiniz branch)
*   **Build Pack**: `Dockerfile` (Coolify otomatik algılayacaktır, algılamazsa manuel seçin).

---

## Adım 3: Yapılandırma Ayarları

Proje oluşturulduktan sonra **Configuration** sayfasına yönlendirileceksiniz. Aşağıdaki ayarları kontrol edin:

### General
*   **Name**: Aluplan Web App
*   **Domain**: `https://aluplan.com.tr` (veya kullanacağınız domain).
    *   *Domaini girdikten sonra DNS ayarlarınızda (Cloudflare vb.), domaini sunucu IP adresinize yönlendirdiğinizden emin olun (A kaydı).*

### Build Pack
*   **Build Pack**: `Dockerfile` seçili olmalı.
*   **Docker Image**: Bu alan boş kalabilir, kendi Dockerfile'ımız kullanılacak.
*   **Dockerfile Path**: `/Dockerfile` (Varsayılan).

### Environment Variables (Çevresel Değişkenler)
Uygulamanın çalışması için gerekli değişkenleri **Environment Variables** sekmesinden ekleyin:

| Key | Value | Açıklama |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | `https://api.aluplan.com.tr` | (Eğer varsa) Backend API adresi |
| `NODE_ENV` | `production` | Dockerfile içinde zaten tanımlı ama garanti olsun |
| `PORT` | `3000` | Dockerfile içinde tanımlı |

*Not: `process.env.NEXT_PUBLIC_...` ile başlayan değişkenler build aşamasında kullanıldığı için **"Build Variable"** kutucuğunu işaretlemeyi unutmayın.*

---

## Adım 4: Deploy İşlemi

1.  Ayarları kaydettikten sonra sağ üstteki **Deploy** butonuna tıklayın.
2.  **Deployments** sekmesinden süreci izleyebilirsiniz.
3.  Coolify, GitHub'dan kodu çekecek, `Dockerfile` talimatlarına göre build alacak ve container'ı başlatacaktır.

### Olası Hatalar ve Çözümleri

*   **Build Hatası (Memory)**: Next.js build işlemi RAM tüketebilir. Eğer sunucunuz düşük RAM'li (örn: 1GB) ise, Swap alanı oluşturmanız gerekebilir. Coolify ayarlarında "Swap" seçeneği olmayabilir, bunu sunucu terminalinden yapmanız gerekir.
*   **Port Hatası**: Dockerfile'ımız 3000 portunu expose ediyor. Coolify bunu otomatik algılar. Eğer uygulama açılmazsa, Coolify ayarlarında **Ports Exposes** kısmının `3000` olduğundan emin olun.
*   **Veritabanı Bağlantısı**: Eğer veritabanına bağlanamıyorsa, Environment Variables kısmındaki connection string'i kontrol edin.

---

## Adım 5: Doğrulama

Deploy başarılı olduğunda (Yeşil renkli "Running" durumu), tarayıcınızdan yapılandırdığınız domaine gidin. Uygulamanın sorunsuz açıldığını doğrulayın.
