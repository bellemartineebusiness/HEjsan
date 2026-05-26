"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ShieldCheck,
  ClipboardList,
  BarChart2,
  FileCheck2,
  Scale,
  BookOpen,
} from "lucide-react"

const GOLD  = "#C4A06A"
const SLATE = "#8A9BB0"

const services = [
  {
    icon: ShieldCheck,
    accent: GOLD,
    title: "Projektgaranti",
    description: "Ditt projekt ska gå i mål i tid och inom budget. Det är vår uppgift, och vi tar den på största allvar.",
    tag: "Kärntjänst",
  },
  {
    icon: ClipboardList,
    accent: SLATE,
    title: "Byggkontroll",
    description: "Vi håller ett vaksamt öga på byggarbetsplatsen så att du slipper oroa dig. Jobbet utförs som det ska, varje gång.",
    tag: "Kvalitet",
  },
  {
    icon: BarChart2,
    accent: GOLD,
    title: "Riskanalys",
    description: "Hellre förebygga än åtgärda. Vi hittar potentiella problem tidigt så att de aldrig hinner bli dyra eller krångliga att lösa.",
    tag: "Analys",
  },
  {
    icon: FileCheck2,
    accent: SLATE,
    title: "Garantihantering",
    description: "När bygget är klart är vi fortfarande kvar. Vi hanterar garantiärenden åt dig så att du slipper krånglet.",
    tag: "Förvaltning",
  },
  {
    icon: Scale,
    accent: GOLD,
    title: "Tvistlösning",
    description: "Om något ändå går snett vet vi precis hur man reder ut det. Du får stöd och rätt dokumentation hela vägen.",
    tag: "Juridik",
  },
  {
    icon: BookOpen,
    accent: SLATE,
    title: "Beställarstöd",
    description: "Osäker på hur du ska tänka kring upphandling eller avtal? Vi sitter ner med dig och går igenom det tillsammans.",
    tag: "Råd",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // Header slides up
      gsap.from(".services-header", {
        autoAlpha: 0,
        y: 32,
        duration: 0.9,
        scrollTrigger: { trigger: ".services-header", start: "top 88%" },
      })

      // Cards: stagger with subtle scale
      gsap.from(".service-card", {
        autoAlpha: 0,
        y: 40,
        scale: 0.97,
        duration: 0.75,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-card", start: "top 88%" },
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tjänster" className="relative py-24 md:py-36 px-6" style={{ background: "#0F0F0E" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="services-header mb-12 md:mb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#C4A06A" }}>
            Vad vi gör
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-none"
              style={{ color: "#F0EDE8" }}>
              Våra tjänster
            </h2>
            <p className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(240,237,232,0.35)" }}>
              Allt du behöver, samlat hos ett team som faktiskt bryr sig.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.05)" }}>
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="service-card p-6 md:p-8 flex flex-col"
                style={{ background: "#0F0F0E" }}
              >
                <div className="flex items-center justify-between mb-8">
                  <Icon size={20} style={{ color: s.accent }} strokeWidth={1.5} />
                  <span className="text-[9px] font-medium tracking-[0.25em] uppercase"
                    style={{ color: "rgba(240,237,232,0.2)" }}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-3 tracking-tight"
                  style={{ color: "#F0EDE8" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ color: "rgba(240,237,232,0.35)" }}>
                  {s.description}
                </p>
                <div className="mt-8 h-px"
                  style={{ background: `linear-gradient(to right, ${s.accent}30, transparent)` }} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />
    </section>
  )
}
