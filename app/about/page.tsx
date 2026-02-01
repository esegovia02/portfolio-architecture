"use client";

import { BackToTop } from "@/components/BackToTop";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 container mx-auto">
            <BackToTop />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-16">

                {/* Title Section */}
                <div className="md:col-span-12 mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-atmospheric"
                    >
                        SOBRE MÍ
                    </motion.h1>
                </div>

                {/* Image - Offset Layout */}
                <div className="md:col-span-5 md:col-start-2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="aspect-[3/4] w-full relative h-full grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <Image
                            src="/images/me.png"
                            alt="Eduardo Segovia Portrait"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs uppercase tracking-widest hidden md:flex animate-spin-slow">
                        Est. 2024
                    </div>
                </div>

                {/* Text Content */}
                <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-serif leading-relaxed text-neutral-900 bg-background/50 backdrop-blur-sm p-6 -mx-6 md:bg-transparent md:p-0"
                    >
                        <p>
                            La arquitectura no es solo sobre la forma, sino sobre el silencio entre las formas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-sm md:text-base text-neutral-600 font-sans leading-loose bg-white/30 backdrop-blur-sm p-6 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0"
                    >
                        <p className="mb-6">
                            Eduardo Segovia es una práctica arquitectónica basada en [Ciudad].
                            Nuestro trabajo explora la intersección de la honestidad material, la luz atmosférica y la resonancia contextual.
                        </p>
                        <p>
                            Creemos en una arquitectura lenta—una que se despliega con el tiempo y se revela a través de las estaciones cambiantes.
                            Cada proyecto es una respuesta específica al sitio, el clima y la memoria.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8"
                    >
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-4">Valores</span>
                            <ul className="text-sm space-y-2 text-neutral-800">
                                <li>Fenomenología</li>
                                <li>Sostenibilidad</li>
                                <li>Artesanía</li>
                            </ul>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-4">Premios</span>
                            <ul className="text-sm space-y-2 text-neutral-800">
                                <li>Arquitecto Joven del Año, 2024</li>
                                <li>Excelencia en Diseño, 2023</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
