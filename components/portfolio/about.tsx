import { SectionHeader } from "./section-header"

const timeline = [
  {
    date: "2021",
    title: "Stage de 3ème",
    description: "Stage avec un site e-commerce \"artapisserie.fr\" où j'ai pu découvrir le HTML, le CSS ainsi que Symfony."
  },
  {
    date: "2022",
    title: "Stage de 2nde",
    description: "Stage à Epitech, où j'ai exploré plusieurs domaines de l'informatique. Robotique / IA / Réseau"
  },
  {
    date: "2023",
    title: "Spécialité NSI",
    description: "Développement de mes compétences en informatique, notamment au travers de la spécialité NSI en première et terminale."
  },
  {
    date: "2025 - 2030",
    title: "Epitech",
    description: "Études en informatique à Epitech, approfondissement des compétences en développement et systèmes."
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader number="01" title="about" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {"Je suis étudiant en informatique et développeur. Je crée des projets personnels pour explorer différentes technologies et perfectionner ma maîtrise du code."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"J’aime comprendre le fonctionnement des systèmes à bas niveau, expérimenter de nouvelles bibliothèques et outils, pour optimiser mes projets pour qu’ils soient clairs, structurés et performants."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"En dehors du code, je joue aux jeux vidéo et j’aime en créer moi-même, notamment avec Unity."}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1 hover:border-primary/40 transition-all duration-300">
                <span className="text-3xl font-bold text-primary">{"6"}</span>
                <span className="text-sm text-muted-foreground">Projets</span>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1 hover:border-primary/40 transition-all duration-300">
                <span className="text-3xl font-bold text-primary">{"8"}</span>
                <span className="text-sm text-muted-foreground">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Parcours timeline */}
        <div className="mt-20">
          <h3 className="text-lg font-semibold text-foreground mb-10">Parcours dans l'informatique</h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, index) => (
                <div key={item.date} className="relative flex gap-6 group">
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 shrink-0">
                    <div className="h-[15px] w-[15px] rounded-full border-2 border-primary bg-background transition-colors duration-300 group-hover:bg-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pb-1">
                    <span className="text-xs text-primary font-medium tracking-wider">{item.date}</span>
                    <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
