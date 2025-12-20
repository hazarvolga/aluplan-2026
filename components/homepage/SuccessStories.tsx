"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder testimonials - these would come from CMS
const testimonials = [
    {
        quote: "ALLPLAN ile proje süreçlerimiz %40 daha hızlı hale geldi. Tasarımdan üretime geçiş artık çok daha akıcı.",
        author: "Mimar Ahmet Yılmaz",
        company: "XYZ Mimarlık",
        project: "İstanbul Finans Merkezi",
        image: null // Placeholder
    },
    {
        quote: "30 yıldır ALUPLAN ile çalışıyoruz. Türkçe teknik destek ve yerel eğitimler vazgeçilmezimiz.",
        author: "Dr. Mehmet Kaya",
        company: "ABC Mühendislik",
        project: "Ankara Metro Projeleri",
        image: null
    },
    {
        quote: "Prefabrik üretim süreçlerimizde ALLPLAN Precast devrim yarattı. Hata oranımız minimuma indi.",
        author: "Üretim Müdürü Ali Demir",
        company: "DEF Prefabrik A.Ş.",
        project: "Çeşitli Sanayi Projeleri",
        image: null
    }
];

const SuccessStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 bg-gradient-to-b from-graphite-950 to-graphite-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Müşterilerimiz <span className="text-accent">Ne Diyor?</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Türkiye'nin önde gelen firmalarından referanslar
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-graphite-900 border border-white/10 overflow-hidden">
                        <CardContent className="p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Quote Icon */}
                                    <Quote className="h-12 w-12 text-accent/20 mb-6" />

                                    {/* Quote Text */}
                                    <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar Placeholder */}
                                        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                                            <span className="text-accent font-bold text-lg">
                                                {testimonials[currentIndex].author.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">
                                                {testimonials[currentIndex].author}
                                            </div>
                                            <div className="text-sm text-white/50">
                                                {testimonials[currentIndex].company}
                                            </div>
                                            <div className="text-xs text-accent/60 mt-1">
                                                {testimonials[currentIndex].project}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prev}
                            className="text-white/50 hover:text-white hover:bg-white/5"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-accent w-6'
                                            : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={next}
                            className="text-white/50 hover:text-white hover:bg-white/5"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                        Tüm Başarı Hikayelerini Gör
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
