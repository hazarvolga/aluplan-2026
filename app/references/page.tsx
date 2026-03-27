"use client"
import React from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, GraduationCap, Building, School, HardHat, Landmark, Users } from "lucide-react";

// References Data
const references = [
    { name: "Akgün Seramik", category: "İnşaat Şirketleri" },
    { name: "Akyükselen Inşaat", category: "İnşaat Şirketleri" },
    { name: "Albayrak Turizm Seyhat Inşaat", category: "İnşaat Şirketleri" },
    { name: "Aluform Pekintas Aluminyum San. Ve Tic. As. Tayyar Okur", category: "İnşaat Şirketleri" },
    { name: "Aluform Pekintaş A.Ş.", category: "İnşaat Şirketleri" },
    { name: "Assan Yapı", category: "İnşaat Şirketleri" },
    { name: "Balcı Mühendislik", category: "İnşaat Şirketleri" },
    { name: "Baytec Mühendislik", category: "İnşaat Şirketleri" },
    { name: "Bimbir Mühendislik Inşaat", category: "İnşaat Şirketleri" },
    { name: "Burhan Kılınç", category: "İnşaat Şirketleri" },
    { name: "Dergan Çarpar Mimarlık San. Ltd. Şti.", category: "İnşaat Şirketleri" },
    { name: "Doğa İnşaat", category: "İnşaat Şirketleri" },
    { name: "Doğuş Otomotiv Servis Ve Tic. A.Ş.", category: "İnşaat Şirketleri" },
    { name: "Er-Nur Mimarlık", category: "İnşaat Şirketleri" },
    { name: "Gintek Inşaat", category: "İnşaat Şirketleri" },
    { name: "Hartek Harita", category: "İnşaat Şirketleri" },
    { name: "Hget Mimarlık", category: "İnşaat Şirketleri" },
    { name: "Iga Mimarlık - I-Design Tasarım Atölyesi", category: "İnşaat Şirketleri" },
    { name: "Kemikoğlu Inşaat", category: "İnşaat Şirketleri" },
    { name: "Koba Mühendislik", category: "İnşaat Şirketleri" },
    { name: "Mega Müh. San. Tic. Ltd. Şti.", category: "İnşaat Şirketleri" },
    { name: "Ninova Mühendislik Mimarlık", category: "İnşaat Şirketleri" },
    { name: "Orient Resaerch Mühendislik", category: "İnşaat Şirketleri" },
    { name: "Polimeks Inşaat Türkiye", category: "İnşaat Şirketleri" },
    { name: "Selimoğlu Group", category: "İnşaat Şirketleri" },
    { name: "Taşyapı Inşaat Taah. San. Ve Tic. A.Ş.", category: "İnşaat Şirketleri" },
    { name: "TGM İnşaat ve Dan. Ltd. Şti.", category: "İnşaat Şirketleri" },
    { name: "Türk Ytong", category: "İnşaat Şirketleri" },
    { name: "Akhisar Belediyesi Fen Işleri", category: "Kamu Kurumları" },
    { name: "Alanya Belediyesi Imar Işleri Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Amasya Çevre ve Şehircilik Müd.", category: "Kamu Kurumları" },
    { name: "Amasya Il Özel Idaresi", category: "Kamu Kurumları" },
    { name: "Ankara Büyükşehir Belediyesi", category: "Kamu Kurumları" },
    { name: "Antakya Belediyesi Fen Işleri Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Arnavutköy Belediyesi", category: "Kamu Kurumları" },
    { name: "Avcılar Belediye Başkanlığı", category: "Kamu Kurumları" },
    { name: "Bağcılar Belediye Başkanlığı", category: "Kamu Kurumları" },
    { name: "Bahçelievler Belediyesi", category: "Kamu Kurumları" },
    { name: "Başakşehir Belediyesi", category: "Kamu Kurumları" },
    { name: "Beşiktaş Belediyesi", category: "Kamu Kurumları" },
    { name: "Bilecik Belediyesi", category: "Kamu Kurumları" },
    { name: "Bursa Il Özel Idaresi Imar Ve Yapı Işleri", category: "Kamu Kurumları" },
    { name: "Denizli Belediyesi Etüt Proje Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Eyüp Belediye Başkanlığ Planlama Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Igdaş Istanbul Gaz", category: "Kamu Kurumları" },
    { name: "Il Özel Idaresi Gaziantep", category: "Kamu Kurumları" },
    { name: "Il Özel Idaresi Hakkari", category: "Kamu Kurumları" },
    { name: "Il Özel Idaresi Ordu", category: "Kamu Kurumları" },
    { name: "Il Özel Idaresi Uşak (Çevre Ve Şehircilik Il Müd.)", category: "Kamu Kurumları" },
    { name: "Il Özel Idaresi Yozgat", category: "Kamu Kurumları" },
    { name: "Il Sağlık Müdürlüğü Istanbul", category: "Kamu Kurumları" },
    { name: "Istanbul Büyükşehir Belediyesi Projeler Daire Baş.", category: "Kamu Kurumları" },
    { name: "Istanbul Halk Sağlık Müd.", category: "Kamu Kurumları" },
    { name: "Kahramanmaraş Büyükşehir Belediyesi", category: "Kamu Kurumları" },
    { name: "Karaman Çevre ve Şehircilik Il Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Karaman Il Özel Idaresi Plan Ve Proje Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Karşıyaka Belediyesi  Plan Proje Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Kayseri Il Halk Sağlığı", category: "Kamu Kurumları" },
    { name: "Kırşehir Il Özel Idaresi Bayındırlık Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Kiptaş Istanbul", category: "Kamu Kurumları" },
    { name: "Manisa Belediyesi .", category: "Kamu Kurumları" },
    { name: "Muratpaşa Belediyesi Yapı Kontrol Müd.", category: "Kamu Kurumları" },
    { name: "Niksar Belediyesi Tokat", category: "Kamu Kurumları" },
    { name: "Odunpazarı Belediyesi", category: "Kamu Kurumları" },
    { name: "Osmangazi Belediyesi", category: "Kamu Kurumları" },
    { name: "Osmaniye Il Sağlık Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Pendik Belediyesi Etüd Proje Şefliği", category: "Kamu Kurumları" },
    { name: "Sağlık Bakanlığı Inşaat Onarım", category: "Kamu Kurumları" },
    { name: "Siirt Belediyesi Fen Işler Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Sivas Röleve ve Anıtlar Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Süleyman Demirel Üniv. Park Ve Bahçeler Şube Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Süleymanpaşa Belediyesi", category: "Kamu Kurumları" },
    { name: "Şanlı Urfa Il Özel Dairesi (Allplan)", category: "Kamu Kurumları" },
    { name: "Tokat Bayındırlık Ve Iskan Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Tokat Belediyesi Gider Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Toki - Toplu Konut Idaresi", category: "Kamu Kurumları" },
    { name: "Uluderbent Belediye Başkanlığı", category: "Kamu Kurumları" },
    { name: "Yozgat Belediyesi Park Ve Bahçeler Müdürlüğü", category: "Kamu Kurumları" },
    { name: "Zonguldak Belediyesi", category: "Kamu Kurumları" },
    { name: "Zonguldak Il Özel Idaresi", category: "Kamu Kurumları" },
    { name: "IMO İstanbul Mimarlar", category: "Meslek Odaları" },
    { name: "İMO Ankara Inşaat", category: "Meslek Odaları" },
    { name: "İMO İzmir İnşaat", category: "Meslek Odaları" },
    { name: "3D Mimari Tasarım", category: "Mimari Ofis" },
    { name: "Ahmet Tahir Gül Mimarlık", category: "Mimari Ofis" },
    { name: "AK-DA Mimarlık", category: "Mimari Ofis" },
    { name: "Alaturka Mimarlık Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Alp Mimarlık", category: "Mimari Ofis" },
    { name: "Anna Fresko Mobilya Mağazası", category: "Mimari Ofis" },
    { name: "Autograph Mimarlık Dekorasyon", category: "Mimari Ofis" },
    { name: "Aydın Proje", category: "Mimari Ofis" },
    { name: "Ayhan Bülbüller", category: "Mimari Ofis" },
    { name: "Bandırma Özbek Inşaat Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Belekoma Mimarlık Inşaat Turizm", category: "Mimari Ofis" },
    { name: "Biriz Inşaat Taah. Tic. San. Tic. Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Cengiz Ulus Mimarlık", category: "Mimari Ofis" },
    { name: "Cephe Mimarlık", category: "Mimari Ofis" },
    { name: "Çağlar Çölgeçen Arkista Mimarlık", category: "Mimari Ofis" },
    { name: "DND Mimarlık", category: "Mimari Ofis" },
    { name: "Erol Sermet Caliskan Mimarlik", category: "Mimari Ofis" },
    { name: "Esim Mimarlık", category: "Mimari Ofis" },
    { name: "ESM Proje Inşaat Taah.Tic.Ltd.Şti.", category: "Mimari Ofis" },
    { name: "F. Selcuk Evci Ortakligi Tüge Öncel", category: "Mimari Ofis" },
    { name: "Form Yapı Okay Inşaat", category: "Mimari Ofis" },
    { name: "Gürol Biber", category: "Mimari Ofis" },
    { name: "Güven Çabuk Mimarlık", category: "Mimari Ofis" },
    { name: "Hasan Değerbilir", category: "Mimari Ofis" },
    { name: "Hasan Safa Al", category: "Mimari Ofis" },
    { name: "Helvacıoğlu Mimarlık", category: "Mimari Ofis" },
    { name: "İÇS Mimarlık Dekorasyon Gıda İnşaat", category: "Mimari Ofis" },
    { name: "İdea Yapı Ürünleri ve Tic. A.Ş.", category: "Mimari Ofis" },
    { name: "Kagir Ahşap Yapı", category: "Mimari Ofis" },
    { name: "Karem Mimarlık", category: "Mimari Ofis" },
    { name: "KHG Tekstil Mimarlık", category: "Mimari Ofis" },
    { name: "Koray Sapmaz", category: "Mimari Ofis" },
    { name: "Krea Mimarlık Ve Tic. Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Külkedisi Mimarlık", category: "Mimari Ofis" },
    { name: "LA Mimarlik", category: "Mimari Ofis" },
    { name: "Laborteks San. Tic. Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Lotus Bina İnşaat Müh. ve Mimarlık Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Matt International", category: "Mimari Ofis" },
    { name: "Mazeron Mimarlık Dekorasyon", category: "Mimari Ofis" },
    { name: "Mertun Mimarlık", category: "Mimari Ofis" },
    { name: "Mesut Tanyel", category: "Mimari Ofis" },
    { name: "Mimarca Tasarım Ve Uygulama", category: "Mimari Ofis" },
    { name: "Mustafa Ülkü Mimarlık A.Ş", category: "Mimari Ofis" },
    { name: "Nhl Mimarlık Hizmetleri Ltd. Şti.", category: "Mimari Ofis" },
    { name: "Oda Tasarım", category: "Mimari Ofis" },
    { name: "On Dizayn Mimarlık", category: "Mimari Ofis" },
    { name: "Ömer Melih Güveniş", category: "Mimari Ofis" },
    { name: "Öner Serkan Şimşek - CER Atölyesi", category: "Mimari Ofis" },
    { name: "Özlem Tarkan Çamurcu Mimarlık Bürosu", category: "Mimari Ofis" },
    { name: "Pamir Mimarlık", category: "Mimari Ofis" },
    { name: "SVG Mimarlık Mühendislik", category: "Mimari Ofis" },
    { name: "Şanlılar Mimarlık", category: "Mimari Ofis" },
    { name: "Şule Uyar Mimarlık", category: "Mimari Ofis" },
    { name: "Tekin Inşaat", category: "Mimari Ofis" },
    { name: "Tolkim Dış Ticaret", category: "Mimari Ofis" },
    { name: "Tözün Mimarlık", category: "Mimari Ofis" },
    { name: "Yağmur Mimarlık", category: "Mimari Ofis" },
    { name: "Yardımlı Yapı Malzeme", category: "Mimari Ofis" },
    { name: "Yıldız Mimarlık", category: "Mimari Ofis" },
    { name: "Çalık Enerji", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Doğuş İnşaat Mersin Projesi", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Emay Uluslararası Mühendisik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Fab Teknik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Freysaş Freyssinet", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Hidro Dizayn", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Makyol Inşaat", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Mega Mühendislik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Proyapı Mühendislik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Sepa Mühendislik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Su Yapı Mühendislik", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Temelsu Uluslararası Mühendislik A.Ş.", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Yüksel Proje A.Ş.", category: "Mühendislik Ofisi (Alt Yapı)" },
    { name: "Ağırman Mimarlık Mühendsilik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "AKZ Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Anda Müşavirlik Mühendislik Ltd. Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "ATAK Mühendislik İnşaat San. ve Tic. A. Ş.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Aydın Pelin-Can Binzet Müş. Müh. A.Ş (Rönesans)", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Betis Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Blue Projects Proje", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Dolsar Mühendislik A.Ş.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Doruk Müh. Prefabrik Beton San. Ve Tic.Ltd.Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Edita Engineers Mimarlık Ve Müh. Ltd. Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "EFK Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Egim Grup", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Genser Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Lun Yapı Inşaat", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Modern Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Murat Bayrak Engineers", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Nis Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Orion Ağır Çelik Yapı Müh. Inşaat San. Ve Tic. Ltdi Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Orion Müşavirlik Mühendislik Ve Proje Ltd. Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Ömer Akyıldız Mühendislik A.Ş.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Özgen Müh. San. ve Tic. Ltd. Şti.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Plan & Projektbau Istanbul", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Promer Müsavirlik Mühendislik Ltd. Sti", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Sedat Okutan", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Seza Müh. Mimarlık", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Sigma Mühendislik Hizmetleri", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Stas Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Tesem Yapı A.Ş.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Türk Teknik Mc Mert Inşaat", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Türkiye Jokey Kulübü İnş. ve Yapı Destek Müd.", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Werner Sobek Istanbul", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Z Dizayn Mühendislik", category: "Mühendislik Ofisi (Üst Yapı)" },
    { name: "Ahes Inşaat", category: "Müteahhit" },
    { name: "Atış Yapı", category: "Müteahhit" },
    { name: "Avinal Yazılım", category: "Müteahhit" },
    { name: "Bek-Ay Mimarlık", category: "Müteahhit" },
    { name: "Byk Danışmanlık", category: "Müteahhit" },
    { name: "Dap & Eltes Ortak Girişim", category: "Müteahhit" },
    { name: "Dost Inşaat", category: "Müteahhit" },
    { name: "Ege Yapı A.Ş.", category: "Müteahhit" },
    { name: "Enka Inşaat ve San.  A.Ş.", category: "Müteahhit" },
    { name: "Gelişim Müh. İnş. Mad.", category: "Müteahhit" },
    { name: "Genkon Mühendislik Müşavirlik A.Ş.", category: "Müteahhit" },
    { name: "Güryapı Taah. Inş. Turz. San. Ve Tic. Ltd", category: "Müteahhit" },
    { name: "Güryapı Taahüt", category: "Müteahhit" },
    { name: "Habaş A.Ş.", category: "Müteahhit" },
    { name: "Iga Havalimanları", category: "Müteahhit" },
    { name: "Iskenderun Demir ve Çelik A.Ş.", category: "Müteahhit" },
    { name: "KÇS Kahramanmaraş Çimento A.Ş.", category: "İnşaat Şirketleri" },
    { name: "Nodus Mühendislik", category: "Müteahhit" },
    { name: "Öner Grup Yapı İnş. San. ve Tic. A.Ş.", category: "Müteahhit" },
    { name: "Rec Uluslararası Inşaat", category: "Müteahhit" },
    { name: "REN TAAHHÜT İNŞAAT SANAYİ A.Ş.", category: "Müteahhit" },
    { name: "Rönesans Proje", category: "Müteahhit" },
    { name: "Sertepe Inşaat", category: "Müteahhit" },
    { name: "Türkerler Gama", category: "Müteahhit" },
    { name: "ZNR İnşaat ve Tah. A.Ş.", category: "Müteahhit" },
    { name: "Akat Prefabrik", category: "Prefabrik" },
    { name: "Alacalı Inşaat Sanayi Ve Ticaret Aş.", category: "Prefabrik" },
    { name: "Betaş Beton ve Prefabrike", category: "Prefabrik" },
    { name: "Betonel Prefabrik Beton Elemanları Sanayi Ticaret A.Ş.", category: "Prefabrik" },
    { name: "Elit Prefabrike Beton Inşaat", category: "Prefabrik" },
    { name: "Ete Beton", category: "Prefabrik" },
    { name: "Kam Ankara Beton Sanayi A.Ş.", category: "Prefabrik" },
    { name: "Preton Prefabrik Yapı Elemanları  San. Ve Tic.A.Ş.", category: "Prefabrik" },
    { name: "Sayın Prefabrik Inşaat", category: "Prefabrik" },
    { name: "Abant Izzet Baysal Üniv.Yapı Işleri ve Tek. Daire Bşk.", category: "Universite" },
    { name: "Istanbul Gelişim Üniversitesi", category: "Universite" },
    { name: "Istanbul Kültür Üniversitesi", category: "Universite" },
    { name: "Kastamonu Meslek Yüksek Okulu", category: "Universite" },
    { name: "ODTU İnşaat Mühendisliği Bölümü", category: "Universite" },
    { name: "Türk Alman Üniversitesi", category: "Universite" },
    { name: "Yıldız Teknik Üniversitesi Inşaat Müh. Bölümü", category: "Universite" },
];

const categories = [
    { id: "all", label: "Tümü", icon: null },
    { id: "Mimari Ofis", label: "Mimari Ofis", icon: Building },
    { id: "Mühendislik Ofisi (Alt Yapı)", label: "Mühendislik (Alt Yapı)", icon: HardHat },
    { id: "Mühendislik Ofisi (Üst Yapı)", label: "Mühendislik (Üst Yapı)", icon: HardHat },
    { id: "İnşaat Şirketleri", label: "İnşaat Şirketleri", icon: Building2 },
    { id: "Müteahhit", label: "Müteahhit", icon: HardHat },
    { id: "Kamu Kurumları", label: "Kamu Kurumları", icon: Landmark },
    { id: "Meslek Odaları", label: "Meslek Odaları", icon: Users },
    { id: "Prefabrik", label: "Prefabrik", icon: Building2 },
    { id: "Universite", label: "Üniversite", icon: GraduationCap }
];

export default function ReferencesPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="REFERANSLAR"
                title={
                    <>
                        BIM Odaklı İş Ortaklarımız ve <br /> Referans Müşterilerimiz
                    </>
                }
                subtitle="Mimarlık, mühendislik ve inşaat (AEC) sektöründe, BIM (Building Information Modeling) uzmanlığımızı tercih eden iş ortaklarımızdan bazıları. Dijital tasarım, model tabanlı çalışma ve veri odaklı süreçlerde birlikte değer yarattığımız referans müşterilerimizi inceleyin."
            />

            <section className="py-20 px-6 md:px-12 lg:px-24 bg-background min-h-screen">
                <div className="max-w-[1400px] mx-auto">
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-16 h-auto p-0 sticky top-24 z-30 py-4 bg-background/80 backdrop-blur-md border-b border-white/5 w-full">
                            {categories.map((cat) => (
                                <TabsTrigger
                                    key={cat.id}
                                    value={cat.id}
                                    className="px-6 py-3 rounded-full border border-white/10 bg-[#111] text-gray-400 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-all duration-300 flex items-center gap-2"
                                >
                                    {cat.icon && <cat.icon className="h-4 w-4" />}
                                    {cat.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="all" className="focus:outline-none">
                            <ReferenceGrid items={references} />
                        </TabsContent>

                        {categories.filter(c => c.id !== "all").map((cat) => (
                            <TabsContent key={cat.id} value={cat.id} className="focus:outline-none">
                                <ReferenceGrid items={references.filter(r => r.category === cat.id)} />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </PageWrapper>
    );
}

const ReferenceGrid = ({ items }: { items: typeof references }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 hover:bg-[#0f0f0f] transition-all duration-300 group flex items-center gap-4"
                >
                    <div className="h-10 w-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <ReferenceIcon category={item.category} />
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

const ReferenceIcon = ({ category }: { category: string }) => {
    switch (category) {
        case "Mimari Ofis": return <Building className="h-5 w-5" />;
        case "Mühendislik Ofisi (Alt Yapı)":
        case "Mühendislik Ofisi (Üst Yapı)":
        case "Müteahhit": return <HardHat className="h-5 w-5" />;
        case "İnşaat Şirketleri":
        case "Prefabrik": return <Building2 className="h-5 w-5" />;
        case "Kamu Kurumları": return <Landmark className="h-5 w-5" />;
        case "Meslek Odaları": return <Users className="h-5 w-5" />;
        case "Universite": return <GraduationCap className="h-5 w-5" />;
        default: return <Building className="h-5 w-5" />;
    }
};
