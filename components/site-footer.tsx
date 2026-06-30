import { Camera, Send } from "lucide-react"
import { EVENT } from "@/lib/event"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30 pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center sm:px-8">
        <p className="font-display text-3xl tracking-wide text-brand-gradient">
          {EVENT.name}
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {EVENT.dateLabel} · {EVENT.venueName} · {EVENT.address}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={EVENT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram мероприятия"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon-pink/50 hover:text-neon-pink"
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={EVENT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram мероприятия"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon-pink/50 hover:text-neon-pink"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <p>Вход строго 18+. При себе иметь документ.</p>
          <p>© 2026 {EVENT.name}. При себе иметь документ.</p>
        </div>
      </div>
    </footer>
  )
}
