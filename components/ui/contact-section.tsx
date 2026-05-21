"use client"

import { Mail, Phone, ArrowRight, MapPin } from "lucide-react"

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  borderColor: "rgba(255,255,255,0.07)",
  color: "#F0EDE8",
}

export function ContactSection() {

  return (
    <section id="kontakt" className="relative py-24 md:py-36 px-6" style={{ background: "#0B0B0A" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 30% 60%, rgba(74,114,200,0.04) 0%, transparent 70%)" }} />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#C4A06A" }}>
            Kontakt
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] mb-5 leading-none"
            style={{ color: "#F0EDE8" }}>
            Låt oss ta hand
            <br />
            <span style={{ color: "#C4A06A" }}>om ditt projekt</span>
          </h2>
          <p className="text-base max-w-sm mx-auto leading-relaxed"
            style={{ color: "rgba(240,237,232,0.35)" }}>
            Hör av dig, vi svarar inom en arbetsdag och ger dig en ärlig bild av hur vi kan hjälpa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — contact card */}
          <div className="rounded-2xl border overflow-hidden w-full"
            style={{ background: "rgba(255,255,255,0.018)", borderColor: "rgba(255,255,255,0.06)" }}>

            {/* Profile header */}
            <div className="px-5 pt-6 pb-5 md:px-7 md:pt-8 md:pb-7 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-4 mb-5">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: "rgba(196,160,106,0.1)", borderColor: "rgba(196,160,106,0.25)" }}>
                  <span className="text-sm font-black" style={{ color: "#C4A06A" }}>JL</span>
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight" style={{ color: "#F0EDE8" }}>
                    Joacim Lind
                  </div>
                  <div className="text-[11px] mt-0.5 tracking-wide" style={{ color: "rgba(240,237,232,0.3)" }}>
                    Ansvarig Fastighet
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.35)" }}>
                Ansvarig för alla kundrelationer och projektuppdrag. Ställ frågor, boka möte eller skicka in en förfrågan direkt.
              </p>
            </div>

            {/* Contact rows */}
            <div className="px-5 py-5 md:px-7 md:py-6 space-y-5">
              {[
                { Icon: Phone, label: "Telefon", value: "+46 70 740 13 83", href: "tel:+46707401383" },
                { Icon: Mail,  label: "E-post",  value: "info@projektgarantiab.se", href: "mailto:info@projektgarantiab.se" },
                { Icon: MapPin, label: "Adress", value: "Ekerövägen 51, 178 37 Ekerö", href: undefined },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
                    <Icon size={13} style={{ color: "rgba(240,237,232,0.3)" }} />
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[0.25em] uppercase mb-1"
                      style={{ color: "rgba(240,237,232,0.2)" }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "#F0EDE8" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#C4A06A")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#F0EDE8")}>
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium" style={{ color: "#F0EDE8" }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            className="rounded-2xl border p-5 md:p-7 space-y-4"
            style={{ background: "rgba(255,255,255,0.018)", borderColor: "rgba(255,255,255,0.06)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="Berätta kort om projektet: typ, storlek, tidplan och eventuella utmaningar..."
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

      </div>

      {/* Full-bleed map */}
      <div className="relative mt-16 md:mt-24 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="h-65 md:h-105">
          <iframe
            src="https://www.google.com/maps?q=Ekerövägen+51,+178+37+Ekerö,+Sweden&output=embed&hl=sv"
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: "block",
              filter: "grayscale(1) invert(1) hue-rotate(180deg) brightness(0.8) contrast(0.85)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Projektgaranti AB — Ekerövägen 51, Ekerö"
          />
        </div>
        {/* Fade top edge into section */}
        <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #0B0B0A, transparent)" }} />
      </div>

      {/* Footer */}
      <div className="relative max-w-6xl mx-auto mt-10 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
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
        <p className="text-xs text-center md:text-left" style={{ color: "rgba(240,237,232,0.12)" }}>
          Ekerövägen 51 · info@projektgarantiab.se
        </p>
      </div>
    </section>
  )
}
