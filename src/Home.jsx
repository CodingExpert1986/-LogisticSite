import { Link } from "react-router-dom";
import StatsSection from "./components/StatsSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function AnimatedMetric({ value, label, icon, iconAlt }) {
  const [count, setCount] = useState(0);
  a;
  useEffect(() => {
    const startedAt = performance.now();
    const duration = 1100;

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="distribution-info-card">
      <img src={icon} alt={iconAlt} />
      <div>
        <strong>{Math.round(count / 1000)}K+</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

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
                <img src="/images/icon/icon1.png" alt="Air freight" />
              </span>
              AIR FREIGHT
            </p>
            <p>
              We offer airport-to-door and door-to-door services around the
              clock. For airport-to-airport shipments, we provide fast,
              dependable airfreight solutions for both express and standard
              cargo.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon2.png" alt="Ocean freight" />
              </span>
              OCEAN FREIGHT
            </p>
            <p>
              Ocean freight is a reliable choice for large or international
              shipments. We work with trusted carriers and provide shipment
              follow-up from port to destination.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="/images/icon/icon3.png" alt="Barging solutions" />
              </span>
              BARGING SOLUTIONS
            </p>
            <p>
              We provide waterway transportation solutions for suitable cargo,
              helping businesses move goods efficiently between ports and inland
              destinations.
            </p>
          </div>
          <div>
            <p>
              <span>
                <img
                  src="/images/icon/icon-cargo.png"
                  alt="Road transportation"
                />
              </span>
              ROAD TRANSPORTATION
            </p>
            <p>
              Our road transportation solutions help move goods safely and
              efficiently from pickup points to their final destinations. We
              support flexible transportation options for different types of
              cargo and delivery needs.
            </p>
          </div>
        </div>
      </section>
      <section className="customer-review">
        <div>
          <h1>WHY CHOOSE US</h1>
        </div>
        <div className="review-heading">
          <span className="quote-mark">“</span>
        </div>
        <div className="review-card">
          <p>
            Reliable logistics solutions designed to keep your cargo moving
            safely, efficiently, and with clear communication from dispatch to
            delivery.
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
            Need extra space? Our warehousing and 3PL services keep your goods
            secure, organized, and ready for delivery. Our facilities are
            monitored around the clock with professional security systems.
          </p>

          <div className="distribution-info-row">
            <div className="distribution-info-card">
              <img src="/images/icon/d1.png" alt="Cargo handling" />
              <div>
                <strong>24/7</strong>
                <span>Cargo Support</span>
              </div>
            </div>

            <div className="distribution-info-card">
              <img src="/images/icon/d2.png" alt="Delivery solutions" />
              <div>
                <strong>Fast</strong>
                <span>Delivery Solutions</span>
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
