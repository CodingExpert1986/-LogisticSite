const services = [
  {
    title: "Air Freight",
    description: "Airport-to-door shipping options",
    icon: "icon1.png",
  },
  {
    title: "Ocean Freight",
    description: "Port-to-port international cargo",
    icon: "icon2.png",
  },
  {
    title: "Road Transport",
    description: "Pickup through final delivery",
    icon: "icon-cargo.png",
  },
  {
    title: "Warehousing",
    description: "Secure storage and distribution",
    icon: "security.png",
  },
];
const capabilities = [
  "Secure cargo handling",
  "Responsive shipment support",
  "Shipment tracking and updates",
];

function About() {
  return (
    <main className="container about-page">
      <div className="about-content">
        <h1 className="about">ABOUT US</h1>
      </div>
      <div className="logistics-container">
        <h1 className="main-title">End-to-End Logistics Solutions</h1>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🔒 Safe & Easy</h3>
            <p>We make shipping safe and easy for you.</p>
          </div>
          <div className="feature-card">
            <h3>💼 Business Growth</h3>
            <p>The ultimate delivery partner for your business goals.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Multi-Device</h3>
            <p>Track your shipments seamlessly across multiple devices.</p>
          </div>
          <div className="feature-card">
            <h3>🆔 Quick Access</h3>
            <p>Fast, secure login using PIN or Touch ID.</p>
          </div>
        </div>
      </div>

      <section className="grid-card1" aria-label="Our logistics services">
        {services.map((service) => (
          <article className="card2" key={service.title}>
            <img src={`/images/icon/${service.icon}`} alt="" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="about-containter">
        <img
          src="/images/icon/cutt.jpeg"
          className="about-image"
          alt="Cargo being prepared for transportation"
        />
        <div className="about-decription">
          <p className="about-eyebrow">Built for dependable delivery</p>
          <h1>LOGISTICS THAT KEEP BUSINESS MOVING</h1>
          <p>
            From first-mile pickup to final delivery, we coordinate every step
            with clear communication, secure handling, and practical solutions
            that help your business move with confidence.
          </p>
          <ul className="capabilities">
            {capabilities.map((capability) => (
              <li className="capability" key={capability}>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="logistic-experts-section">
        <div className="section-header">
          <div className="orange-divider"></div>
          <h2 className="sub-title">WHY CHOOSE US</h2>
          <h1 className="main-title-text">
            WE ARE EXPERTS IN LOGISTICS SERVICES
          </h1>
          <p className="description-text">
            Our team combines practical experience, responsive support, and
            reliable technology to simplify day-to-day logistics operations.
          </p>
        </div>

        <div className="logistics-cards-grid">
          <div className="gold-feature-card">
            <div className="navy-icon-badge">
              <img
                src="/images/icon/icon-4.png"
                className="badge-image"
                alt="Support Icon"
              />
            </div>
            <p className="card-caption">Online, Fast and Friendly Support</p>
          </div>

          <div className="gold-feature-card">
            <div className="navy-icon-badge">
              <img
                src="/images/icon/icon-5.png"
                className="badge-image"
                alt="Solutions Icon"
              />
            </div>
            <p className="card-caption">
              Providing the best logistics solutions
            </p>
          </div>

          <div className="gold-feature-card">
            <div className="navy-icon-badge">
              <img
                src="/images/icon/icon-6.png"
                className="badge-image"
                alt="Growth Icon"
              />
            </div>
            <p className="card-caption">
              Helping your logistics operation grow
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
