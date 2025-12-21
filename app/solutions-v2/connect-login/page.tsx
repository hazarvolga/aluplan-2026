"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertCircle, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConnectLoginPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="TEKNİK DESTEK"
                title="Allplan Connect: Giriş Problemleri veya Parola Sıfırlama"
                subtitle="Hesabınıza yeniden erişim sağlamak için adım adım çözüm rehberi."
            />

            {/* Overview Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] relative border-b border-white/5">
                <div className="max-w-[1000px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Giriş Yapamıyor musunuz?
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Allplan Connect&apos;e kaydolmaya çalıştınız ancak başarılı bir şekilde giriş yapamıyor veya parolanızı unuttunuz mu?
                            Aşağıdaki adımları takip ederek başarılı bir şekilde tekrar giriş yapabilirsiniz.
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20">
                            <AlertCircle className="h-5 w-5" />
                            <span className="font-medium">Parolanızı değiştirmek için aşağıdaki adımları dikkatlice uygulayın.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Step 1 */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">1. Adım</div>
                        <h3 className="text-3xl font-bold text-white mb-6">Connect Sifre Sıfırlama Sayfasını Başlatın</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Öncelikle parola sıfırlama sayfasına gidin. Sayfa açıldığında sağ üst köşeden doğru ülkeyi seçtiğinizden emin olun.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-gray-300">
                                <Globe className="h-6 w-6 text-[#3B82F6] shrink-0" />
                                <span>Sağ üst köşeden dil/ülke seçiminizi kontrol edin.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <CheckCircle2 className="h-6 w-6 text-[#3B82F6] shrink-0" />
                                <span>E-posta adresinizi girin ve gönder butonuna basın.</span>
                            </li>
                        </ul>
                        <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-full px-8">
                            <a href="https://connect.allplan.com/pwd" target="_blank" rel="noopener noreferrer">
                                Parola Sıfırlama Sayfasına Git <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                        <Image
                            src="https://aluplan.com.tr/wp-content/uploads/2025/05/sifre-1-1024x570.jpg"
                            alt="Şifre Sıfırlama Ekranı"
                            width={1024}
                            height={570}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] border-y border-white/5">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                        <Image
                            src="https://aluplan.com.tr/wp-content/uploads/2025/05/gelenmail-1024x642.jpg"
                            alt="Gelen E-posta Örneği"
                            width={1024}
                            height={642}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">2. Adım</div>
                        <h3 className="text-3xl font-bold text-white mb-6">E-postanızı Kontrol Edin</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Şifre sıfırlama talebinizden sonra size gelen maile yanıt vermeniz gerekiyor. Gelen kutunuzu (ve gerekiyorsa Spam/Junk klasörünü) kontrol edin.
                        </p>
                        <div className="bg-[#111] p-6 rounded-xl border border-white/10">
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-gray-400 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold mb-2">E-posta Gelmedi mi?</h4>
                                    <p className="text-sm text-gray-500">
                                        Birkaç dakika bekleyin. Hala gelmediyse Spam klasörünü kontrol edin veya işlemi tekrarlayın.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3 & Requirements */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-block px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">3. Adım</div>
                        <h3 className="text-3xl font-bold text-white mb-6">Yeni Parola Belirleyin</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            E-postadaki bağlantıya tıkladıktan sonra yeni bir parola belirleyebileceksiniz. Parolanızın güvenliği için aşağıdaki kurallara mutlaka uymalısınız:
                        </p>

                        <div className="space-y-4">
                            {[
                                "En az 8 karakter olmalı",
                                "Büyük harf ve küçük harf içermeli",
                                "En az bir rakam içermeli",
                                "En az bir özel karakter (!, ?, @, # vb.) içermeli",
                                "Daha önce kullandığınız bir şifre olmamalı"
                            ].map((req, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#111] border border-white/5">
                                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black mt-8 lg:mt-0">
                        <Image
                            src="https://aluplan.com.tr/wp-content/uploads/2025/05/sifre-2-1024x666.jpg"
                            alt="Yeni Şifre Belirleme Ekranı"
                            width={1024}
                            height={666}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#000] text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Hazır mısınız?</h2>
                    <p className="text-gray-400 mb-10">
                        Yeni parolanızla Allplan Connect dünyasına giriş yapın ve tüm avantajlardan faydalanmaya devam edin.
                    </p>
                    <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-full px-12 py-6 text-lg shadow-lg shadow-blue-900/20">
                        <a href="https://connect.allplan.com/pwd" target="_blank" rel="noopener noreferrer">
                            Parola Sıfırlama Connect <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>
        </PageWrapper>
    );
}
