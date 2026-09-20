import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function Contact() {
  return (
    <main className="container">
      <div className="contact-content">
        <h1 className="contact1">Contact Us</h1>
      </div>

      <section className="contact-section">
        <div className="contact-form-container">
          <h1>GET IN TOUCH</h1>
          <p>We would be happy to speak about your cargo.</p>
          <ContactForm />
        </div>
        <ContactInfo />
      </section>

      <div className="map-top">
        <iframe
          src="https://www.google.com/maps/embed?q=49+Obafemi+Awolowo+Way,+Oshitelu+Street,+Ikeja,+Lagos&z=15&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}

export default Contact;
