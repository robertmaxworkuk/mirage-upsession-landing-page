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
    <section id="venue" className="relative scroll-mt-24 px-5 py-24 sm:px-8 overflow-hidden">
      {/* Background themed image with scale animation */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none opacity-[0.22] min-h-full w-full">
        <Image
          src="/venue-terrace.png"
          alt="Летняя терраса лофта GONCHAR"
          fill
          sizes="100vw"
          className="object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
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

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl tracking-tight text-foreground">Как нас найти</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground/90">
              Легендарный клуб GONCHAR — это двухуровневый лофт с барной зоной, сценой и просторной летней верандой. Камерная атмосфера, мощный звук и пространство, созданное для танцев до утра. Находится всего в 5 минутах пешком от метро Тульская.
            </p>
          </div>
          
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/5 bg-card/45 p-4">
            <MapPin className="h-5 w-5 shrink-0 text-neon-pink mt-0.5 animate-bounce" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-foreground">{EVENT.venueName}</p>
              <p className="text-sm text-muted-foreground">{EVENT.address}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border bg-card/60 h-[350px] relative">
          <iframe
            src="https://yandex.ru/map-widget/v1/org/ryabov_loft/237785254493/?ll=37.628625%2C55.708739&z=16"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            title="Yandex Map"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
