"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = ["garanterat", "i tid", "i budget", "certifierat", "tryggt"]

const trust = [
  "ISO 9001-certifierad",
  "400+ nöjda kunder",
  "Familjeföretag sedan 1998",
]

export function Hero() {
  const [idx, setIdx] = useState(0)
  const sectionRef   = useRef<HTMLElement>(null)
  const imgRef       = useRef<HTMLImageElement>(null)
  const contentRef   = useRef<HTMLDivElement>(null)

  // Word rotation
  useEffect(() => {
    const id = setTimeout(() => setIdx(i => (i + 1) % titles.length), 3800)
    return () => clearTimeout(id)
  }, [idx])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // 1. Background image: zoom out on entrance
      gsap.from(imgRef.current, {
        scale: 1.08,
        duration: 1.8,
        ease: "power2.out",
      })

      // 2. Content: staggered fade-up entrance
      gsap.from(".hero-item", {
        autoAlpha: 0,
        y: 28,
        duration: 1,
        stagger: 0.11,
        ease: "power3.out",
        delay: 0.3,
      })

      // 3. Background image: subtle parallax on scroll
      gsap.to(imgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          once: false,
        },
      })

      // 4. Content: fade out + lift as you scroll away
      gsap.to(contentRef.current, {
        autoAlpha: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "80% top",
          scrub: true,
          once: false,
        },
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden"
      style={{ background: "#0B0B0A" }}
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1641785735204-d9ba5817cbf7?w=1920&q=80"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.35, transformOrigin: "center center" }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,11,10,0.65) 0%, rgba(11,11,10,0.5) 40%, rgba(11,11,10,0.85) 100%)",
        }}
      />

      {/* Gold glow — animated pulse */}
      <div
        className="absolute inset-0 pointer-events-none hero-glow"
        style={{
          background:
            "radial-gradient(ellipse 100% 55% at 50% -5%, rgba(196,160,106,0.13) 0%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      <div ref={contentRef} className="relative w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-9">

        {/* Badge */}
        <div
          className="hero-item inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] tracking-[0.32em] uppercase"
          style={{
            borderColor: "rgba(196,160,106,0.2)",
            color: "rgba(240,237,232,0.32)",
            background: "rgba(196,160,106,0.04)",
          }}
        >
          Projektgaranti AB · Vi finns här för dig
        </div>

        {/* Heading */}
        <div className="hero-item w-full flex flex-col items-center">
          <h1
            className="text-[clamp(2rem,7.5vw,7.5rem)] font-black tracking-[-0.04em] leading-[0.92] text-center"
            style={{ color: "#F0EDE8" }}
          >
            Ditt byggprojekt
          </h1>

          {/* Animated word */}
          <div
            className="relative overflow-hidden w-full"
            style={{ height: "clamp(1.95rem,7.2vw,7.2rem)", marginTop: "0.08em" }}
          >
            <span
              key={idx}
              className="absolute inset-x-0 text-center font-black tracking-[-0.04em]"
              style={{
                fontSize: "clamp(2rem,7.5vw,7.5rem)",
                lineHeight: 0.92,
                color: "#C4A06A",
                animation: "hero-word-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                willChange: "transform, opacity",
              }}
            >
              {titles[idx]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="hero-item max-w-[42ch] text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(240,237,232,0.37)" }}
        >
          Vi hjälper dig att bygga rätt från start. Med oss vid din
          sida slipper du obehagliga överraskningar längs vägen.
        </p>

        {/* CTAs */}
        <div className="hero-item flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="outline">
            <a href="#kontakt">
              Prata med oss <ArrowRight size={15} />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#om-oss">Om oss</a>
          </Button>
        </div>

        {/* Trust row */}
        <div className="hero-item flex flex-wrap justify-center gap-x-6 gap-y-2">
          {trust.map(t => (
            <span
              key={t}
              className="flex items-center gap-1.5 text-[11px]"
              style={{ color: "rgba(240,237,232,0.18)" }}
            >
              <CheckCircle2 size={11} style={{ color: "rgba(196,160,106,0.35)" }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F0F0E)" }}
      />
    </section>
  )
}
