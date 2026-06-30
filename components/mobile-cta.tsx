import { Button } from "@/components/ui/button"
import { TICKET_URL, TIERS } from "@/lib/event"

export function MobileCta() {
  const minPrice = Math.min(...TIERS.map((t) => t.fromPrice))

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border glass px-4 py-3 md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="leading-tight">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Билеты</p>
          <p className="font-display text-xl text-foreground">от {minPrice} ₽</p>
        </div>
        <Button
          render={
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Купить
            </a>
          }
          className="cta-glow rounded-full bg-brand-gradient px-7 font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90"
        />
      </div>
    </div>
  )
}
