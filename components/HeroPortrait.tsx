"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroPortrait() {
    return (
        <div className="relative flex items-center justify-center w-[350px] h-[350px] md:w-[400px] md:h-[400px]">

            {/* Rectángulo lima */}
            <div
                className="absolute -z-20 w-[120px] h-[120px] md:w-[130px] md:h-[130px] bottom-16 -left-6 md:-left-8"
                style={{
                    border: "10px solid #EDF24B",
                    borderRadius: "9999px",
                    opacity: 0.8
                }}
            />

            {/* Contenedor del arco */}
            <div className="absolute -z-10 w-[320px] h-[320px] md:w-[380px] md:h-[380px] -right-12 md:-right-16 top-6 md:top-8 overflow-hidden pointer-events-none">

                <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <circle
                        cx="200"
                        cy="200"
                        r="200"
                        fill="none"
                        stroke="#BFBDF2"
                        strokeWidth="2"
                        opacity="0.5"
                    />
                </svg>

            </div>

            {/* Retrato orgánico */}
            <motion.div
                className="relative w-full h-full overflow-hidden shadow-xl shadow-[#555BD9]/10"
                style={{
                    boxShadow: "inset 0 0 60px rgba(0,0,0,0.25)"
                }}
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%"
                    ]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Image
                    src="/images/me.png"
                    alt="Eduardo Segovia"
                    fill
                    className="object-cover grayscale"
                    priority
                />

                <div className="absolute inset-0 bg-[#555BD9]/5 mix-blend-soft-light" />
            </motion.div>

        </div>
    );
}