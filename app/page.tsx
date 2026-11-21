const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/YOUR_STRIPE_LINK_HERE";

const CHAPTERS = [
  {
    title: "The 72-Hour Essentials Checklist",
    description:
      "Exactly how much water, lighting, warmth, and backup power your household actually needs—without wasting money.",
  },
  {
    title: "No-Cook Pantry & Meal Plan",
    description:
      "Simple, family-friendly meals and safe food-storage rules so nothing in your fridge or freezer goes to waste.",
  },
  {
    title: "Keeping Kids Calm & Safe",
    description:
      "Screen-free activities, night-time routines, and simple safety rules for candles, heaters, and backup power.",
  },
];

const UPCOMING_GUIDES = [
  {
    title: "Guided Bible Studies",
    description:
      "Approachable, chapter-by-chapter study workbooks designed for quiet mornings and deeper reflection.",
  },
  {
    title: "Simple Family Recipes",
    description:
      "Wholesome, budget-friendly meals made from real pantry staples for busy weeknights.",
  },
  {
    title: "Intentional Parenting",
    description:
      "Encouraging, practical guides on home rhythms, learning, and raising grounded kids.",
  },
];

const FAQS = [
  {
    question: "How do I receive my ebook?",
    answer:
      "Immediately after completing checkout with Apple Pay, Google Pay, or card, you will be redirected to your download page and receive a receipt.",
  },
  {
    question: "Can I print a copy for my home?",
    answer:
      "Yes! The PDF is formatted cleanly so you can print the checklists and keep a physical copy in your household kit.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Completely. All payments are encrypted and processed by Stripe—we never see or store your card details.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="book-mockup">
          <div>
            <div className="book-tag">Essential Home Guide</div>
            <h2>When the Lights Go Out</h2>
            <p>
              A calm, step-by-step household handbook for preparing your home, pantry, and family for power cuts.
            </p>
          </div>
          <div className="book-footer">Pages &amp; Purpose Digital Edition</div>
        </div>

        <div className="hero-content">
          <span className="badge">Instant Digital Download • PDF</span>
          <h1>Be calm, prepared, and ready before the power goes out.</h1>
          <p className="lead">
            No panic-buying or overwhelming jargon—just a clear, practical checklist and family action plan to keep your home warm, fed, and safe during a blackout.
          </p>

          <div className="price-row">
            <span className="price">£9.99</span>
            <span className="format">PDF Guide • Read on phone, tablet, or print at home</span>
          </div>

          <a href={STRIPE_PAYMENT_LINK} className="btn-primary">
            Buy Now with Apple Pay or Card
          </a>
          <p className="trust-note">
            Secure checkout via Stripe • Instant access after payment
          </p>
        </div>
      </section>

      <section id="inside" className="section">
        <h2 className="section-title">What&apos;s Inside the Handbook</h2>
        <p className="section-sub">
          Designed to be printed and kept in a kitchen drawer or saved offline on your phone.
        </p>
        <div className="grid-3">
          {CHAPTERS.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="upcoming" className="section">
        <h2 className="section-title">More From Pages &amp; Purpose</h2>
        <p className="section-sub">
          Practical, thoughtful resources written for everyday life. More titles releasing soon.
        </p>
        <div className="grid-3">
          {UPCOMING_GUIDES.map((guide) => (
            <div className="card" key={guide.title}>
              <span className="coming-tag">Coming Soon</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
