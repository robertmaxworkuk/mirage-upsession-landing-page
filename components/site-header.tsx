"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TICKET_URL } from "@/lib/event"

const NAV = [
  { label: "О событии", href: "#about" },
  { label: "Билеты", href: "#tickets" },
  { label: "Локация", href: "#venue" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader({ promo }: { promo?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {promo && (
        <div className="bg-brand-gradient text-primary-foreground py-2 px-4 text-center text-xs font-semibold tracking-wider uppercase shadow-md select-none">
          Промокод <span className="font-mono bg-white/20 px-1.5 py-0.5 rounded text-sm font-black tracking-widest">ANR85</span> — скидка 10% на всё
        </div>
      )}
      <header
        className={`transition-colors duration-300 ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center" aria-label="Mirage UpSession — на главную">
            <span className="font-display text-2xl tracking-wide text-brand-gradient">
              Mirage UpSession
            </span>
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
            render={
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                Купить билет
              </a>
            }
            className="cta-glow rounded-full bg-brand-gradient font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90"
          />
        </div>
      </header>
    </div>
  )
}
