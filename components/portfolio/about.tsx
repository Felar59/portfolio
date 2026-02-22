"use client"

import { SectionHeader } from "./section-header"
import { useState } from "react"
import React from "react"
const timeline = [
  {
    date: "2025 - 2030",
    title: "Epitech",
    description: "Études en informatique à Epitech, approfondissement des compétences en développement et systèmes.",
    color: "hsl(var(--primary))",
  },
  {
    date: "2023",
    title: "Spécialité NSI",
    description: "Développement de mes compétences en informatique, notamment au travers de la spécialité NSI en première et terminale.",
    color: "hsl(var(--primthird))",
  },
  {
    date: "2022",
    title: "Stage de 2nde",
    description: "Stage à Epitech, où j'ai exploré plusieurs domaines de l'informatique. Robotique / IA / Réseau",
    color: "hsl(var(--primthird))",
  },
  {
    date: "2021",
    title: "Stage de 3ème",
    description: "Stage avec un site e-commerce \"artapisserie.fr\" où j'ai pu découvrir le HTML, le CSS ainsi que Symfony.",
    color: "hsl(var(--thirdary))",
  },
]

function TimelineItem({ item }: { item: typeof timeline[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex gap-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dot */}
      <div className="relative z-10 mt-1.5 shrink-0">
        <div
          className="h-[15px] w-[15px] rounded-full border-2 bg-background transition-all duration-300"
          style={{
            borderColor: item.color,
            backgroundColor: hovered ? item.color : "",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 pb-1">
        <span className="text-xs font-medium tracking-wider" style={{ color: item.color }}>
          {item.date}
        </span>
        <h4
          className="text-base font-semibold transition-colors duration-300"
          style={{ color: hovered ? item.color : "" }}
        >
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader number="01" title="about" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {"Je suis étudiant en informatique et développeur à Epitech. Actuellement en recherche d'un stage de 4 à 6 mois à partir de juillet 2026."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"J’aime comprendre le fonctionnement des systèmes à bas niveau, expérimenter de nouvelles bibliothèques et outils, pour optimiser mes projets pour qu’ils soient clairs, structurés et performants."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"En dehors du code, j'aime les jeux vidéo et en créer moi-même, notamment avec Unity."}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1 hover:border-primary/40 transition-all duration-300 hover:border-transparent
             hover:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
             bg-origin-border [background-clip:padding-box,border-box]"
            style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}>
                <span className="text-3xl font-bold bg-gradient-to-br from-primary via-primthird to-primthird bg-clip-text text-transparent">{"7+"}</span>
                <span className="text-sm text-muted-foreground">Projets</span>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1 hover:border-primary/40 transition-all duration-300 hover:border-transparent
             hover:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
             bg-origin-border [background-clip:padding-box,border-box]"
            style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}>
                <span className="text-3xl font-bold bg-gradient-to-br from-primthird to-thirdary bg-clip-text text-transparent">{"10+"}</span>
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
            <div className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primthird)), hsl(var(--primthird)), hsl(var(--thirdary)))" }}
            />
            <div className="flex flex-col gap-10">
              {timeline.map((item) => (
                <TimelineItem key={item.date} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
