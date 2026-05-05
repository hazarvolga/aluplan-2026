"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, RefreshCw, Key, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowToAssignPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="REHBER & DESTEK"
                title="Lisans Atama ve Yönetim Rehberi"
                subtitle="Allplan Connect 2.0 üzerinden ekip üyelerinize nasıl lisans atayacağınızı ve ALLPLAN ID süreçlerini öğrenin."
            />

            <section className="py-20 px-6 md:px-12 lg:px-24 bg-background relative">
                <div className="max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Sıkça Sorulan Sorular & İşlemler</h2>
                        <p className="text-gray-400">Yeni nesil bulut tabanlı lisanslama sisteminde en çok ihtiyaç duyulan yönetim adımları.</p>
                    </motion.div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {/* Task 1: Assigning Licenses */}
                        <AccordionItem value="item-1" className="border border-white/10 bg-white/5 rounded-2xl px-6 overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-6">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <UserPlus className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-semibold text-white">Ekip üyelerine nasıl lisans atanır? (Yönetici Adımları)</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8 text-gray-300">
                                <div className="pl-14 space-y-6">
                                    <p className="text-gray-400 italic">Yönetici olarak ekip üyelerine lisans atamak oldukça basittir:</p>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">1</div>
                                            <div>
                                                <strong className="text-white">Giriş Yapın:</strong> Yönetici (Admin) hesabınızla Allplan Connect portalına (connect.allplan.com) giriş yapın.
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">2</div>
                                            <div>
                                                <strong className="text-white">Davet Edin:</strong> Menüden &quot;Ekip Üyeleri&quot; (Team members) bölümüne giderek lisans vereceğiniz kişileri e-posta adresleriyle kurum ağınıza (Company Network) davet edin.
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">3</div>
                                            <div>
                                                <strong className="text-white">Panoyu Açın:</strong> Menüdeki &quot;Admin&quot; sekmesi altından &quot;Lisanslama Panosu&quot; (Licensing Dashboard) alanına tıklayın.
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">4</div>
                                            <div>
                                                <strong className="text-white">Lisansı Atayın:</strong> Panoda listelenen kullanıcıların yanındaki kutucuğu işaretleyerek havuzdaki boş lisanslarınızı tek tıkla atayın.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Task 2: ALLPLAN ID Creation */}
                        <AccordionItem value="item-2" className="border border-white/10 bg-white/5 rounded-2xl px-6 overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-6">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                                        <Key className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-semibold text-white">Kullanıcıların ALLPLAN ID oluşturma adımları nelerdir?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8 text-gray-300">
                                <div className="pl-14 space-y-6">
                                    <p className="text-gray-400 italic">Kullanıcıların ALLPLAN ID (Allplan Connect/Bimplus hesabı) oluşturmaları için şu 3 basit adımı izlemesi yeterlidir:</p>
                                    <div className="grid gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500" /> 01. Daveti Yanıtlayın veya Kayıt Olun
                                            </h4>
                                            <p className="text-sm text-gray-400">Kurum yöneticinizden gelen davet e-postasındaki bağlantıya tıklayın ya da doğrudan Allplan Connect sayfasına giderek &quot;Kayıt Ol&quot; (Register) seçeneğini seçin.</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500" /> 02. Bilgileri Doldurun
                                            </h4>
                                            <p className="text-sm text-gray-400">Kurumsal e-posta adresinizi (bu e-posta sizin kalıcı ALLPLAN ID&apos;niz olacaktır) ve belirlediğiniz şifreyi girerek kayıt formunu eksiksiz doldurun.</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500" /> 03. Hesabı Doğrulayın
                                            </h4>
                                            <p className="text-sm text-gray-400">Kayıt işleminden hemen sonra e-posta adresinize gönderilen doğrulama bağlantısına 24 saat içinde tıklayarak hesabınızı aktifleştirin.</p>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Task 3: Returning Licenses */}
                        <AccordionItem value="item-3" className="border border-white/10 bg-white/5 rounded-2xl px-6 overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-6">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <RefreshCw className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-semibold text-white">10Duke sisteminde lisans iadesi adımları nelerdir?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8 text-gray-300">
                                <div className="pl-14 space-y-6">
                                    <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-sm text-blue-300">
                                        <p><strong>Bilgi:</strong> 10Duke bulut lisanslama sisteminde eski yöntemlerdeki gibi bilgisayar başından yapılan fiziksel bir &quot;iade&quot; işlemi yoktur; süreç tamamen yöneticiler tarafından merkezden anlık olarak yönetilir.</p>
                                    </div>
                                    <p className="text-gray-400">Bir lisansı kullanıcıdan geri alarak şirket havuzuna iade etmek için:</p>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4 items-center">
                                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white font-bold shrink-0">1</div>
                                            <p>Yönetici hesabınızla Allplan Connect portalına giriş yapın.</p>
                                        </li>
                                        <li className="flex gap-4 items-center">
                                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white font-bold shrink-0">2</div>
                                            <p>Admin sekmesi altından &quot;Lisanslama Panosu&quot;na (Licensing Dashboard) gidin.</p>
                                        </li>
                                        <li className="flex gap-4 items-center">
                                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white font-bold shrink-0">3</div>
                                            <p>Lisansını geri almak istediğiniz kullanıcının yanındaki onay kutucuğunun işaretini (tik) kaldırın.</p>
                                        </li>
                                    </ul>
                                    <p className="text-gray-500 text-sm border-t border-white/5 pt-4">
                                        Bu işlemi yaptığınız anda lisans kullanıcıdan alınarak şirketinizin boş lisans havuzuna geri döner ve anında başka birine atanmaya hazır hale gelir.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-20 p-12 bg-gradient-to-br from-primary/20 to-purple-500/10 border border-white/10 rounded-[2rem] text-center">
                        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Desteğe mi ihtiyacınız var?</h3>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Lisans atama süreçlerinde bir sorun yaşıyorsanız veya yönetici değişikliği yapmak istiyorsanız teknik destek ekibimizle iletişime geçebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-8">
                                <Link href="/contact">İletişime Geçin</Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/5">
                                <Link href="/solutions-v2/connect-license">
                                    Lisans Bilgi Sayfasına Dön
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
