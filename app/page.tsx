import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Inside } from "@/components/inside"
import { Lineup } from "@/components/lineup"
import { Venue } from "@/components/venue"
import { Tickets } from "@/components/tickets"
import { DressCode } from "@/components/dress-code"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-background">
        {/* Animated neon floating blobs */}
        <div className="absolute top-[5%] left-[-15%] -z-10 h-[650px] w-[650px] rounded-full bg-neon-pink/20 blur-[130px] pointer-events-none animate-float-slow" />
        <div className="absolute top-[22%] right-[-15%] -z-10 h-[750px] w-[750px] rounded-full bg-neon-orange/14 blur-[160px] pointer-events-none animate-float-reverse" />
        <div className="absolute top-[45%] left-[-10%] -z-10 h-[700px] w-[700px] rounded-full bg-neon-magenta/20 blur-[140px] pointer-events-none animate-float-slow" />
        <div className="absolute top-[68%] right-[-15%] -z-10 h-[800px] w-[800px] rounded-full bg-neon-cyan/16 blur-[170px] pointer-events-none animate-float-reverse" />
        <div className="absolute top-[85%] left-[-15%] -z-10 h-[750px] w-[750px] rounded-full bg-neon-pink/20 blur-[150px] pointer-events-none animate-float-slow" />

        {/* Subtle matrix grid and dot patterns for depth */}
        <div className="absolute inset-0 -z-20 bg-matrix-grid pointer-events-none opacity-95" />
        <div className="absolute inset-0 -z-20 bg-dot-matrix pointer-events-none opacity-80" />

        {/* Floating background palm tree silhouette vector elements */}
        <div className="absolute top-[14%] left-[1%] -z-10 opacity-[0.025] text-foreground pointer-events-none hidden lg:block">
          <svg viewBox="0 0 100 100" className="h-[280px] w-[280px] fill-none stroke-current stroke-[1.5] stroke-linecap-round">
            <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
          </svg>
        </div>
        <div className="absolute top-[48%] right-[1%] -z-10 opacity-[0.025] text-foreground pointer-events-none hidden lg:block">
          <svg viewBox="0 0 100 100" className="h-[320px] w-[320px] fill-none stroke-current stroke-[1.5] stroke-linecap-round transform scale-x-[-1]">
            <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
          </svg>
        </div>

        <Hero />
        
        {/* Beach Wave divider after Hero */}
        <div className="relative w-full overflow-hidden leading-[0] h-12 pointer-events-none -mt-6 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-card/25 fill-current">
            <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1250,80 1300,70 L1300,120 L0,120 Z" />
          </svg>
        </div>

        <Inside />
        
        {/* Beach Wave divider after Inside */}
        <div className="relative w-full overflow-hidden leading-[0] h-12 pointer-events-none my-6 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-card/15 fill-current transform rotate-180">
            <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1250,80 1300,70 L1300,120 L0,120 Z" />
          </svg>
        </div>

        <Lineup />
        <Venue />
        <Tickets />
        <DressCode />
        
        {/* Wave divider after DressCode */}
        <div className="relative w-full overflow-hidden leading-[0] h-12 pointer-events-none my-6 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-card/20 fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>

        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
