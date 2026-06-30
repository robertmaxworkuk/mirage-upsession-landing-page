import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Venue } from "@/components/venue"
import { Lineup } from "@/components/lineup"
import { Tickets } from "@/components/tickets"
import { DiscountBanner } from "@/components/discount-banner"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Venue />
        <Lineup />
        <Tickets />
      </main>
      <SiteFooter />
      <DiscountBanner />
    </>
  )
}
