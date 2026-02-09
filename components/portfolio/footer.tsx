export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          {"2026 F\u00e9lix Lecuyer."}
        </span>
        <span className="text-xs text-muted-foreground">
          {"Construit avec Next.js & Tailwind CSS"}
        </span>
      </div>
    </footer>
  )
}
