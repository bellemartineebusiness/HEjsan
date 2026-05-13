"use client"

import {
  ShieldCheck,
  ClipboardList,
  BarChart2,
  FileCheck2,
  Scale,
  BookOpen,
} from "lucide-react"

// Two accent colors only — gold (primary) and slate (secondary)
const GOLD  = "#C4A06A"
const SLATE = "#8A9BB0"

const services = [
  {
    icon: ShieldCheck,
    accent: GOLD,
    title: "Projektgaranti",
    description: "Vi tar fullt ansvar för hela projektcykeln och garanterar att slutresultatet möter avtalade krav på funktion, tidplan och ekonomi.",
    tag: "Kärntjänst",
  },
  {
    icon: ClipboardList,
    accent: SLATE,
    title: "Byggkontroll",
    description: "Oberoende kontroll och besiktning under byggskedet säkerställer att arbetet utförs fackmässigt och enligt gällande normer.",
    tag: "Kvalitet",
  },
  {
    icon: BarChart2,
    accent: GOLD,
    title: "Riskanalys",
    description: "Proaktiv identifiering av risker tidigt i projektet minimerar kostsamma överraskningar och förseningar i byggprocessen.",
    tag: "Analys",
  },
  {
    icon: FileCheck2,
    accent: SLATE,
    title: "Garantihantering",
    description: "Vi administrerar garantiärenden mot leverantörer och entreprenörer under hela garantitiden efter färdigställande.",
    tag: "Förvaltning",
  },
  {
    icon: Scale,
    accent: GOLD,
    title: "Tvistlösning",
    description: "Expertstöd vid tekniska tvister och reklamationer ger dig ett starkt underlag för en rättvis och effektiv lösning.",
    tag: "Juridik",
  },
  {
    icon: BookOpen,
    accent: SLATE,
    title: "Rådgivning",
    description: "Strategisk rådgivning till beställare, förvaltare och investerare kring tekniska krav, kalkyl och upphandlingsformer.",
    tag: "Strategi",
  },
]

export function ServicesSection() {
  return (
    <section id="tjänster" className="relative py-36 px-6" style={{ background: "#0F0F0E" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#C4A06A" }}>
            Vad vi gör
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-none"
              style={{ color: "#F0EDE8" }}>
              Våra tjänster
            </h2>
            <p className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(240,237,232,0.35)" }}>
              Specialister på byggprojekt med över 25 års erfarenhet i Stockholmsregionen.
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
                className="p-8 flex flex-col"
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
