"use client"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const DeepFooter = () => {
    return (
        <section className="bg-card text-foreground pt-24 pb-24 px-6 md:px-12 lg:px-24 border-t border-border/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10">

                {/* Left Side: Call to Action Form */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[0.9]">
                        GELECEĞİ<br />
                        <span className="text-accent">BİRLİKTE</span><br />
                        İNŞA EDELİM.
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-md">
                        Projeniz ne kadar karmaşık olursa olsun, ALLPLAN ile bir çözümü var. Mühendislerimizle konuşun.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    required
                                    id="name"
                                    aria-label="Ad ve Soyadınız"
                                    className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                                    placeholder=" "
                                />
                                <label htmlFor="name" className="absolute left-0 top-3 text-muted-foreground transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground cursor-text">
                                    Ad Soyad
                                </label>
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    id="email"
                                    aria-label="E-posta Adresiniz"
                                    className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                                    placeholder=" "
                                />
                                <label htmlFor="email" className="absolute left-0 top-3 text-muted-foreground transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground cursor-text">
                                    E-posta
                                </label>
                            </div>
                        </div>
                        <div className="group relative">
                            <textarea
                                rows={3}
                                required
                                id="message"
                                aria-label="Mesajınız"
                                className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                                placeholder=" "
                            />
                            <label htmlFor="message" className="absolute left-0 top-3 text-muted-foreground transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground cursor-text">
                                Mesajınız (Opsiyonel)
                            </label>
                        </div>

                        <button type="submit" className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold tracking-tight hover:opacity-90 transition-colors mt-4">
                            Gönder
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>

                {/* Right Side: Info Only (Links Removed) */}
                <div className="flex flex-col justify-center gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Merkez Ofis</h3>
                            <div className="flex items-start gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                                <div className="p-3 rounded-lg bg-muted border border-border/20 group-hover:border-accent/50 transition-colors">
                                    <MapPin className="h-6 w-6 shrink-0 text-foreground" />
                                </div>
                                <p className="leading-relaxed text-lg">
                                    Quick Tower – Workinton<br />
                                    İçerenköy Mah. Topçu İbrahim Sok.<br />
                                    8/10D No: 5, 34752 Ataşehir / İstanbul
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Bize Ulaşın</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                                    <div className="p-3 rounded-lg bg-muted border border-border/20 group-hover:border-accent/50 transition-colors">
                                        <Phone className="h-6 w-6 shrink-0 text-foreground" />
                                    </div>
                                    <p className="text-lg">(+90) 216 225 84 41</p>
                                </div>
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                                    <div className="p-3 rounded-lg bg-muted border border-border/20 group-hover:border-accent/50 transition-colors">
                                        <Mail className="h-6 w-6 shrink-0 text-foreground" />
                                    </div>
                                    <p className="text-lg">info@aluplan.com.tr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepFooter;
