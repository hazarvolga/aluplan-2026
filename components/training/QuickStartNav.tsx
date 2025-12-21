"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavItem {
    id: string;
    label: string;
}

interface QuickStartNavProps {
    items: NavItem[];
}

export function QuickStartNav({ items }: QuickStartNavProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            items.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.unobserve(element);
            });
        };
    }, [items]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for sticky header
                behavior: "smooth",
            });
            setActiveId(id);
        }
    };

    return (
        <nav className="sticky top-32 w-full max-w-[280px] hidden lg:block">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-3">
                    İçindekiler
                </h3>
                <ul className="space-y-1">
                    {items.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id} `}
                                onClick={(e) => handleClick(e, item.id)}
                                className={cn(
                                    "block px-3 py-2 rounded-lg text-sm transition-all duration-200 border-l-2",
                                    activeId === item.id
                                        ? "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6] font-medium"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border-transparent"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
