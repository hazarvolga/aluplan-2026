"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Laptop, BarChart3, Globe, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConnectLicensePage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="LİSANS YÖNETİMİ"
                title="ALLPLAN 2026 & Yeni Lisanslama"
                subtitle="Allplan Connect Lisans Yönetim Paneli ile lisanslarınızı tek merkezden yönetin."
            />

            {/* Overview Section with Logo */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] relative border-b border-white/5">
                <div className="max-w-[1000px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-8 p-6 bg-white rounded-2xl inline-block">
                            <Image
                                src="https://aluplan.com.tr/wp-content/uploads/2025/04/ALLPLAN-Connect_Logo.png"
                                alt="Allplan Connect Logo"
                                width={300}
                                height={80}
                                className="h-auto w-auto"
                            />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Allplan Connect Lisans Yönetim Paneli Nedir?
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Allplan Connect Lisans Yönetim Paneli, Allplan yazılım lisanslarınızı yönetmek, izlemek ve etkin bir şekilde kullanabilmek için geliştirilmiş güçlü bir çevrimiçi sistemdir.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Important Warning Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-yellow-500/5 border-y border-yellow-500/10">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="bg-yellow-500/10 p-4 rounded-full shrink-0">
                            <AlertTriangle className="h-8 w-8 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Önemli Kayıt Uyarısı</h3>
                            <p className="text-gray-300 mb-6">
                                Allplan Connect&apos;e kayıt olurken lütfen kişisel e-posta adresiniz yerine mutlaka <strong>kurumsal iş e-postanızı</strong> kullanın. Bu, lisans yetkilendirmelerinin doğru yapılabilmesi için kritiktir.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    "lisans.yoneticisi@abc.com.tr",
                                    "it@abc.com.tr",
                                    "bilgiislem@abc.com.tr"
                                ].map((email, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 bg-black/20 rounded-lg border border-white/5">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        <span className="text-sm font-mono text-gray-400">{email}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid - Why Needed? */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Neden Gerekli?</h2>
                        <p className="text-gray-400">Yeni lisanslama sisteminin size sağladığı avantajlar.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#3B82F6]/30 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-6 text-[#3B82F6]">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Merkezi Lisans Yönetimi</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tüm lisanslarınızı tek bir merkezden görüntüleyebilir, kullanıcı atamalarını değiştirebilir ve yetkilendirmeleri anlık olarak yönetebilirsiniz. Artık dongle veya lisans dosyası kaybı derdi yok.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#3B82F6]/30 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
                                <Laptop className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Cihaz Değişikliği Desteği</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Bilgisayar değişikliği veya arıza durumunda (format vb.), sadece Allplan&apos;i kurmanız yeterlidir. Connect kullanıcı adınız ve şifrenizle giriş yaparak lisansınızı anında yeni bilgisayarda kullanmaya devam edebilirsiniz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#3B82F6]/30 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Lisans Kullanım Takibi</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ofisinizde hangi lisansın kim tarafından kullanıldığını şeffaf bir şekilde görüntüleyin. Boştaki lisansları verimli bir şekilde ihtiyacı olan kullanıcılara atayın.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#3B82F6]/30 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Online ve Zahmetsiz Erişim</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Web üzerinden her yerden erişilebilir. Sunucu kurulumu veya karmaşık teknik müdahaleler gerektirmez. Bulut tabanlı yapısı sayesinde her zaman erişilebilir ve günceldir.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#000] text-center border-t border-white/5">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Lisanslarınızı Yönetmeye Başlayın</h2>
                    <p className="text-gray-400 mb-10">
                        Allplan Connect portalına giriş yaparak lisanslarınızı hemen organize edin.
                    </p>
                    <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-full px-12 py-6 text-lg shadow-lg shadow-blue-900/20">
                        <a href="https://connect2.allplan.com/" target="_blank" rel="noopener noreferrer">
                            Allplan Connect&apos;e Git <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>
        </PageWrapper>
    );
}
