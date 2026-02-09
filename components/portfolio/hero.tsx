import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="opacity-0 animate-fade-up text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
          {"F\u00e9lix"}
          <br />
          <span className="text-primary">Lecuyer</span>
        </h1>

        <div className="opacity-0 animate-fade-up animation-delay-100 mt-4">
          <p className="text-sm text-primary tracking-wider">
            {"Software Developer"}
          </p>
        </div>

        <div className="opacity-0 animate-fade-up animation-delay-200 mt-6">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {"Turning ideas into code."}
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {"Epitech student 2025 - 2030"}
          </p>
        </div>

        <div className="opacity-0 animate-fade-up animation-delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 text-sm font-medium rounded-lg hover:brightness-110 transition-all duration-200"
          >
            See projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-200"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up animation-delay-400">
        <span className="text-xs text-muted-foreground tracking-wider">scroll</span>
        <ArrowDown className="h-4 w-4 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
