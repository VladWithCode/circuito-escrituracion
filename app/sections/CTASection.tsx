"use client";

import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Handshake } from "lucide-react";
import { useState } from "react";
import { ContactFormDialog } from "../components/ContactForm";

export function CTASection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="py-16 md:py-24 xl:py-32 px-6 bg-primary" id="convocatoria">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 xl:p-10 md:p-16 rounded-xl flex flex-col justify-between"
                    >
                        <div>
                            <Badge variant="outline" className="text-xs text-secondary-container border-secondary-container font-black tracking-[0.15em] xl:tracking-[0.3em] uppercase mb-6">¡Agenda cita para tus escrituras!</Badge>
                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-8 tracking-tighter">Instrucciones para escriturar tu terreno de circuito emperadores</h2>
                            <p className="text-white/70 xl:text-xl max-w-lg mb-10 font-light">Es fundamental que todos los propietarios acudan a nuestras oficinas corporativas para finalizar su proceso.</p>
                        </div>

                        <div className="space-y-5 mb-12">
                            {[
                                "Actualización de estado de cuenta",
                                "Liquidación de saldos pendientes",
                                "Recepción de documentos para titulación",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white font-medium">
                                    <CheckCircle2 className="text-secondary-container shrink-0" size={24} />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Button variant="secondary" size="lg" className="w-full md:w-max font-black xl:text-lg xl:py-8 xl:px-12" onClick={() => setOpen(true)}>
                            Click aquí para escriturar
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full border-b-8 border-secondary flex flex-col justify-center text-center p-12">
                            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Handshake className="text-secondary" size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-6 tracking-tight">Gracias por su Confianza</h3>
                            <p className="text-on-surface-variant font-medium leading-relaxed">
                                Apreciamos profundamente su paciencia y lealtad durante estos años de gestión. El éxito de Circuito Emperador es de todos.
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </div>
            <ContactFormDialog open={open} onOpenChange={setOpen} />
        </section>
    );
}
