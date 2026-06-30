import Image from "next/image"
import { Camera, Send } from "lucide-react"
import { EVENT } from "@/lib/event"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center sm:px-8">
        <Image
          src="/mirage-logo.png"
          alt="MIRAGE"
          width={64}
          height={64}
          className="h-16 w-16 rounded-full ring-1 ring-border"
        />
        <p className="font-display text-3xl tracking-wide text-foreground">{EVENT.tagline}</p>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {EVENT.dateLabel} · {EVENT.venueName} · {EVENT.city}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MIRAGE. Вход строго 18+. При себе иметь документ.
        </p>
      </div>
    </footer>
  )
}
