import { Link } from "react-router-dom";
import StatsSection from "./components/StatsSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function Home() {
  return (
    <main className="main-container">
      <section className="hero-banner">
        <div className="hero-text">
          <h1>
            MOVE SMART. <br />
            SHIPPED RIGHT. <br />
            DELIVER FAST.
          </h1>
          <p className="hero-subtitle">
            Reliable logistics solutions for air, ocean, and land transportation
          </p>
          <Link to="/services" className="cta-button">
            Our Services
          </Link>
        </div>
      </section>

      <section className="title">
        <div className="subtitle">
          <h1>LET US TRANSPORT AND TAKE CARE OF YOUR CARGO</h1>
          <p>
            As a transport and logistics company, our job is to get your goods
            safely from A to B – and you can rely 100 percent on us to do that.
            One of our most important "fuels" is the pursuit of quality. We
            believe quality is more important than quantity.
          </p>
          <Link to="/about" className="cta-button">
            Read More About Us
          </Link>
        </div>

        <img src="/images/icon/reliable.png" alt="Transportation" />
      </section>

      <StatsSection />

      <section className="transport-section">
        <div className="transport-grid">
          <article className="transport-card">
            <div className="transport-card-top">
              <img src="/images/icon/s1.jpg" alt="Air freight" />
              <p className="transport-card-title">AIR FREIGHT TRANSPORTATION</p>
            </div>
          </article>
          <article className="transport-card">
            <div className="transport-card-top">
              <img src="/images/icon/s2.jpg" alt="Shipping" />
              <p className="transport-card-title">SHIPPING TRANSPORTATION</p>
            </div>
          </article>
          <article className="transport-card">
            <div className="transport-card-top">
              <img src="/images/icon/s3.jpg" alt="Trucking" />
              <p className="transport-card-title">TRUCKING TRANSPORTATION</p>
            </div>
          </article>
          <article className="transport-card track">
            <div className="transport-card-top">
              <img src="/images/icon/icon-cargo.png" alt="Track cargo" />
              <p className="transport-card-title">TRACK YOUR CARGO</p>
            </div>
          </article>
        </div>
      </section>
      <section className="container-decription">
        <div className="content-decription">
          <div>
            <h1>WE TRANSPORT GOODS BY VESSEL, PLANE, TRAIN, TRUCK</h1>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon1.png" alt="icon" />
              </span>
              AIR <br />
              FRIGHT
            </p>
            <p>
              We offer 24/7 airport-to-door, door-to-door and door-to- <br />{" "}
              airport services. For airport-to-airport we rely on the fastest{" "}
              <br /> and most qualitative possible airfreight solutions,
              offering both <br /> express and BXO services.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon2.png" alt="icon" />
              </span>
              OCEAN <br />
              FRIGHT
            </p>
            <p>
              OCEAN FRIGHT Ocean freight is the core of the Manuport Logistics
              services. We have unique partnerships in place with all global and
              local carriers. Additionally, we provide full reporting services
              and shipment follow-up.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon3.png" alt="icon" />
              </span>
              BARGING <br /> SOLUTIONS
            </p>
            <p>
              We cover all European inland waterways and ports with our 2 <br />
              offices in Belgium, our vast network and our team of experts.{" "}
              <br /> All kinds of commodities can be transported by water: bulk,{" "}
              <br />
              break-bulk, exceptional pieces.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon-cargo.png" alt="icon" />
              </span>
              ROAD <br /> TRANSPORTATION
            </p>
            <p>
              In Europe, we have over 50 experts, delivering your products by{" "}
              truck to their destinations. Globally we are able to offer
              solutions for all transport modes: conventional, bulk, container
              and multimodal.
            </p>
          </div>
        </div>
      </section>
      <section className="customer-review">
        <div>
          <h1>CUSTOMERS REVIEWS</h1>
        </div>
        <div className="review-heading">
          <span className="quote-mark">“</span>
        </div>
        <div className="review-card">
          <p>
            I ONLY use Logistics for my shipping needs. My clients have all come
            to expect the excellent shipping and handling of their merchandise
            that Global has to offer. Their expediting team makes it possible to
            get jobs out last minute if necessary and let us know when it has
            delivered.
          </p>
        </div>
      </section>
      <section className="distribution-container">
        <img
          src="/images/icon/security.png"
          alt="Distribution facility"
          className="distribution-image"
        />

        <div className="distribution-content">
          <h1>DISTRIBUTION CENTERS</h1>
          <p className="distribution-copy">
            Need space? You can count on "US" to take care of all your transport{" "}
            <br /> Warehousing and 3PL needs. Vitesse has 2 warehouses with over
            400,000 <br /> square feet of secure, leasable space. Protected by
            sprinkler systems, our <br />
            warehouses are monitored 24/7 by a security and video surveillance
            system.
          </p>

          <div className="distribution-info-row">
            <div className="distribution-info-card">
              <img src="/images/icon/d1.png" alt="Delivered packages" />
              <div>
                <strong>45K+</strong>
                <span>Delivered Packages</span>
              </div>
            </div>
            <div className="distribution-info-card">
              <img src="/images/icon/d2.png" alt="Cargo daily" />
              <div>
                <strong>250K+</strong>
                <span>Unique Cargo Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-form-container">
          <h1>GET IN TOUCH</h1>
          <p>We would be happy to speak about your cargo.</p>
          <ContactForm />
        </div>

        <ContactInfo />
      </section>
    </main>
  );
}

export default Home;
