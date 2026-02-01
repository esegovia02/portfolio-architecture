import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 py-16 md:py-24 mt-auto bg-neutral-50">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                <div className="flex flex-col gap-4">
                    <span className="text-2xl font-serif font-bold tracking-tight">EDUARDO SEGOVIA</span>
                    <p className="text-sm text-neutral-400 font-sans max-w-xs leading-relaxed">
                        Creating spaces that merge material honesty with atmospheric depth.
                    </p>
                </div>

                <div className="flex flex-col md:items-end gap-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <Link href="mailto:sebe9606@gmail.com" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
                            Email
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="/cv_eduardo_segovia.pdf" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
                            CV
                        </Link>
                    </div>
                    <p className="text-xs text-neutral-300 font-sans mt-8">
                        &copy; {currentYear} Eduardo Segovia.
                    </p>
                </div>
            </div>
        </footer>
    );
}
