import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TICKET_URL } from "@/lib/event"

export function FinalCta({ promo }: { promo?: boolean }) {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      {/* Decorative background grid matrix */}
      <div className="absolute inset-0 -z-20 pointer-events-none opacity-40 bg-dot-matrix" />

      {/* Large Premium Glass Card */}
      <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0410]/75 p-10 text-center backdrop-blur-xl sm:p-20 shadow-[0_0_50px_rgba(236,72,153,0.08)] group hover:border-neon-pink/30 transition-all duration-500">

        {/* Background Veranda Photo inside the card wrapper */}
        <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
          <Image
            src="/venue-crowd.png"
            alt="Панорамный вид на летнюю веранду клуба GONCHAR"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover opacity-[0.35] transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
          />
          {/* Internal gradients for photo blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0410]/65 via-[#0c0410]/35 to-[#0c0410]" />
        </div>

        {/* Ambient Neon Spotlights */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 -z-10 h-44 w-80 rounded-full bg-neon-pink/20 blur-[90px] group-hover:scale-125 transition-transform duration-700 ease-out" />
        <div className="absolute -top-20 left-1/4 -z-10 h-36 w-36 rounded-full bg-neon-cyan/15 blur-[75px]" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4 animate-pulse font-medium">
            Увидимся на вечеринке
          </p>

          <h2 className="font-heading text-4xl leading-[1.1] tracking-tight text-balance text-foreground sm:text-6xl group-hover:text-neon-coral transition-colors duration-300">
            Сессия закончилась.
            <br />
            <span className="text-brand-gradient">Лето начинается ночью</span>
          </h2>

          <div className="mt-10 flex flex-col items-center">
            <Button
              render={
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                  Купить билет
                </a>
              }
              size="lg"
              className="cta-glow rounded-full bg-brand-gradient px-12 py-6 font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-95 cta-pulse text-sm"
            />
            {promo && (
              <p className="mt-3 text-[11px] text-neon-pink font-bold uppercase tracking-[0.25em] select-none animate-fade-in">
                Промокод ANR85 активен (-10%)
              </p>
            )}
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-medium select-none">
            {promo ? (
              <>
                Билеты от <span className="text-neon-pink font-bold">1530 ₽*</span> по промокоду <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-foreground font-black">ANR85</span>
              </>
            ) : (
              "Билеты от 1700 ₽"
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
