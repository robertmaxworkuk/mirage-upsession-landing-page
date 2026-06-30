import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const TIERS = [
  {
    name: "Standart",
    price: "2 000 ₽",
    oldPrice: "2 500 ₽",
    perks: ["Вход на вечеринку", "Доступ на веранду", "Гардероб"],
    featured: false,
  },
  {
    name: "VIP",
    price: "4 500 ₽",
    oldPrice: "5 500 ₽",
    perks: ["Всё из Standart", "VIP-зона у сцены", "Приветственный коктейль", "Отдельный бар"],
    featured: true,
  },
  {
    name: "Table",
    price: "20 000 ₽",
    oldPrice: "25 000 ₽",
    perks: ["Стол на компанию до 6 человек", "Персональный официант", "Бутылочное обслуживание"],
    featured: false,
  },
]

export function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Билеты</p>
        <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
          Выбери свой вход
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Цены со скидкой действуют до конца акции. Дальше — стандартная стоимость.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-3xl border p-7 ${
              tier.featured
                ? "border-gold bg-card shadow-lg shadow-gold/10"
                : "border-border bg-card/60"
            }`}
          >
            {tier.featured && (
              <span className="mb-4 self-start rounded-full bg-gold px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-gold-foreground">
                Популярный
              </span>
            )}
            <h3 className="font-display text-3xl tracking-wide text-foreground">{tier.name}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl text-gold">{tier.price}</span>
              <span className="text-sm text-muted-foreground line-through">{tier.oldPrice}</span>
            </div>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>

            <Button
              className={`mt-7 w-full rounded-full font-medium uppercase tracking-wider ${
                tier.featured
                  ? "bg-gold text-gold-foreground hover:bg-gold/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Купить {tier.name}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
