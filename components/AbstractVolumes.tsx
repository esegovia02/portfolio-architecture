"use client";

import { motion } from "framer-motion";

export function AbstractVolumes() {
    return (
        <div className="relative w-full h-[50vh] md:h-full flex items-center justify-center pointer-events-none">
            {/* 
        Architectural Planes & Volumes
        Concept: Intersecting planes of glass and subtle wireframes representing 
        structure and space. Low opacity, high elegance.
      */}

            {/* Vertical Plane (Structure) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [-10, 10, -10],
                    rotate: [0, -2, 0]
                }}
                transition={{
                    opacity: { duration: 1.5 },
                    scale: { duration: 1.5 },
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-48 h-72 md:w-72 md:h-[28rem] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[2px] border border-white/20"
                style={{
                    zIndex: 10,
                    right: "20%",
                    top: "10%",
                }}
            />

            {/* Horizontal Pane (Grounding) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [5, -5, 5],
                }}
                transition={{
                    opacity: { duration: 1.5, delay: 0.2 },
                    x: { duration: 1.5, delay: 0.2 },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute w-56 h-40 md:w-80 md:h-56 bg-white/5 backdrop-blur-[1px] border-t border-l border-white/15"
                style={{
                    zIndex: 5,
                    right: "10%",
                    bottom: "20%",
                }}
            />

            {/* Accent Wireframe/Solid (Detail) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.6,
                    y: [15, -15, 15],
                    x: [-5, 5, -5]
                }}
                transition={{
                    opacity: { duration: 2, delay: 0.5 },
                    y: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    x: { duration: 18, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-32 h-32 md:w-48 md:h-48 border border-neutral-900/10 bg-neutral-100/5 mix-blend-multiply"
                style={{
                    zIndex: 15,
                    right: "30%",
                    top: "45%",
                }}
            />
        </div>
    );
}
