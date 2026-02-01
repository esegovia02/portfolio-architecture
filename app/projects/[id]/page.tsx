import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
        <div className="bg-background min-h-screen">
            <BackToTop />
            {/* Immersive Hero Image */}
            <div className="relative w-full h-screen">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-12 left-6 md:left-12 text-white">
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-4">{project.title}</h1>
                    <p className="text-lg md:text-xl font-light tracking-wide opacity-90">{project.location} — {project.year}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                    {/* Sticky Sidebar Info */}
                    <div className="md:col-span-4 relative order-2 md:order-1">
                        <div className="md:sticky md:top-32 space-y-12 bg-background/50 backdrop-blur-md p-8 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0">
                            <Link href="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Todos
                            </Link>

                            <div className="space-y-8">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Categoría</span>
                                    <span className="text-xl font-serif">{project.category}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Ubicación</span>
                                    <span className="text-xl font-serif">{project.location}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Año</span>
                                    <span className="text-xl font-serif">{project.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content & Gallery */}
                    <div className="md:col-span-8 space-y-24 order-1 md:order-2">
                        <div className="prose prose-lg prose-neutral max-w-none bg-background/30 backdrop-blur-sm p-6 md:p-0 rounded-xl md:bg-transparent">
                            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-neutral-900 mb-12">
                                {project.description}
                            </p>
                            <div className="text-neutral-600 font-light leading-loose space-y-6">
                                <p>
                                    Conceptualmente, el proyecto navega la tensión entre la permanencia y lo efímero.
                                    La elección de materiales—hormigón crudo frente a madera suave—articula este diálogo,
                                    creando una experiencia sensorial que evoluciona con el paso de la luz a lo largo del día.
                                </p>
                                <p>
                                    La secuencia espacial está coreografiada para revelar vistas gradualmente, negando la gratificación instantánea
                                    a favor de un viaje de descubrimiento. Los umbrales se engrosan, creando momentos de pausa
                                    que enmarcan la transición entre los dominios público y privado.
                                </p>
                            </div>
                        </div>

                        {/* Gallery Images */}
                        <div className="space-y-12">
                            {project.images[0] && (
                                <div className="aspect-[16/9] w-full relative bg-neutral-100">
                                    <Image
                                        src={project.images[0]}
                                        alt={`${project.title} detail 1`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.images[1] && (
                                    <div className="aspect-[3/4] relative bg-neutral-100">
                                        <Image
                                            src={project.images[1]}
                                            alt={`${project.title} detail 2`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                {project.images[2] && (
                                    <div className="aspect-[3/4] relative bg-neutral-100">
                                        <Image
                                            src={project.images[2]}
                                            alt={`${project.title} detail 3`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Project Teaser (Mockup) */}
            <div className="border-t border-neutral-200 py-32 bg-neutral-50 flex flex-col items-center justify-center text-center">
                <span className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Siguiente Proyecto</span>
                <Link href="/projects" className="text-4xl md:text-6xl font-serif font-bold hover:opacity-50 transition-opacity">
                    Título del Proyecto
                </Link>
            </div>
        </div>
    );
}
