import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Insurance Broker USA | Commercial Truck Insurance",
  description:
    "Fifty Bridges is an independent truck insurance broker helping owner-operators and fleets get affordable commercial truck insurance across the USA.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="page fade-in">
      <section className="section">
        <h1>Truck Insurance Broker for Truckers Across the USA</h1>

        <p>
          At <strong>Fifty Bridges</strong>, we help truckers and trucking
          companies find the right insurance without the stress. As an
          independent truck insurance broker, we work with owner-operators and
          fleets nationwide.
        </p>

        <p>
          We know trucking isn’t just a business —{" "}
          <strong>it’s your livelihood</strong>.
        </p>
      </section>

      <section className="section section-soft">
        <h2>Insurance Built for How You Actually Operate</h2>

        <p>
          No two trucking operations are the same. That’s why we don’t push
          one-size-fits-all policies. We take the time to understand your
          operation and match you with coverage that makes sense.
        </p>

        <ul className="hover-list">
          <li>Owner-operator truck insurance</li>
          <li>Small and mid-size fleet insurance</li>
          <li>Semi-truck and tractor insurance</li>
          <li>New ventures and established carriers</li>
        </ul>
      </section>

      <section className="section">
        <h2>Truck Insurance Coverage Options</h2>

        <ul className="hover-list">
          <li>Primary auto liability</li>
          <li>Motor truck cargo insurance</li>
          <li>Physical damage coverage</li>
          <li>General liability</li>
          <li>Non-trucking liability (bobtail)</li>
          <li>Occupational accident coverage</li>
        </ul>
      </section>

      <section className="section section-soft">
        <h2>Why Truckers Choose Fifty Bridges</h2>

        <ul className="hover-list">
          <li>Independent access to top U.S. trucking insurers</li>
          <li>Competitive truck insurance quotes</li>
          <li>Fast turnaround times</li>
          <li>Clear explanations — no insurance jargon</li>
          <li>Nationwide coverage</li>
        </ul>
      </section>

      <section className="section">
        <h2>Insurance for Owner-Operators and Fleets</h2>

        <p>
          Whether you run one truck or manage a growing fleet, we shop multiple
          carriers to find coverage that fits your operation and your budget.
        </p>
      </section>
    </main>
  );
}
