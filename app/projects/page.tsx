"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 container mx-auto">
            <BackToTop />
            <div className="mb-32">
                <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-8 text-atmospheric">
                    PROYECTOS
                </h1>
                <p className="text-neutral-500 max-w-xl text-lg md:text-xl font-light leading-relaxed">
                    Una selección de proyectos que exploran los límites entre la luz, la materia y la interacción humana.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className={`flex flex-col ${index % 2 === 1 ? "md:translate-y-24" : ""}`}
                        style={{
                            willChange: 'opacity, transform'
                        }}
                    >
                        <Link href={`/projects/${project.id}`} className="group block mb-6 p-4 -m-4 rounded-xl hover:bg-neutral-100/50 transition-colors duration-500">
                            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100/50 mb-6 shadow-sm rounded-sm">
                                {/* Placeholder for image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-opacity duration-700 hover:opacity-90 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="z-10 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif text-2xl italic">Ver</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex flex-col gap-2 border-t border-neutral-900/10 pt-4 group-hover:border-neutral-900/30 transition-colors">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                                    <span className="text-xs uppercase tracking-widest text-neutral-500">{project.year}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-medium group-hover:ml-4 transition-all duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-neutral-500">{project.location}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
