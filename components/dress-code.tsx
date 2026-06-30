import Image from "next/image"

const IDEAS = ["White party", "Linen", "Tropical details", "Summer luxury"]

export function DressCode() {
  return (
    <section className="relative scroll-mt-24 border-y border-border/40 bg-card/15 py-24 overflow-hidden">
      {/* Background themed image with scale animation */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none opacity-[0.22] min-h-full w-full">
        <Image
          src="/gonchar-bar.png"
          alt="Авторский бар клуба GONCHAR"
          fill
          sizes="100vw"
          className="object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/45 to-background" />
      </div>

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
