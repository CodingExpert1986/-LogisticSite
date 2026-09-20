const contactItems = [
  {
    img: "/images/icon/telephone-call.png",
    alt: "Telephone",
    label: "Telephone Assistance",
    action: "Call Now",
  },
  {
    img: "/images/icon/chats.png",
    alt: "Chat",
    label: "Customer Support",
    action: "Chat With Us",
  },
  {
    img: "/images/icon/pin.png",
    alt: "Location",
    label: "Our Location",
    action: "Find Us",
  },
  {
    img: "/images/icon/customer-service.png",
    alt: "Customer Service",
    label: "Customer Service",
    action: "Contact Us",
  },
];

function ContactInfo() {
  return (
    <div className="contact-info">
      {contactItems.map((item) => (
        <div className="contact-info-card" key={item.label}>
          <div className="contact-icon">
            <img src={item.img} alt={item.alt} />
          </div>

          <div>
            <p>{item.label}</p>
            <strong>{item.action}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;