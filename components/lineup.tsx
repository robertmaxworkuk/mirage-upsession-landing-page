import { LINEUP } from "@/lib/event"

export function Lineup() {
  return (
    <section id="lineup" className="scroll-mt-20 border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Лайн-ап</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Кто играет
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LINEUP.map((artist) => (
            <article
              key={artist.name}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-xl tracking-wide text-gold ring-1 ring-border"
                aria-hidden="true"
              >
                {artist.initials}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{artist.role}</p>
                <h3 className="font-display text-2xl tracking-wide text-foreground">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.set}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
