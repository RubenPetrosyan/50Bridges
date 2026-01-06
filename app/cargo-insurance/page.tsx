import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motor Truck Cargo Insurance USA | Fifty Bridges",
  description:
    "Protect your freight with motor truck cargo insurance. Fifty Bridges helps owner-operators and fleets across the USA get compliant, affordable cargo coverage.",
  alternates: {
    canonical: "/cargo-insurance/",
  },
};

export default function CargoInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Motor Truck Cargo Insurance in the USA</h1>

        <p>
          Cargo damage or loss can put your business at risk fast. At{" "}
          <strong>Fifty Bridges</strong>, we help truckers and trucking companies
          secure reliable <strong>motor truck cargo insurance</strong> that
          protects the freight you haul and meets broker and shipper
          requirements.
        </p>

        <p>
          As an independent truck insurance broker, we match you with coverage
          based on what you haul, where you operate, and the contracts you work
          under.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Cargo Insurance for Trucking Operations</h2>

        <p>We arrange cargo insurance for:</p>

        <ul className="hover-list">
          <li>Owner-operators</li>
          <li>Small and mid-size trucking fleets</li>
          <li>Local, regional, and long-haul carriers</li>
          <li>Dry van, reefer, flatbed, and specialized freight</li>
        </ul>

        <p>
          No matter what you haul, we make sure your cargo is insured{" "}
          <strong>correctly</strong>.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Motor Truck Cargo Insurance Coverage</h2>

        <p>Coverage may include protection for:</p>

        <ul className="hover-list">
          <li>Freight loss or damage</li>
          <li>Loading and unloading incidents</li>
          <li>Theft and vandalism</li>
          <li>Refrigeration breakdown (reefer)</li>
          <li>Coverage per shipment or per occurrence</li>
        </ul>

        <p>
          Limits and deductibles are structured to align with your broker and
          shipper contracts.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Choose Fifty Bridges for Cargo Insurance</h2>

        <ul className="hover-list">
          <li>Access to top cargo insurance carriers</li>
          <li>Competitive cargo insurance rates</li>
          <li>Coverage aligned with shipper requirements</li>
          <li>Fast certificates of insurance</li>
          <li>Nationwide availability</li>
        </ul>

        <p>
          Our goal is simple: protect your freight and your income without
          overpaying.
        </p>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <h2>Complete Protection for Your Operation</h2>

        <p>
          Cargo insurance is often paired with{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          and{" "}
          <Link href="/truck-liability-insurance" className="text-link">
            truck liability coverage
          </Link>{" "}
          to ensure full protection on and off the road.
        </p>
      </section>
    </main>
  );
}
