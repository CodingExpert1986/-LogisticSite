import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a Service" },
  { value: "air", label: "Air Freight" },
  { value: "ocean", label: "Ocean Freight" },
  { value: "road", label: "Road Transportation" },
  { value: "warehouse", label: "Warehousing" },
];

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert("Thank you! Your message has been sent successfully.");
    }

    setFormData({
      fullName: "",
      email: "",
      service: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="service">Interest of Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group message-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="submit-button">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;