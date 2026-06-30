// Moscow is UTC+3. Dates below are expressed in UTC to be unambiguous.

// Party: 11 July 2026, 22:00 Moscow time -> 19:00 UTC
export const EVENT_DATE = Date.UTC(2026, 6, 11, 19, 0, 0)

// Early-bird discount ends: Sunday 5 July 2026, 23:59 Moscow time -> 20:59 UTC
export const DISCOUNT_DEADLINE = Date.UTC(2026, 6, 5, 20, 59, 0)

export const EVENT = {
  name: "MIRAGE",
  tagline: "Tomorrow Starts Tonight",
  dateLabel: "11 июля 2026",
  dayLabel: "Суббота",
  timeLabel: "22:00 — 06:00",
  city: "Москва",
  venueName: "Vlasov Hall · Loft Street",
  address: "ул. Нижняя Сыромятническая, 10, Москва",
}

export type Artist = {
  name: string
  role: string
  set: string
  initials: string
}

export const LINEUP: Artist[] = [
  { name: "NOVA", role: "Headliner", set: "Melodic Techno", initials: "NV" },
  { name: "KAIROS", role: "Special Guest", set: "Afro House", initials: "KR" },
  { name: "LUMEN", role: "Resident", set: "Deep House", initials: "LM" },
  { name: "VESPER", role: "Resident", set: "Progressive", initials: "VS" },
  { name: "ECHO", role: "Opening", set: "Organic House", initials: "EC" },
  { name: "MIRAGE B2B", role: "Closing", set: "Live Set", initials: "MB" },
]
