function Services() {
  const packages = [
    ["Basic Freight", "$59", "Single covered truck"],
    ["Pro Freight", "$69", "Double covered truck"],
    ["Premium Pack", "$99", "Priority freight handling"],
    ["Special Pack", "$119", "Flexible freight solution"],
  ];

  return (
    <main className="container">
      <div className="services-content">
        <h1 className="services">SERVICES</h1>
      </div>

      <div className="services-decription">
        <h1 className="services-text">OUR TRANSPORTATION SERVICES</h1>
        <p className="services-intro">
          Reliable options for every stage of your supply chain.
        </p>
      </div>

      <div className="service-grid">
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s1.jpg" alt="Air freight" />
            <p className="service-card-title">AIR FREIGHT TRANSPORTATION</p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s2.jpg" alt="Ocean freight" />
            <p className="service-card-title">OCEAN FREIGHT TRANSPORTATION</p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s3.jpg" alt="Road freight" />
            <p className="service-card-title">ROAD TRANSPORTATION</p>
          </div>
        </article>
      </div>

      <section className="distribution-service">
        <img
          src="/images/icon/security.png"
          alt="Secure distribution facility"
          className="service-image"
        />
        <div className="distribution-content-service">
          <h1>DISTRIBUTION CENTERS</h1>
          <p className="service-copy">
            Need extra space? Our warehousing and 3PL services keep your goods
            secure, organized, and ready for delivery. Our facilities are
            monitored around the clock with professional security systems.
          </p>
          <div className="service-info-row">
            <div className="service-info-card">
              <img src="/images/icon/d1.png" alt="Delivered packages" />
              <div>
                <strong>45K+</strong>
                <span>Delivered packages</span>
              </div>
            </div>
            <div className="service-info-card">
              <img src="/images/icon/d2.png" alt="Daily cargo" />
              <div>
                <strong>250K+</strong>
                <span>Shipments handled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-decription">
        <div className="description-content">
          <h1>REQUEST A FAIR QUOTE</h1>
          <p>
            Our core values guide every delivery and decision we make. We treat
            your cargo with the highest standards of safety, transparency, and
            efficiency at every step of its journey.
          </p>
          <div className="service-cord">
            <p>
              <span>✓</span> Transportation optimization
            </p>
            <p>
              <span>✓</span> Safe and secure delivery
            </p>
            <p>
              <span>✓</span> Online shipment tracking
            </p>
            <p>
              <span>✓</span> Real-time shipment updates
            </p>
          </div>
        </div>

        <form className="form">
          <div className="form-row2">
            <div className="form-group2">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" placeholder="Your full name" />
            </div>
            <div className="form-group2">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Your email address" />
            </div>
          </div>

          <div className="form-row2">
            <div className="form-group2">
              <label htmlFor="service">Service of Interest</label>
              <input type="text" id="service" placeholder="e.g. Sea freight" />
            </div>
            <div className="form-group2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className="form-group2 message-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell us about your shipment..."
            />
          </div>
          <button type="submit" className="buttonn">
            Request a Quote
          </button>
        </form>
      </section>

      <section className="cards-section">
        <h1 className="title">OUR PACKAGING OPTIONS</h1>
      </section>

      <div className="cardd-grid">
        {packages.map(([name, price, detail], index) => (
          <div className={index === 2 ? "card-1" : "card"} key={name}>
            <p>{name}</p>
            <span>{price}</span>
            <p>{detail}</p>
            <p>Insurance available</p>
            <p>Cargo guarantee</p>
            <button type="button" className="buttonn">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;
