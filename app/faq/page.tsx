import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Insurance FAQs | Fifty Bridges",
  description:
    "Answers to common truck insurance questions. Learn about costs, FMCSA requirements, coverage options, and how Fifty Bridges helps truckers across the USA.",
  alternates: {
    canonical: "/faq/",
  },
};

export default function FAQPage() {
  return (
    <main className="page fade-in">
      {/* HERO */}
      <section className="section">
        <h1>Truck Insurance Frequently Asked Questions</h1>

        <p>
          Below are answers to some of the most common questions truckers ask
          about insurance, compliance, and coverage options. If you don’t see
          your question here, our brokers are always available to help.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="section section-soft">
        <h2>Common Truck Insurance Questions</h2>

        <div className="faq-item">
          <h3>How much does truck insurance cost?</h3>
          <p>
            Truck insurance costs depend on factors such as driving history,
            truck type, cargo, routes, and coverage limits. Owner-operators
            typically pay less than fleets, but rates vary based on risk.
          </p>
        </div>

        <div className="faq-item">
          <h3>What truck insurance is required by FMCSA?</h3>
          <p>
            FMCSA requires primary auto liability insurance. Cargo insurance may
            also be required by brokers or shippers depending on what you haul.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do owner-operators need cargo insurance?</h3>
          <p>
            Yes. Most brokers and shippers require owner-operators to carry motor
            truck cargo insurance in order to move freight.
          </p>
        </div>

        <div className="faq-item">
          <h3>What is the difference between bobtail and non-trucking liability?</h3>
          <p>
            Bobtail insurance covers driving without a trailer attached.
            Non-trucking liability covers personal use when you are not under
            dispatch.
          </p>
        </div>

        <div className="faq-item">
          <h3>How fast can I get a truck insurance quote?</h3>
          <p>
            In many cases, quotes can be provided the same day once your operation
            details and required documentation are reviewed.
          </p>
        </div>

        <div className="faq-item">
          <h3>Does liability insurance cover damage to my truck?</h3>
          <p>
            No. Liability insurance does not cover damage to your truck. You need{" "}
            <Link href="/physical-damage-insurance" className="text-link">
              physical damage insurance
            </Link>{" "}
            for collision and comprehensive protection.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you insure new trucking authorities?</h3>
          <p>
            Yes. Fifty Bridges works with new authorities and helps them secure
            compliant truck insurance coverage from day one.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you insure small trucking fleets?</h3>
          <p>
            Yes. We specialize in insurance for small and growing fleets with
            2–20 trucks.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you offer coverage nationwide?</h3>
          <p>
            Yes. We provide truck insurance coverage across the United States.
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <h2>Learn More About Truck Insurance Coverage</h2>

        <p>
          Explore our{" "}
          <Link href="/commercial-truck-insurance" className="text-link">
            commercial truck insurance
          </Link>{" "}
          solutions or coverage designed specifically for{" "}
          <Link href="/owner-operator-truck-insurance" className="text-link">
            owner-operators
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
