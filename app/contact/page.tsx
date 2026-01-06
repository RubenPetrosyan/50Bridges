import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Truck Insurance Broker | Fifty Bridges",
  description:
    "Contact Fifty Bridges to get a fast truck insurance quote. We help owner-operators and trucking companies across the USA get compliant coverage.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="section">
        <h1>Get a Truck Insurance Quote</h1>

        <p>
          Looking for truck insurance or want to reduce your current premium?
          <strong> Fifty Bridges</strong> works with owner-operators and trucking
          companies nationwide to provide fast, compliant coverage.
        </p>
      </section>

      <section className="section section-light">
        <h2>How It Works</h2>

        <ul>
          <li>Submit your request using the form below</li>
          <li>Speak with an experienced truck insurance broker</li>
          <li>Get coverage that meets FMCSA and DOT requirements</li>
        </ul>
      </section>

      <section className="section">
        <h2>Request a Quote</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/mvzgneky"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Truck Insurance Lead - Fifty Bridges"
          />

          <input
            type="hidden"
            name="_redirect"
            value="http://localhost:3000/thank-you"
          />

          <label>
            Full Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email Address
            <input type="email" name="email" required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" required />
          </label>

          <label>
            Type of Operation
            <select name="operation">
              <option>Owner-Operator</option>
              <option>Small Fleet</option>
              <option>Trucking Company</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={4}></textarea>
          </label>

          <button type="submit" className="cta">
            Request Quote
          </button>
        </form>
      </section>

      <section className="section">
        <p>
          Prefer to speak directly? Our brokers are ready to help.
        </p>
      </section>
    </main>
  );
}
