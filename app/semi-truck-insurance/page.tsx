import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Semi-Truck Insurance USA | Fifty Bridges",
  description:
    "Affordable semi-truck insurance for owner-operators and fleets. Fifty Bridges compares top carriers to provide compliant coverage across the USA.",
  alternates: {
    canonical: "https://www.50bridges.com/semi-truck-insurance/",
  },
  openGraph: {
    title: "Semi-Truck Insurance USA | Fifty Bridges",
    description:
      "Affordable semi-truck insurance for owner-operators and fleets. Fifty Bridges compares top carriers to provide compliant coverage across the USA.",
    url: "https://www.50bridges.com/semi-truck-insurance/",
    type: "website",
  },
};


export default function SemiTruckInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Semi-Truck Insurance in the USA</h1>

        <p>
          Owning or operating a semi-truck comes with serious risk — and the right
          insurance matters. At <strong>Fifty Bridges</strong>, we help drivers
          and trucking companies secure reliable{" "}
          <strong>semi-truck insurance</strong> that protects their equipment and
          keeps them compliant.
        </p>

        <p>
          As an independent truck insurance broker, we compare multiple carriers
          to find coverage that fits how you operate — not a one-size-fits-all
          policy.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Semi-Truck Insurance for Drivers & Fleets</h2>

        <p>We insure:</p>

        <ul className="hover-list">
          <li>Owner-operators with one or more semi-trucks</li>
          <li>Small and mid-size trucking fleets</li>
          <li>New authorities and established carriers</li>
          <li>Local, regional, and long-haul operations</li>
        </ul>

        <p>
          No matter how or where you run, we insure you{" "}
          <strong>correctly</strong>.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Semi-Truck Insurance Coverage Options</h2>

        <p>Coverage commonly includes:</p>

        <ul className="hover-list">
          <li>Primary auto liability</li>
          <li>Physical damage insurance</li>
          <li>Motor truck cargo insurance</li>
          <li>General liability</li>
          <li>Non-trucking liability (bobtail)</li>
          <li>Occupational accident coverage</li>
        </ul>

        <p>
          All policies are structured to meet{" "}
          <strong>FMCSA and DOT requirements</strong>.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Choose Fifty Bridges for Semi-Truck Insurance</h2>

        <ul className="hover-list">
          <li>Independent access to top trucking insurers</li>
          <li>Competitive semi-truck insurance rates</li>
          <li>Fast quotes with minimal hassle</li>
          <li>Brokers who understand real trucking risks</li>
          <li>Nationwide coverage availability</li>
        </ul>

        <p>
          We work for <strong>you</strong> — not the insurance company.
        </p>
      </section>

      {/* FINAL CONTEXT */}
      <section className="section">
        <h2>Complete Protection for Your Semi-Truck</h2>

        <p>
          Semi-truck insurance is often paired with{" "}
          <Link href="/physical-damage-insurance" className="text-link">
            physical damage coverage
          </Link>{" "}
          and{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>{" "}
          to fully protect your truck, freight, and income.
        </p>
      </section>
    </main>
  );
}