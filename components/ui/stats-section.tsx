"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { value: 25,  suffix: "+",    label: "År i branschen",       sub: "Vi vet vad vi pratar om",            primary: true  },
  { value: 400, suffix: "+",    label: "Glada kunder",         sub: "Från små renoveringar till nybyggen", primary: false },
  { value: 98,  suffix: "%",    label: "Skulle anlita oss igen", sub: "Det säger vi med stolthet",        primary: true  },
  { value: 12,  suffix: " Mdr", label: "Hanterat projektvärde", sub: "Stora och små, vi tar hand om alla", primary: false },
]

function CountUp({ target, suffix, primary }: { target: number; suffix: string; primary: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 70
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + increment, target)
          setCount(Math.round(current))
          if (current >= target) clearInterval(timer)
        }, 1600 / steps)
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums"
      style={{ color: primary ? "#C4A06A" : "rgba(240,237,232,0.7)" }}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stat-item", start: "top 88%" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-6" style={{ background: "#0B0B0A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "stat-item flex flex-col items-center text-center py-10 px-3 md:px-6",
                i % 2 === 0 ? "border-r" : "",
                i < 2 ? "border-b" : "",
                i < stats.length - 1 ? "lg:border-r" : "lg:border-r-0",
                "lg:border-b-0",
              ].filter(Boolean).join(" ")}
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="text-[clamp(2.5rem,4.5vw,4rem)] font-black tracking-[-0.04em] leading-none mb-3">
                <CountUp target={s.value} suffix={s.suffix} primary={s.primary} />
              </div>
              <div className="text-sm font-medium tracking-tight mb-1" style={{ color: "#F0EDE8" }}>
                {s.label}
              </div>
              <div className="text-[11px]" style={{ color: "rgba(240,237,232,0.25)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />
    </section>
  )
}
