"use client";

import { motion, useScroll, useAnimation } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
    const { scrollY } = useScroll();
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 100) {
                setIsVisible(true);
                controls.start({ opacity: 1, y: 0 });
            } else {
                setIsVisible(false);
                controls.start({ opacity: 0, y: 20 });
            }
        });
    }, [scrollY, controls]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-background/50 backdrop-blur-md border border-neutral-200/50 shadow-sm hover:bg-background/80 transition-colors ${!isVisible ? 'pointer-events-none' : ''}`}
        >
            <ArrowUp className="w-5 h-5 text-neutral-600" />
        </motion.button>
    );
}
