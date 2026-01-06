import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nationwide Truck Insurance Broker | Truck Insurance in All 50 States",
  description:
    "Nationwide truck insurance broker serving owner-operators and fleets in all 50 U.S. states. Get compliant truck insurance that meets state and FMCSA requirements.",
  alternates: {
    canonical: "/truck-insurance/",
  },
};

export default function TruckInsuranceNationwidePage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Nationwide Truck Insurance Across All 50 U.S. States</h1>

        <p>
          Truck insurance requirements vary widely across the United States.
          Each state enforces its own rules, filing requirements, minimum limits,
          and risk considerations — while interstate carriers must also comply
          with <strong>FMCSA regulations</strong>.
        </p>

        <p>
          At <strong>Fifty Bridges</strong>, we specialize in{" "}
          <strong>nationwide truck insurance</strong> for owner-operators and
          trucking companies operating in one state or across all 50 U.S.
          states. Our role as an independent truck insurance broker allows us to
          match your operation with carriers that understand your routes,
          authority, and compliance obligations.
        </p>

        <p>
          Whether your home state is California, Texas, Florida, New York, or
          anywhere in between, we help ensure your trucking insurance is
          structured correctly — not just quoted cheaply.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-soft">
        <h2>Truck Insurance Solutions for Truckers Nationwide</h2>

        <p>
          Our nationwide truck insurance programs are designed for a wide range
          of trucking operations throughout the United States, including:
        </p>

        <ul className="hover-list">
          <li>Independent owner-operators</li>
          <li>Small and mid-size trucking fleets</li>
          <li>Large multi-state fleet operations</li>
          <li>New DOT authorities and startups</li>
          <li>Established motor carriers expanding into new states</li>
          <li>Local, regional, and long-haul interstate carriers</li>
        </ul>

        <p>
          No matter which states you operate in, we help you stay compliant,
          insured, and positioned to grow.
        </p>
      </section>

      {/* STATE BY STATE */}
      <section className="section">
        <h2>Truck Insurance That Accounts for State-by-State Requirements</h2>

        <p>
          Truck insurance is not one-size-fits-all. Each U.S. state has unique
          insurance considerations that can impact coverage structure, pricing,
          and carrier eligibility. These may include:
        </p>

        <ul className="hover-list">
          <li>Different liability minimums and filing rules</li>
          <li>State-specific endorsements and forms</li>
          <li>Varying accident frequency and loss trends</li>
          <li>Regional cargo theft and exposure patterns</li>
          <li>Local regulatory enforcement practices</li>
        </ul>

        <p>
          We work with insurance carriers that are approved and experienced in
          underwriting trucking risks across all U.S. states. This allows us to
          properly insure carriers domiciled in any state while accounting for
          where and how they operate.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="section section-soft">
        <h2>Nationwide Truck Insurance Coverage Options</h2>

        <p>
          Our role as a nationwide truck insurance broker is to design coverage
          that satisfies federal requirements, state laws, shipper contracts,
          and broker agreements. Common trucking insurance coverages include:
        </p>

        <ul className="hover-list">
          <li>
            <strong>Primary Auto Liability</strong> – Required for interstate
            motor carriers and FMCSA compliance
          </li>
          <li>
            <strong>Motor Truck Cargo Insurance</strong> – Protects freight and
            meets shipper and broker requirements
          </li>
          <li>
            <strong>Physical Damage Coverage</strong> – Covers trucks and
            trailers against collision and comprehensive losses
          </li>
          <li>
            <strong>General Liability Insurance</strong> – Covers non-driving
            business exposures
          </li>
          <li>
            <strong>Non-Trucking Liability (Bobtail)</strong> – Coverage when
            operating without a load
          </li>
          <li>
            <strong>Occupational Accident Insurance</strong> – Alternative to
            workers’ compensation for owner-operators
          </li>
        </ul>

        <p>
          Coverage is always customized based on your authority type, cargo,
          operating radius, equipment, and the states you travel through.
        </p>
      </section>

      {/* WHY US */}
      <section className="section">
        <h2>Why Choose Fifty Bridges for Nationwide Truck Insurance</h2>

        <p>
          Choosing the right truck insurance broker matters — especially when
          operating across multiple states with evolving compliance
          requirements.
        </p>

        <ul className="hover-list">
          <li>Nationwide truck insurance coverage in all 50 states</li>
          <li>Access to multiple trucking insurance carriers</li>
          <li>Experience with interstate and intrastate operations</li>
          <li>Understanding of state and FMCSA compliance requirements</li>
          <li>Fast quotes, policy issuance, and certificates of insurance</li>
        </ul>

        <p>
          We represent trucking businesses — not captive insurance carriers —
          allowing us to focus on coverage quality, compliance, and long-term
          stability.
        </p>
      </section>

      {/* PROCESS */}
      <section className="section section-soft">
        <h2>Our Nationwide Truck Insurance Process</h2>

        <p>
          Our process is designed to be efficient, transparent, and compliant
          from day one:
        </p>

        <ul className="hover-list">
          <li>Review of your DOT authority and operating states</li>
          <li>Evaluation of cargo, routes, and equipment</li>
          <li>Carrier placement based on your risk profile</li>
          <li>Policy binding and filing support when required</li>
          <li>Ongoing support for renewals, changes, and certificates</li>
        </ul>

        <p>
          Whether you are starting with one truck or managing a fleet across
          several states, our approach scales with your operation.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="section">
        <h2>Complete Insurance Solutions for Trucking Companies</h2>

        <p>
          Many carriers combine their nationwide truck insurance with{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          and{" "}
          <Link href="/cargo-insurance" className="text-link">
            cargo insurance
          </Link>{" "}
          to satisfy broker, shipper, and contract requirements across multiple
          U.S. states.
        </p>

        <p>
          If you are expanding into new states or operating nationwide, working
          with an experienced truck insurance broker helps prevent coverage
          gaps, compliance issues, and costly delays.
        </p>
      </section>
    </main>
  );
}
