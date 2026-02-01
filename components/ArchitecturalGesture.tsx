"use client";

import { motion } from "framer-motion";

export function ArchitecturalGesture() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-soft-light">
            {/* 
        The Gesture: A sharp, angular plane of "light" that cuts through the atmosphere.
        It moves slowly, simulating the passage of sunlight across a surface.
      */}
            <motion.div
                initial={{ x: "-100%", opacity: 0, rotate: 15 }}
                animate={{
                    x: ["-50%", "150%"],
                    opacity: [0, 0.4, 0.8, 0.4, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                }}
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[80px]"
                style={{
                    transformOrigin: "center center",
                }}
            />

            {/* 
        The Shadow: A corresponding shadow plane that creates depth and contrast (The "Materia").
      */}
            <motion.div
                initial={{ x: "100%", opacity: 0, rotate: 15 }}
                animate={{
                    x: ["50%", "-150%"],
                    opacity: [0, 0.1, 0.3, 0.1, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0
                }}
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-neutral-900/10 to-transparent blur-[100px]"
                style={{
                    transformOrigin: "center center",
                }}
            />
        </div>
    );
}
