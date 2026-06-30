"use client"

import { useEffect, useState } from "react"
import { Countdown } from "@/components/countdown"
import { DISCOUNT_DEADLINE } from "@/lib/event"

export function DiscountBanner() {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const check = () => setActive(Date.now() < DISCOUNT_DEADLINE)
    check()
    const id = setInterval(check, 1000)
    return () => clearInterval(id)
  }, [])

  if (!active) return null

  return (
    <div className="sticky bottom-0 z-40 border-t border-gold/30 bg-gold px-5 py-3 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
        <p className="text-sm font-medium uppercase tracking-wider text-gold-foreground">
          Скидка 20% сгорает через
        </p>
        <Countdown target={DISCOUNT_DEADLINE} variant="compact" />
        <a
          href="#tickets"
          className="rounded-full bg-gold-foreground px-5 py-1.5 text-sm font-medium uppercase tracking-wider text-gold transition-opacity hover:opacity-90"
        >
          Успеть
        </a>
      </div>
    </div>
  )
}
