import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";

interface ProjectDetailsProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-[#111] dark:bg-black min-h-screen relative">
            <BackToTop />

            {/* Hero */}
            <section className="sticky top-0 h-[80vh] w-full flex flex-col justify-center z-0 overflow-hidden">

                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute inset-0 bg-black/10" />

                {/* Content LEFT ALIGNED */}
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start justify-center text-left h-full px-6 md:px-12">

                    <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-4 text-white/80 font-bold opacity-90">
                        {project.category}
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter mb-4 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                        {project.title}
                    </h1>

                    <p className="text-xl md:text-3xl font-light tracking-wide text-white/90">
                        {project.location} — {project.year}
                    </p>

                </div>
            </section>

            {/* Main Content */}
            <div className="relative z-10 bg-[#F2F0EB] dark:bg-neutral-950 rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full -mt-32 min-h-screen transition-colors duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">

                <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

                        {/* Sidebar */}
                        <div className="md:col-span-4 relative order-2 md:order-1">

                            <div className="md:sticky md:top-32 space-y-12 pb-12">

                                {/* VOLVER — no blue box */}
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#555BD9] dark:text-white hover:opacity-60 transition-opacity group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    VOLVER
                                </Link>

                                {/* Project info */}
                                <div className="space-y-8 pl-6 border-l border-[#555BD9] dark:border-[#EDF24B]/50">

                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#474a6b] dark:text-white font-bold mb-2">
                                            Categoría
                                        </span>
                                        <span className="text-xl md:text-2xl font-serif text-[#555BD9] dark:text-white">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#474a6b] dark:text-white font-bold mb-2">
                                            Ubicación
                                        </span>
                                        <span className="text-xl md:text-2xl font-serif text-[#555BD9] dark:text-white">
                                            {project.location}
                                        </span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#474a6b] dark:text-white font-bold mb-2">
                                            Año
                                        </span>
                                        <span className="text-xl md:text-2xl font-serif text-[#555BD9] dark:text-white">
                                            {project.year}
                                        </span>
                                    </div>

                                </div>

                                {/* Explore button */}
                                <div className="pt-4">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-3 px-6 py-4 text-sm uppercase tracking-[0.2em] text-[#555BD9] dark:text-black bg-[#EDF24B] hover:bg-[#e0e740] transition-colors group font-regular"
                                    >
                                        EXPLORAR PROYECTO
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="md:col-span-8 space-y-24 order-1 md:order-2">

                            <div className="max-w-3xl">

                                <p className="text-3xl md:text-5xl font-serif font-medium tracking-tighter leading-[1.1] text-[#555BD9] dark:text-white mb-12">
                                    {project.description}
                                </p>

                                <div className="text-lg md:text-xl font-light tracking-wide leading-relaxed text-[#474a6b] dark:text-white/70 space-y-8">

                                    <p>
                                        Conceptualmente, el proyecto navega la tensión entre la permanencia y lo efímero.
                                        La elección de materiales articula un diálogo entre masa y ligereza.
                                    </p>

                                    <p>
                                        La secuencia espacial está diseñada como una narrativa progresiva,
                                        revelando relaciones entre interior, exterior y luz.
                                    </p>

                                </div>

                            </div>

                            {/* Gallery */}
                            <div className="space-y-12">

                                {project.images[0] && (
                                    <div className="aspect-[16/9] w-full relative overflow-hidden group">
                                        <Image
                                            src={project.images[0]}
                                            alt=""
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                                    {project.images[1] && (
                                        <div className="aspect-[3/4] relative overflow-hidden group">
                                            <Image
                                                src={project.images[1]}
                                                alt=""
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    )}

                                    {project.images[2] && (
                                        <div className="aspect-[3/4] relative overflow-hidden group">
                                            <Image
                                                src={project.images[2]}
                                                alt=""
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    )}

                                </div>

                            </div>

                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#555BD9] dark:text-white hover:opacity-60 transition-opacity group"
                            >
                                VER ARCHIVO
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}