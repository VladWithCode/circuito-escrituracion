"use client";

import { motion } from "motion/react";
import { Separator } from "../components/ui/separator";

export function DetailSection() {
    return (
        <section className="py-24 md:py-32 px-6 overflow-hidden" id="regularizacion">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative"
                >
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7AtbmppHDiX75dzpg4qtsCpObmr7b3Doz9TC4tQ3Bg0hjvIMQLTzhg3kanwc707ShtiRazXyi72npacaU6nJdmbMrJrQqpo51CSzXI7u9fAFoZP9EFh8FT-sEvNBfeDo8CQvPIdLntQuG66Xt86I_GxWPWe8QwsGX0ROh7Rlu8SJ9kdzVK6gBfyxGOWSelni3G5eKAmW5xZIToUeowxijCWdaOlEqBwoBMmuT7XW4WvtT3-HnXsOL3j2N0_UO9UPACxpzvX2XyoSD"
                        alt="Property documentation"
                        className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full"
                        referrerPolicy="no-referrer"
                        width={600}
                        height={600}
                    />
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight tracking-tighter">Certeza Jurídica y Municipal</h2>
                    <div className="space-y-6 text-on-surface-variant font-medium leading-relaxed text-lg">
                        <p>Tras tres años de labor ininterrumpida, el proceso administrativo y de regularización ha concluido satisfactoriamente. Este hito permite la expedición de escrituras individuales para cada lote, consolidando legalmente su inversión.</p>
                        <p>Las revisiones efectuadas por <span className="font-bold text-primary">Desarrollo Urbano</span> y el estricto cumplimiento de los requerimientos municipales garantizan que cada trámite cuente con el respaldo institucional necesario para su total tranquilidad.</p>

                        <div className="pt-8">
                            <Separator className="mb-8 bg-outline-variant/30" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-primary font-black mb-2">Posesión Física</h4>
                                    <p className="text-sm">Mantuvimos siempre la entrega física, permitiendo a las familias habitar sus hogares desde el primer día.</p>
                                </div>
                                <div>
                                    <h4 className="text-primary font-black mb-2">Comunidad Activa</h4>
                                    <p className="text-sm">Hoy celebramos a quienes ya han construido y dan vida a este exclusivo circuito.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
