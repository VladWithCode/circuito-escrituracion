"use client";

import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="inicio">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 z-10"
                >
                    <Badge variant="secondary" className="mb-6 uppercase tracking-[0.2em] font-black px-3 py-1">
                        Circuito Emperador
                    </Badge>
                    <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.85] tracking-tighter mb-8">
                        Proyecto <br /> Finalizado
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-on-surface-variant max-w-xl mb-10 leading-snug">
                        Damos inicio formal al proceso de <span className="font-bold text-secondary">Escrituración Individual</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="font-bold flex items-center gap-2 group capitalize" asChild>
                            <Link href="#convocatoria" className="text-primary">
                                Ver convocatoria <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-4/5 w-full">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl rotate-3 scale-105"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb1THPoxpIpq50xlJluf6kWMEqhXsYqp0E0brCZwBzlHYIhYSZujT3VzurcTmlo9mQMohSIPxhtbwHOqtrxKLMpxnJnOL9NrUVbdnABiZv5iD3u5VfhWrw-jvxIkZj2kfQEhQLpDiJDTYEU4roJitISAKD-WJf7sLjHte8cb65KmSEmdGaJSygLg-QHXBMVZcNK2ToDfurEBGXYTXToT91IiJ3tljJGxcWuNlJrXs6AoqDc1atSGkjbU7nKpN8YKG0ZiNyBvhudFIZ"
                            alt="Luxury real estate development"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl z-20"
                            referrerPolicy="no-referrer"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl z-30 max-w-[240px] rounded-lg border-b-4 border-secondary"
                        >
                            <p className="text-secondary font-black text-5xl mb-1">100%</p>
                            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest leading-tight">
                                Certeza Jurídica <br /> Garantizada
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
