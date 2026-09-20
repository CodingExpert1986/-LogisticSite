function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-socials">
          <p className="socials-title">Follow us</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <img src="/images/icon/facebook-logo.png" alt="Facebook logo" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <img src="/images/icon/twitter-logo.png" alt="Twitter logo" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <img
                src="/images/icon/instagram-logo.png"
                alt="Instagram logo"
              />
            </a>
          </div>
        </div>

        <p className="footer-copyright">&copy; Copyright by Logistic 2026</p>
      </div>
    </footer>
  );
}

export default Footer;