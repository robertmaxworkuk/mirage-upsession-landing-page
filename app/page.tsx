import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Teaser } from "@/components/teaser"
import { Inside } from "@/components/inside"
import { Venue } from "@/components/venue"
import { Tickets } from "@/components/tickets"
import { DressCode } from "@/components/dress-code"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import { NeonPageBg } from "@/components/ui/neon-page-bg"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const promoParam = searchParams.promo
  const promoCode =
    promoParam === "true"
      ? "ANR85"
      : typeof promoParam === "string" && promoParam.trim() !== "" && promoParam !== "false"
        ? promoParam
        : undefined

  return (
    <>
      <SiteHeader promoCode={promoCode} />
      <main className="relative overflow-hidden bg-[#050006] isolate">
        <NeonPageBg />
        <Hero />
        <Teaser />
        <Inside />
        <Venue />
        <Tickets promoCode={promoCode} />
        <DressCode />
        <Faq />
        <FinalCta promoCode={promoCode} />
      </main>
      <SiteFooter />
      <MobileCta promoCode={promoCode} />
    </>
  )
}
