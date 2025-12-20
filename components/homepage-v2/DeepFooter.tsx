"use client"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const DeepFooter = () => {
    return (
        <footer className="bg-[#020202] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#3B82F6] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10">

                {/* Left Side: Call to Action Form */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[0.9]">
                        GELECEĞİ<br />
                        <span className="text-[#3B82F6]">BİRLİKTE</span><br />
                        İNŞA EDELİM.
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Projeniz ne kadar karmaşık olursa olsun, ALLPLAN ile bir çözümü var. Mühendislerimizle konuşun.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    required
                                    id="name"
                                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder=" "
                                />
                                <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white cursor-text">
                                    Ad Soyad
                                </label>
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    id="email"
                                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder=" "
                                />
                                <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white cursor-text">
                                    E-posta
                                </label>
                            </div>
                        </div>
                        <div className="group relative">
                            <textarea
                                rows={3}
                                required
                                id="message"
                                className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                                placeholder=" "
                            />
                            <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white cursor-text">
                                Mesajınız (Opsiyonel)
                            </label>
                        </div>

                        <button type="submit" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-tight hover:bg-gray-200 transition-colors mt-4">
                            Gönder
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>

                {/* Right Side: Info & Links */}
                <div className="flex flex-col justify-between gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#3B82F6] mb-6">İletişim</h3>
                        <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors">
                            <MapPin className="h-6 w-6 shrink-0 mt-1" />
                            <p className="leading-relaxed">
                                Küçükbakkalköy Mah. Dereboyu Cad.<br />
                                Brandium AVM R5 Blok No:3A<br />
                                Ataşehir / İstanbul
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <Phone className="h-6 w-6 shrink-0" />
                            <p>+90 212 444 00 00</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <Mail className="h-6 w-6 shrink-0" />
                            <p>info@aluplan.com.tr</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Ürünler</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ALLPLAN Architecture</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ALLPLAN Engineering</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ALLPLAN Precast</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bimplus</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Şirket</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                        <p>© 2024 ALUPLAN. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-400">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DeepFooter;
