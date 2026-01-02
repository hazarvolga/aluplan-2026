"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Coffee, Ban } from "lucide-react";

export default function CopyProtection() {
    const [active, setActive] = useState(false);
    const [phase, setPhase] = useState<"walking" | "turning" | "posing" | "showing">("walking");
    const [message, setMessage] = useState("");
    const [iconType, setIconType] = useState<"shield" | "coffee" | "ban">("shield");

    useEffect(() => {
        const trigger = (msg: string, icon: "shield" | "coffee" | "ban") => {
            if (active) return; // Prevent double trigger
            setMessage(msg);
            setIconType(icon);
            setActive(true);
            setPhase("walking");
        };

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            trigger("Sağ tık yok, ama kahve var! ☕\nİçeriklerimiz koruma altındadır.", "coffee");
        };
        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            trigger("Kopyalamak yerine ilham almayı deneyin! 😉\nBizimle iletişime geçin.", "shield");
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
                trigger("Kısayollar işlemiyor... \nMühendislik sırları güvende! 🔒", "ban");
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
    }, [active]);

    // Reset sequence when finished
    useEffect(() => {
        if (phase === "showing") {
            const timer = setTimeout(() => {
                setActive(false);
                setPhase("walking");
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // Sequence Controller
    const handleWalkComplete = () => setPhase("turning");

    // Auto-progress from turning to posing to showing
    useEffect(() => {
        if (phase === "turning") {
            const t = setTimeout(() => setPhase("posing"), 300);
            return () => clearTimeout(t);
        }
        if (phase === "posing") {
            const t = setTimeout(() => setPhase("showing"), 600);
            return () => clearTimeout(t);
        }
    }, [phase]);


    const getIcon = () => {
        const className = "w-8 h-8";
        switch (iconType) {
            case 'coffee': return <Coffee className={`${className} text-amber-500`} />;
            case 'ban': return <Ban className={`${className} text-red-500`} />;
            default: return <ShieldAlert className={`${className} text-accent`} />;
        }
    };

    return (
        <AnimatePresence>
            {active && (
                <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-[2px]">
                    <motion.div
                        initial={{ x: "-100vw" }}
                        animate={phase === "walking" ? { x: 0 } : { x: 0 }}
                        exit={{ x: "100vw", opacity: 0 }}
                        transition={phase === "walking" ? { duration: 2.5, ease: "linear" } : { duration: 0.5 }}
                        onAnimationComplete={() => {
                            if (phase === "walking") handleWalkComplete();
                        }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Popup Bubble */}
                        <AnimatePresence>
                            {phase === "showing" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: -20 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute bottom-40 w-72"
                                >
                                    <div className="bg-background/95 backdrop-blur-md border border-border/50 p-5 rounded-2xl rounded-bl-none shadow-2xl text-center border-l-4 border-l-accent relative">
                                        <div className="flex justify-center mb-3">{getIcon()}</div>
                                        <p className="text-sm font-medium text-foreground whitespace-pre-line leading-relaxed">
                                            {message}
                                        </p>
                                        {/* Triangle Tip */}
                                        <div className="absolute -bottom-2 left-0 w-4 h-4 bg-background border-b border-r border-border/50 transform rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Stickman */}
                        <svg width="150" height="220" viewBox="0 0 100 140" className="w-48 h-64 text-foreground drop-shadow-2xl overflow-visible">
                            {/* 
                  PHASE: WALKING (Side View) 
                */}
                            {phase === "walking" && (
                                <motion.g>
                                    {/* Head */}
                                    <circle cx="55" cy="30" r="12" fill="currentColor" />
                                    {/* Body - Leaning forward slightly */}
                                    <path d="M55 42 L55 85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

                                    {/* Arms - Swing */}
                                    <motion.path
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                                        animate={{ d: ["M55 50 L80 65", "M55 50 L30 65", "M55 50 L80 65"] }} // Swing back/forth
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Legs - Articulated Walking */}
                                    {/* Right Leg (Foreground) */}
                                    <motion.path
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"
                                        animate={{
                                            d: [
                                                "M55 85 L75 110 L55 135", // Step forward, knee bent
                                                "M55 85 L55 115 L55 135", // Mid stride straight
                                                "M55 85 L35 110 L25 125", // Back leg
                                                "M55 85 L55 105 L65 120", // Lifting knee
                                                "M55 85 L75 110 L55 135"  // Loop
                                            ]
                                        }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Left Leg (Background) */}
                                    <motion.path
                                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.7" fill="none"
                                        animate={{
                                            d: [
                                                "M55 85 L35 110 L25 125", // Back leg start (opposite)
                                                "M55 85 L55 105 L65 120",
                                                "M55 85 L75 110 L55 135",
                                                "M55 85 L55 115 L55 135",
                                                "M55 85 L35 110 L25 125"
                                            ]
                                        }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.g>
                            )}

                            {/* 
                  PHASE: TURNING/POSING/SHOWING (Front View) 
                */}
                            {phase !== "walking" && (
                                <motion.g
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Head */}
                                    <circle cx="50" cy="30" r="12" fill="currentColor" />

                                    {/* Body */}
                                    <path d="M50 42 L50 85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

                                    {/* Legs - Standing Stance */}
                                    <path d="M50 85 L30 135" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                    <path d="M50 85 L70 135" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

                                    {/* Arms */}
                                    {phase === "turning" && (
                                        // Relaxed arms
                                        <>
                                            <path d="M50 50 L25 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                            <path d="M50 50 L75 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                        </>
                                    )}

                                    {(phase === "posing" || phase === "showing") && (
                                        // Hands on Hips (Akimbo)
                                        <>
                                            <motion.path
                                                d="M50 50 L30 65 L40 80" // Elbow out, hand on hip
                                                stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"
                                                initial={{ d: "M50 50 L25 75" }}
                                                animate={{ d: "M50 50 L20 60 L35 80" }} // Adjusted for better akimbo look
                                                transition={{ duration: 0.4, type: "spring" }}
                                            />
                                            <motion.path
                                                d="M50 50 L70 65 L60 80" // Elbow out, hand on hip
                                                stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"
                                                initial={{ d: "M50 50 L75 75" }}
                                                animate={{ d: "M50 50 L80 60 L65 80" }}
                                                transition={{ duration: 0.4, type: "spring" }}
                                            />
                                        </>
                                    )}
                                </motion.g>
                            )}
                        </svg>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
