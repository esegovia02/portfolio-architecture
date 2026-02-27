"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useRef } from "react";
// import { ArchitecturalGesture } from "@/components/ArchitecturalGesture"; // Removed per request
// import { AbstractVolumes } from "@/components/AbstractVolumes"; // Removed
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";
import { AmbientBackground } from "@/components/AmbientBackground";
import { HeroPortrait } from "@/components/HeroPortrait";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);



  /* Sticky Hero Logic: Hero is sticky at top, Content scrolls over it */
  return (
    <div ref={containerRef} className="bg-neutral-900 relative">
      <BackToTop />

      {/* Hero Section - Reduced Height & Full Width */}
      <section className="sticky top-0 h-[80vh] w-full flex flex-col justify-center px-4 md:px-8 z-0 overflow-hidden">
        {/* Background */}
        *<div className="absolute inset-0 z-0">
          <Image
            src="/images/hero7.jpg"
            alt="Eduardo Segovia"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />
        </div>

        <div className="absolute inset-0 bg-black/10" />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-20 md:pt-0 pb-12 md:pb-0">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-3/5 text-white flex flex-col justify-center px-2 md:pr-12"
          >
            <span className="block text-xs md:text-sm font-sans tracking-[0.2em] uppercase mb-4 opacity-80">
              Eduardo Segovia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-[0.85] mb-6">
              <span className="text-white/60">IMAGINE</span><br />
              <span className="text-white/80">CREATE</span><br />
              <span className="text-white/100">INSPIRE</span>
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-lg opacity-90 leading-relaxed">
              El muro no se dió cuenta de su existencia hasta que lo iluminó el sol.
            </p>
          </motion.div>

          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex w-full md:w-2/5 justify-end items-center h-full pl-8"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </section>

      {/* Rounded Project Container - Full Width Edge-to-Edge */}
      <div className="relative z-10 bg-white dark:bg-neutral-950 rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full -mt-32 min-h-screen transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className={`relative flex flex-col md:flex-row items-stretch py-12 md:py-24 gap-12 md:gap-20 border-b border-neutral-100 dark:border-neutral-800 last:border-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Text Section - Sticky Wrapper */}
                <div className="w-full md:w-5/12 mx-auto relative">
                  <div className="sticky top-32 flex flex-col gap-6 md:gap-8 pr-0 md:pr-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-sans uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                        {project.year} — {project.category}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-serif font-medium text-neutral-900 dark:text-white leading-[1.1]">
                        {project.title}
                      </h2>
                      <span className="text-sm text-neutral-400 dark:text-neutral-500 font-light italic">
                        {project.location}
                      </span>
                    </div>

                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-6">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-3 px-6 py-4 text-sm uppercase tracking-[0.2em] text-[#555BD9] dark:text-black bg-[#EDF24B] hover:bg-[#e0e740] transition-colors group font-regular" >
                        Explorar Proyecto

                        <ArrowUpRight
                          className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </Link>
                    </div>

                  </div>
                </div>

                {/* Image Section - Natural Height Driver */}
                <div className="w-full md:w-7/12">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block w-full h-auto"
                  >
                    <div className="relative w-full h-auto overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900 shadow-sm group">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        width={1200}
                        height={1600}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Link to all projects */}
          <div className="flex justify-center mt-32">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Ver Archivo Completo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
