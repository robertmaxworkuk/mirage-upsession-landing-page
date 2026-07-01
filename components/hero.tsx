import Image from "next/image"
import { MapPin, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { EVENT, EVENT_DATE, TICKET_URL } from "@/lib/event"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-22 text-center sm:px-8">
      <Image
        src="/hero-bg.png"
        alt="Атмосферный пляжный фон вечеринки Mirage UpSession с подсветкой"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover opacity-45 animate-scale-slow"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/45 to-background to-90%"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground">
          {EVENT.city} · {EVENT.dateLabel}
        </span>

        <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-balance text-brand-gradient sm:text-7xl md:text-8xl">
          Mirage UpSession
        </h1>
        <p className="mt-3 font-display text-xl uppercase tracking-[0.3em] text-cool-gradient sm:text-2xl">
          {EVENT.tagline}
        </p>

        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
          {EVENT.description}
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold tracking-wider uppercase text-foreground/90">
            <span className="inline-flex items-center gap-2 text-neon-pink">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              9 июля, {EVENT.timeLabel}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-pink/30 hidden sm:inline" />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {EVENT.venueName} · {EVENT.city}
            </span>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 font-semibold">
            До начала вечеринки
          </p>
          <Countdown target={EVENT_DATE} />
        </div>

        <div className="mt-8">
          <Button
            render={
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                Купить билет
              </a>
            }
            size="lg"
            className="cta-glow rounded-full bg-brand-gradient px-8 font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90 cta-pulse"
          />
        </div>
      </div>
    </section>
  )
}
