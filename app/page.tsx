import { Navbar } from "@/components/ui/navbar"
import { Hero } from "@/components/ui/hero"
import { ServicesSection } from "@/components/ui/services-section"
import { StatsSection } from "@/components/ui/stats-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
