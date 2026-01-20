import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Truck Insurance Quote | Fifty Bridges",
  description:
    "Request a commercial truck insurance quote. Submit your DOT details, fleet info, and documents to Fifty Bridges.",
  alternates: {
    canonical: "https://www.50bridges.com/request-a-quote/",
  },
  openGraph: {
    title: "Request a Truck Insurance Quote | Fifty Bridges",
    description:
      "Request a commercial truck insurance quote. Submit your DOT details, fleet info, and documents to Fifty Bridges.",
    url: "https://www.50bridges.com/request-a-quote/",
    type: "website",
  },
};


export default function RequestQuotePage() {
  return (
    <main className="page fade-in">
      {/* Intro */}
      <section className="section">
        <h1>Request a Truck Insurance Quote</h1>
        <p>
          Complete the form below to request a detailed truck insurance quote.
          One of our licensed brokers will review your information and contact
          you shortly.
        </p>
      </section>

      {/* Form */}
      <section className="section section-light">
        <form
          className="contact-form"
          action="https://formspree.io/f/xbdlenwe"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Detailed Quote Request - Fifty Bridges"
          />

          <input
            type="hidden"
            name="_redirect"
            value="/thank-you"
          />

          {/* =====================
              BUSINESS INFORMATION
          ===================== */}
          <h2>Business Information</h2>

          <label>
            DOT Number *
            <input type="text" name="dot_number" required />
          </label>

          <label>
            Legal Business Name *
            <input type="text" name="legal_name" required />
          </label>

          <label>
            Business State *
            <input type="text" name="business_state" required />
          </label>

          <label>
            Mailing State *
            <input type="text" name="mailing_state" required />
          </label>

          {/* =====================
              CONTACT INFORMATION
          ===================== */}
          <h2>Contact Information</h2>

          <label>
            Contact Person Full Name *
            <input type="text" name="contact_name" required />
          </label>

          <label>
            Contact Email *
            <input type="email" name="contact_email" required />
          </label>

          <label>
            Contact Phone *
            <input type="tel" name="contact_phone" required />
          </label>

          {/* =====================
              OPERATION DETAILS
          ===================== */}
          <h2>Operation Details</h2>

          <label>
            Years in Business *
            <input type="number" name="years_in_business" min="0" required />
          </label>

          <label>
            Power Units *
            <input type="number" name="power_units" min="1" required />
          </label>

          <label>
            Garaging Address *
            <input type="text" name="garaging_address" required />
          </label>

          <label>
            Commodities Hauled *
            <textarea name="commodities_hauled" rows={3} required />
          </label>

          {/* Submit */}
          <button type="submit" className="cta">
            Submit Quote Request
          </button>
        </form>
      </section>
    </main>
  );
}
