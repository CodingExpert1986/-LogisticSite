import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const VALID_TRACKING_IDS = ["12345", "TRACK001", "CARGO2024", "LOG0099"];

function Trackacargo() {
  const [trackingId, setTrackingId] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setLoading(true);
    setMessage({ text: "", type: "" });

    setTimeout(() => {
      if (VALID_TRACKING_IDS.includes(trackingId.trim())) {
        setMessage({
          text: "Tracking success! Loading cargo data...",
          type: "success",
        });
      } else {
        setMessage({
          text: "Invalid tracking number. Please try again.",
          type: "error",
        });
      }
      setLoading(false);
      setTrackingId("");
    }, 800);
  };

  return (
    <main className="container">
      <div className="content">
        <h1 className="track">TRACK YOUR CARGO</h1>
      </div>
      <div className="track-decription">
        <h1 className="track-text">
          CARGO TRACKING <br />
          FIND IT NOW
        </h1>
      </div>

      <div className="cards">
        <div className="cards-row">
          <p>
            FIND YOUR CARGO <br /> TRACKING ID
          </p>
        </div>
        <div className="cards-row">
          <p>
            ONLY NUMBERS <br /> OF YOUR CARGO ID
          </p>
        </div>
        <div className="cards-row">
          <p>
            FILL THE BELLOW <br /> FORM TO TRACK
          </p>
        </div>
      </div>

      <div className="search-container">
        <form onSubmit={handleTrackSubmit} className="search-wrapper">
          <div className="search-content">
            <input
              type="text"
              placeholder="YOUR CARGO TRACKING ID..."
              className="search-input"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
                        />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? "⏳ TRACKING..." : "→ TRACK CARGO"}
            </button>
          </div>

          {message.text && (
            <div className={`status-message ${message.type}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>

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

export default Trackacargo;
