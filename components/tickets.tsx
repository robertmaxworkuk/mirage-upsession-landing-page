import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TIERS, TICKET_URL } from "@/lib/event"

export function Tickets({ promoCode }: { promoCode?: string }) {
  return (
    <section id="tickets" className="relative scroll-mt-24 px-5 py-24 sm:px-8 overflow-hidden">

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Билеты</p>
          <h2 className="mt-3 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            Выбери свой <span className="text-brand-gradient">вход</span>
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
          const basePrice = tier.fromPrice
          const discountedPrice = promoCode ? Math.round(basePrice * 0.9) : basePrice

          return (
            <div
              key={tier.name}
              className={`flex flex-col relative rounded-3xl border p-7 transition-all duration-300 hover:scale-[1.02] ${
                isVip
                  ? "border-neon-pink bg-card/85 shadow-lg shadow-neon-pink/15 z-10"
                  : "border-border bg-card/60 backdrop-blur-md"
              }`}
            >
              {/* Inner container for the background shimmer effect to avoid clipping the floating badge */}
              <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none shimmer-sweep z-0" />

              {/* Floating top badge for VIP */}
              {isVip && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md whitespace-nowrap z-20">
                  Осталось менее 30
                </span>
              )}

              <div className="flex items-center justify-between gap-2 relative z-10">
                <h3 className="font-display text-3xl tracking-wide text-foreground">{tier.name}</h3>
                {isVip && (
                  <span className="rounded-md border border-neon-pink bg-neon-pink/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-neon-pink">
                    VIP
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-col justify-end min-h-[84px] relative z-10">
                {promoCode ? (
                  <div className="flex flex-col justify-end items-start">
                    <span className="text-xs line-through text-muted-foreground/50 leading-tight mb-0.5">{tier.price}</span>
                    <span className="font-display text-4xl text-brand-gradient leading-none">{discountedPrice} ₽</span>
                    <span className="inline-flex items-center mt-2.5 rounded-full border border-neon-pink/30 bg-neon-pink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neon-pink select-none shadow-[0_0_10px_rgba(236,72,153,0.15)] leading-none">
                      по промокоду
                      <span className="ml-1.5 font-mono font-black text-foreground bg-white/10 px-1.5 py-0.5 rounded text-xs tracking-normal normal-case border border-white/5 shadow-sm">
                        {promoCode}
                      </span>
                    </span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-brand-gradient leading-none">{tier.price}</span>
                )}
              </div>

              {/* Perks list */}
              <ul className="mt-6 flex flex-1 flex-col gap-3 relative z-10">
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
                className={`mt-7 w-full rounded-full font-semibold uppercase tracking-widest text-xs h-11 relative z-10 ${
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
