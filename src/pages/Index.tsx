import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Timeline } from "@/components/Timeline"
import { Pricing } from "@/components/Pricing"
import { Process } from "@/components/Process"
import { Documents } from "@/components/Documents"
import { Results } from "@/components/Results"
import { Regulations } from "@/components/Regulations"
import { PricingFactors } from "@/components/PricingFactors"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Timeline />
      <Pricing />
      <Process />
      <Documents />
      <Results />
      <Regulations />
      <PricingFactors />
      <Contact />
      <Footer />
    </main>
  )
}