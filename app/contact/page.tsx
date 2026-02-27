"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BackToTop } from "@/components/BackToTop";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen overflow-hidden px-6 sm:px-12 py-16 flex flex-col">

            {/* Geometric background accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full 
                            bg-[#EDF24B]/20 dark:bg-transparent dark:border-2 dark:border-[#EDF24B] dark:shadow-[0_0_40px_rgba(237,242,75,0.5)] pointer-events-none" />

            <BackToTop />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center items-center text-center flex-1 mt-24 sm:mt-32"
            >
                <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans text-[#555BD9] dark:text-white opacity-80 mb-4">
                    CONTACTO
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] dark:text-white">
                    HABLEMOS DE
                    <span className="block text-4xl sm:text-6xl md:text-7xl font-bold text-[#555BD9] dark:text-[#555BD9]">
                        ARQUITECTURA
                    </span>
                </h1>
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 text-center"
            >
                <Link
                    href="mailto:sebe9606@gmail.com"
                    className="inline-block text-2xl sm:text-3xl md:text-4xl font-light tracking-wide dark:text-white text-[#555BD9] pb-1 hover:opacity-70 transition-opacity"
                >
                    sebe9606@gmail.com
                </Link>
            </motion.div>

            {/* Redes sociales distribuidas con más espacio y línea animada de izquierda a derecha */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-24 sm:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-7xl mx-auto gap-6 sm:gap-0"
            >
                {[
                    { title: "LinkedIn", href: "https://linkedin.com" },
                    { title: "Instagram", href: "https://instagram.com/_eduardomagno/" },
                    { title: "Descargar CV", href: "/cv_eduardo_segovia.pdf" }
                ].map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        className="relative flex flex-col items-start text-xl sm:text-2xl md:text-3xl font-serif dark:text-white text-[#555BD9] hover:text-[#4046b0] dark:hover:text-[#EDF24B] transition-colors tracking-wide group"
                    >
                        <div className="flex items-center gap-2">
                            {item.title}
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        {/* Línea animada desde la izquierda */}
                        <span className="block h-[2px] w-0 bg-[#EDF24B] dark:bg-[#EDF24B] rounded mt-1 origin-left transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}