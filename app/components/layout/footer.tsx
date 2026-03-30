import Image from "next/image";
import logo from "@/app/assets/logoColor.webp";
import { Button } from "../ui/button";

export function Footer() {
    return (
        <footer className="bg-surface-container pt-16 pb-3 px-6 border-t border-outline-variant/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 items-end">
                    <div>
                        <div className="text-2xl font-black text-primary mb-6 tracking-tighter">
                            <Image className="size-32" src={logo} alt="Logo" width={1024} height={1024} />
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row md:justify-end gap-x-8 gap-y-4">
                        {footerNavigationLinks.map(data => (
                            <a key={data.key} href={data.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-secondary transition-colors">
                                {data.label}
                            </a>
                        ))}
                    </div>
                </div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] md:text-center text-on-surface-variant/40 leading-relaxed mt-16">
                    © 2026 SIBRA. Todos los derechos reservados. Precisión legal garantizada.
                </p>
            </div>
        </footer>
    );
}

const footerNavigationLinks = [
    { label: "Inicio", href: "#", key: 1 },
    { label: "Avance", href: "#avance", key: 2 },
    { label: "Regularización", href: "#regularizacion", key: 3 },
    { label: "Convocatoria", href: "#convocatoria", key: 4 },
];
