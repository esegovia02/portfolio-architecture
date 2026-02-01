
export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    location: string;
    description: string;
    coverImage: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: "museum-of-light",
        title: "Museo de la Luz",
        category: "Cultural",
        location: "Ciudad de México",
        year: "2024",
        description:
            "Una exploración de la luz natural como material de construcción principal. El museo actúa como un recipiente que captura y moldea la luz del día, creando una experiencia atmosférica en constante cambio que conecta a los visitantes con los ritmos circadianos.",
        coverImage: "/images/museum-cover.png",
        images: ["/images/museum-1.png", "/images/museum-2.png", "/images/museum-3.png"],
    },
    {
        id: "vertical-garden",
        title: "Jardín Vertical",
        category: "Residencial",
        location: "Medellín, Colombia",
        year: "2023",
        description:
            "Una torre residencial que reintegra la naturaleza en el denso tejido urbano. Las fachadas vivas no solo purifican el aire, sino que también proporcionan privacidad y microclimas para cada unidad, difuminando el límite entre el espacio interior y el exterior.",
        coverImage: "/images/garden-cover.png",
        images: ["/images/garden-1.png", "/images/garden-2.png", "/images/garden-3.png"],
    },
    {
        id: "desert-pavilion",
        title: "Pabellón del Desierto",
        category: "Instalación",
        location: "Sonora, México",
        year: "2023",
        description:
            "Una estructura efímera diseñada para soportar y celebrar el duro clima del desierto. Utilizando tierra apisonada local y madera sostenible, el pabellón ofrece un santuario de sombra y silencio en medio del vasto paisaje.",
        coverImage: "/images/desert-cover.png",
        images: ["/images/desert-1.png", "/images/desert-2.png", "/images/proj3-3.jpg"],
    },
    {
        id: "nordic-library",
        title: "Biblioteca Nórdica",
        category: "Público",
        location: "Oslo, Noruega",
        year: "2022",
        description:
            "Un centro cívico que prioriza la calidez y la comunidad durante los largos inviernos. El uso extensivo de madera y luz cálida crea un ambiente acogedor, mientras que los grandes ventanales enmarcan vistas del fiordo circundante.",
        coverImage: "/images/nordic-cover.png",
        images: ["/images/proj4-1.jpg", "/images/proj4-2.jpg", "/images/proj4-3.jpg"],
    },
];
