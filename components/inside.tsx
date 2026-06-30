import { INSIDE } from "@/lib/event"

export function Inside() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Что будет внутри</p>
        <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
          Лето начинается здесь
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INSIDE.map((item, i) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-7 transition-colors hover:border-neon-pink/50"
          >
            <span
              aria-hidden="true"
              className="font-display text-5xl text-brand-gradient opacity-80"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
