"use client";

import { BackToTop } from "@/components/BackToTop";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Geometric background element */}
            <div className="absolute -z-10 top-[20%] right-[-5%] w-[400px] h-[400px] pointer-events-none opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="180" fill="none" stroke="#EDF24B" strokeWidth="8" opacity="1" />
                </svg>
            </div>

            <BackToTop />
            <div className="flex flex-col gap-y-32 md:gap-y-48 pt-12 md:pt-24 pb-32">

                {/* 1. Hero Section */}
                <section className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-16">
                    <div className="md:col-span-12">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <span className="block text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-[#555BD9] mb-4 opacity-80">
                                ABOUT
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-[0.85] mb-8 text-[#555BD9] max-w-5xl">
                                Eduardo Segovia <br />
                                <span className="opacity-70">Arquitecto & Diseñador</span>
                            </h1>

                            <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl leading-relaxed text-[#474a6b] opacity-90">
                                Una exploración constante sobre la honestidad estructural, los vacíos arquitectónicos y la luz como materia prima.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Biography / Background */}
                <section className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-3"
                    >
                        <h2 className="text-2xl font-serif font-medium text-[#555BD9] tracking-tight">Biografía</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-5 flex flex-col space-y-6 text-lg md:text-xl font-light tracking-wide leading-relaxed text-[#474a6b]"
                    >
                        <p>
                            Me formé en la Universidad Juárez del Estado de Durango, en la Facultad de Ingeniería, Ciencias y Arquitectura, donde desarrollé una base sólida tanto técnica como proyectual. Mi formación integra el pensamiento constructivo con una sensibilidad hacia la experiencia espacial, entendiendo la arquitectura no solo como objeto, sino como atmósfera, secuencia y relación con la luz y el entorno.
                        </p>
                        <p>
                            Mi práctica profesional se desarrolla desde una perspectiva contemporánea, donde cada proyecto es una respuesta específica al contexto, el programa y la materialidad. Busco generar espacios que sean al mismo tiempo honestos en su estructura y poéticos en su atmósfera, creando ambientes que dialoguen con el paisaje y enriquezcan la vida de quienes los habitan.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-4 relative w-full md:w-auto aspect-[3/4] md:max-w-[400px] mx-auto md:mx-0 transition-all duration-700 mt-8 md:mt-0 shadow-2xl shadow-[#555BD9]/10 rounded-xl"
                    >
                        <Image
                            src="/images/me.png"
                            alt="Eduardo Segovia Portrait"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </section>

                {/* 3. Skills / Expertise (Full-width Blue) */}
                <section className="w-full bg-[#555BD9] py-20">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-16">
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-4"
                        >
                            <h2 className="text-2xl font-serif font-medium text-white tracking-tight">Áreas de Práctica</h2>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16"
                        >
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-xl font-serif text-[#EDF24B]">Diseño Residencial</h3>
                                <p className="text-sm md:text-base font-light font-sans text-white/80 leading-relaxed">
                                    Viviendas unifamiliares que median íntimamente con su entorno natural, priorizando el silencio y la materialidad.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-xl font-serif text-[#EDF24B]">Intervenciones Urbanas</h3>
                                <p className="text-sm md:text-base font-light font-sans text-white/80 leading-relaxed">
                                    Estrategias de recuperación pública que buscan reactivar tejidos sociales a través de acupuntura cívica y paisajismo.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-xl font-serif text-[#EDF24B]">Diseño de Mobiliario</h3>
                                <p className="text-sm md:text-base font-light font-sans text-white/80 leading-relaxed">
                                    Piezas creadas a medida donde la artesanía tradicional converge con una pureza geométrica y funcional.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-xl font-serif text-[#EDF24B]">Arquitectura Sostenible</h3>
                                <p className="text-sm md:text-base font-light font-sans text-white/80 leading-relaxed">
                                    Diseño pasivo y reducción de huella de carbono como ejes no-negociables de cada propuesta constructiva.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 4. Select Works / Achievements */}
                <section className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-16 border-t border-[#EDF24B] pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-4"
                    >
                        <h2 className="text-2xl font-serif font-medium text-[#555BD9] tracking-tight">Reconocimientos & Selección</h2>
                    </motion.div>
                    <motion.ul
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-8 flex flex-col"
                    >
                        <li className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#555BD9]/10">
                            <div className="flex flex-col space-y-1">
                                <span className="text-xl font-serif text-[#555BD9]">Pabellón Efímero del Agua</span>
                                <span className="text-sm font-sans tracking-wide text-[#474a6b] opacity-80">Concurso Bienal — Ciudad de México</span>
                            </div>
                            <span className="text-sm font-sans tracking-[0.2em] text-[#474a6b] opacity-60 mt-3 md:mt-0">2024</span>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#555BD9]/10">
                            <div className="flex flex-col space-y-1">
                                <span className="text-xl font-serif text-[#555BD9]">Arquitecto del Mes</span>
                                <span className="text-sm font-sans tracking-wide text-[#474a6b] opacity-80">Revista Domus Mención Honorífica</span>
                            </div>
                            <span className="text-sm font-sans tracking-[0.2em] text-[#474a6b] opacity-60 mt-3 md:mt-0">2023</span>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#555BD9]/10">
                            <div className="flex flex-col space-y-1">
                                <span className="text-xl font-serif text-[#555BD9]">Casa Buitre</span>
                                <span className="text-sm font-sans tracking-wide text-[#474a6b] opacity-80">Obra Seleccionada Obra Privada Residencial</span>
                            </div>
                            <span className="text-sm font-sans tracking-[0.2em] text-[#474a6b] opacity-60 mt-3 md:mt-0">2022</span>
                        </li>
                    </motion.ul>
                </section>

                {/* 5. Personal Statement / Quote */}
                <section className="py-20 flex justify-center text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="mt-24 md:mt-32 flex flex-col items-center text-center">

                            <blockquote className="about-quote font-serif text-4xl md:text-6xl italic leading-[1.15] tracking-tight text-[#555BD9] max-w-4xl mx-auto">
                                Architecture begins when you carefully place two{" "}

                                <span className="font-sans font-black uppercase not-italic tracking-[-0.01em]">
                                    bricks
                                </span>{" "}

                                together.
                            </blockquote>

                            <div className="mt-10 flex items-center justify-center gap-4">

                                <div className="h-px w-16 bg-[#555BD9]" />

                                <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#555BD9]">
                                    Ludwig Mies van der Rohe
                                </span>

                            </div>

                        </div>
                    </motion.div>
                </section>

                {/* 6. Large Visual / Placeholder */}
                <section className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-[#e6e2da] overflow-hidden flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5 }}
                        className="text-center"
                    >
                        <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-[#474a6b] opacity-60">
                            [ FULL WIDTH INTERIOR PHOTOGRAPH PLACEHOLDER ]
                        </span>
                        <p className="mt-4 text-sm font-serif font-medium text-[#555BD9]">Casa Estudio – Luz de Tarde</p>
                    </motion.div>
                </section>

            </div>
        </div>
    );
}