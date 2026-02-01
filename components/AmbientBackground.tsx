"use client";

// Micro atmospheric accents — stronger presence
// Same size, more chromatic weight

export function AmbientBackground() {
    return (
        <div
            className="absolute inset-0 -z-20 pointer-events-none bg-[transparent]"
            aria-hidden="true"
        >
            {/* Micro color accents */}
            <div className="absolute inset-0">
                {/* Blue micro spot */}
                <div className="absolute top-[14%] left-[5%] w-[48px] h-[48px] md:w-[180px] md:h-[180px] rounded-full bg-blue-200/85 blur-[45px]" />

                {/* Rose micro spot */}
                <div className="absolute top-[28%] right-[14%] w-[42px] h-[42px] md:w-[180px] md:h-[180px] rounded-full bg-rose-200/95 blur-[55px]" />

                {/* Lilac micro spot */}
                <div className="absolute bottom-[20%] left-[48%] w-[36px] h-[36px] md:w-[170px] md:h-[170px] rounded-full bg-purple-200/65 blur-[45px]" />
            </div>

            {/* Minimal fog — still subtle */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[18px]" />

            {/* Editorial grain */}
            <div
                className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'1\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                }}
            />
        </div>
    );
}
