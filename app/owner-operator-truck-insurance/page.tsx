import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owner-Operator Truck Insurance USA | Fifty Bridges",
  description:
    "Affordable owner-operator truck insurance for independent drivers. Fifty Bridges helps owner-operators across the USA get compliant, cost-effective coverage.",
  alternates: {
    canonical: "https://www.50bridges.com/owner-operator-truck-insurance/",
  },
  openGraph: {
    title: "Owner-Operator Truck Insurance USA | Fifty Bridges",
    description:
      "Affordable owner-operator truck insurance for independent drivers. Fifty Bridges helps owner-operators across the USA get compliant, cost-effective coverage.",
    url: "https://www.50bridges.com/owner-operator-truck-insurance/",
    type: "website",
  },
};


export default function OwnerOperatorTruckInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Owner-Operator Truck Insurance in the USA</h1>

        <p>
          Running your own truck means taking on real responsibility. At{" "}
          <strong>Fifty Bridges</strong>, we help owner-operators get truck
          insurance that actually fits how they work — not overpriced,
          one-size-fits-all policies.
        </p>

        <p>
          As an independent truck insurance broker, we shop multiple carriers to
          find coverage that meets <strong>FMCSA requirements</strong> and
          protects your income on the road.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Insurance Designed for Owner-Operators</h2>

        <p>
          Whether you’re leased to a motor carrier or operating under your own
          authority, we tailor policies specifically for:
        </p>

        <ul className="hover-list">
          <li>Single-truck owner-operators</li>
          <li>New authorities</li>
          <li>Experienced independent drivers</li>
        </ul>

        <p>
          We understand the difference — and we insure you{" "}
          <strong>correctly</strong>.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Owner-Operator Truck Insurance Coverage</h2>

        <p>Common coverage options include:</p>

        <ul className="hover-list">
          <li>Primary auto liability</li>
          <li>Motor truck cargo insurance</li>
          <li>Physical damage coverage</li>
          <li>Non-trucking liability (bobtail)</li>
          <li>General liability</li>
          <li>Occupational accident insurance</li>
        </ul>

        <p>
          All policies are structured to stay{" "}
          <strong>DOT & FMCSA compliant</strong>.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Owner-Operators Choose Fifty Bridges</h2>

        <ul className="hover-list">
          <li>Independent access to top trucking insurers</li>
          <li>Competitive owner-operator insurance rates</li>
          <li>Fast quotes with minimal paperwork</li>
          <li>Clear explanations — no insurance confusion</li>
          <li>Coverage available nationwide</li>
        </ul>

        <p>
          We work for <strong>you</strong>, not the insurance company.
        </p>
      </section>

      {/* COST */}
      <section className="section">
        <h2>Affordable Truck Insurance for Owner-Operators</h2>

        <p>
          Insurance costs can make or break an owner-operator. That’s why we
          compare carriers, adjust deductibles, and structure policies to help
          reduce premiums without leaving gaps in coverage.
        </p>

        <p>
          Depending on how you operate, you may also need{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          or{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
