import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/lib/utils";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: "Atención Colono de Circuito Emperador",
    description: "Después de casi tres años de trabajo constante, nos complace informarles que el proyecto ha concluido satisfactoriamente su proceso administrativo y de regularización, lo que permite iniciar formalmente la etapa de escrituración individual de cada lote.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="es_MX"
            className={cn("h-full antialiased font-sans", inter.variable)}
        >
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
