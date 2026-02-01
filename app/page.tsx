"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useRef } from "react";
// import { ArchitecturalGesture } from "@/components/ArchitecturalGesture"; // Removed per request
// import { AbstractVolumes } from "@/components/AbstractVolumes"; // Removed
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent relative">
      <BackToTop />

      {/* Immersive Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 container mx-auto relative overflow-hidden pt-24 md:pt-0">

        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-12 md:gap-24">
          {/* Left: Branding & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 z-10 relative flex flex-col justify-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight leading-[0.9] text-neutral-900 mb-8">
              EDUARDO <br />
              <span className="text-atmospheric">SEGOVIA</span>
            </h1>

            <div className="flex flex-col gap-8 max-w-md ml-1">
              <p className="text-lg md:text-xl text-neutral-500 font-sans leading-relaxed tracking-wide font-light">
                El muro no se dio cuenta de su existencia hasta que lo iluminó el sol.
              </p>

              <div className="flex gap-8 items-center mt-4">
                <Link
                  href="/projects"
                  className="group flex items-center gap-4 text-sm uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  Proyectos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="text-sm uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  SOBRE MÍ
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-[45%] h-[60vh] md:h-[75vh] relative z-10"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/home.png"
                alt="Eduardo Segovia Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>



      {/* Selected Works - Asymmetrical Layout */}
      <section className="px-6 md:px-12 pb-32 pt-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">

          {/* Project 0 - Large Highlight */}
          <div className="md:col-span-8 md:col-start-1">
            <Link href={`/projects/${projects[0].id}`} className="group block cursor-none md:cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 shadow-sm">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={projects[0].coverImage}
                    alt={projects[0].title}
                    fill
                    className="object-cover transition-opacity duration-700 hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="z-10 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif text-3xl italic">Ver Proyecto</span>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-between items-baseline border-b border-neutral-200/50 pb-4">
                <h3 className="text-3xl font-serif font-medium">{projects[0].title}</h3>
                <span className="text-xs uppercase tracking-widest text-neutral-500">{projects[0].year}</span>
              </div>
            </Link>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-4" />

          {/* Project 1 - Offset Right */}
          <div className="hidden md:block md:col-span-5" />
          <div className="md:col-span-7 md:col-start-6">
            <Link href={`/projects/${projects[1].id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-6 shadow-sm">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={projects[1].coverImage}
                    alt={projects[1].title}
                    fill
                    className="object-cover transition-opacity duration-700 hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="z-10 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif text-3xl italic">Ver Proyecto</span>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-between items-baseline border-b border-neutral-200/50 pb-4">
                <h3 className="text-3xl font-serif font-medium">{projects[1].title}</h3>
                <span className="text-xs uppercase tracking-widest text-neutral-500">{projects[1].year}</span>
              </div>
            </Link>
          </div>

          {/* Link to all projects */}
          <div className="md:col-span-12 flex justify-center mt-20">
            <Link
              href="/projects"
              className="inline-block border border-neutral-900 px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-neutral-900 hover:text-white transition-colors duration-300 bg-background/50 backdrop-blur-sm"
            >
              Todos Los Proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
