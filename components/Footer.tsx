import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-black/[0.03] py-16 md:py-24 mt-auto bg-[#ECE9E3] dark:bg-neutral-950">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Identity */}
                <div className="flex flex-col gap-4">
                    <span className="text-2xl font-serif font-bold tracking-tight text-[#555BD9] dark:text-white">
                        EDUARDO SEGOVIA
                    </span>

                    <p className="text-sm text-black/50 dark:text-white/50 font-sans max-w-xs leading-relaxed">
                        Creating spaces that merge material honesty with atmospheric depth.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:items-end gap-8">

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">

                        <Link
                            href="mailto:sebe9606@gmail.com"
                            className="text-sm uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#555BD9] dark:hover:text-white transition-colors duration-300"
                        >
                            Email
                        </Link>

                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#555BD9] dark:hover:text-white transition-colors duration-300"
                        >
                            LinkedIn
                        </Link>

                        <Link
                            href="/cv_eduardo_segovia.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#555BD9] dark:hover:text-white transition-colors duration-300"
                        >
                            CV
                        </Link>

                    </div>

                    <p className="text-xs text-black/40 dark:text-white/40 font-sans mt-8">
                        © {currentYear} Eduardo Segovia.
                    </p>

                </div>

            </div>
        </footer>
    );
}