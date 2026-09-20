function About() {
  return (
    <main className="container">
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
      <div className="grid-card1">
        <div className="card2">
          <img src="/images/icon/icon1.png" alt="icon" />

          <h2 className="line">│</h2>
          <h1>2,400</h1>
          <p>Air Transportation</p>
        </div>
        <div className="card2">
          <img src="/images/icon/icon2.png" alt="icon" />
          <h2 className="line">│</h2>
          <h1>259M</h1>
          <p>Ship Transit</p>
        </div>
        <div className="card2">
          <img src="/images/icon/icon-cargo.png" alt="icon" />

          <h2 className="line">│</h2>
          <h1>67K </h1>
          <p>Roads Transit</p>
        </div>
        <div className="card2">
          <img src="/images/icon/icon3.png" alt="icon" />
          <h2 className="line">│</h2>
          <h1>94M</h1>
          <p>Expert Transit</p>
        </div>
      </div>

      <section className="about-containter">
        <img src="/images/icon/cutt.jpeg" className="about-image" alt="" />
        <div className="about-decription">
          <h1>WE ARE THE BEST IN TRANSPORTATION</h1>
          <p>
            From conversion-minded design to organic and paid traffic channels
          </p>
          <strong className="strong">
            <p>Safe Transportation</p>
            <span className="span">
              _____________________________________________________90%
            </span>
            <p>Friendly Support</p>
            <span className="span">
              _____________________________________________80%
            </span>
            <p>Online Transportation</p>
            <span className="span">
              ______________________________________75%
            </span>
          </strong>
        </div>
      </section>

      <section className="logistic-experts-section">
        <div className="section-header">
          <div className="orange-divider"></div>
          <h2 className="sub-title">WHY WE ARE LOGISTIC</h2>
          <h1 className="main-title-text">
            WE ARE EXPERT IN LOGISTIC SERVICES
          </h1>
          <p className="description-text">
            It is important to identify the skills you need to develop or
            improve <br />
            so that you can succeed in your day-to-day business operations.
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
            <p className="card-caption">Providing best logistic Solutions</p>
          </div>

          <div className="gold-feature-card">
            <div className="navy-icon-badge">
              <img
                src="/images/icon/icon-6.png"
                className="badge-image"
                alt="Growth Icon"
              />
            </div>
            <p className="card-caption">Help to Grow your Online Logistic</p>
          </div>
        </div>
      </section>
          </main>
  );
}

export default About;
