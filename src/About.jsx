import { useEffect, useState } from "react";

const metrics = [
  { value: 2400, suffix: "", label: "Air shipments" },
  { value: 259, suffix: "M", label: "Ocean transit" },
  { value: 67, suffix: "K", label: "Road deliveries" },
  { value: 94, suffix: "M", label: "Expert miles" },
];

const capabilities = [
  { label: "Safe transportation", value: 90 },
  { label: "Responsive support", value: 80 },
  { label: "Online tracking", value: 75 },
];

function About() {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const metricSection = document.querySelector(".grid-card1");
    if (!metricSection || hasCounted) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasCounted(true);
        const startedAt = performance.now();
        const duration = 1200;

        const animate = (timestamp) => {
          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const easedProgress = 1 - (1 - progress) ** 3;
          setCounts(
            metrics.map((metric) => Math.round(metric.value * easedProgress)),
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(metricSection);
    return () => observer.disconnect();
  }, [hasCounted]);

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
      <div className="grid-card1" aria-label="Logistics performance metrics">
        {metrics.map((metric, index) => (
          <div className="card2" key={metric.label}>
            <img
              src={`/images/icon/${index === 2 ? "icon-cargo" : `icon${index + 1}`}.png`}
              alt=""
            />
            <strong className="metric-value">
              {counts[index].toLocaleString()}
              {metric.suffix}
            </strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

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
          <div className="capabilities">
            {capabilities.map((capability) => (
              <div className="capability" key={capability.label}>
                <div className="capability-heading">
                  <span>{capability.label}</span>
                  <strong>{capability.value}%</strong>
                </div>
                <div className="capability-track">
                  <span style={{ width: `${capability.value}%` }} />
                </div>
              </div>
            ))}
          </div>
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
