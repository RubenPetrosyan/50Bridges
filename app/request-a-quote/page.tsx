import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Truck Insurance Quote | Fifty Bridges",
  description:
    "Request a commercial truck insurance quote. Submit your DOT details, fleet info, and documents to Fifty Bridges.",
  alternates: {
    canonical: "https://www.50bridges.com/request-a-quote/",
  },
};

export default function RequestQuotePage() {
  return (
    <main className="page fade-in">
      {/* INTRO */}
      <section className="section">
        <h1>Request a Truck Insurance Quote</h1>

        <p className="intro-text">
          Use the form below to request a detailed commercial truck insurance
          quote. Our licensed trucking insurance brokers will review your
          submission, verify compliance requirements, and contact you with
          coverage options tailored to your operation.
        </p>
      </section>

      {/* FORM */}
      <section className="section section-light">
        <form
          className="quote-form"
          action="https://formspree.io/f/xbdlenwe"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Truck Insurance Quote Request - Fifty Bridges"
          />
          <input type="hidden" name="_redirect" value="/thank-you" />

          {/* BUSINESS INFO */}
          <div className="form-card">
            <h2>Business Information</h2>

            <div className="form-grid">
              <label>
                DOT Number *
                <input
                  type="text"
                  name="dot_number"
                  placeholder="e.g. 1234567"
                  pattern="^[0-9]+$"
                  title="DOT number must contain numbers only"
                  required
                />
              </label>

              <label>
                Legal Business Name *
                <input
                  type="text"
                  name="legal_name"
                  placeholder="Registered business name"
                  required
                />
              </label>

              <label>
                Business State *
                <input
                  type="text"
                  name="business_state"
                  placeholder="e.g. TX"
                  required
                />
              </label>

              <label>
                Mailing State *
                <input
                  type="text"
                  name="mailing_state"
                  placeholder="e.g. TX"
                  required
                />
              </label>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="form-card">
            <h2>Contact Information</h2>

            <div className="form-grid">
              <label>
                Contact Full Name *
                <input
                  type="text"
                  name="contact_name"
                  placeholder="First & Last Name"
                  required
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  name="contact_email"
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="contact_phone"
                  placeholder="e.g. 5551234567"
                  pattern="^[0-9]+$"
                  title="Phone number must contain digits only"
                  required
                />
              </label>
            </div>
          </div>

          {/* OPERATION INFO */}
          <div className="form-card">
            <h2>Operation Details</h2>

            <div className="form-grid">
              <label>
                Years in Business *
                <input
                  type="number"
                  name="years_in_business"
                  min="0"
                  placeholder="e.g. 3"
                  required
                />
              </label>

              <label>
                Power Units *
                <input
                  type="number"
                  name="power_units"
                  min="1"
                  placeholder="Number of trucks"
                  required
                />
              </label>

              <label className="full-width">
                Garaging Address *
                <input
                  type="text"
                  name="garaging_address"
                  placeholder="City, State"
                  required
                />
              </label>

              <label className="full-width">
                Commodities Hauled *
                <textarea
                  name="commodities_hauled"
                  rows={3}
                  placeholder="Describe cargo types"
                  required
                />
              </label>
            </div>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="cta">
            Submit Quote Request
          </button>
        </form>
      </section>

      {/* POST-FORM SEO CONTENT */}
      <section className="section">
        <h2>Prefer to Email Your Information?</h2>

        <p>
          If you already have documents prepared, you may email your information
          directly to{" "}
          <strong>
            <a href="mailto:quotes@50bridges.com">quotes@50bridges.com</a>
          </strong>
          .
        </p>

        <p>
          Attaching documents such as <strong>Loss Runs</strong>,{" "}
          <strong>IFTA reports</strong> (if applicable),{" "}
          <strong>CDL copies</strong>, vehicle schedules, or any existing
          insurance policies can help us deliver faster and more accurate
          quotes.
        </p>

        <p>
          Our brokers work with trucking businesses across all 50 U.S. states and
          ensure your coverage meets DOT and FMCSA requirements.
        </p>
      </section>
    </main>
  );
}
