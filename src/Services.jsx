function Services() {
  return (
    <main className="container">
      <div className="services-content">
        <h1 className="services">SERVICES</h1>
      </div>
      <div className="services-decription">
        <h1 className="services-text">
          OUR TRANSPORTATION SERVICES <br />
          WHAT WE DO?
        </h1>
      </div>
      <div className="service-grid">
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s1.jpg" alt="Air freight" />
            <p className="service-card-title">
              AIR FREIGHT <br /> TRANSPORTATION
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s2.jpg" alt="Shipping" />
            <p className="service-card-title">
              SHIPPING <br /> TRANSPORTATION
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-top">
            <img src="/images/icon/s3.jpg" alt="Trucking" />
            <p className="service-card-title">
              TRUCKING <br />
              TRANSPORTATION
            </p>
          </div>
        </article>
      </div>

      <section className="distribution-service">
        <img
          src="/images/icon/security.png"
          alt="Distribution facility"
          className="service-image"
        />
        <div className="distribution-content-service">
          <h1>DISTRIBUTION CENTERS</h1>
          <p className="service-copy">
            Need space? You can count on "US" to take care of all your transport{" "}
            <br /> Warehousing and 3PL needs. Vitesse has 2 warehouses with over
            400,000 <br /> square feet of secure, leasable space. Protected by
            sprinkler systems, our <br />
            warehouses are monitored 24/7 by a security and video surveillance
            system.
          </p>
          <div className="service-info-row">
            <div className="service-info-card">
              <img src="/images/icon/d1.png" alt="Delivered packages" />
              <div>
                <strong>45K+</strong>
                <span>Delivered Packages</span>
              </div>
            </div>
            <div className="service-info-card">
              <img src="/images/icon/d2.png" alt="Cargo daily" />
              <div>
                <strong>250K+</strong>
                <span>Unique Cargo Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-decription">
        <div className="description-content">
          <h1>
            REQUEST A <br />
            FAIR QUOTE
          </h1>
          <p>
            Our core values are the guiding principles that drive every delivery{" "}
            <br /> and decision we make. In logistics, reliability is
            everything—we treat <br /> your cargo with the highest standard of
            safety, transparency, and <br /> efficiency at every step of the
            journey.
          </p>
          <div className="service-cord">
            <p>
              <span>✓</span> Transportation Optimization Service
            </p>
            <p>
              <span>✓</span> 100% Safe & Secure Delivery Services
            </p>
            <p>
              <span>✓</span> Track Your Shipment Online
            </p>
            <p>
              <span>✓</span> User Generated Content in Real Time
            </p>
          </div>
        </div>

        <form className="form">
          <div className="form-row2">
            <div className="form-group2">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Full Name required"
              />
            </div>
            <div className="form-group2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address required"
              />
            </div>
          </div>

          <div className="form-row2">
            <div className="form-group2">
              <label htmlFor="service">Interest of Service</label>
              <input type="text" id="service" placeholder="e.g., Sea Freight" />
            </div>
            <div className="form-group2">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your Phone Number required"
              />
            </div>
          </div>

          <div className="form-group2 message-group">
            <label htmlFor="massage">Your Message</label>
            <textarea
              id="massage"
              rows="6"
              placeholder="Write your message here ..."
            ></textarea>
          </div>
          <button type="submit" className="buttonn">
                        Request a Quote
          </button>
        </form>
      </section>
      <section className="cards-section">
        <h1 className="title">
          {" "}
          OUR PACKAGING <br /> OPTIONS
        </h1>
      </section>
      <div className="cardd-grid">
        <div className="card">
          <p>Basic Freight</p>
          <span>$59</span>
          <p>Single Covered Truck</p>
          <p>100% Insurance</p>
          <p>Cargo Guarantee</p>
          <p>Additional Single Truck</p>
          <button type="button" className="buttonn">
            GET STARTED
          </button>
        </div>
        <div className="card">
          <p>Pro Freight</p>
          <span>$69</span>
          <p>Double Covered Truck</p>
          <p>100% Insurance</p>
          <p>Cargo Guarantee</p>
          <p>Additional Single Truck</p>
          <button type="button" className="buttonn">
            GET STARTED
          </button>
        </div>
        <div className="card-1">
          <p>Premium Pack</p>
          <span>$99</span>
          <p>Single Covered Truck</p>
          <p>100% Insurance</p>
          <p>Cargo Guarantee</p>
          <p>Additional Single Truck</p>
          <button type="button" className="buttonn">
            GET STARTED
          </button>
        </div>
        <div className="card">
          <p>Special Pack</p>
          <span>$119</span>
          <p>Single Covered Truck</p>
          <p>100% Insurance</p>
          <p>Cargo Guarantee</p>
          <p>Additional Single Truck</p>
          <button type="button" className="buttonn">
            GET STARTED
          </button>
        </div>
      </div>
            </main>
  );
}

export default Services;
