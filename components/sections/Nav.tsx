"use client";
import React, { useState, useEffect } from "react";
import { NAV, SITE } from "@/lib/data";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const barColor = scrolled ? "#141210" : "#F0EEE9";

  return (
    <>
      {/* ─── Floating pill header ────────────────────────── */}
      <header
        className="fixed z-50 inset-x-0"
        style={{
          top: scrolled ? "10px" : "0px",
          padding: scrolled ? "0 clamp(12px,3vw,28px)" : "0",
          transition: "top 0.42s cubic-bezier(0.16,1,0.3,1), padding 0.42s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            maxWidth: scrolled ? "920px" : "100%",
            marginInline: "auto",
            height: scrolled ? "56px" : "66px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: scrolled ? "clamp(14px,2.5vw,28px)" : "clamp(20px,5vw,80px)",
            borderRadius: scrolled ? "100px" : "0",
            background: scrolled ? "rgba(244,241,236,0.82)" : "transparent",
            backdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
            border: scrolled ? "1px solid rgba(216,210,200,0.6)" : "none",
            boxShadow: scrolled
              ? "0 2px 20px rgba(20,18,16,0.07), 0 1px 3px rgba(20,18,16,0.05), inset 0 1px 0 rgba(255,255,255,0.7)"
              : "none",
            transition: "max-width 0.42s cubic-bezier(0.16,1,0.3,1), height 0.42s cubic-bezier(0.16,1,0.3,1), border-radius 0.42s cubic-bezier(0.16,1,0.3,1), padding 0.42s cubic-bezier(0.16,1,0.3,1), background 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease",
          }}
        >

          {/* ── Logo ───────────────────────────────────────── */}
          <a href="/" style={{ display:"flex", alignItems:"center", gap:"9px", textDecoration:"none", flexShrink:0 }}>
            {/* Clean compass/location mark — simple, readable at small sizes */}
            <div
              style={{
                width: "32px", height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #1B5E3B 0%, #2A7A50 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(27,94,59,0.35)",
              }}
            >
              <Image src="/logo.png" alt="Location pin" width={18} height={18} />
            </div>

            {/* Wordmark — two-tone: NAVI dark, SS accent */}
            <div style={{ display:"flex", alignItems:"baseline", lineHeight:1 }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.04em",
                  color: scrolled ? "#141210" : "#F0EEE9",
                  transition: "color 0.3s ease",
                }}
              >
                NAVI
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.04em",
                  color: "#2A7A50",
                  transition: "color 0.3s ease",
                }}
              >
                SS
              </span>
            </div>
          </a>

          {/* ── Desktop nav ────────────────────────────────── */}
          <nav className="hidden md:flex" style={{ alignItems:"center", gap:"clamp(14px,2vw,30px)" }}>
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={() => setActive(l.href)}
                onMouseLeave={() => setActive("")}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.63rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: 400,
                  color: active === l.href ? "#1B5E3B" : scrolled ? "rgba(74,69,64,0.75)" : "rgba(240,238,233,0.6)",
                  transition: "color 0.2s ease",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Right side: CTA + hamburger ────────────────── */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px", flexShrink:0 }}>
            {/* Desktop CTA pill */}
            <a
              href="#contact"
              className="hidden md:inline-flex"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                background: "#1B5E3B", color: "#F0EEE9",
                padding: "9px 18px", borderRadius: "100px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.63rem", letterSpacing: "0.14em", textTransform: "uppercase",
                textDecoration: "none", fontWeight: 400, whiteSpace: "nowrap",
                boxShadow: "0 2px 10px rgba(27,94,59,0.28)",
                transition: "background 0.2s, transform 0.18s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#2A7A50"; el.style.transform="translateY(-1px)"; el.style.boxShadow="0 4px 18px rgba(27,94,59,0.38)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="#1B5E3B"; el.style.transform="translateY(0)"; el.style.boxShadow="0 2px 10px rgba(27,94,59,0.28)"; }}
            >
              Get in Touch
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1 8L8 1M8 1H2.5M8 1V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden"
              style={{
                width: "36px", height: "36px",
                borderRadius: "9px",
                border: `1px solid ${scrolled ? "rgba(216,210,200,0.8)" : "rgba(240,238,233,0.25)"}`,
                background: scrolled ? "rgba(244,241,236,0.6)" : "rgba(240,238,233,0.08)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "4.5px",
                transition: "all 0.25s ease",
              }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display: "block", width: "15px", height: "1.5px", borderRadius: "2px",
                  background: barColor,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(4.2px, 4.2px)"
                    : i === 2 ? "rotate(-45deg) translate(4.2px, -4.2px)"
                    : "none"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile: right-side drawer ───────────────────── */}
      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 z-40"
        onClick={() => setOpen(false)}
        style={{
          background: "rgba(10,18,12,0.45)",
          backdropFilter: "blur(3px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer panel — slides in from the RIGHT */}
      <div
        className="md:hidden fixed top-0 right-0 bottom-0 z-50"
        style={{
          width: "min(320px, 88vw)",
          background: "rgba(248,246,241,0.98)",
          backdropFilter: "blur(28px) saturate(1.8)",
          WebkitBackdropFilter: "blur(28px) saturate(1.8)",
          borderLeft: "1px solid rgba(216,210,200,0.5)",
          boxShadow: "-8px 0 48px rgba(10,18,12,0.18)",
          transform: open ? "translateX(0)" : "translateX(110%)",
          transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid rgba(216,210,200,0.4)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          {/* Logo inside drawer */}
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{
              width:"28px", height:"28px", borderRadius:"7px",
              background:"linear-gradient(135deg,#1B5E3B 0%,#2A7A50 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.375 4.5 10.5 4.5 10.5S13.5 9.375 13.5 6c0-2.485-2.015-4.5-4.5-4.5Z" fill="#F0EEE9" opacity="0.95"/>
                <circle cx="9" cy="6" r="1.75" fill="#1B5E3B"/>
              </svg>
            </div>
            <div style={{ display:"flex", alignItems:"baseline" }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem", color:"#141210", letterSpacing:"0.04em" }}>NAVI</span>
              <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem", color:"#2A7A50", letterSpacing:"0.04em" }}>SS</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              width:"34px", height:"34px", borderRadius:"8px",
              border:"1px solid rgba(216,210,200,0.6)",
              background:"rgba(216,210,200,0.2)",
              cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 1.5L11.5 11.5M11.5 1.5L1.5 11.5" stroke="#4A4540" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding:"8px 0", flexShrink:0 }}>
          {NAV.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "15px 24px",
                borderBottom: i < NAV.length - 1 ? "1px solid rgba(216,210,200,0.35)" : "none",
                textDecoration: "none",
                transition: "background 0.18s ease, color 0.18s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(27,94,59,0.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                {/* Small index dot */}
                <span style={{
                  fontFamily:"'DM Mono',monospace", fontSize:"0.55rem",
                  letterSpacing:"0.1em", color:"rgba(42,122,80,0.6)",
                  minWidth:"20px",
                }}>
                  {String(i + 1).padStart(2,"0")}
                </span>
                <span style={{
                  fontFamily:"'Playfair Display',serif",
                  fontWeight:700, fontSize:"1.1rem",
                  letterSpacing:"-0.01em", color:"#141210",
                }}>
                  {l.label}
                </span>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity:0.25, flexShrink:0 }}>
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#141210" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          ))}
        </nav>

        {/* Spacer */}
        <div style={{ flex:1 }}/>

        {/* Bottom CTA + contact */}
        <div
          style={{
            padding:"20px 24px 32px",
            borderTop:"1px solid rgba(216,210,200,0.4)",
            display:"flex", flexDirection:"column", gap:"12px",
            flexShrink:0,
          }}
        >
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
              background:"#1B5E3B", color:"#F0EEE9",
              padding:"14px 24px", borderRadius:"100px",
              fontFamily:"'DM Mono',monospace",
              fontSize:"0.68rem", letterSpacing:"0.14em", textTransform:"uppercase",
              textDecoration:"none", fontWeight:400,
              boxShadow:"0 4px 18px rgba(27,94,59,0.28)",
            }}
          >
            Get in Touch
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>

          <div style={{ display:"flex", flexDirection:"column", gap:"5px", paddingTop:"4px" }}>
            <a href={`mailto:${SITE.email}`} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.08em", color:"rgba(74,69,64,0.5)", textDecoration:"none" }}>{SITE.email}</a>
            <a href={`tel:${SITE.phone}`}    style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.08em", color:"rgba(74,69,64,0.5)", textDecoration:"none" }}>{SITE.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
}