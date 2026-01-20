import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Physical Damage Truck Insurance USA | Fifty Bridges",
  description:
    "Protect your truck with physical damage insurance. Fifty Bridges helps owner-operators and fleets across the USA secure affordable coverage for collision and comprehensive losses.",
  alternates: {
    canonical: "https://www.50bridges.com/physical-damage-insurance/",
  },
  openGraph: {
    title: "Physical Damage Truck Insurance USA | Fifty Bridges",
    description:
      "Protect your truck with physical damage insurance. Fifty Bridges helps owner-operators and fleets across the USA secure affordable coverage for collision and comprehensive losses.",
    url: "https://www.50bridges.com/physical-damage-insurance/",
    type: "website",
  },
};


export default function PhysicalDamageInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Physical Damage Truck Insurance in the USA</h1>

        <p>
          Your truck is one of your biggest investments. At{" "}
          <strong>Fifty Bridges</strong>, we help owner-operators and trucking
          companies protect their equipment with reliable{" "}
          <strong>physical damage truck insurance</strong> designed to reduce
          costly out-of-pocket repairs.
        </p>

        <p>
          As an independent truck insurance broker, we structure coverage around
          your truck’s value and how you operate — not generic limits.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Physical Damage Insurance for Trucks</h2>

        <p>We arrange physical damage coverage for:</p>

        <ul className="hover-list">
          <li>Owner-operators</li>
          <li>Small and mid-size trucking fleets</li>
          <li>New and used trucks</li>
          <li>Financed and leased equipment</li>
        </ul>

        <p>
          Coverage is tailored to your equipment, usage, and lender
          requirements.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Physical Damage Insurance Coverage Options</h2>

        <p>Physical damage insurance typically includes:</p>

        <ul className="hover-list">
          <li>Collision coverage</li>
          <li>
            Comprehensive coverage (theft, fire, vandalism, severe weather)
          </li>
          <li>Coverage based on actual cash value or stated value</li>
          <li>Custom deductibles to help control premiums</li>
        </ul>

        <p>
          We help you avoid underinsuring your truck or overpaying for coverage.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Choose Fifty Bridges for Physical Damage Insurance</h2>

        <ul className="hover-list">
          <li>Access to top trucking insurance carriers</li>
          <li>Competitive physical damage insurance rates</li>
          <li>Coverage structured around your truck’s true value</li>
          <li>Fast quotes and certificates of insurance</li>
          <li>Nationwide coverage availability</li>
        </ul>

        <p>
          We protect what keeps you moving — without unnecessary cost.
        </p>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <h2>Complete Protection for Your Equipment</h2>

        <p>
          Physical damage insurance is commonly paired with{" "}
          <Link href="/truck-liability-insurance" className="text-link">
            truck liability insurance
          </Link>{" "}
          and{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          to ensure full protection on and off the road.
        </p>
      </section>
    </main>
  );
}
