"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 container mx-auto relative overflow-hidden">

            {/* Soft geometric background elements */}
            <div className="absolute -z-10 top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40 hidden md:block">
                <svg width="100%" height="100%" viewBox="0 0 500 500">
                    <circle cx="500" cy="0" r="400" fill="none" stroke="#EDF24B" strokeWidth="2" />
                </svg>
            </div>

            <div className="absolute -z-10 top-40 -left-12 w-[200px] h-[300px] pointer-events-none opacity-30">
                <div className="w-full h-full border-r-[8px] border-b-[8px] border-[#EDF24B] rounded-br-[100px]" />
            </div>

            <BackToTop />

            {/* Header */}
            <div className="mb-32 relative z-10 pt-12 md:pt-24 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="block text-xs md:text-sm uppercase tracking-[0.2em] font-sans text-[#555BD9] mb-4 opacity-80">
                        ARCHIVO DE
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-[0.85] mb-6 text-[#555BD9]">
                        PROYECTOS
                    </h1>

                    <p className="text-lg md:text-xl font-light tracking-wide max-w-lg leading-relaxed text-[#474a6b] opacity-90">
                        Una selección de proyectos que exploran los límites entre la luz, la materia y la interacción humana.
                    </p>
                </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className={`flex flex-col relative ${index % 2 === 1 ? "md:translate-y-24" : ""}`}
                        style={{ willChange: "opacity, transform" }}
                    >

                        <Link
                            href={`/projects/${project.id}`}
                            className="group block mb-6 transition-all duration-500"
                        >

                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-sm rounded-sm bg-neutral-100">

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full relative"
                                >

                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                    />

                                    {/* Hover text */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif text-2xl italic tracking-wide drop-shadow-md">
                                            Explorar
                                        </span>
                                    </div>

                                </motion.div>

                            </div>


                            {/* Text */}
                            <div className="flex flex-col gap-3 pt-4 group-hover:pl-4 transition-all duration-300">

                                {/* Top meta */}
                                <div className="flex justify-between items-center">

                                    <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#474a6b] opacity-80">
                                        0{index + 1}
                                    </span>

                                    <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#474a6b] opacity-80">
                                        {project.year}
                                    </span>

                                </div>


                                {/* Title */}
                                <h2 className="text-2xl md:text-4xl font-serif font-medium tracking-tighter leading-[0.85] text-[#555BD9] dark:text-white group-hover:text-[#4046b0] transition-colors">
                                    {project.title}
                                </h2>


                                {/* Location — LIME RECTANGLE */}
                                <div className="pt-1">

                                    <span
                                        className="
                                        inline-block
                                        text-xs
                                        uppercase
                                        tracking-[0.15em]
                                        px-3
                                        py-1
                                        font-medium
                                        "
                                        style={{
                                            backgroundColor: "#EDF24B",
                                            color: "#555BD9"
                                        }}
                                    >
                                        {project.location}
                                    </span>

                                </div>

                            </div>

                        </Link>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}