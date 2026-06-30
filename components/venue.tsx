import Image from "next/image"
import { MapPin } from "lucide-react"
import { EVENT } from "@/lib/event"

const GALLERY = [
  { src: "/gonchar-veranda.png", alt: "Летняя веранда клуба GONCHAR", span: "md:col-span-2 md:row-span-2" },
  { src: "/gonchar-loft.png", alt: "Лофт со сценой и DJ-буфетом", span: "" },
  { src: "/gonchar-bar.png", alt: "Авторский бар с коктейлями", span: "" },
]

export function Venue() {
  return (
    <section id="venue" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Площадка</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            {EVENT.venueName}
          </h2>
        </div>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          GONCHAR — это двухуровневый лофт с барной зоной, сценой и летней верандой.
          Камерная атмосфера, мощный звук и пространство, созданное для танцев до утра.
        </p>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {GALLERY.map((item) => (
          <div
            key={item.src}
            className={`relative overflow-hidden rounded-2xl ring-1 ring-border ${item.span}`}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-6 py-5">
        <MapPin className="h-5 w-5 shrink-0 text-neon-pink" aria-hidden="true" />
        <div>
          <p className="text-sm font-medium text-foreground">{EVENT.venueName}</p>
          <p className="text-sm text-muted-foreground">{EVENT.address}</p>
        </div>
      </div>
    </section>
  )
}
