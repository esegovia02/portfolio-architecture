"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setShowBackToTop(latest > 300);
    });

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
                    className="font-serif font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
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
                        "pointer-events-auto relative bg-white border border-gray-200 shadow-md overflow-hidden",
                        mobileMenuOpen ? "rounded-3xl" : "rounded-full"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center justify-center px-8 py-3 gap-8 h-12 transition-all hover:bg-gray-100">
                        {[
                            { name: "Proyectos", href: "/projects" },
                            { name: "Sobre mí", href: "/about" },
                            { name: "Contacto", href: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-medium tracking-widest uppercase hover:text-black transition-colors text-gray-800",
                                    pathname === item.href ? "font-bold" : ""
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Nav Toggle & Content */}
                    <div className="md:hidden flex flex-col items-end">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex items-center justify-between px-6 py-3 h-12 gap-4 w-full"
                        >
                            <span className="text-xs font-medium tracking-widest uppercase text-gray-800">
                                {mobileMenuOpen ? "Cerrar" : "Menu"}
                            </span>
                            <div className="flex flex-col gap-1 w-4">
                                <span
                                    className={cn(
                                        "w-full h-px bg-gray-800 transition-transform",
                                        mobileMenuOpen && "rotate-45 translate-y-1.5"
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "w-full h-px bg-gray-800 transition-opacity",
                                        mobileMenuOpen && "opacity-0"
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "w-full h-px bg-gray-800 transition-transform",
                                        mobileMenuOpen && "-rotate-45 -translate-y-1.5"
                                    )}
                                ></span>
                            </div>
                        </button>

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
                                                "text-sm font-medium tracking-widest uppercase hover:text-black transition-colors text-gray-800 py-2",
                                                pathname === item.href ? "font-bold" : ""
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
