"use client";

import { motion } from "motion/react";

export function QuoteSection() {
    return (
        <section className="py-32 text-center px-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h3 className="text-primary font-black text-3xl md:text-4xl mb-6 italic tracking-tighter">
                    &quot;El patrimonio de hoy es el legado de mañana.&quot;
                </h3>
                <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
            </motion.div>
        </section>
    );
}
