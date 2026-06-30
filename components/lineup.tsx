import { LINEUP } from "@/lib/event"

export function Lineup() {
  return (
    <section id="lineup" className="scroll-mt-24 border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Line-up</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Кто играет
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {LINEUP.map((artist) => (
            <article
              key={artist.name}
              className="group flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-6 text-center transition-colors hover:border-neon-pink/50"
            >
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-2xl tracking-wide text-primary-foreground"
                aria-hidden="true"
              >
                {artist.initials}
              </div>
              <h3 className="font-display text-2xl tracking-wide text-foreground">{artist.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
