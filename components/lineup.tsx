import Image from "next/image"
import { LINEUP } from "@/lib/event"

export function Lineup() {
  return (
    <section id="lineup" className="relative scroll-mt-24 border-y border-border/40 bg-card/15 py-24 overflow-hidden">
      {/* Background themed image with scale animation */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none opacity-[0.25] min-h-full w-full">
        <Image
          src="/venue-crowd.png"
          alt="Танцпол клуба GONCHAR"
          fill
          sizes="100vw"
          className="object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/45 to-background" />
      </div>

      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-neon-pink/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Line-up</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Кто играет
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 justify-items-center">
          {LINEUP.map((artist) => (
            <article
              key={artist.name}
              className="group flex flex-col items-center text-center transition-all duration-300 w-full max-w-[200px]"
            >
              {/* Outer glowing oval container for image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[40%] border-2 border-white/10 p-1 bg-card/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-neon-pink/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]">
                <div className="relative h-full w-full overflow-hidden rounded-[38%]">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
              </div>

              {/* Artist Name & Role below image */}
              <div className="mt-5">
                <h3 className="font-display text-2xl tracking-wider text-foreground group-hover:text-neon-coral transition-colors duration-300 sm:text-3xl">
                  {artist.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium group-hover:text-neon-pink transition-colors duration-300">
                  {artist.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
