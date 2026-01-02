"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Copyright, Coffee, Ban } from "lucide-react";

export default function CopyProtection() {
    const [showWarning, setShowWarning] = useState(false);
    const [message, setMessage] = useState("");
    const [iconType, setIconType] = useState<"shield" | "coffee" | "ban">("shield");

    useEffect(() => {
        const triggerWarning = (msg: string, icon: "shield" | "coffee" | "ban") => {
            setMessage(msg);
            setIconType(icon);
            setShowWarning(true);
            // Reset after animation + read time (approx 4-5s total)
            setTimeout(() => setShowWarning(false), 4500);
        };

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            triggerWarning("Sağ tık yok, ama kahve var! ☕\nİçeriklerimiz koruma altındadır.", "coffee");
        };

        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            triggerWarning("Kopyalamak yerine ilham almayı deneyin! 😉\nBizimle iletişime geçin.", "shield");
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
                (e.metaKey && (e.key === 'c' || e.key === 'C')) ||
                (e.ctrlKey && e.key === 'u') ||
                (e.key === 'F12') ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')
            ) {
                const target = e.target as HTMLElement;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

                e.preventDefault();
                triggerWarning("Kısayollar işlemiyor... \nMühendislik sırları güvende! 🔒", "ban");
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("copy", handleCopy);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const getIcon = () => {
        switch (iconType) {
            case 'coffee': return <Coffee className="w-6 h-6 text-amber-500" />;
            case 'ban': return <Ban className="w-6 h-6 text-red-500" />;
            default: return <ShieldAlert className="w-6 h-6 text-accent" />;
        }
    };

    const WalkingStickman = () => (
        <svg
            width="100"
            height="140"
            viewBox="0 0 100 140"
            className="w-32 h-44 text-foreground drop-shadow-2xl"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Head */}
            <circle cx="50" cy="30" r="14" className="fill-background" />

            {/* Body */}
            <path d="M50 44 L50 90" />

            {/* Arms - Swing animation handled by parent or path variants if needed, keeping simple for now */}
            <motion.path
                d="M50 50 L80 70"
                animate={{ d: ["M50 50 L80 70", "M50 50 L20 70", "M50 50 L80 70"] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M50 50 L20 70"
                animate={{ d: ["M50 50 L20 70", "M50 50 L80 70", "M50 50 L20 70"] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Legs - Walking animation */}
            <motion.path
                d="M50 90 L80 135"
                animate={{ d: ["M50 90 L80 135", "M50 90 L20 135", "M50 90 L80 135"] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M50 90 L20 135"
                animate={{ d: ["M50 90 L20 135", "M50 90 L80 135", "M50 90 L20 135"] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );

    return (
        <AnimatePresence>
            {showWarning && (
                <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden bg-black/10 backdrop-blur-[2px]">

                    {/* Container for Stickman + Popup */}
                    <motion.div
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw", opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 60,
                            duration: 1.5
                        }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Popup Bubble - Appears after walking in */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8, type: "spring" }} // Wait for walk to approx finish
                            className="mb-4 relative"
                        >
                            <div className="bg-background/95 backdrop-blur-md border border-border/50 p-5 rounded-2xl rounded-bl-sm shadow-2xl text-center w-72 border-l-4 border-l-accent">
                                <div className="flex items-center gap-2 mb-2 justify-center">
                                    {getIcon()}
                                    <div className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Güvenlik Uyarısı</div>
                                </div>
                                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed font-medium">
                                    {message}
                                </p>
                            </div>
                        </motion.div>

                        {/* Walking Stickman */}
                        <WalkingStickman />

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
