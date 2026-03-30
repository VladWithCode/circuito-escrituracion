"use client";

import { DraftingCompass, Gavel, History, Verified } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function MilestoneSection() {
    return (
        <section className="py-24 md:py-32 bg-surface-container-low px-6" id="avance">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">Tres Años de Excelencia</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">Un recorrido de compromiso administrativo para asegurar el patrimonio de cada familia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Milestone Cards */}
                    {[
                        { icon: <DraftingCompass size={24} />, title: "Desarrollo Inicial", desc: "Lanzamiento y planeación estructural del Circuito Emperador." },
                        { icon: <Gavel size={24} />, title: "Regularización", desc: "Procesos administrativos exhaustivos ante las autoridades correspondientes." },
                        { icon: <Verified size={24} />, title: "Certificación", desc: "Validación de Desarrollo Urbano y cumplimiento de requisitos municipales." },
                        { icon: <History size={24} />, title: "Escrituración", desc: "Entrega de títulos de propiedad individuales para cada lote.", active: true },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className={`h-full border-b-4 ${step.active ? "border-secondary" : "border-transparent"}`}>
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mb-2">
                                        {step.icon}
                                    </div>
                                    <CardTitle className="font-black text-primary text-xl">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{step.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
