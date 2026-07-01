import React from "react"
import { INSIDE } from "@/lib/event"

function getIcon(index: number) {
  switch (index) {
    case 0: // Open-air веранда
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-orange drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="32" cy="32" r="2" fill="currentColor" />
          <path d="M48 16 L 40 28 L 36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 4: // Интерактивные зоны
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-magenta drop-shadow-[0_0_8px_rgba(219,39,119,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="40" height="28" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <rect x="20" y="16" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
          <circle cx="44" cy="26" r="2" fill="currentColor" />
          <circle cx="32" cy="34" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="32" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 5: // Новые знакомства
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-neon-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44 C 12 36 8 26 14 18 C 20 10 28 16 32 22 C 36 16 44 10 50 18 C 56 26 52 36 40 44 L 32 50 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
          <path d="M42 46 C 36 42 34 37 37 33 C 40 29 44 32 46 35 C 48 32 52 29 55 33 C 58 37 56 42 50 46 L 46 49 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    default:
      return null
  }
}

const itemColors = {
  pink: {
    line: "group-hover:bg-neon-pink group-hover:shadow-[0_0_12px_rgba(236,72,153,0.6)] group-hover:h-[1.5px]",
  },
  orange: {
    line: "group-hover:bg-neon-orange group-hover:shadow-[0_0_12px_rgba(249,115,22,0.6)] group-hover:h-[1.5px]",
  },
  cyan: {
    line: "group-hover:bg-neon-cyan group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:h-[1.5px]",
  },
  magenta: {
    line: "group-hover:bg-neon-magenta group-hover:shadow-[0_0_12px_rgba(219,39,119,0.6)] group-hover:h-[1.5px]",
  },
}

export function Inside() {
  return (
    <section id="about" className="relative scroll-mt-24 px-5 py-28 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Asymmetrical grid layout: sticky brand text on left, glowing list on right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Sticky Title & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.4em] text-neon-pink font-semibold">
              Что будет внутри
            </p>
            
            <h2 className="mt-4 font-heading text-4xl leading-[1.0] tracking-tight text-foreground sm:text-6xl md:text-7xl select-none">
              Лето
              <br />
              начинается
              <br />
              <span className="text-brand-gradient">здесь</span>
            </h2>
            
            <p className="mt-6 text-muted-foreground/80 max-w-sm text-sm md:text-base leading-relaxed font-medium">
              Главное студенческое событие сезона. Пространство абсолютной свободы, качающего звука и ярких открытий, где каждый найдет свой ритм.
            </p>

            {/* Glowing Decorative Radial Tech Wheel */}
            <div className="relative mt-12 h-36 w-36 overflow-hidden pointer-events-none opacity-40 hidden lg:block">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" stroke="var(--color-neon-pink)" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="var(--color-neon-cyan)" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="15" stroke="var(--color-neon-orange)" strokeWidth="0.5" strokeDasharray="5 5" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="var(--color-neon-pink)" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="var(--color-neon-pink)" strokeWidth="0.5" strokeOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Right Column: Custom Interactive List Items (No cards!) */}
          <div className="lg:col-span-7 flex flex-col">
            {INSIDE.map((item, i) => {
              const numStr = String(i + 1).padStart(2, "0")
              const colorKeys = ["pink", "orange", "pink", "cyan", "magenta", "pink"]
              const itemColor = colorKeys[i]
              const colors = itemColors[itemColor as keyof typeof itemColors]
              
              return (
                <div
                  key={item.title}
                  className="group relative py-7 flex flex-col gap-3 border-b border-white/5 transition-all duration-300"
                >
                  {/* Faint hover background backing glow */}
                  <div className="absolute inset-x-[-16px] inset-y-1.5 -z-10 rounded-2xl bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="flex items-start gap-6">
                    {/* Outlined numbers using Bebas Neue */}
                    <span
                      className={`font-display text-5xl md:text-6.5xl tracking-tighter leading-none select-none transition-all duration-500 text-transparent ${
                        itemColor === "pink"
                          ? "group-hover:text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
                          : itemColor === "cyan"
                          ? "group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                          : itemColor === "orange"
                          ? "group-hover:text-neon-orange group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                          : "group-hover:text-neon-magenta group-hover:drop-shadow-[0_0_8px_rgba(219,39,119,0.5)]"
                      }`}
                      style={{
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      {numStr}
                    </span>
                    
                    {/* Content Block */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3.5">
                        <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          {getIcon(i)}
                        </div>
                        
                        <h3 className="font-sans text-xl font-bold tracking-tight text-foreground group-hover:text-neon-coral transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground/80 max-w-xl font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Active glowing custom neon line */}
                  <div className={`absolute bottom-0 left-0 h-[1px] w-full bg-white/5 transition-all duration-500 ${colors.line}`} />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
