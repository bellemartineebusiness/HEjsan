"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react"

const values = [
  "Vi jobbar bara för dig, ingen annan",
  "Certifierade proffs som verkligen bryr sig om ditt projekt",
  "Vi känner Stockholmsregionen utan och innan",
  "Du får löpande uppdateringar, inga otrevliga överraskningar",
]

export function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const imgRef      = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // Left column: stagger each direct child
      gsap.from(".about-left > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.85,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-left", start: "top 85%" },
      })

      // Right image: fade + scale in
      gsap.from(".about-image-wrap", {
        autoAlpha: 0,
        scale: 1.03,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-image-wrap", start: "top 85%" },
      })

      // Image inner parallax while scrolling through section
      gsap.to(imgRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          once: false,
        },
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="om-oss" className="relative py-24 md:py-36 px-6" style={{ background: "#0F0F0E" }}>
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-28 items-center">

          {/* Left */}
          <div className="about-left">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: "#C4A06A" }}>
              Om oss
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] mb-7 leading-none"
              style={{ color: "#F0EDE8" }}>
              Ett team som
              <br />
              <span style={{ color: "#C4A06A" }}>verkligen bryr sig</span>
            </h2>

            <p className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(240,237,232,0.45)" }}>
              Vi startade 1998 med en enkel tanke: att byggherrar ska kunna sova gott om natten.
              Sedan dess har vi hjälpt hundratals kunder att nå mål de trodde var omöjliga.
            </p>
            <p className="text-sm leading-relaxed mb-7 md:mb-10"
              style={{ color: "rgba(240,237,232,0.3)" }}>
              Vi är ett litet, engagerat team som inte tar på oss fler uppdrag än vi kan göra riktigt bra.
              Varje kund får vår fulla uppmärksamhet, från första mötet till sista besiktningen.
            </p>

            <ul className="space-y-3.5 mb-7 md:mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "rgba(240,237,232,0.45)" }}>
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: "#C4A06A" }} />
                  {v}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-[11px] tracking-wider mb-7 md:mb-10"
              style={{ color: "rgba(240,237,232,0.2)" }}>
              <MapPin size={11} />
              Ekerövägen 51, 178 37 Ekerö
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#kontakt"
                className="flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold border transition-colors duration-200"
                style={{ background: "rgba(196,160,106,0.1)", borderColor: "rgba(196,160,106,0.25)", color: "#C4A06A" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(196,160,106,0.16)"
                  e.currentTarget.style.borderColor = "rgba(196,160,106,0.4)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(196,160,106,0.1)"
                  e.currentTarget.style.borderColor = "rgba(196,160,106,0.25)"
                }}
              >
                Säg hej <ArrowRight size={13} />
              </a>
              <button
                className="h-11 px-6 rounded-xl border text-sm font-medium transition-colors duration-200"
                style={{ borderColor: "rgba(255,255,255,0.07)", color: "rgba(240,237,232,0.35)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "rgba(240,237,232,0.6)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(240,237,232,0.35)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                }}
              >
                Referensprojekt
              </button>
            </div>
          </div>

          {/* Right — image */}
          <div className="about-image-wrap relative mt-4 lg:mt-0 overflow-hidden rounded-2xl">
            <div className="rounded-2xl overflow-hidden border aspect-4/3"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <img
                ref={imgRef}
                src="https://images.unsplash.com/photo-1661760287397-4078833d3f53?w=800&q=80"
                alt="Byggprojekt"
                className="w-full h-full object-cover"
                style={{ opacity: 0.5, transformOrigin: "center center" }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 30%, rgba(15,15,14,0.9) 100%)" }} />
            </div>

            {/* Floating badge — top right */}
            <div className="hidden sm:block absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-xl px-3 py-2.5 md:px-4 md:py-3 border"
              style={{ background: "#0B0B0A", borderColor: "rgba(196,160,106,0.18)" }}>
              <div className="text-[9px] tracking-[0.25em] uppercase mb-1"
                style={{ color: "rgba(240,237,232,0.25)" }}>Certifierad</div>
              <div className="text-sm font-semibold" style={{ color: "#F0EDE8" }}>ISO 9001:2015</div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="hidden sm:block absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 rounded-xl px-3 py-2.5 md:px-4 md:py-3 border"
              style={{ background: "#0B0B0A", borderColor: "rgba(196,160,106,0.18)" }}>
              <div className="text-[9px] tracking-[0.25em] uppercase mb-1"
                style={{ color: "rgba(240,237,232,0.25)" }}>Genomförda uppdrag</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black tabular-nums" style={{ color: "#C4A06A" }}>400+</span>
                <span className="text-xs" style={{ color: "rgba(240,237,232,0.25)" }}>projekt</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />
    </section>
  )
}
