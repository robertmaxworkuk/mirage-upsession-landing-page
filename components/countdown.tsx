"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "дней" },
  { key: "hours", label: "часов" },
  { key: "minutes", label: "минут" },
  { key: "seconds", label: "секунд" },
]

export function Countdown({
  target,
  variant = "large",
}: {
  /** Target time as an epoch millisecond value */
  target: number
  variant?: "large" | "compact"
}) {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const display = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const isCompact = variant === "compact"

  return (
    <div
      className={
        isCompact
          ? "flex items-center gap-3 sm:gap-4"
          : "flex flex-wrap items-start justify-center gap-3 sm:gap-5"
      }
      role="timer"
      aria-live="off"
    >
      {UNITS.map(({ key, label }, index) => (
        <div key={key} className="flex items-start">
          <div className="flex flex-col items-center">
            <span
              className={
                isCompact
                  ? "font-display text-2xl leading-none tabular-nums text-gold-foreground sm:text-3xl"
                  : "font-display text-5xl leading-none tabular-nums text-foreground sm:text-7xl"
              }
            >
              {String(display[key]).padStart(2, "0")}
            </span>
            <span
              className={
                isCompact
                  ? "mt-1 text-[10px] uppercase tracking-widest text-gold-foreground/70"
                  : "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm"
              }
            >
              {label}
            </span>
          </div>
          {index < UNITS.length - 1 && (
            <span
              aria-hidden="true"
              className={
                isCompact
                  ? "ml-3 font-display text-2xl leading-none text-gold-foreground/40 sm:text-3xl"
                  : "ml-3 font-display text-5xl leading-none text-primary/40 sm:ml-5 sm:text-7xl"
              }
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
