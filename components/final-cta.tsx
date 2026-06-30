import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TICKET_URL } from "@/lib/event"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 text-center sm:px-8">
      <Image
        src="/gonchar-veranda.png"
        alt="Панорамный вид на летнюю веранду клуба GONCHAR"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance text-foreground sm:text-7xl">
          Сессия закончилась.
          <br />
          <span className="text-brand-gradient">Лето начинается ночью</span>
        </h2>
        <Button
          render={
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Купить билет
            </a>
          }
          size="lg"
          className="cta-glow mt-10 rounded-full bg-brand-gradient px-10 font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90 cta-pulse"
        />
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-medium">
          Билеты от 1700 ₽
        </p>
      </div>
    </section>
  )
}
