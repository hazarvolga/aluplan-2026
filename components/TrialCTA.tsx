"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Download } from "lucide-react";

const TrialCTA = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-12 border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">


                    {/* Left Column */}
                    <div className="flex flex-col pt-2">
                        <span className="text-[#3B82F6] font-bold tracking-widest uppercase mb-3 block text-xs">ALLPLAN</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                            DAHA İYİ YARINLAR İNŞA ETMEK İÇİN TASARIM
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Daha üretken, işbirlikçi ve gelişmiş iş akışları
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col pt-2">
                        <h3 className="text-xl font-bold mb-4 text-gray-100">ALLPLAN'ı ücretsiz deneyin</h3>

                        <ul className="space-y-2 mb-6 text-sm">
                            {[
                                "Tek bir platformda disiplinler arası AEC ekip çalışması",
                                "Malzeme ve inşaat yöntemlerinin üstün koordinasyonu",
                                "Gelişmiş BIM iş akışları ve gerçek zamanlı işbirliği"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                            ALLPLAN'ın tam sürümünü 14 gün boyunca ücretsiz ve yükümlülük altına girmeden test edin.
                            Yazılımı indirin ve tüm avantajları deneyimleyin.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild className="bg-[#3B82F6] hover:bg-[#2563eb] text-white font-medium text-sm h-10 border-0 rounded-sm flex-1 shadow-sm">
                                <a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-4 w-4" />
                                    Şimdi İndir
                                </a>
                            </Button>

                            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium text-sm h-10 rounded-sm bg-transparent flex-1">
                                <a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">
                                    Teklif Talep Formu
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrialCTA;
