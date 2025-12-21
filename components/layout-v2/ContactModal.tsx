"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultSubject: string;
    title?: string;
}

export function ContactModal({ isOpen, onClose, defaultSubject, title = "İletişim Formu" }: ContactModalProps) {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // Reset state when modal opens/closes
    React.useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulation of form submission
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Submitted:", data);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitted(true);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] bg-[#111] border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                </DialogHeader>

                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold">Teşekkürler!</h3>
                        <p className="text-gray-400 max-w-xs">
                            Mesajınız başarıyla alınmıştır. Ekibimiz sizinle en kısa sürede &quot;<strong>{defaultSubject}</strong>&quot; konusu hakkında iletişime geçecektir.
                        </p>
                        <Button
                            onClick={onClose}
                            className="bg-white text-black hover:bg-gray-200 mt-4 min-w-[120px]"
                        >
                            Kapat
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-400">Ad Soyad</Label>
                                <Input id="name" name="name" required placeholder="Adınız Soyadınız" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-400">Firma</Label>
                                <Input id="company" name="company" placeholder="Firma Adı" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-400">E-posta</Label>
                                <Input id="email" name="email" type="email" required placeholder="ornek@sirket.com" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-gray-400">Telefon</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="05XX XXX XX XX" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle" className="text-gray-400">Meslek / Unvan</Label>
                                <Input id="jobTitle" name="jobTitle" placeholder="Örn: Mimar, İnşaat Mühendisi" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sector" className="text-gray-400">Sektör</Label>
                                <Input id="sector" name="sector" placeholder="Örn: Yapı, Eğitim, Kamu" className="bg-black/50 border-white/10 focus:border-[#3B82F6]" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-gray-400">Konu</Label>
                            {/* ReadOnly subject to ensure context is passed */}
                            <Input
                                id="subject"
                                name="subject"
                                value={defaultSubject}
                                readOnly
                                className="bg-white/5 border-white/5 text-gray-500 cursor-not-allowed font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-gray-400">Mesajınız</Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Size nasıl yardımcı olabiliriz?"
                                className="min-h-[100px] bg-black/50 border-white/10 focus:border-[#3B82F6]"
                            />
                        </div>

                        <div className="pt-4 flex justify-end gap-3">
                            <Button type="button" variant="ghost" onClick={onClose} className="text-gray-400 hover:text-white hover:bg-white/5">
                                İptal
                            </Button>
                            <Button type="submit" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white min-w-[120px]">
                                Gönder
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
