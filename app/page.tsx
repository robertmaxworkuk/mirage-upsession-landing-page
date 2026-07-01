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

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-[#050006] isolate">
        <NeonPageBg />
        <Hero />
        <Teaser />
        <Inside />
        <Venue />
        <Tickets />
        <DressCode />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
