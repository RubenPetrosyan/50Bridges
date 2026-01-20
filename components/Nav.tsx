"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={close}>
          <Image
            src="/logo.png"
            alt="Fifty Bridges Truck Insurance"
            width={220}
            height={64}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link href="/owner-operator-truck-insurance">Owner-Operator</Link>
          <Link href="/commercial-truck-insurance">Commercial</Link>
          <Link href="/small-fleet-truck-insurance">Small Fleet</Link>
          <Link href="/semi-truck-insurance">Semi-Truck</Link>
          <Link href="/cargo-insurance">Cargo</Link>
          <Link href="/truck-liability-insurance">Liability</Link>
          <Link href="/physical-damage-insurance">Physical Damage</Link>
          <Link href="/50-U.S.-States">50 U.S. States</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        {/* Dark mode toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* CTA */}
        <Link href="/request-a-quote" className="nav-cta">
          Request a Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${open ? "show" : ""}`}>
        <Link href="/owner-operator-truck-insurance" onClick={close}>Owner-Operator</Link>
        <Link href="/commercial-truck-insurance" onClick={close}>Commercial</Link>
        <Link href="/small-fleet-truck-insurance" onClick={close}>Small Fleet</Link>
        <Link href="/semi-truck-insurance" onClick={close}>Semi-Truck</Link>
        <Link href="/cargo-insurance" onClick={close}>Cargo</Link>
        <Link href="/truck-liability-insurance" onClick={close}>Liability</Link>
        <Link href="/physical-damage-insurance" onClick={close}>Physical Damage</Link>
        <Link href="/50-U.S.-States" onClick={close}>50 U.S. States</Link>
        <Link href="/faq" onClick={close}>FAQ</Link>

        <Link href="/request-a-quote" className="nav-cta mobile-cta" onClick={close}>
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}
