import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Insurance Broker USA | Commercial Truck Insurance Nationwide",
  description:
    "Fifty Bridges is a nationwide truck insurance broker helping owner-operators and fleets secure compliant, affordable commercial truck insurance across the USA.",
  alternates: {
    canonical: "https://www.50bridges.com/",
  },
  openGraph: {
    title:
      "Truck Insurance Broker USA | Commercial Truck Insurance Nationwide",
    description:
      "Fifty Bridges is a nationwide truck insurance broker helping owner-operators and fleets secure compliant, affordable commercial truck insurance across the USA.",
    url: "https://www.50bridges.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="page fade-in">
      <article>
        {/* HERO */}
        <section className="section">
          <header>
            <h1>
              Nationwide Truck Insurance Broker for Owner-Operators & Fleets
            </h1>
          </header>

          <p>
            <strong>Fifty Bridges</strong> is an independent{" "}
            <strong>truck insurance broker</strong> helping truckers across the
            United States secure properly structured{" "}
            <strong>commercial truck insurance</strong>.
          </p>

          <p>
            From single owner-operators to growing fleets, we help you stay
            compliant, protected, and positioned to grow — without overpaying
            or guessing on coverage.
          </p>
        </section>

        {/* OPERATIONS */}
        <section className="section section-soft">
          <div className="home-split">
            {/* LEFT CONTENT */}
            <div className="home-split-text">
              <h2>Truck Insurance Built Around How You Operate</h2>

              <p>
                No two trucking operations are the same. Your cargo, routes,
                authority, and equipment all affect the coverage you need. We
                take the time to understand your operation and place you with
                carriers that specialize in trucking risk.
              </p>

              <ul className="hover-list">
                <li>Owner-operator truck insurance</li>
                <li>Small and mid-size fleet insurance</li>
                <li>Semi-truck and tractor insurance</li>
                <li>New DOT authorities and startups</li>
                <li>Established carriers expanding nationwide</li>
              </ul>
            </div>

            {/* RIGHT VIDEO */}
            <div className="home-split-media">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/mcXnz8WJ4mg?autoplay=1&mute=1&loop=1&playlist=mcXnz8WJ4mg&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="Fifty Bridges Truck Insurance"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className="section">
          <h2>Commercial Truck Insurance Coverage Options</h2>

          <p>
            We design trucking insurance programs that meet federal regulations,
            state requirements, and broker or shipper contracts.
          </p>

          <ul className="hover-list">
            <li>Primary auto liability insurance</li>
            <li>Motor truck cargo insurance</li>
            <li>Physical damage coverage for trucks and trailers</li>
            <li>General liability insurance</li>
            <li>Non-trucking liability (bobtail)</li>
            <li>Occupational accident insurance</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="section section-soft">
          <h2>Why Truckers Choose Fifty Bridges</h2>

          <p>
            Choosing the right truck insurance broker matters. We represent
            trucking businesses — not captive insurance companies — allowing us
            to focus on coverage quality, compliance, and long-term stability.
          </p>

          <ul className="hover-list">
            <li>Independent access to top U.S. trucking insurers</li>
            <li>Nationwide truck insurance solutions</li>
            <li>Fast quotes and policy issuance</li>
            <li>Clear explanations with no insurance jargon</li>
            <li>Experience with owner-operators and fleets</li>
          </ul>
        </section>

        {/* INTERNAL LINKS */}
        <section className="section">
          <h2>Insurance Solutions for Every Type of Trucker</h2>

          <p>
            Many carriers start with{" "}
            <Link
              href="/owner-operator-truck-insurance"
              className="text-link"
            >
              owner-operator truck insurance
            </Link>{" "}
            and expand into{" "}
            <Link
              href="/commercial-truck-insurance"
              className="text-link"
            >
              commercial fleet coverage
            </Link>{" "}
            as their operation grows.
          </p>

          <p>
            If you operate across state lines, our{" "}
            <Link
              href="/commercial-truck-insurance"
              className="text-link"
            >
              nationwide truck insurance
            </Link>{" "}
            solutions help ensure compliance in all 50 U.S. states.
          </p>
        </section>
      </article>
    </main>
  );
}