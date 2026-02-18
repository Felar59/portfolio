"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import pictureToDMC1 from '../../assets/picturetodmc1.png';
import pictureToDMC2 from '../../assets/picturetodmc2.png';
import pictureToDMC3 from '../../assets/picturetodmc3.png';
import myTop from "../../assets/my_top.png"
import myRadar from "../../assets/my_radar.png"
import myHunter1 from "../../assets/my_hunter1.png"
import myHunter2 from "../../assets/my_hunter2.png"
import myHunter3 from "../../assets/my_hunter3.png"
import Runner from "../../assets/runner.png"
import antiVirus from "../../assets/antivirus.png"
import Julia1 from "../../assets/Julia1.png"
import Julia2 from "../../assets/Julia2.png"
import Julia3 from "../../assets/Julia3.png"

type Project = {
  title: string
  tag: string
  description: string
  longDescription: string
  tags: string[]
  image: any
  images: any[]
  imageLabels?: string[]
  github: string | null
  live: string | null
}

const projects: Project[] = [
  {
    title: "My_Radar",
    tag: "Epitech",
    description: "Simulation 2D en temps réel du trafic aérien avec détection de collisions et gestion optimisée via un quadtree récursif",
    longDescription: "My_Radar est une simulation graphique complète du trafic aérien en temps réel. Le projet implémente un quadtree récursif pour optimiser la détection de collisions entre avions, réduisant la complexité de O(n²) à O(n log n). L'application parse un fichier de configuration pour positionner les avions et les tours de contrôle, affiche leurs trajectoires en temps réel via CSFML. Le tout tourne à 500+fps avec des centaines de milliers d'avions simultanées.",
    tags: ["C", "CSFML"],
    image: myRadar,
    images: [myRadar],
    imageLabels: ["Vue principale de la simulation"],
    github: "https://github.com/Felar59/my_radar",
    live: null,
  },
  {
    title: "My_TOP",
    tag: "Epitech",
    description: "Reproduction de la commande Linux 'top' avec parsing avancé du dossier /proc et interface terminal interactive",
    longDescription: "My_TOP reproduit fidèlement la commande Linux 'top'. Le programme analyse en temps réel le système de fichiers virtuel /proc afin d’extraire les informations sur les processus, l’utilisation du CPU, ainsi que la mémoire RAM et le swap. L’interface terminal, développée avec ncurses, permet le tri dynamique par colonne, le filtrage par nom de processus et l’envoi de signaux (SIGKILL) via les raccourcis Shift+E et E. L’optimisation est au cœur du projet : seules les données des processus affichés sont analysées, à l’exception du PID et du %CPU, qui dépendent de l’ordre global des processus.",
    tags: ["C", "ncurses"],
    image: myTop,
    images: [myTop],
    imageLabels: ["Interface terminal interactive"],
    github: "https://github.com/Felar59/my_top",
    live: null,
  },
  {
    title: "Picture To DMC",
    tag: "Private",
    description: "Application web convertissant des images en patrons de broderie utilisant la palette DMC, avec interface intuitive et génération automatique",
    longDescription: "Picture To DMC est une application web full-stack qui convertit n’importe quelle image en patron de broderie au point de croix. Le backend Python associe chaque pixel à la teinte la plus proche parmi plus de 500 couleurs officielles de fils DMC, avec un niveau de pixelisation ajustable par l’utilisateur. Le frontend React affiche le patron pixel par pixel, intègre un système de modification des couleurs assisté par IA ou manuel, génère automatiquement la légende des fils nécessaires et permet l’export du résultat avec quadrillage et légende complète.",
    tags: ["React", "Typescript", "Tailwind", "Python"],
    image: pictureToDMC1,
    images: [pictureToDMC1, pictureToDMC2, pictureToDMC3],
    imageLabels: ["Interface de conversion", "Modification de couleur/ Proposition IA", "Choix via son propre set de couleur"],
    github: "https://github.com/Felar59/PictureToDMC/tree/main",
    live: "https://picturetodmc.onrender.com/",
  },
  {
    title: "My_Hunter",
    tag: "Epitech",
    description: "Jeu 2D inspiré de Duck Hunt avec gestion de cibles + gravité et animations interactives",
    longDescription: "My_Hunter est un jeu de tir 2D inspiré de Duck Hunt, développé entièrement en C avec la bibliothèque CSFML. Les cibles se déplacent selon des trajectoires avec application de la gravité et de saut à interval irégulier. Le jeu implémente un système de score / meilleur score, un niveaux de difficulté progressive, une animation de hit, et une gestion précise des collisions entre le curseur et les hitboxes des cibles.",
    tags: ["C", "CSFML"],
    image: myHunter1,
    images: [myHunter1, myHunter2, myHunter3],
    imageLabels: ["Gameplay principal / HUD", "Menu GUI", "End Game GUI"],
    github: "https://github.com/Felar59/my_hunter",
    live: null,
  },
  {
    title: "Runner",
    tag: "Private",
    description: "Runner 2D avec génération procédurale de terrains basée sur l'algorithme Perlin Noise",
    longDescription: "Runner est un jeu de plateforme 2D endless runner développé en C++ avec SFML. Le terrain est généré procéduralement à la volée via l'algorithme Perlin Noise, garantissant une expérience unique à chaque partie tout en maintenant une cohérence visuelle. Le jeu implémente un système de difficulté (vitesse croissante, terrain plus variable).",
    tags: ["C++", "SFML"],
    image: Runner,
    images: [Runner],
    imageLabels: ["Gameplay principal"],
    github: "https://github.com/Felar59/Runner",
    live: null,
  },
  {
    title: "Anti-Virus Game",
    tag: "Ozanam",
    description: "Adaptation numérique du jeu de société 'Anti-Virus', avec règles originales et interface interactive",
    longDescription: "Anti-Virus Game est une adaptation numérique fidèle du jeu de société appelé \"Anti-Virus\". Développé en Python avec PyGame, il reproduit le plateau de jeu hexagonal, les règles de déplacement des pièces (virus et anticorps), et la logique de victoire. Le projet inclut un plusieurs niveaux.",
    tags: ["Python", "PyGame"],
    image: antiVirus,
    images: [antiVirus],
    imageLabels: ["Plateau de jeu principal"],
    github: "https://github.com/Felar59/Virus",
    live: null,
  },
  {
    title: "Julia Fractal",
    tag: "Private",
    description: "Simulation interactive de fractales de Julia en temps réel via shader GPU, avec interface pour ajuster les paramètres dynamiquement.",
    longDescription: "Ce projet implémente une simulation de fractales de Julia calculée en temps réel à l’aide d’un shader GPU pour optimiser les performances et le rendu visuel. Une interface utilisateur permet de modifier dynamiquement les paramètres complexes, les couleurs (RGB), le zoom et la position afin d’explorer différentes formes fractales. Insipré d'une vidéo youtube de DIMENSION CODE.",
    tags: ["C++", "SFML", "Shader"],
    image: Julia1,
    images: [Julia1, Julia2, Julia3],
    imageLabels: ["Julia Fractal / UI", "Julia Fractal / UI", "Julia Fractal / UI"],
    github: "https://github.com/Felar59/Virus",
    live: null,
  },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setCurrentImage(i => (i + 1) % project.images.length)
      if (e.key === "ArrowLeft") setCurrentImage(i => (i - 1 + project.images.length) % project.images.length)
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose, project.images.length])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(hsl(var(--secondary)), hsl(var(--secondary))) padding-box, linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primthird)), hsl(var(--thirdary))) border-box",
          border: "1px solid transparent",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors backdrop-blur-sm"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image carousel */}
        <div className="relative aspect-video bg-secondary rounded-t-2xl overflow-hidden">
          <Image
            src={project.images[currentImage]}
            alt={project.imageLabels?.[currentImage] ?? project.title}
            fill
            className="object-cover transition-opacity duration-300"
          />

          {/* Image label */}
          {project.imageLabels?.[currentImage] && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              {project.imageLabels[currentImage]}
            </div>
          )}

          {/* Carousel controls — only if multiple images */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage(i => (i - 1 + project.images.length) % project.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentImage(i => (i + 1) % project.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 right-4 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === currentImage ? "16px" : "6px",
                      background: i === currentImage ? "hsl(var(--primary))" : "rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2
                  className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primthird)), hsl(var(--thirdary)))" }}
                >
                  {project.title}
                </h2>
                <span className="text-xs font-normal text-muted-foreground px-2 py-0.5 border border-border rounded-xl">
                  {project.tag}
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-border hover:border-primary/40 px-3 py-1.5 rounded-lg transition-all duration-200"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-black"
                  style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primthird)), hsl(var(--thirdary)))" }}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(to right, hsl(var(--primary)/0.4), hsl(var(--thirdary)/0.4))" }}
          />

          {/* Long description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border"
                style={{
                  borderColor: "hsl(var(--primary)/0.3)",
                  color: "hsl(var(--primthird))",
                  background: "hsl(var(--primary)/0.06)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader number="02" title="projects" color="hsl(var(--primthird))" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-transparent cursor-pointer
                hover:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
                bg-origin-border [background-clip:padding-box,border-box]"
              style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />

                {/* Floating icons top-right */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-foreground flex items-center">
                  <span className="bg-gradient-to-br from-primary via-primthird to-thirdary bg-clip-text group-hover:text-transparent transition-colors">
                    {project.title}
                  </span>
                  <span className="text-xs font-normal text-muted-foreground ml-3 p-1 px-2 border rounded-xl">
                    {project.tag}
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-secondary group-hover:bg-gray-900 text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}