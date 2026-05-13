"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

// ── Animated character (text fan-out) ─────────────────────────────────────────
function AnimatedChar({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: {
  char: string
  index: number
  centerIndex: number
  scrollYProgress: MotionValue<number>
  className?: string
}) {
  const isSpace = char === " "
  const dist = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 55, 0])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [dist * 45, 0])

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-3", className)}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  )
}

// ── Animated icon (flat rise) ─────────────────────────────────────────────────
function AnimatedIcon({
  src,
  label,
  index,
  centerIndex,
  scrollYProgress,
}: {
  src: string
  label: string
  index: number
  centerIndex: number
  scrollYProgress: MotionValue<number>
}) {
  const dist = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 60, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(dist) * 60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])

  return (
    <motion.div className="flex flex-col items-center gap-3" style={{ x, opacity }}>
      <motion.img
        src={src}
        alt={label}
        className="h-12 w-12 shrink-0 object-contain will-change-transform"
        style={{ scale, y, filter: "invert(1)", opacity: 0.55 }}
      />
      <span className="text-[11px] text-white/25 tracking-wider uppercase">{label}</span>
    </motion.div>
  )
}

// ── Animated icon (rotated / perspective) ─────────────────────────────────────
function AnimatedIconRotate({
  src,
  label,
  index,
  centerIndex,
  scrollYProgress,
}: {
  src: string
  label: string
  index: number
  centerIndex: number
  scrollYProgress: MotionValue<number>
}) {
  const dist = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 90, 0])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [dist * 45, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(dist) * 25, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.65, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])

  return (
    <motion.div className="flex flex-col items-center gap-3" style={{ x, opacity }}>
      <motion.img
        src={src}
        alt={label}
        className="h-12 w-12 shrink-0 object-contain will-change-transform"
        style={{ rotate, y, scale, filter: "invert(1)", opacity: 0.55 }}
      />
      <span className="text-[11px] text-white/25 tracking-wider uppercase">{label}</span>
    </motion.div>
  )
}

// ── Bracket SVG ───────────────────────────────────────────────────────────────
function Bracket({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const headline = "Garanterat resultat — varje gång"

const partnerIcons = [
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoft.svg", label: "Microsoft" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg",  label: "LinkedIn"  },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/google.svg",    label: "Google"    },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg",    label: "Notion"    },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/slack.svg",     label: "Slack"     },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/zoom.svg",      label: "Zoom"      },
]

// ── Main section ──────────────────────────────────────────────────────────────
export function TextScrollSection() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sp1 } = useScroll({ target: ref1 })
  const { scrollYProgress: sp2 } = useScroll({ target: ref2 })
  const { scrollYProgress: sp3 } = useScroll({ target: ref3 })

  const chars = headline.split("")
  const charCenter = Math.floor(chars.length / 2)
  const iconCenter = Math.floor(partnerIcons.length / 2)

  const eyebrowOpacity = useTransform(sp1, [0, 0.25], [0, 1])
  const sublineOpacity = useTransform(sp1, [0.1, 0.4], [0, 1])
  const lineOpacity = useTransform(sp1, [0, 0.15], [0.15, 0.5])

  return (
    <div style={{ background: "#050810" }}>

      {/* ── Block 1 — headline fan-out ──────────────────────────────────── */}
      <div
        ref={ref1}
        className="relative flex h-[220vh] items-center justify-center overflow-hidden px-6"
      >
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(78,127,245,0.07) 0%, transparent 100%)" }} />

        <motion.div
          className="absolute top-0 left-1/4 right-1/4 h-px"
          style={{
            opacity: lineOpacity,
            background: "linear-gradient(to right, transparent, #4E7FF5, transparent)",
          }}
        />

        <div className="relative w-full max-w-5xl text-center" style={{ perspective: "600px" }}>
          <motion.p
            className="mb-6 text-[11px] tracking-[0.35em] uppercase text-white/20"
            style={{ opacity: eyebrowOpacity }}
          >
            Projektgaranti AB · Stockholm
          </motion.p>

          <div className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tight text-white leading-none">
            {chars.map((char, i) => (
              <AnimatedChar
                key={i}
                char={char}
                index={i}
                centerIndex={charCenter}
                scrollYProgress={sp1}
                className={
                  char === "—"
                    ? "text-[#4E7FF5] mx-2"
                    : i > charCenter
                    ? "text-white/75"
                    : "text-white"
                }
              />
            ))}
          </div>

          <motion.p
            className="mt-6 text-white/30 text-base font-normal tracking-wide"
            style={{ opacity: sublineOpacity }}
          >
            25+ år av bevisad excellens i Stockholmsregionen
          </motion.p>
        </div>
      </div>

      {/* ── Block 2 — flat icon rise ────────────────────────────────────── */}
      <div
        ref={ref2}
        className="relative mt-[-100vh] flex h-[220vh] flex-col items-center justify-center gap-12 overflow-hidden px-6"
      >
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 100%)" }} />

        <p className="relative flex items-center justify-center gap-4 text-xl font-semibold tracking-tight text-white/60">
          <Bracket className="h-10 text-white/15" />
          <span>Plattformar & partnerverktyg</span>
          <Bracket className="h-10 scale-x-[-1] text-white/15" />
        </p>

        <div className="relative flex flex-wrap items-end justify-center gap-10 md:gap-14">
          {partnerIcons.map((icon, i) => (
            <AnimatedIcon
              key={i}
              src={icon.src}
              label={icon.label}
              index={i}
              centerIndex={iconCenter}
              scrollYProgress={sp2}
            />
          ))}
        </div>
      </div>

      {/* ── Block 3 — rotating perspective icons ────────────────────────── */}
      <div
        ref={ref3}
        className="relative mt-[-100vh] flex h-[220vh] flex-col items-center justify-center gap-12 overflow-hidden px-6"
      >
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 100%)" }} />

        <p className="relative flex items-center justify-center gap-4 text-xl font-semibold tracking-tight text-white/60">
          <Bracket className="h-10 text-white/15" />
          <span>Digital infrastruktur</span>
          <Bracket className="h-10 scale-x-[-1] text-white/15" />
        </p>

        <div
          className="relative flex flex-wrap items-center justify-center gap-10 md:gap-14"
          style={{ perspective: "600px" }}
        >
          {partnerIcons.map((icon, i) => (
            <AnimatedIconRotate
              key={i}
              src={icon.src}
              label={icon.label}
              index={i}
              centerIndex={iconCenter}
              scrollYProgress={sp3}
            />
          ))}
        </div>

        {/* Fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #060B18)" }} />
      </div>

    </div>
  )
}
