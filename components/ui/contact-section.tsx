"use client"

import { Mail, Phone, ArrowRight } from "lucide-react"

const contactInfo = [
  { icon: PersonIcon, label: "Kontaktperson", value: "Joacim Lind" },
  { icon: BadgeIcon, label: "Roll", value: "Ansvarig Fastighet" },
  { icon: Phone, label: "Telefon", value: "+46 70 740 1383" },
  { icon: Mail, label: "E-post", value: "info@projektgarantiab.se" },
  { icon: MapPinIcon, label: "Adress", value: "Ekerövägen 51, 178 37 Ekerö" },
]

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PersonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

function BadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2Z" />
    </svg>
  )
}

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  borderColor: "rgba(255,255,255,0.07)",
  color: "#F0EDE8",
}

export function ContactSection() {

  return (
    <section id="kontakt" className="relative py-36 px-6" style={{ background: "#0B0B0A" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 30% 60%, rgba(74,114,200,0.04) 0%, transparent 70%)" }} />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#C4A06A" }}>
            Kontakt
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] mb-5 leading-none"
            style={{ color: "#F0EDE8" }}>
            Redo att säkra
            <br />
            <span style={{ color: "#C4A06A" }}>ditt projekt?</span>
          </h2>
          <p className="text-base max-w-sm mx-auto leading-relaxed"
            style={{ color: "rgba(240,237,232,0.35)" }}>
            Kontakta oss för ett förutsättningslöst samtal om hur vi kan trygga ditt nästa byggprojekt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-xl p-4 border"
                  style={{ background: "rgba(255,255,255,0.018)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-3 h-3" style={{ color: "rgba(240,237,232,0.2)" }} />
                    <span className="text-[9px] tracking-[0.25em] uppercase"
                      style={{ color: "rgba(240,237,232,0.25)" }}>{item.label}</span>
                  </div>
                  <div className="text-sm font-medium leading-snug" style={{ color: "#F0EDE8" }}>{item.value}</div>
                </div>
              )
            })}
          </div>

          {/* Right — form */}
          <form
            className="rounded-2xl border p-7 space-y-4"
            style={{ background: "rgba(255,255,255,0.018)", borderColor: "rgba(255,255,255,0.06)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Förnamn", placeholder: "Anna" },
                { label: "Efternamn", placeholder: "Lindgren" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] mb-1.5 tracking-[0.15em] uppercase"
                    style={{ color: "rgba(240,237,232,0.3)" }}>{f.label}</label>
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm placeholder-white/18 outline-none border transition-colors duration-200"
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>

            {[
              { label: "E-post", placeholder: "anna@foretaget.se", type: "email" },
              { label: "Telefon", placeholder: "+46 70 123 456 78", type: "tel" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-[10px] mb-1.5 tracking-[0.15em] uppercase"
                  style={{ color: "rgba(240,237,232,0.3)" }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm placeholder-white/18 outline-none border transition-colors duration-200"
                  style={inputStyle}
                />
              </div>
            ))}

            <div>
              <label className="block text-[10px] mb-1.5 tracking-[0.15em] uppercase"
                style={{ color: "rgba(240,237,232,0.3)" }}>Berätta om ditt projekt</label>
              <textarea
                rows={4}
                placeholder="Kortfattad beskrivning av projektet, budget och tidplan..."
                className="w-full rounded-xl px-4 py-3 text-sm placeholder-white/18 outline-none border transition-colors duration-200 resize-none"
                style={inputStyle}
              />
            </div>

            <div className="group relative p-px rounded-xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(196,160,106,0.45), rgba(150,115,65,0.25))" }}>
              <button
                type="submit"
                className="w-full h-12 rounded-[calc(0.75rem-1px)] flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ background: "#0F0F0E", color: "rgba(240,237,232,0.85)" }}
              >
                Skicka förfrågan <ArrowRight size={14} />
              </button>
            </div>
          </form>

        </div>

        {/* Google Maps */}
        <div className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <iframe
            src="https://www.google.com/maps?q=Ekerövägen+51,+178+37+Ekerö,+Sweden&output=embed&hl=sv"
            width="100%"
            height="340"
            style={{
              border: 0,
              display: "block",
              filter: "grayscale(1) invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Projektgaranti AB — Ekerövägen 51, Ekerö"
          />
        </div>

      </div>

      {/* Footer */}
      <div className="relative max-w-6xl mx-auto mt-28 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center border"
            style={{ background: "rgba(196,160,106,0.1)", borderColor: "rgba(196,160,106,0.25)" }}>
            <span className="text-[9px] font-black" style={{ color: "#C4A06A" }}>PG</span>
          </div>
          <span className="text-xs tracking-wide" style={{ color: "rgba(240,237,232,0.2)" }}>
            © {new Date().getFullYear()} Projektgaranti AB
          </span>
        </div>
        <p className="text-xs" style={{ color: "rgba(240,237,232,0.12)" }}>
          Ekerövägen 51, 178 37 Ekerö · info@projektgarantiab.se
        </p>
      </div>
    </section>
  )
}
