"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Key, HelpCircle, PenTool, FileCheck, ArrowRight, ArrowLeft, Download, Loader2, CheckSquare } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

const steps = [
    { id: 1, title: "Kullanıcı Bilgileri", icon: User },
    { id: 2, title: "Lisans Numarası", icon: Key },
    { id: 3, title: "Talep Nedeni", icon: HelpCircle },
    { id: 4, title: "Dijital İmza", icon: PenTool },
    { id: 5, title: "Tamamla", icon: FileCheck },
];

export default function ActivationWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        agreed: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = async () => {
        if (currentStep === 1) {
            if (!formData.firstName || !formData.lastName || !formData.email) {
                toast.error("Lütfen tüm alanları doldurun.");
                return;
            }
            
            setIsSubmitting(true);
            try {
                const res = await fetch("/api/send-activation-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email
                    })
                });
                
                if (!res.ok) throw new Error("Gönderim başarısız");
                
                toast.success("Bilgileriniz başarıyla kaydedildi.");
                setCurrentStep(2);
            } catch (error) {
                toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
            } finally {
                setIsSubmitting(false);
            }
            return;
        }
        
        setCurrentStep(prev => Math.min(prev + 1, steps.length));
        setTimeout(() => {
            containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handlePrev = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        setTimeout(() => {
            containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    return (
        <div ref={containerRef} className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-card rounded-2xl shadow-sm border border-border mt-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Talep ve Beyan</h2>
                <h3 className="text-lg text-muted-foreground">Yeni Allplan Lisansının Etkinleştirilmesi</h3>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-500 mt-2">
                    Not: ALLPLAN 2023 ve ALLPLAN 2024 versiyonları için geçerlidir.
                </p>
            </div>

            {/* Stepper */}
            <div className="flex flex-wrap justify-between mb-8 gap-y-4">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center w-1/3 md:w-auto relative z-10">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs mt-2 font-medium text-center ${currentStep >= step.id ? "text-primary" : "text-muted-foreground"}`}>{step.title}</span>
                        {index !== steps.length - 1 && (
                            <div className={`hidden md:block absolute top-5 left-1/2 w-full h-[2px] -z-10 transition-colors duration-300 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] relative overflow-hidden bg-background rounded-xl p-6 border border-border">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                    >
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg border border-border">
                                    Bu formu gönderdiğinizde, adınız ve e-posta adresiniz gibi kişisel bilgileriniz siz kendi isteğinizle girmedikçe otomatik olarak toplanmayacaktır.
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Adınız</label>
                                            <input 
                                                type="text" 
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                                className="w-full p-2 rounded-md border border-input bg-background"
                                                placeholder="Ad"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Soyadınız</label>
                                            <input 
                                                type="text" 
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                                className="w-full p-2 rounded-md border border-input bg-background"
                                                placeholder="Soyad"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">E-posta Adresiniz</label>
                                        <input 
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full p-2 rounded-md border border-input bg-background"
                                            placeholder="ornek@sirket.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <h4 className="text-lg font-semibold text-primary">1 - Lisans numarası / Müşteri No.</h4>
                                <p className="text-muted-foreground">Beyan etmek istediğiniz Allplan lisans numarasını belirtiniz.</p>
                                
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li><strong>Müşteri No</strong> 10 hanelidir. C300 ile başlar.</li>
                                    <li><strong>Lisans numaranız</strong> en fazla iki haneli olabilir. Aşağıdaki resimde örnek gösterilmiştir.</li>
                                </ul>

                                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-border">
                                    <Image 
                                        src="/images/allplan-lisans-numarasi.png" 
                                        alt="Lisans Numarası Örneği"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <h5 className="font-semibold mt-6">Lisans numaramı nasıl bulurum?</h5>
                                <ul className="list-decimal pl-5 space-y-2 text-muted-foreground bg-muted p-4 rounded-lg">
                                    <li>Eğer Allplan yüklü ise <strong>Allmenu 202x &gt; Bilgi &gt; Kullanıcı Numarası</strong></li>
                                    <li>Lisans teslimatı yapıldığında tarafınıza verilen pdf dosyasında da bulabilirsiniz.</li>
                                </ul>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <h4 className="text-lg font-semibold text-primary">2 - Talep Nedeninizi Belirtin</h4>
                                <p className="text-muted-foreground font-medium">I am requesting a new Allplan license for the following reasons. / Aşağıdaki nedenlerden dolayı yeni bir Allplan lisansı talep ediyorum:</p>
                                
                                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-lg">
                                    <strong>Önemli Not:</strong> Buraya hangi sebepten lisans talep ettiğinizi sadece <strong>İngilizce</strong> olarak belirtiniz. Türkçe kabul edilmemektedir.
                                </div>

                                <div className="bg-muted p-6 rounded-lg border border-border mt-4">
                                    <h5 className="font-semibold mb-3">Örnekler:</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="bg-background px-2 py-1 rounded border border-border text-sm font-mono text-primary">Computer crashed.</span>
                                            <span className="text-muted-foreground text-sm mt-1">- Bilgisayar bozuldu.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="bg-background px-2 py-1 rounded border border-border text-sm font-mono text-primary">Computer formatted.</span>
                                            <span className="text-muted-foreground text-sm mt-1">- Bilgisayar formatlandı.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="bg-background px-2 py-1 rounded border border-border text-sm font-mono text-primary">My license is not possible to be activated.</span>
                                            <span className="text-muted-foreground text-sm mt-1">- Lisansım aktifleştirilemiyor.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <h4 className="text-lg font-semibold text-primary">3 - Dijital İmza</h4>
                                <p className="text-muted-foreground">En son olarak formu imzalamanız gereklidir:</p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg border border-border">
                                        <PenTool className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm mb-2">Dijital imzanızı <strong>Adobe Acrobat Reader</strong> ile atabilirsiniz.</p>
                                            <p className="text-sm">İmzadan sonra PDF olarak <a href="https://www.allplan.net.tr" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.allplan.net.tr</a> adresindeki destek platformuna kayıt olarak sisteme yükleyebilirsiniz.</p>
                                        </div>
                                    </div>

                                    <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-lg text-sm">
                                        <p className="font-semibold mb-1">Eksik veya hatalı bilgiler işleme alınmamaktadır.</p>
                                        <p>JPG ve benzeri resim formatları kabul edilmemektedir. Sadece PDF formatı ile başvuru yapabilirsiniz.</p>
                                    </div>
                                    
                                    <div className="pt-4 border-t border-border">
                                        <h5 className="font-medium mb-3">Faydalı Bağlantılar</h5>
                                        <ul className="space-y-2 text-sm">
                                            <li>
                                                <a href="https://helpx.adobe.com/tr/sign/using/digital-signatures.html" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                                                    Dijital imza nedir? Nasıl kullanılır? Nasıl Oluşturulur?
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.adobe.com/tr/acrobat/pdf-reader.html" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                                                    Ücretsiz olarak Adobe Acrobat Reader indir
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div className="space-y-6 flex flex-col h-full justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-primary mb-4">Örnek Döküman ve İndirme</h4>
                                    
                                    <div className="p-4 bg-muted border border-border rounded-lg mb-6">
                                        <p className="text-sm mb-3">Örnek dokümanı incelemek için alttaki linki kullanabilirsiniz:</p>
                                        <a 
                                            href="/images/Declaration_Allplan_2021-06-01.jpg" 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm bg-background border border-border px-3 py-2 rounded-md hover:bg-accent transition-colors"
                                        >
                                            <FileCheck className="w-4 h-4" />
                                            Örnek Dokümanı Gör
                                        </a>
                                    </div>

                                    <div className="space-y-4">
                                        <h5 className="font-medium text-destructive">Required (Zorunlu Alan)</h5>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className="mt-1">
                                                <input 
                                                    type="checkbox" 
                                                    className="peer sr-only"
                                                    checked={formData.agreed}
                                                    onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                                                />
                                                <div className="w-5 h-5 border-2 border-muted-foreground rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                                                    <CheckSquare className="w-3.5 h-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-medium group-hover:text-primary transition-colors">Declaration Allplan formu için onay verin</p>
                                                <p className="text-sm text-muted-foreground">Okudum, anladım, onaylıyorum.</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a 
                                        href={formData.agreed ? "/docs/Declaration_Allplan_2021-06-01.pdf" : "#"}
                                        download={formData.agreed ? "Declaration_Allplan.pdf" : undefined}
                                        onClick={(e) => {
                                            if (!formData.agreed) {
                                                e.preventDefault();
                                                toast.error("Lütfen önce şartları onaylayın.");
                                            } else {
                                                toast.success("Dosya indiriliyor...");
                                            }
                                        }}
                                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-colors ${
                                            formData.agreed 
                                            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                                            : "bg-muted text-muted-foreground cursor-not-allowed"
                                        }`}
                                    >
                                        <Download className="w-5 h-5" />
                                        Dökümanı İndir
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6 pt-6 border-t border-border">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 1 || isSubmitting}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-md disabled:opacity-50 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Geri
                </button>
                
                {currentStep < steps.length && (
                    <button
                        onClick={handleNext}
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-6 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md disabled:opacity-50 transition-colors"
                    >
                        {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Bekleyiniz...</>
                        ) : (
                            <>Devam Et <ArrowRight className="w-4 h-4" /></>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
