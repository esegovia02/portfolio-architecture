"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 container mx-auto flex flex-col justify-between">
            <BackToTop />
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-9">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-12 text-atmospheric"
                    >
                        HABLEMOS DE <br /> ARQUITECTURA
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="mailto:sebe9606@gmail.com" className="text-2xl md:text-4xl border-b-2 border-neutral-900 pb-2 inline-block hover:opacity-60 transition-opacity">
                            sebe9606@gmail.com
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
                {[
                    { title: "LinkedIn", href: "https://linkedin.com" },
                    { title: "Instagram", href: "https://instagram.com/_eduardomagno/" },
                    { title: "Descargar CV", href: "/cv_eduardo_segovia.pdf" }
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                        className="bg-background/20 backdrop-blur-sm p-6 rounded-lg border border-neutral-200/20 hover:bg-background/40 transition-colors"
                    >
                        <Link href={item.href} target="_blank" className="group flex items-center justify-between transition-colors">
                            <span className="text-lg font-medium">{item.title}</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
