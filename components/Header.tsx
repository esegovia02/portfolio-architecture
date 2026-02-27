"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setShowBackToTop(latest > 300);
    });



    if (!mounted) return null;

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {/* Fixed Name - Top Left */}
            <motion.div
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 left-6 md:left-12 z-50 pointer-events-auto flex items-center"
            >
                <Link
                    href="/"
                    className="font-serif font-bold tracking-tight text-[#474a6b] dark:text-white hover:opacity-80 transition-opacity"
                >
                    <span className="hidden md:inline text-lg md:text-xl">INICIO</span>
                    <span className="inline md:hidden text-lg">INICIO</span>
                </Link>
            </motion.div>

            {/* Floating Nav Pill */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                initial="hidden"
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 right-6 md:top-6 md:left-0 md:right-0 z-40 flex justify-end md:justify-center px-6 pointer-events-none"
            >
                <motion.div
                    layout
                    className={cn(
                        "pointer-events-auto relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden",
                        mobileMenuOpen ? "rounded-3xl" : "rounded-full"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center justify-center px-6 py-2 gap-6 h-12 transition-all">
                        {[
                            { name: "Proyectos", href: "/projects" },
                            { name: "Sobre mí", href: "/about" },
                            { name: "Contacto", href: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-medium tracking-widest uppercase hover:text-black dark:hover:text-white transition-colors text-neutral-600 dark:text-neutral-400",
                                    pathname === item.href ? "font-bold text-black dark:text-white" : ""
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700 mx-2" />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Nav Toggle & Content */}
                    <div className="md:hidden flex flex-col items-end">
                        <div className="flex items-center justify-between px-6 py-2 h-12 gap-4 w-full">
                            <span className="text-xs font-medium tracking-widest uppercase text-neutral-800 dark:text-neutral-200">
                                {mobileMenuOpen ? "Cerrar" : "Menu"}
                            </span>
                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="flex flex-col gap-1 w-4 ml-2"
                                >
                                    <span
                                        className={cn(
                                            "w-full h-px bg-neutral-800 dark:bg-neutral-200 transition-transform",
                                            mobileMenuOpen && "rotate-45 translate-y-1.5"
                                        )}
                                    ></span>
                                    <span
                                        className={cn(
                                            "w-full h-px bg-neutral-800 dark:bg-neutral-200 transition-opacity",
                                            mobileMenuOpen && "opacity-0"
                                        )}
                                    ></span>
                                    <span
                                        className={cn(
                                            "w-full h-px bg-neutral-800 dark:bg-neutral-200 transition-transform",
                                            mobileMenuOpen && "-rotate-45 -translate-y-1.5"
                                        )}
                                    ></span>
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {mobileMenuOpen && (
                                <motion.nav
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="flex flex-col gap-4 px-8 pb-6 items-end"
                                >
                                    {[
                                        { name: "Proyectos", href: "/projects" },
                                        { name: "Sobre mí", href: "/about" },
                                        { name: "Contacto", href: "/contact" },
                                    ].map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "text-sm font-medium tracking-widest uppercase hover:text-black dark:hover:text-white transition-colors text-neutral-600 dark:text-neutral-400 py-2",
                                                pathname === item.href ? "font-bold text-black dark:text-white" : ""
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.header>
        </>
    );
}
