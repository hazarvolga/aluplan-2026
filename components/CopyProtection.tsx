"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Copyright, Coffee, Ban } from "lucide-react";

export default function CopyProtection() {
    const [showWarning, setShowWarning] = useState(false);
    const [message, setMessage] = useState("");
    const [iconType, setIconType] = useState<"shield" | "coffee" | "ban">("shield");

    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            setMessage("Sağ tık yok, ama kahve var! ☕\nİçeriklerimiz koruma altındadır.");
            setIconType("coffee");
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
        };

        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            setMessage("Kopyalamak yerine ilham almayı deneyin! 😉\nBizimle iletişime geçin.");
            setIconType("shield");
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
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
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
                    return;
                }

                e.preventDefault();
                setMessage("Kısayollar işlemiyor... \nMühendislik sırları güvende! 🔒");
                setIconType("ban");
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 3000);
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
            case 'coffee': return <Coffee className="w-8 h-8 text-amber-500" />;
            case 'ban': return <Ban className="w-8 h-8 text-red-500" />;
            default: return <ShieldAlert className="w-8 h-8 text-accent" />;
        }
    };

    const Stickman = () => (
        <svg
            width="100"
            height="140"
            viewBox="0 0 100 140"
            className="w-32 h-44 text-foreground/80 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Head - Looking up/straining? */}
            <circle cx="50" cy="30" r="14" />

            {/* Body */}
            <path d="M50 44 L50 90" />

            {/* Arms - Pushing UP against the popup */}
            {/* Starting from shoulders (50, 50) going up to (20, 0) and (80, 0) where popup sits */}
            <path d="M25 5 L50 55 L75 5" />

            {/* Legs - Wide stance for pushing */}
            <path d="M50 90 L20 135" />
            <path d="M50 90 L80 135" />
        </svg>
    );

    return (
        <AnimatePresence>
            {showWarning && (
                <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-end pb-0 overflow-hidden bg-black/5 backdrop-blur-[1px]">
                    {/* The container moving up from bottom */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "-50vh" }} // Move up to center screen
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 12,
                            stiffness: 80,
                            mass: 0.8
                        }}
                        className="flex flex-col items-center relative"
                    >
                        {/* The Popup */}
                        <div className="bg-background/95 backdrop-blur-md border border-border/50 p-6 rounded-2xl shadow-2xl text-center w-80 mb-[-10px] relative z-20 border-b-4 border-b-accent/20">
                            <div className="flex justify-center mb-4">
                                <div className="bg-accent/10 p-3 rounded-full ring-1 ring-accent/20 animate-pulse">
                                    {getIcon()}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                                Hop! İçerik Korumalı 🚧
                            </h3>
                            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                                {message}
                            </p>
                        </div>

                        {/* The Stickman pushing it */}
                        <motion.div
                            className="relative z-10"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ yoyo: Infinity, duration: 0.2 }} // Straining effect?
                        >
                            <Stickman />
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
