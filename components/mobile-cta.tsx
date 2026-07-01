"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TICKET_URL, TIERS } from "@/lib/event"

export function MobileCta({ promoCode }: { promoCode?: string }) {
  const minPrice = Math.min(...TIERS.map((t) => t.fromPrice))
  const discountedMinPrice = Math.round(minPrice * 0.9)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile cta bar when scroll position is past 80% of screen height (below Hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Run handler initially to account for already scrolled page on refresh
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border glass px-4 py-3 md:hidden transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="leading-tight select-none">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            {promoCode ? `С промокодом ${promoCode}` : "Билеты"}
          </p>
          <p className="font-display text-xl text-foreground">
            от {promoCode ? discountedMinPrice : minPrice} ₽
          </p>
        </div>
        <Button
          render={
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Купить
            </a>
          }
          className="cta-glow rounded-full bg-brand-gradient px-7 font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90"
        />
      </div>
    </div>
  )
}
