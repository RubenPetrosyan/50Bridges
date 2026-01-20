import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Liability Insurance USA | Fifty Bridges",
  description:
    "FMCSA-compliant truck liability insurance for owner-operators and fleets. Fifty Bridges compares top carriers to deliver affordable coverage across the USA.",
  alternates: {
    canonical: "https://www.50bridges.com/truck-liability-insurance/",
  },
  openGraph: {
    title: "Truck Liability Insurance USA | Fifty Bridges",
    description:
      "FMCSA-compliant truck liability insurance for owner-operators and fleets. Fifty Bridges compares top carriers to deliver affordable coverage across the USA.",
    url: "https://www.50bridges.com/truck-liability-insurance/",
    type: "website",
  },
};


export default function TruckLiabilityInsurancePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Truck Liability Insurance in the USA</h1>

        <p>
          Truck liability insurance is required — but choosing the right coverage
          is critical. At <strong>Fifty Bridges</strong>, we help trucking
          companies and owner-operators secure reliable{" "}
          <strong>truck liability insurance</strong> that meets federal
          regulations and protects their business on the road.
        </p>

        <p>
          As an independent truck insurance broker, we structure liability
          coverage based on how you operate — not a generic policy.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Liability Insurance for Trucking Operations</h2>

        <p>We provide truck liability coverage for:</p>

        <ul className="hover-list">
          <li>Owner-operators with active authority</li>
          <li>Small and mid-size trucking fleets</li>
          <li>New authorities and established carriers</li>
          <li>Local, regional, and nationwide operations</li>
        </ul>

        <p>
          No matter how or where you operate, your policy is structured{" "}
          <strong>correctly</strong>.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section">
        <h2>Truck Liability Insurance Coverage</h2>

        <p>Liability insurance typically includes:</p>

        <ul className="hover-list">
          <li>Primary auto liability (FMCSA required)</li>
          <li>Bodily injury protection</li>
          <li>Property damage coverage</li>
          <li>Legal defense costs</li>
          <li>Coverage limits based on cargo and operations</li>
        </ul>

        <p>
          All liability policies are designed to meet{" "}
          <strong>DOT and FMCSA requirements</strong>.
        </p>
      </section>

      {/* WHY US */}
      <section className="section section-soft">
        <h2>Why Choose Fifty Bridges for Truck Liability Insurance</h2>

        <ul className="hover-list">
          <li>Access to top trucking liability carriers</li>
          <li>Competitive liability insurance rates</li>
          <li>Fast quotes and certificates</li>
          <li>Brokers who understand compliance requirements</li>
          <li>Nationwide coverage availability</li>
        </ul>

        <p>
          We make sure you’re protected —{" "}
          <strong>not overexposed</strong>.
        </p>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <h2>Complete Protection for Your Trucking Business</h2>

        <p>
          Truck liability insurance is commonly paired with{" "}
          <Link href="/physical-damage-insurance" className="text-link">
            physical damage coverage
          </Link>{" "}
          and{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>{" "}
          to ensure full protection on and off the road.
        </p>
      </section>
    </main>
  );
}
