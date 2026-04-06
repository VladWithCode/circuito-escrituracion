"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, useInView } from "motion/react";

import question from "@/app/assets/circuito-question.webp";
import Image from "next/image";

export function ComparisonSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.3 });
    const [isFooterInView, setIsFooterInView] = useState(false);
    const showQuestionImg = isInView && !isFooterInView;

    useEffect(() => {
        const footer = document.querySelector("footer");
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterInView(entry.isIntersecting);
            },
            // { rootMargin: "-10% 0px 0px 0px" }
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 px-8 bg-surface-container-low overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: "1rem" }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="absolute w-fit z-10 bottom-0 right-0 hidden xl:block"
            >
                <Image
                    id="question"
                    src={question}
                    width={512}
                    height={743}
                    alt="Imagen de una mujer haciendo un gesto de pregunta"
                    className="w-60"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: showQuestionImg ? 1 : 0,
                    scale: showQuestionImg ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="fixed w-fit z-10 bottom-0 right-0 xl:hidden"
            >
                <Image
                    id="question"
                    src={question}
                    width={512}
                    height={743}
                    alt="Imagen de una mujer haciendo un gesto de pregunta"
                    className="w-40 sm:w-60"
                />
            </motion.div>
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">*¿Titulación sobre escritura?</h2>
                    <p className="text-on-surface-variant text-lg">Información para el público en general</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-primary text-white p-10 pt-16 rounded-xl shadow-xl"
                    >
                        <div className="absolute -top-6 left-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-secondary">
                            <CheckCircle2 className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">
                            Título de Propiedad<br /><span className="text-sm font-normal opacity-70">(INSUS, INMUVI, COESVI)</span>
                        </h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                            Es la regularización del gobierno para reconocer legalmente que eres dueño de un inmueble, dándole validez oficial a una propiedad que antes no tenía los papeles en regla.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-primary text-white p-10 pt-16 rounded-xl shadow-xl"
                    >
                        <div className="absolute -top-6 left-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-secondary">
                            <CheckCircle2 className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">
                            Escritura en Notaría
                        </h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                            Es el documento legal avalado por un Notario Público cuando compras o heredas una casa. El notario da fe pública y certifica formalmente la transacción entre particulares.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-l-8 border-secondary p-8 rounded-r-xl shadow-md max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <ShieldCheck className="w-16 h-16 text-secondary flex-shrink-0" />
                        <div className="space-y-4">
                            <p className="text-on-surface leading-relaxed italic text-lg">
                                Ambos documentos te otorgan exactamente la misma certeza jurídica. Ante la ley, pesan lo mismo y te acreditan como el dueño legítimo e indiscutible de la propiedad.
                            </p>
                            <p className="text-on-surface-variant text-sm font-medium">
                                La diferencia es solo el "cómo" la obtuviste: la escritura del notario es el camino tradicional cuando compras una casa, y el título de gobierno es una ayuda especial para regularizarla.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
