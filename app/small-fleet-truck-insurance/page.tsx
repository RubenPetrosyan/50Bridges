import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Fleet Truck Insurance USA | Fifty Bridges",
  description:
    "Small fleet truck insurance for 2–20 trucks. Fifty Bridges helps growing trucking companies across the USA get affordable, compliant fleet coverage.",
  alternates: {
    canonical: "https://www.50bridges.com/small-fleet-truck-insurance/",
  },
  openGraph: {
    title: "Small Fleet Truck Insurance USA | Fifty Bridges",
    description:
      "Small fleet truck insurance for 2–20 trucks. Fifty Bridges helps growing trucking companies across the USA get affordable, compliant fleet coverage.",
    url: "https://www.50bridges.com/small-fleet-truck-insurance/",
    type: "website",
  },
};


export default function SmallFleetTruckInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Small Fleet Truck Insurance in the USA</h1>

        <p>
          Managing a small fleet means balancing growth, risk, and cost. At{" "}
          <strong>Fifty Bridges</strong>, we help trucking businesses with{" "}
          <strong>2–20 trucks</strong> secure small fleet truck insurance that
          protects operations without overpaying.
        </p>

        <p>
          As an independent truck insurance broker, we compare multiple carriers
          to find coverage that fits your fleet today and keeps you compliant as
          you grow.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Insurance Built for Small Trucking Fleets</h2>

        <p>We work with:</p>

        <ul className="hover-list">
          <li>Small fleets with active DOT authority</li>
          <li>Growing trucking companies adding drivers and equipment</li>
          <li>Mixed local and long-haul operations</li>
        </ul>

        <p>
          Every policy is structured around your fleet size, routes, and cargo —
          not a generic template.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Small Fleet Truck Insurance Coverage Options</h2>

        <p>Common coverage includes:</p>

        <ul className="hover-list">
          <li>Primary auto liability (DOT & FMCSA compliant)</li>
          <li>Motor truck cargo insurance</li>
          <li>Physical damage coverage</li>
          <li>General liability insurance</li>
          <li>Non-trucking liability (bobtail)</li>
          <li>Occupational accident insurance</li>
        </ul>

        <p>
          All policies are designed to meet{" "}
          <strong>DOT and FMCSA requirements</strong>.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Small Fleets Choose Fifty Bridges</h2>

        <ul className="hover-list">
          <li>Independent access to top trucking insurers</li>
          <li>Competitive small fleet insurance rates</li>
          <li>Faster underwriting for growing fleets</li>
          <li>Clear guidance as your operation expands</li>
          <li>Nationwide coverage availability</li>
        </ul>

        <p>
          We help you insure today — and{" "}
          <strong>scale confidently tomorrow</strong>.
        </p>
      </section>

      {/* COST */}
      <section className="section">
        <h2>Affordable Insurance for Growing Trucking Fleets</h2>

        <p>
          As your fleet grows, insurance costs can rise quickly. We help control
          premiums by selecting the right carriers, adjusting deductibles, and
          planning coverage strategically for future expansion.
        </p>

        <p>
          Many fleets also carry{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          and{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>{" "}
          to stay fully protected.
        </p>
      </section>
    </main>
  );
}
