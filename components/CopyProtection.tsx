"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldAlert, Coffee, Ban } from "lucide-react";
import gsap from "gsap";

export default function CopyProtection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Refs for animation targets (Side View)
    const bodyRef = useRef<SVGGElement>(null);      // #B
    const torsoRef = useRef<SVGGElement>(null);     // #UB
    const headRef = useRef<SVGGElement>(null);      // #H

    const legFrontRef = useRef<SVGGElement>(null);  // #FF
    const legFrontShinRef = useRef<SVGGElement>(null);
    const legFrontFootRef = useRef<SVGGElement>(null);
    const legFrontToeRef = useRef<SVGGElement>(null);

    const legBackRef = useRef<SVGGElement>(null);   // #FB
    const legBackShinRef = useRef<SVGGElement>(null);
    const legBackFootRef = useRef<SVGGElement>(null);
    const legBackToeRef = useRef<SVGGElement>(null);

    const armFrontRef = useRef<SVGGElement>(null);  // #HF
    const armFrontForeRef = useRef<SVGGElement>(null);
    const armFrontHandRef = useRef<SVGGElement>(null);

    const armBackRef = useRef<SVGGElement>(null);   // #HB
    const armBackForeRef = useRef<SVGGElement>(null);
    const armBackHandRef = useRef<SVGGElement>(null);

    const [active, setActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [iconType, setIconType] = useState<"shield" | "coffee" | "ban">("shield");

    // Trigger Logic
    useEffect(() => {
        const trigger = (msg: string, icon: "shield" | "coffee" | "ban") => {
            if (active) return;
            setMessage(msg);
            setIconType(icon);
            setActive(true);
            setShowPopup(false);
        };

        const handleContextMenu = (e: MouseEvent) => { e.preventDefault(); trigger("Sağ tık yok, ama kahve var! ☕\nİçeriklerimiz koruma altındadır.", "coffee"); };
        const handleCopy = (e: ClipboardEvent) => { e.preventDefault(); trigger("Kopyalamak yerine ilham almayı deneyin! 😉\nBizimle iletişime geçin.", "shield"); };
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) { e.preventDefault(); trigger("Kopyalamak yok! 😎", "shield"); }
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) { e.preventDefault(); trigger("Kodları kurcalama! 🔒", "ban"); }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("copy", handleCopy);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [active]);

    // Animation Logic
    useEffect(() => {
        if (!active) return;

        const ctx = gsap.context(() => {
            // Initial Sets
            gsap.set(bodyRef.current, { y: 10 });
            gsap.set(torsoRef.current, { fill: '#151515', transformOrigin: '50% 100%' });
            gsap.set(headRef.current, { transformOrigin: '5px 50px', rotation: -5, fill: '#454545', scale: 0.967 });

            // Arms
            gsap.set(armFrontRef.current, { transformOrigin: '-5px 0px', rotation: -10, fill: '#454545', y: -1 });
            gsap.set(armFrontForeRef.current, { transformOrigin: '0px 5px', rotation: -20, y: -5 });
            gsap.set(armFrontHandRef.current, { transformOrigin: '10% 0%', rotation: -10, y: -1.5, scaleY: 1.03 });

            gsap.set(armBackRef.current, { transformOrigin: '-5px 0px', rotation: -10, fill: '#333', y: -3 });
            gsap.set(armBackForeRef.current, { transformOrigin: '0px 5px', rotation: -20, y: -5 });
            gsap.set(armBackHandRef.current, { transformOrigin: '10% 0%', rotation: -10, y: -1.5, scaleY: 1.03 });

            // Legs
            gsap.set(legFrontRef.current, { transformOrigin: '55% 10px', rotation: -37, fill: '#DC0026' });
            gsap.set(legFrontShinRef.current, { transformOrigin: '21px 2px' });
            gsap.set(legFrontFootRef.current, { transformOrigin: '25px 0px' });
            gsap.set(legFrontToeRef.current, { transformOrigin: '4.2px 4.2px' });

            gsap.set(legBackRef.current, { transformOrigin: '55% 10px', rotation: -37, fill: '#A50018' });
            gsap.set(legBackShinRef.current, { transformOrigin: '21px 2px' });
            gsap.set(legBackFootRef.current, { transformOrigin: '25px 0px' });
            gsap.set(legBackToeRef.current, { transformOrigin: '4.2px 4.2px' });


            // Walk Cycle Helpers
            const animateLimb = (entireLimb: any, shin: any, foot: any, toe: any) => {
                const tl = gsap.timeline({ repeat: -1 });
                const E0 = "sine.inOut"; const E1 = "sine.in"; const E2 = "sine.out";

                tl.to(entireLimb, { duration: 0.5, rotation: 27, ease: E0 }, 0)
                    .to(entireLimb, { duration: 0.25, rotation: -37, ease: E1 }, 0.5)

                    .to(shin, { duration: 0.25, rotation: 15, ease: E0 }, 0.25)
                    .to(shin, { duration: 0.25, rotation: 80, ease: E1 }, 0.5)
                    .to(shin, { duration: 0.25, rotation: 0, ease: E2 }, 0.75)

                    .to(foot, { duration: 0.25, rotation: 45, repeat: 1, yoyo: true }, 0.5)
                    .to(toe, { duration: 0.25, rotation: -35, repeat: 1, yoyo: true, scaleX: 0.925 }, 0.25);
                return tl;
            };

            const animateArm = (entireArm: any, foreArm: any, hand: any) => {
                const tl = gsap.timeline({ repeat: -1 });
                const E0 = "sine.inOut";
                tl.to(entireArm, { duration: 0.5, rotation: 25, ease: E0, yoyo: true, repeat: 1 }, 0)
                    .to(foreArm, { duration: 0.5, rotation: 15, ease: E0, yoyo: true, repeat: 1 }, 0)
                    .to(hand, { duration: 0.5, rotation: 0, ease: E0, yoyo: true, repeat: 1 }, 0);
                return tl;
            };

            // Timelines
            const frontLegTL = animateLimb(legFrontRef.current, legFrontShinRef.current, legFrontFootRef.current, legFrontToeRef.current);
            const backArmTL = animateArm(armBackRef.current, armBackForeRef.current, armBackHandRef.current);
            const backLegTL = animateLimb(legBackRef.current, legBackShinRef.current, legBackFootRef.current, legBackToeRef.current);
            const frontArmTL = animateArm(armFrontRef.current, armFrontForeRef.current, armFrontHandRef.current);

            const bodyBounce = gsap.to(bodyRef.current, { y: "+=20", duration: 0.25, repeat: -1, yoyo: true, ease: "sine.inOut" });
            const headWobble = gsap.to(headRef.current, { rotation: 1, duration: 0.25, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // Synch
            backLegTL.progress(0.5);
            frontArmTL.progress(0.5);

            // Movement
            // Screen Center (x=0 relative to parent flex-center)
            // Screen Left Edge = -window.innerWidth / 2

            const startX = -(window.innerWidth / 2) - 200; // Start off-screen LEFT
            const endX = 0; // Stop at CENTER
            const walkDuration = 4;

            gsap.fromTo(containerRef.current,
                { x: startX },
                {
                    x: endX,
                    duration: walkDuration,
                    ease: "power1.out",
                    onComplete: () => {
                        // STOP
                        frontLegTL.pause(); backLegTL.pause();
                        frontArmTL.pause(); backArmTL.pause();
                        bodyBounce.pause(); headWobble.pause();

                        // Reset to standing pose
                        gsap.to([legFrontRef.current, legBackRef.current], { rotation: 0, duration: 0.5 });
                        gsap.to(legFrontShinRef.current, { rotation: 0, duration: 0.5 });
                        gsap.to(bodyRef.current, { y: 10, duration: 0.5 });
                        gsap.to([armFrontRef.current, armBackRef.current], { rotation: 0, duration: 0.5 });

                        // POINT AT CARD Sequence
                        // Point Front Arm (HF) UP/RIGHT
                        const pointTL = gsap.timeline({
                            onComplete: () => {
                                setShowPopup(true);
                                setTimeout(() => setActive(false), 5000);
                            }
                        });

                        // Point Arm Animation - Adjusted x/y to keep shoulder attached
                        pointTL.to(armFrontRef.current, { rotation: -130, x: 2, y: 5, duration: 0.6, ease: "back.out(1.7)" })
                            .to(armFrontForeRef.current, { rotation: -30, duration: 0.4 }, "<0.2") // Straighten arm slightly
                            .to(armFrontHandRef.current, { rotation: -60, duration: 0.4 }, "<"); // Point finger implicitly

                        // Head look up slightly
                        gsap.to(headRef.current, { rotation: -20, duration: 0.5, delay: 0.2 });
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, [active]);


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
                <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center bg-black/10 backdrop-blur-[1px]">

                    {/* Character Container */}
                    <div ref={containerRef} className="relative w-[150px] h-[300px]">

                        {/* POPUP BUBBLE - Positioned where arm points */}
                        <AnimatePresence>
                            {showPopup && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute -top-32 -right-20 w-72 z-20 origin-bottom-left"
                                >
                                    <div className="bg-background/95 backdrop-blur-md border border-border/50 p-4 rounded-xl rounded-bl-sm shadow-2xl text-center border-l-4 border-l-accent relative">
                                        <div className="flex justify-center mb-2">{getIcon()}</div>
                                        <p className="text-xs font-bold text-foreground mb-1">HOP! İÇERİK KORUMALI</p>
                                        <p className="text-[11px] text-muted-foreground leading-snug">
                                            {message}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* VIEW: SIDE */}
                        <svg
                            width="325" height="325" viewBox="15 0 315 315"
                            className="absolute top-0 left-0 w-full h-full overflow-visible"
                        >
                            <g id="B" ref={bodyRef}>
                                {/* BACK LIMBS */}
                                <g id="FB" ref={legBackRef}>
                                    <path d="M169.2 223.345c.1-.21-.4-2.11 1.4-20.466-1.9-15.51-4.6-39.88-1.2-52.86 2.9-12.66 16.7-15.83 19.1-1.588.4 11.183.4 15.51-2 35.66-4.6 23.313-9.7 39.243-9.8 40.09-.1.525-2.2 2.32-4.4 2.002-1.7.104-3.3-2.217-3.1-2.85z" />
                                    <g className="F1" ref={legBackShinRef}>
                                        <path d="M162.9 307.954s1.2-11.393.3-24.264c-.5-9.284-5.8-30.594-4.7-38.93 6.8-18.777 13.6-23.42 16.4-22.26 1.1.95 1.9 2.322 1.3 4.01-.1.106-3.8 23.632-6 40.3-2.3 18.04.7 41.144.7 41.144h-8z" />
                                        <g className="F2" ref={legBackFootRef}>
                                            <path d="M192.2 316.183s-25.4-16.985-28.8-14.242c-1.4 6.65-11.8 19.1-2.9 22.9 3.3 1.27 7-1.16 8.3-1.37 6.3-1.16 19.1 1.48 20.2 1.48 2.8 0 5.1-1.687 5.1-4.64 0-1.69-.8-3.27-1.9-4.116z" />
                                            <path className="F3" ref={legBackToeRef} d="M191.7 315.867s-1.5-.528-2.3-.528c-2.6 0-4.6 2.11-4.6 4.85 0 2.42 1.7 4.53 4.1 4.75 0 0 17 .95 17.3-2.64.3-3.38-7.5-2.85-14.5-6.44z" />
                                        </g>
                                    </g>
                                </g>
                                <g id="HB" ref={armBackRef}>
                                    <path d="M179.9 111.275c.5-1.88 7.2-21.42 6.3-36.154 4.4-10.76 2-18.49.7-21.42-3.1-7-13.2-5.74-14.6 4.29-.5 3.66-1.5 10.87 2 19.33-2.6 17.24.7 31.87.9 33.96s4.1 1.988 4.7 0" />
                                    <g className="H1" ref={armBackForeRef}>
                                        <path d="M185 122.56c-.5-3.135-4.4-17.137-8.8-16.3-2.1.417-3.3 12.016-3.3 12.016 1.5 11.39 6.533 25.093 10.333 35.96l4.567-.852c.2 0-2.5-14.628-2.8-30.824z" />
                                        <path className="H2" ref={armBackHandRef} d="M186.87 152.17c-1 .11-2.9.774-4 .885-.6.11-2 4.318-2.8 7.308-.4 1.44-1 8.083-1 9.633l.4 6.312s1.5 5.315 1.8 5.98c.5 1.55 1.4.664 1.4.664s1.3 3.22 1.4 3.55c.3.67.8.89 1.3.78 2.3-.44-.1-5.09-.9-7.192.2-1.44-.3-4.872-.3-4.872s1 6.2 1.1 6.756c.1 1.77 2.1 4.87 2.4 5.87.1.995 1.6 1.327 2.4.44 1.7-1.88-1.8-6.53-1.8-6.53.4-2.216-.7-7.53-.7-7.53s1.5 9.52 2.2 11.736c.1.333 1.1 4.984 1.3 5.205.3.554 1 .554 1.5.333 2.2-1.33.7-6.866.2-7.862-.1-.33-.1-4.32-.7-7.75.15-4.882-.227-5.843-.8-7.64s.9 3.544 1.5 4.54c.04 4.22 2.277 7.61 4.355 6.67.8-.663.19-5.314-.555-8.552l-2.4-7.525c.2.33-6.2-11.3-7.3-11.19v-.028z" />
                                    </g>
                                </g>

                                {/* UPPER BODY */}
                                <g id="UB" ref={torsoRef}>
                                    <g id="H" ref={headRef}>
                                        <path d="M188.8.2c-9.1-.3-16.2 7.3-16.2 15.4 0 8.9 7.2 13.8 7.2 13.8s1.3 3.8 0 6.9c-2.1 4.8-6.6 11.1-6.6 11.1l17.6 8.9s-3.8-8.4-2.2-13.8c.8-2.9 4.7-3.5 6.9-3.1 3.8 3.7 7.7 5.5 9.1 4.6 1.9-1.2 4.9-18.4 4.5-26.8-.4-8.5-9.5-16.3-20.3-17z" />
                                        <g fill='none' stroke='#fff' opacity='0.4'>
                                            <path d="M191.1.3s4 4.4 4.9 17.9-.9 21-.9 21" />
                                            <path d="M172.6 16.2s8.2 2.1 19.2 2.4c11.5.3 17.4-1.5 17.4-1.5" />
                                        </g>
                                        <g fill='none' stroke='#fff' opacity='0.7' strokeLinecap='round' strokeWidth='3' >
                                            <path className="st4" d="M181,7.1c-0.8,0.7-1.6,1.4-2.2,2.3" />
                                            <path className="st4" d="M198.6,7.6c-4.1-2.8-9.3-4.3-14-2.6" />
                                        </g>
                                    </g>
                                    <path d="M196.9 83.1c-1.6 8-2.9 14.6-2.9 14.6l-4.9 46.1-21.9-7.7 3.4-11c.7-3.7.9-8.5.4-12.3-4.272-29.697-8.373-41.774-5.7-52.182 2.043-6.93 9.2-17.518 9.2-17.518s3.7 1.4 6.6 2.2c3.5 1.2 8.3 2.9 8.3 2.9s10 21.9 7.5 34.9z" />
                                    <path className="FB" d="M167.5 132.7c-9 18.6 6.4 27.6 10.6 27.6 6 0 11.8-9.2 12.3-24.1l-22.9-5.7v2.2z" />
                                </g>

                                {/* FRONT LIMBS */}
                                <g id="FF" ref={legFrontRef}>
                                    <path d="M169.2 223.345c.1-.21-.4-2.11 1.4-20.466-1.9-15.51-4.6-39.88-1.2-52.86 2.9-12.66 16.7-15.83 19.1-1.588.4 11.183.4 15.51-2 35.66-4.6 23.313-9.7 39.243-9.8 40.09-.1.525-2.2 2.32-4.4 2.002-1.7.104-3.3-2.217-3.1-2.85z" />
                                    <g className="F1" ref={legFrontShinRef}>
                                        <path d="M162.9 307.954s1.2-11.393.3-24.264c-.5-9.284-5.8-30.594-4.7-38.93 6.8-18.777 13.6-23.42 16.4-22.26 1.1.95 1.9 2.322 1.3 4.01-.1.106-3.8 23.632-6 40.3-2.3 18.04.7 41.144.7 41.144h-8z" />
                                        <g className="F2" ref={legFrontFootRef}>
                                            <path d="M192.2 316.183s-25.4-16.985-28.8-14.242c-1.4 6.65-11.8 19.1-2.9 22.9 3.3 1.27 7-1.16 8.3-1.37 6.3-1.16 19.1 1.48 20.2 1.48 2.8 0 5.1-1.687 5.1-4.64 0-1.69-.8-3.27-1.9-4.116z" />
                                            <path className="F3" ref={legFrontToeRef} d="M191.7 315.867s-1.5-.528-2.3-.528c-2.6 0-4.6 2.11-4.6 4.85 0 2.42 1.7 4.53 4.1 4.75 0 0 17 .95 17.3-2.64.3-3.38-7.5-2.85-14.5-6.44z" />
                                        </g>
                                    </g>
                                </g>
                                <g id="HF" ref={armFrontRef}>
                                    <path d="M179.9 111.275c.5-1.88 7.2-21.42 6.3-36.154 4.4-10.76 2-18.49.7-21.42-3.1-7-13.2-5.74-14.6 4.29-.5 3.66-1.5 10.87 2 19.33-2.6 17.24.7 31.87.9 33.96s4.1 1.988 4.7 0" />
                                    <g className="H1" ref={armFrontForeRef}>
                                        <path d="M185 122.56c-.5-3.135-4.4-17.137-8.8-16.3-2.1.417-3.3 12.016-3.3 12.016 1.5 11.39 6.533 25.093 10.333 35.96l4.567-.852c.2 0-2.5-14.628-2.8-30.824z" />
                                        <path className="H2" ref={armFrontHandRef} d="M186.87 152.17c-1 .11-2.9.774-4 .885-.6.11-2 4.318-2.8 7.308-.4 1.44-1 8.083-1 9.633l.4 6.312s1.5 5.315 1.8 5.98c.5 1.55 1.4.664 1.4.664s1.3 3.22 1.4 3.55c.3.67.8.89 1.3.78 2.3-.44-.1-5.09-.9-7.192.2-1.44-.3-4.872-.3-4.872s1 6.2 1.1 6.756c.1 1.77 2.1 4.87 2.4 5.87.1.995 1.6 1.327 2.4.44 1.7-1.88-1.8-6.53-1.8-6.53.4-2.216-.7-7.53-.7-7.53s1.5 9.52 2.2 11.736c.1.333 1.1 4.984 1.3 5.205.3.554 1 .554 1.5.333 2.2-1.33.7-6.866.2-7.862-.1-.33-.1-4.32-.7-7.75.15-4.882-.227-5.843-.8-7.64s.9 3.544 1.5 4.54c.04 4.22 2.277 7.61 4.355 6.67.8-.663.19-5.314-.555-8.552l-2.4-7.525c.2.33-6.2-11.3-7.3-11.19v-.028z" />
                                    </g>
                                </g>

                            </g>
                        </svg>

                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
