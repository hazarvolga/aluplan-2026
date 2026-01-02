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
            setTimeout(() => setShowWarning(false), 2500);
        };

        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            setMessage("Kopyalamak yerine ilham almayı deneyin! 😉\nBizimle iletişime geçin.");
            setIconType("shield");
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 2500);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Ctrl+C, Ctrl+U, Ctrl+Shift+I, F12
            if (
                (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
                (e.metaKey && (e.key === 'c' || e.key === 'C')) || // Mac Command+C
                (e.ctrlKey && e.key === 'u') ||
                (e.key === 'F12') ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')
            ) {
                // Only prevent if it is copy or view source, allow normal usage otherwise
                // But for C/U it is generally safe to block on document body if no input is focused?
                // Blocking ctrl+c everywhere is annoying for inputs.
                // I should check if target is input/textarea.
                const target = e.target as HTMLElement;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
                    return; // Allow copy in inputs
                }

                e.preventDefault();
                setMessage("Kısayollar işlemiyor... \nMühendislik sırları güvende! 🔒");
                setIconType("ban");
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 2500);
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
            case 'coffee': return <Coffee className="w-12 h-12 text-amber-500" />;
            case 'ban': return <Ban className="w-12 h-12 text-red-500" />;
            default: return <ShieldAlert className="w-12 h-12 text-accent" />;
        }
    };

    return (
        <AnimatePresence>
            {showWarning && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-black/20 backdrop-blur-[2px]"
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 20 }}
                        className="bg-background/95 backdrop-blur-md border border-border/50 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-sm mx-4 relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-accent/10 p-5 rounded-full mb-6 ring-1 ring-accent/20"
                        >
                            {getIcon()}
                        </motion.div>

                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                            Hop! İçerik Korumalı 🚧
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed mb-4">
                            {message}
                        </p>

                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/40 font-mono uppercase tracking-widest">
                            <Copyright className="w-3 h-3" /> Aluplan 2026 Security
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
