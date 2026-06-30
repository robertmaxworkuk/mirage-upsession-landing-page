import { INSIDE } from "@/lib/event"

function getIcon(index: number) {
  switch (index) {
    case 0: // Open-air веранда
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 14 A 14 14 0 0 0 30 26 A 18 18 0 1 1 44 14 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 52 C 24 40 28 32 36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25 52 C 27 42 30 35 36 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M36 28 C 30 24 20 25 14 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 28 C 34 20 26 15 18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 28 C 38 18 45 15 50 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 28 C 42 24 49 26 53 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 1: // Лофт: мировые хиты и ведущий
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-orange drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="18" width="48" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
          <circle cx="20" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="20" cy="32" r="3" stroke="currentColor" strokeWidth="1" />
          <circle cx="44" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="44" cy="32" r="3" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="22" x2="32" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="32" r="2" fill="currentColor" />
        </svg>
      )
    case 2: // Авторский бар
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16 L 48 16 L 33 38 C 32.5 38.8 31.5 38.8 31 38 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
          <line x1="20" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="44" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <line x1="44" y1="11" x2="44" y2="21" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="38" x2="32" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 50 L 42 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 3: // DJ sets
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="32" cy="32" r="2" fill="currentColor" />
          <path d="M48 16 L 40 28 L 36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 4: // Интерактивные зоны
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-magenta drop-shadow-[0_0_8px_rgba(219,39,119,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="40" height="28" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <rect x="20" y="16" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
          <circle cx="44" cy="26" r="2" fill="currentColor" />
          <circle cx="32" cy="34" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="32" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 5: // Новые знакомства
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44 C 12 36 8 26 14 18 C 20 10 28 16 32 22 C 36 16 44 10 50 18 C 56 26 52 36 40 44 L 32 50 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <path d="M42 46 C 36 42 34 37 37 33 C 40 29 44 32 46 35 C 48 32 52 29 55 33 C 58 37 56 42 50 46 L 46 49 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    default:
      return null
  }
}

export function Inside() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Что будет внутри</p>
        <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
          Лето начинается здесь
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INSIDE.map((item, i) => (
          <article
            key={item.title}
            className="group relative flex flex-col justify-between min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-neon-pink/40 hover:bg-card/45 hover:shadow-[0_0_35px_rgba(236,72,153,0.12)]"
          >
            {/* Absolute accent lighting on hover */}
            <div className="absolute -right-16 -top-16 -z-10 h-32 w-32 rounded-full bg-neon-pink/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
              {getIcon(i)}
            </div>
            
            <div>
              <h3 className="font-display text-2xl tracking-wide text-foreground group-hover:text-neon-coral transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground/90">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
