import { ThemeToggle } from "@/components/theme-toggle"
import { photographer } from "@/lib/portfolio"

const links = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:gap-8">
        <div className="flex items-center justify-between gap-4 md:contents">
          <a
            href="#introduction"
            className="font-heading text-2xl leading-none tracking-tight"
          >
            {photographer.name}
          </a>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
        <nav aria-label="Page" className="flex items-center gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:ml-auto">
          <a
            href={`mailto:${photographer.email}`}
            className="text-sm underline-offset-4 hover:underline"
          >
            {photographer.email}
          </a>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
