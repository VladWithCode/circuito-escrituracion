"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useCallback, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ClientOnlyPortal } from "../ClientOnlyPortal";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

import logo from "@/app/assets/logo.webp";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const obsvRef = useRef<IntersectionObserver>(null);

    const setTopRef = useCallback((node: HTMLDivElement | null) => {
        if (!node) {
            obsvRef.current?.disconnect();
            return;
        };

        obsvRef.current = new IntersectionObserver(ents => {
            const [ent] = ents;
            setIsScrollAtTop(ent.isIntersecting);
        }, { threshold: 0.1 });
        obsvRef.current.observe(node);
    }, []);

    return (
        <>
            <ClientOnlyPortal selector="body">
                <div className="absolute top-32 inset-x-0 h-px" ref={setTopRef}></div>
            </ClientOnlyPortal>
            <nav className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                !isScrollAtTop ? "bg-white/60 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-5",
            )}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tighter text-primary">
                        <Image className="size-12 md:size-20" src={logo} alt="Logo" width={1024} height={1024} />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight">
                        <a href="#inicio" className="text-primary border-b-2 border-primary pb-1">Inicio</a>
                        <a href="#avance" className="text-on-surface-variant hover:text-primary transition-colors">Avance</a>
                        <a href="#regularizacion" className="text-on-surface-variant hover:text-primary transition-colors">Regularización</a>
                        <a href="#convocatoria" className="text-on-surface-variant hover:text-primary transition-colors">Convocatoria</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="default" className="hidden sm:flex items-center font-bold" asChild>
                            <a href="https://www.sibra.mx/" target="_blank" rel="noreferrer"> Sibra Inmobiliaria </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-t border-outline-variant/20 p-6 flex flex-col gap-4 shadow-xl"
                    >
                        <a href="#inicio" className="font-bold text-primary">Inicio</a>
                        <a href="#avance" className="font-medium text-on-surface-variant">Avance</a>
                        <a href="#regularizacion" className="font-medium text-on-surface-variant">Regularización</a>
                        <a href="#convocatoria" className="font-medium text-on-surface-variant">Convocatoria</a>
                        <Button variant="default" className="flex items-center font-bold" asChild>
                            <a href="https://www.sibra.mx/" target="_blank" rel="noreferrer"> Sibra Inmobiliaria </a>
                        </Button>
                    </motion.div>
                )}
            </nav>
        </>
    );
}
