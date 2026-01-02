"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banners after a short delay for better UX
            const timer = setTimeout(() => setShowConsent(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowConsent(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowConsent(false);
    };

    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-[9990] pointer-events-none flex justify-center md:justify-start"
                >
                    <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-t border-white/10 dark:border-white/5 p-6 w-full max-w-lg pointer-events-auto ring-1 ring-black/5">
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-2.5 rounded-full shrink-0 mt-1">
                                <Cookie className="w-6 h-6 text-accent" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-bold text-base mb-2 text-foreground">
                                    Çerez Kullanımı ve Gizlilik
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    Deneyiminizi iyileştirmek için çerezleri kullanıyoruz.
                                    KVKK ve GDPR süreçlerine uygun olarak kişisel verileriniz işlenmektedir.
                                    <br />
                                    <Link href="/kvkk" className="text-accent hover:underline inline-block mt-1">KVKK Aydınlatma Metni</Link> &middot; <Link href="/gizlilik-politikasi" className="text-accent hover:underline inline-block">Gizlilik Politikası</Link>
                                </p>

                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm" onClick={handleDecline} className="flex-1 border-border/50 hover:bg-muted">
                                        Reddet
                                    </Button>
                                    <Button variant="default" size="sm" onClick={handleAccept} className="flex-1 bg-accent hover:bg-accent/90 text-white">
                                        Kabul Et
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
