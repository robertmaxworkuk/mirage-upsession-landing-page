const IDEAS = ["White party", "Linen", "Tropical details", "Summer luxury"]

export function DressCode() {
  return (
    <section className="relative scroll-mt-24 border-y border-border/40 bg-transparent py-24 overflow-hidden">

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Dress code</p>
        <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
          Пляжный вайб
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Пляжный вайб приветствуется, но не обязателен. Приходи в том, в чём чувствуешь
          себя на волне лета.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {IDEAS.map((idea) => (
            <span
              key={idea}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm uppercase tracking-wider text-foreground"
            >
              {idea}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
