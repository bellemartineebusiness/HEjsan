"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 25,  suffix: "+",    label: "Års erfarenhet",     sub: "I Stockholmsregionen",        primary: true  },
  { value: 400, suffix: "+",    label: "Genomförda projekt",  sub: "Från renovering till nybyggnad", primary: false },
  { value: 98,  suffix: "%",    label: "Kundnöjdhet",         sub: "Verifierat av kunder",           primary: true  },
  { value: 12,  suffix: " Mdr", label: "Garanterat värde",    sub: "I totalt projektvärde",          primary: false },
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
  return (
    <section className="relative py-24 px-6" style={{ background: "#0B0B0A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col items-center text-center py-10 px-3 md:px-6",
                // mobile 2-col: right border on left column only
                i % 2 === 0 ? "border-r" : "",
                // mobile 2-col: bottom border on first row only
                i < 2 ? "border-b" : "",
                // desktop 4-col: restore right borders except last, remove bottom
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
