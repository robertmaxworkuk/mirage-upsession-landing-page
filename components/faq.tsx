import Image from "next/image"
import { Plus } from "lucide-react"
import { FAQ as FAQ_ITEMS } from "@/lib/event"

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 px-5 py-24 sm:px-8 overflow-hidden">
      {/* Background themed image with scale animation */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none opacity-[0.16] min-h-full w-full">
        <Image
          src="/gonchar-loft.png"
          alt="Лофт со сценой клуба GONCHAR"
          fill
          sizes="100vw"
          className="object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/55 to-background" />
      </div>

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">FAQ</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Частые вопросы
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card/60 px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-foreground">
                {item.q}
                <Plus
                  className="h-5 w-5 shrink-0 text-neon-pink transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-pretty leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
