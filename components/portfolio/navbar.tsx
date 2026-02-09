"use client"

import { useState } from "react"

const navLinks = [
  { label: "about", href: "#about", number: "01" },
  { label: "projects", href: "#projects", number: "02" },
  { label: "skills", href: "#skills", number: "03" },
  { label: "contact", href: "#contact", number: "04" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors"
        >
          portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-[10px] text-primary leading-none">{link.number}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-[10px] text-primary leading-none">{link.number}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
