import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Truck Insurance Quote | Fifty Bridges",
  description:
    "Request a commercial truck insurance quote. Submit your DOT details, fleet information, and documents to Fifty Bridges.",
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
          Use the secure form below to request a detailed commercial truck
          insurance quote. Our licensed trucking insurance brokers will review
          your submission, verify compliance requirements, and contact you with
          coverage options tailored specifically to your operation.
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

          {/* BUSINESS INFORMATION */}
          <div className="form-card">
            <h2>Business Information</h2>

            <div className="form-grid">
              <div className="form-field">
                <label>DOT Number *</label>
                <input
                  type="text"
                  name="dot_number"
                  placeholder="e.g. 1234567"
                  pattern="^[0-9]+$"
                  inputMode="numeric"
                  required
                />
              </div>

              <div className="form-field">
                <label>Legal Business Name *</label>
                <input
                  type="text"
                  name="legal_name"
                  placeholder="Registered business name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Business State *</label>
                <input
                  type="text"
                  name="business_state"
                  placeholder="e.g. TX"
                  required
                />
              </div>

              <div className="form-field">
                <label>Mailing State *</label>
                <input
                  type="text"
                  name="mailing_state"
                  placeholder="e.g. TX"
                  required
                />
              </div>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="form-card">
            <h2>Contact Information</h2>

            <div className="form-grid">
              <div className="form-field">
                <label>Contact Full Name *</label>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="First & Last Name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="contact_email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="form-field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="contact_phone"
                  placeholder="e.g. 5551234567"
                  pattern="^[0-9]+$"
                  inputMode="numeric"
                  required
                />
              </div>
            </div>
          </div>

          {/* OPERATION DETAILS */}
          <div className="form-card">
            <h2>Operation Details</h2>

            <div className="form-grid">
              <div className="form-field">
                <label>Years in Business *</label>
                <input
                  type="number"
                  name="years_in_business"
                  min="0"
                  placeholder="e.g. 3"
                  required
                />
              </div>

              <div className="form-field">
                <label>Power Units *</label>
                <input
                  type="number"
                  name="power_units"
                  min="1"
                  placeholder="Number of trucks"
                  required
                />
              </div>

              <div className="form-field full">
                <label>Garaging Address *</label>
                <input
                  type="text"
                  name="garaging_address"
                  placeholder="City, State"
                  required
                />
              </div>

              <div className="form-field full">
                <label>Commodities Hauled *</label>
                <textarea
                  name="commodities_hauled"
                  rows={3}
                  placeholder="Describe cargo types"
                  required
                />
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="cta quote-submit">
            Submit Quote Request
          </button>
        </form>
      </section>

      {/* POST-FORM CONTENT */}
      <section className="section">
        <h2>Prefer to Email Your Information?</h2>

        <p>
          If you already have documentation prepared, you may email your details
          directly to{" "}
          <strong>
            <a href="mailto:quotes@50bridges.com">quotes@50bridges.com</a>
          </strong>
          .
        </p>

        <p>
          Attaching documents such as <strong>Loss Runs</strong>,{" "}
          <strong>IFTA reports</strong> (if applicable),{" "}
          <strong>CDL copies</strong>, vehicle schedules, or existing insurance
          policies can help our brokers provide faster and more accurate
          insurance quotes.
        </p>

        <p>
          Fifty Bridges works with trucking businesses nationwide and ensures
          all coverage meets <strong>DOT</strong> and <strong>FMCSA</strong>{" "}
          requirements.
        </p>
      </section>
    </main>
  );
}
