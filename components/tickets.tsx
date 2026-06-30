import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TIERS, TICKET_URL } from "@/lib/event"

export function Tickets() {
  return (
    <section id="tickets" className="relative scroll-mt-24 px-5 py-24 sm:px-8 overflow-hidden">
      {/* Background themed image with scale animation */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none opacity-[0.06] min-h-full w-full">
        <Image
          src="/party_bg_2.png"
          alt="Пляжная неоновая вечеринка Mirage UpSession в тропиках"
          fill
          sizes="100vw"
          className="object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Билеты</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Выбери свой вход
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Скидка действует до воскресенья включительно. Дальше — стандартная стоимость.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => {
          const isVip = tier.name === "VIP"
          const isSquad = tier.name === "Squad 3+1"
          const buttonLabel = isSquad ? "Купить Squad" : tier.cta

          return (
            <div
              key={tier.name}
              className={`flex flex-col relative rounded-3xl border p-7 transition-all duration-300 hover:scale-[1.02] shimmer-sweep ${
                isVip
                  ? "border-neon-pink bg-card/85 shadow-lg shadow-neon-pink/15 z-10"
                  : "border-border bg-card/60 backdrop-blur-md"
              }`}
            >
              {/* Floating top badge for VIP */}
              {isVip && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md animate-pulse whitespace-nowrap">
                  Осталось менее 30
                </span>
              )}

              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-3xl tracking-wide text-foreground">{tier.name}</h3>
                {isVip && (
                  <span className="rounded-md border border-neon-pink bg-neon-pink/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-neon-pink">
                    VIP
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-4xl text-brand-gradient">{tier.price}</span>
              </div>

              {/* Perks list */}
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground/95">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Button
                render={
                  <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                    {buttonLabel}
                  </a>
                }
                className={`mt-7 w-full rounded-full font-semibold uppercase tracking-widest text-xs h-11 ${
                  isVip
                    ? "cta-glow bg-brand-gradient text-primary-foreground hover:opacity-95 cta-pulse"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              />
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}
