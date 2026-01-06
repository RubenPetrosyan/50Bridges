import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Truck Insurance USA | Fifty Bridges",
  description:
    "Affordable commercial truck insurance for trucking companies and fleets. Fifty Bridges helps carriers across the USA get compliant, cost-effective coverage.",
  alternates: {
    canonical: "/commercial-truck-insurance/",
  },
};

export default function CommercialTruckInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Commercial Truck Insurance in the USA</h1>

        <p>
          Commercial trucking comes with real risk — and the right insurance
          matters. At <strong>Fifty Bridges</strong>, we help trucking companies
          secure reliable <strong>commercial truck insurance</strong> that meets
          federal requirements and protects your business on every mile.
        </p>

        <p>
          As an independent truck insurance broker, we compare multiple carriers
          to find coverage that fits your operation and your budget.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Commercial Truck Insurance for Trucking Companies</h2>

        <p>We work with:</p>

        <ul className="hover-list">
          <li>New and established motor carriers</li>
          <li>Small and mid-size trucking fleets</li>
          <li>Owner-operators with active authority</li>
        </ul>

        <p>
          Whether you operate locally or run long-haul routes, we structure
          policies based on how you actually operate.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Commercial Truck Insurance Coverage Options</h2>

        <p>
          We help you secure all required and optional coverage needed to stay
          compliant and protected.
        </p>

        <ul className="hover-list">
          <li>Primary auto liability (FMCSA compliant)</li>
          <li>Motor truck cargo insurance</li>
          <li>Physical damage coverage</li>
          <li>General liability insurance</li>
          <li>Non-trucking liability (bobtail)</li>
          <li>Occupational accident coverage</li>
        </ul>

        <p>
          All policies are designed to meet <strong>DOT and FMCSA</strong>{" "}
          regulations.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Choose Fifty Bridges for Commercial Truck Insurance</h2>

        <ul className="hover-list">
          <li>Independent access to top U.S. insurance carriers</li>
          <li>Competitive commercial truck insurance quotes</li>
          <li>Fast turnaround and simple onboarding</li>
          <li>Brokers who understand trucking compliance</li>
          <li>Nationwide coverage availability</li>
        </ul>

        <p>
          We work for <strong>your business</strong>, not one insurance company.
        </p>
      </section>

      {/* COST */}
      <section className="section">
        <h2>Affordable Commercial Truck Insurance That Works</h2>

        <p>
          Insurance shouldn’t slow your business down. We help reduce premiums by
          matching the right carrier, limits, and deductibles — without leaving
          dangerous coverage gaps.
        </p>

        <p>
          Depending on your operation, you may also need{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>{" "}
          or{" "}
          <Link href="/truck-liability-insurance" className="text-link">
            truck liability coverage
          </Link>
          .
        </p>
      </section>
    </main>
  );
}