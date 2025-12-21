"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Building2, Phone, User, Mail, CreditCard } from "lucide-react";

interface LicenseManagerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LicenseManagerModal({ isOpen, onClose }: LicenseManagerModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleClose = () => {
        onClose();
        // Reset state after transition
        setTimeout(() => {
            setIsSuccess(false);
        }, 300);
    };

    if (isSuccess) {
        return (
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-md bg-[#111] border border-white/10 text-white">
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                        <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold">Bilgileriniz Alındı!</h3>
                        <p className="text-gray-400 max-w-xs">
                            Lisans yönetici bilgileriniz sistemimize kaydedilmiştir. Teşekkür ederiz.
                        </p>
                        <Button
                            onClick={handleClose}
                            className="bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-full px-8 mt-4"
                        >
                            Tamam
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg bg-[#111] border border-white/10 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <User className="h-6 w-6 text-[#3B82F6]" />
                        Lisans Yönetici Bilgi Formu
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Lütfen firma lisans yöneticisi bilgilerini eksiksiz doldurunuz.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    {/* Firma */}
                    <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300 flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" /> Firma
                        </Label>
                        <Input
                            id="company"
                            required
                            placeholder="Firma Adı"
                            className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    {/* Telefon */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" /> Telefon No
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="+90 5XX XXX XX XX"
                            className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    {/* Ad Soyad */}
                    <div className="space-y-2">
                        <Label htmlFor="managerName" className="text-gray-300 flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-500" /> Lisans Yöneticisinin Adı Soyadı
                        </Label>
                        <Input
                            id="managerName"
                            required
                            placeholder="Ad Soyad"
                            className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="managerEmail" className="text-gray-300 flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" /> Lisans Yöneticisinin E-posta Adresi
                        </Label>
                        <Input
                            id="managerEmail"
                            type="email"
                            required
                            placeholder="ornek@sirketiniz.com (Kurumsal İş E-postası)"
                            className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                        />
                    </div>

                    {/* Müşteri No */}
                    <div className="space-y-2">
                        <Label htmlFor="customerNo" className="text-gray-300 flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-gray-500" /> Müşteri No
                        </Label>
                        <Input
                            id="customerNo"
                            required
                            placeholder="C300XXXXXX"
                            className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                        />
                        <p className="text-xs text-gray-500 ml-1">
                            * Genellikle C300 ile başlayan numaranız.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full bg-[#3B82F6] hover:bg-[#2563eb] text-white py-6 rounded-xl text-lg font-medium"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                "Bilgileri Gönder"
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
