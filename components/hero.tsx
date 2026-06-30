import Image from "next/image"
import { MapPin, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { EVENT, EVENT_DATE } from "@/lib/event"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center sm:px-8">
      <Image
        src="/venue-crowd.png"
        alt=""
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
          {EVENT.city} · {EVENT.dateLabel}
        </span>

        <h1 className="font-display text-7xl leading-[0.9] tracking-tight text-balance text-foreground sm:text-8xl md:text-9xl">
          MIRAGE
        </h1>
        <p className="mt-4 font-display text-2xl uppercase tracking-[0.3em] text-gold sm:text-3xl">
          {EVENT.tagline}
        </p>

        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Одна ночь в лофте на крыше города. Премиальный звук, тщательно отобранный
          лайн-ап и атмосфера, ради которой стоит остаться до рассвета.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
            {EVENT.dayLabel}, {EVENT.timeLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            {EVENT.venueName}
          </span>
        </div>

        <div className="mt-12 w-full">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            До начала вечеринки
          </p>
          <Countdown target={EVENT_DATE} />
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<a href="#tickets">Купить билет</a>}
            size="lg"
            className="rounded-full bg-gold px-8 font-medium uppercase tracking-wider text-gold-foreground hover:bg-gold/90"
          />
          <Button
            render={<a href="#lineup">Смотреть лайн-ап</a>}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent px-8 font-medium uppercase tracking-wider text-foreground hover:bg-card"
          />
        </div>
      </div>
    </section>
  )
}
