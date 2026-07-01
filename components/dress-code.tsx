import React from "react"

export function DressCode() {
  return (
    <section className="relative scroll-mt-24 px-5 py-28 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-pink font-semibold mb-4">
          Dress code
        </p>
        
        {/* Elegant glass frame for the core content */}
        <div className="relative py-10 px-6 md:px-16 rounded-[28px] border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]">
          {/* Subtle accent glow */}
          <div className="absolute -inset-10 -z-10 bg-radial-gradient from-neon-pink/5 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <h2 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl mb-6">
            Пляжный вайб
          </h2>
          
          <p className="mx-auto max-w-xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground/90 font-medium">
            Пляжный вайб приветствуется, но не обязателен.
            <br className="hidden sm:inline" />
            {" "}Приходи в том, в чём чувствуешь себя на волне лета.
          </p>
        </div>
      </div>
    </section>
  )
}
