import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TIERS, TICKET_URL } from "@/lib/event"

export function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
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
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-3xl border p-7 ${
              tier.featured
                ? "border-neon-pink bg-card shadow-lg shadow-neon-pink/10"
                : "border-border bg-card/60"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-3xl tracking-wide text-foreground">{tier.name}</h3>
              {tier.featured && (
                <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground">
                  Популярный
                </span>
              )}
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl text-brand-gradient">{tier.price}</span>
            </div>

            {tier.badge && (
              <span className="mt-3 self-start rounded-full border border-neon-coral/60 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-neon-coral">
                {tier.badge}
              </span>
            )}

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>

            <Button
              render={
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  {tier.cta}
                </a>
              }
              className={`mt-7 w-full rounded-full font-medium uppercase tracking-wider ${
                tier.featured
                  ? "cta-glow bg-brand-gradient text-primary-foreground hover:opacity-90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
