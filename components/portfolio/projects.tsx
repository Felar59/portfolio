import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { SectionHeader } from "./section-header"
import pictureToDMC from '../../assets/picturetodmc.png';
import myTop from "../../assets/my_top.png"
import myRadar from "../../assets/my_radar.png"
import myHunter from "../../assets/my_hunter.png"
import Runner from "../../assets/runner.png"
import antiVirus from "../../assets/antivirus.png"

const projects = [
  {
    title: "My_Radar",
    tag: "Epitech",
    description:
      "Simulation 2D en temps réel du trafic aérien avec détection de collisions et gestion optimisée via un quadtree récursif",
    tags: ["C", "CSFML"],
    image: myRadar,
    github: "https://github.com/Felar59/my_radar",
    live: null,
  },
  {
    title: "My_TOP",
    tag: "Epitech",
    description:
      "Reproduction de la commande Linux 'top' avec parsing avancé du dossier /proc et interface terminal interactive",
    tags: ["C", "ncurses"],
    image: myTop,
    github: "https://github.com/Felar59/my_top",
    live: null,
  },
  {
    title: "Picture To DMC",
    tag: "Private",
    description:
      "Application web convertissant des images en patrons de broderie utilisant la palette DMC, avec interface intuitive et génération automatique",
    tags: ["React", "Typescript", "Tailwind", "Python"],
    image: pictureToDMC,
    github: "https://github.com/Felar59/PictureToDMC/tree/main",
    live: "https://picturetodmc.onrender.com/",
  },
  {
    title: "My_Hunter",
    tag: "Epitech",
    description:
      "Jeu 2D inspiré de Duck Hunt avec gestion de cibles + gravité et animations interactives",
    tags: ["C", "CSFML"],
    image: myHunter,
    github: "https://github.com/Felar59/my_hunter",
    live: null,
  },
  {
    title: "Runner",
    tag: "Private",
    description:
      "Runner 2D avec génération procédurale de terrains basée sur l’algorithme Perlin Noise",
    tags: ["C++", "SFML"],
    image: Runner,
    github: "https://github.com/Felar59/Runner",
    live: null,
  },
  {
    title: "Anti-Virus Game",
    tag: "Ozanam",
    description:
      "Adaptation numérique du jeu de société 'Anti-Virus', avec règles originales et interface interactive",
    tags: ["Python", "PyGame"],
    image: antiVirus,
    github: "https://github.com/Felar59/Virus",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader number="02" title="projects" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
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
                      className="bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  <span>{project.title}</span>{' '}
                  <span className="text-xs font-normal text-muted-foreground ml-3 p-1 px-2 border rounded-xl">{project.tag}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed text-xs line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
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
    </section>
  )
}
