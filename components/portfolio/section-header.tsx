interface SectionHeaderProps {
  number: string
  title: string
  color?: string
}

export function SectionHeader({ number, title, color = "hsl(var(--primary))" }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-3 mb-14">
      <span className="text-sm font-medium" style={{ color }}>{number}</span>
      <span className="text-sm text-muted-foreground">/</span>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border/60 self-center" />
    </div>
  )
}
