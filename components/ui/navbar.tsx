"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Tjänster", href: "#tjänster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "border-b backdrop-blur-2xl" : "bg-transparent"
      )}
      style={scrolled ? { background: "rgba(11,11,10,0.9)", borderColor: "rgba(255,255,255,0.05)" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
            style={{ background: "rgba(196,160,106,0.1)", borderColor: "rgba(196,160,106,0.25)" }}
          >
            <span className="text-[10px] font-black leading-none" style={{ color: "#C4A06A" }}>PG</span>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-semibold text-[13px] tracking-wide transition-colors duration-200"
              style={{ color: "rgba(240,237,232,0.8)" }}>
              Projektgaranti
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(240,237,232,0.22)" }}>
              AB · Ekerö
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium tracking-wide transition-colors duration-200"
              style={{ color: "rgba(240,237,232,0.38)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,237,232,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.38)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden md:flex items-center h-8 px-4 rounded-lg text-[12px] font-semibold border transition-colors duration-200"
          style={{
            background: "rgba(196,160,106,0.08)",
            borderColor: "rgba(196,160,106,0.2)",
            color: "#C4A06A",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(196,160,106,0.14)"
            e.currentTarget.style.borderColor = "rgba(196,160,106,0.35)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(196,160,106,0.08)"
            e.currentTarget.style.borderColor = "rgba(196,160,106,0.2)"
          }}
        >
          Boka möte
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <span className={cn("block w-5 h-px transition-all duration-200", menuOpen ? "rotate-45 translate-y-1.5" : "")}
            style={{ background: "rgba(240,237,232,0.45)" }} />
          <span className={cn("block w-5 h-px transition-all duration-200", menuOpen ? "opacity-0" : "")}
            style={{ background: "rgba(240,237,232,0.45)" }} />
          <span className={cn("block w-5 h-px transition-all duration-200", menuOpen ? "-rotate-45 -translate-y-1.5" : "")}
            style={{ background: "rgba(240,237,232,0.45)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn("md:hidden border-t overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(11,11,10,0.97)" }}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(240,237,232,0.4)" }}>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)}
            className="mt-1 h-10 flex items-center justify-center rounded-xl text-sm font-semibold border"
            style={{ background: "rgba(196,160,106,0.1)", borderColor: "rgba(196,160,106,0.25)", color: "#C4A06A" }}>
            Boka möte
          </a>
        </div>
      </div>
    </nav>
  )
}
