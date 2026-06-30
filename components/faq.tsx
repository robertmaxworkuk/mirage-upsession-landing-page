"use client"

import React, { useState } from "react"
import { Plus } from "lucide-react"
import { FAQ as FAQ_ITEMS } from "@/lib/event"

interface FaqItemProps {
  item: {
    q: string
    a: string
  }
}

function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="group rounded-2xl border border-white/10 bg-card/45 px-6 cursor-pointer transition-all duration-500 hover:border-neon-pink/30 hover:bg-card/65 hover:shadow-[0_0_35px_rgba(236,72,153,0.06)]"
    >
      <div className="flex items-center justify-between gap-4 py-5 font-medium text-foreground relative z-10 select-none">
        <span className="text-base tracking-wide font-display text-foreground group-hover:text-neon-coral transition-colors duration-300">
          {item.q}
        </span>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-neon-pink/40 group-hover:bg-neon-pink/10 transition-all duration-300">
          <Plus
            className={`h-4 w-4 text-neon-pink transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Animated content wrapper using CSS Grid height transition */}
      <div
        className={`grid transition-all duration-500 ease-in-out relative z-10 ${
          isOpen ? "opacity-100 pb-5" : "opacity-0"
        }`}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          display: "grid",
        }}
      >
        <div className="overflow-hidden">
          <p className="text-pretty leading-relaxed text-muted-foreground/90 text-sm pl-0">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 px-5 py-24 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">FAQ</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
            Частые вопросы
          </h2>
        </div>

        <div className="flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
