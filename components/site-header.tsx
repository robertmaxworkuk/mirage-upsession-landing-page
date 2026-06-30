import Image from "next/image"
import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Площадка", href: "#venue" },
  { label: "Лайн-ап", href: "#lineup" },
  { label: "Билеты", href: "#tickets" },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="MIRAGE — на главную">
          <Image
            src="/mirage-logo.png"
            alt="MIRAGE"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full ring-1 ring-border"
            priority
          />
          <span className="font-display text-2xl tracking-wide text-foreground">MIRAGE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="#tickets">Билеты</a>}
          className="rounded-full bg-gold font-medium uppercase tracking-wider text-gold-foreground hover:bg-gold/90"
        />
      </div>
    </header>
  )
}
