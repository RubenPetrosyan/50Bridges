import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Logo */}
        <div className="footer-col">
          <Link href="/" className="footer-logo">
           <Image
            src="/logo.png"
            alt="Fifty Bridges Truck Insurance"
            width={128}
            height={64}
            className="brand-logo"
          />
          </Link>

          <p>
            Independent truck insurance broker helping owner-operators and
            trucking companies across the United States.
          </p>

          <Link href="/request-a-quote" className="footer-cta">
            Request a Quote
          </Link>
        </div>

        {/* Services */}
        <div className="footer-col">
          <strong>Services</strong>
          <ul>
            <li>
              <Link href="/commercial-truck-insurance">
                Commercial Truck Insurance
              </Link>
            </li>
            <li>
              <Link href="/owner-operator-truck-insurance">
                Owner-Operator Insurance
              </Link>
            </li>
            <li>
              <Link href="/small-fleet-truck-insurance">
                Small Fleet Insurance
              </Link>
            </li>
            <li>
              <Link href="/cargo-insurance">Cargo Insurance</Link>
            </li>
            <li>
              <Link href="/truck-liability-insurance">
                Liability Insurance
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <strong>Company</strong>
          <ul>
            <li>
              <Link href="/request-a-quote">Request a Quote</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/50-U.S.-States">50 U.S. States</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Fifty Bridges. All rights reserved.
      </div>
    </footer>
  );
}
