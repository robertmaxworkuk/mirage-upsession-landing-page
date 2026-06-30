// Moscow is UTC+3. Dates below are expressed in UTC to be unambiguous.

// Party: 9 July 2026, 22:00 Moscow time -> 19:00 UTC
export const EVENT_DATE = Date.UTC(2026, 6, 9, 19, 0, 0)

export const TICKET_URL = "https://moscow.qtickets.events/241548-summer-mirage"

export const EVENT = {
  name: "Mirage UpSession",
  tagline: "Escape the Matrix",
  dateLabel: "9 июля 2026",
  dayLabel: "Четверг",
  timeLabel: "22:00 — 04:00",
  city: "Москва",
  venueName: "GONCHAR",
  address: "Холодильный переулок 3, м. Тульская",
  description:
    "Rodèz и Mirage приглашают студентов топовых вузов отметить окончание сессии и ворваться в лето в пляжно-дискотечной атмосфере. Авторский бар, лофт с MC и мировыми хитами, летняя веранда, интерактивные зоны, приглашённые гости, новые знакомства и незабываемые эмоции.",
  telegram: "https://t.me/mirageparties",
  instagram: "https://instagram.com/mirageparties",
}

export type Artist = {
  name: string
  initials: string
  role: string
  image: string
}

export const LINEUP: Artist[] = [
  { name: "Remoz", initials: "RM", role: "DJ Set", image: "/artist_remoz.png" },
  { name: "Morpheu", initials: "MP", role: "DJ Set", image: "/artist_morpheu.png" },
  { name: "SUVsum", initials: "SV", role: "DJ Set", image: "/artist_suvsum.png" },
  { name: "Dan Rich", initials: "DR", role: "Special Guest", image: "/artist_dan_rich.png" },
]

export type Tier = {
  name: string
  price: string
  fromPrice: number
  cta: string
  perks: string[]
  featured: boolean
  badge?: string
}

export const TIERS: Tier[] = [
  {
    name: "Standard",
    price: "1700 ₽",
    fromPrice: 1700,
    cta: "Купить Standard",
    perks: ["Входной билет", "Доступ на летнюю веранду", "Лофт на первом этаже"],
    featured: false,
  },
  {
    name: "1+1",
    price: "3000 ₽",
    fromPrice: 3000,
    cta: "Забрать 1+1",
    perks: ["Два стандартных билета", "Доступ на веранду и в лофт", "Выгоднее, чем по отдельности"],
    featured: false,
  },
  {
    name: "VIP",
    price: "3300 ₽",
    fromPrice: 3300,
    cta: "Забрать VIP",
    perks: ["Всё из Standard", "VIP-зона с сидячими местами", "Свой столик"],
    featured: true,
    badge: "Осталось менее 30",
  },
  {
    name: "Squad 3+1",
    price: "6300 ₽",
    fromPrice: 6300,
    cta: "Забрать Squad",
    perks: ["Четыре стандартных билета", "Для компании друзей", "Максимальная выгода"],
    featured: false,
  },
]

export type InsideItem = { title: string; desc: string }

export const INSIDE: InsideItem[] = [
  { title: "Open-air веранда", desc: "Летняя терраса под открытым небом" },
  { title: "Лофт: мировые хиты и ведущий", desc: "Мировые хиты и драйвовый ведущий" },
  { title: "Авторский бар", desc: "Коктейли от наших барменов" },
  { title: "DJ sets", desc: "Remoz, Morpheu, SUVsum, Dan Rich" },
  { title: "Интерактивные зоны", desc: "Фото-споты и активности" },
  { title: "Новые знакомства", desc: "Студенты топовых вузов" },
]

export type FaqItem = { q: string; a: string }

export const FAQ: FaqItem[] = [
  {
    q: "Какие возрастные ограничения?",
    a: "Вход строго 18+. При себе обязательно иметь документ, удостоверяющий личность.",
  },
  {
    q: "Где купить билет?",
    a: "Билеты продаются онлайн на нашей странице QTickets. Нажми любую кнопку «Купить билет» на сайте.",
  },
  {
    q: "Что входит в Standard и VIP?",
    a: "Standard — входной билет с доступом на летнюю веранду и в лофт на первом этаже. VIP — всё из Standard плюс отдельная VIP-зона с сидячими местами и столиками.",
  },
  {
    q: "Какой dress code?",
    a: "Пляжный вайб приветствуется, но не обязателен. White party, лён, тропические детали, summer luxury — всё в тему.",
  },
  {
    q: "Можно ли прийти компанией?",
    a: "Да! Для компаний есть тарифы 1+1, Squad 3+1, а также VIP-столики. Чем больше друзей — тем выгоднее.",
  },
]
