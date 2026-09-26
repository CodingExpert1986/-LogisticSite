const contactItems = [
  {
    img: "/images/icon/telephone-call.png",
    alt: "Telephone",
    label: "Telephone Assistance",
    action: "Call Now",
    href: "tel:08169615541",
  },
  {
    img: "/images/icon/chats.png",
    alt: "Chat",
    label: "Customer Support",
    action: "Chat With Us",
    href: "https://wa.me/2348169615541",
  },
  {
    img: "/images/icon/pin.png",
    alt: "Location",
    label: "Our Location",
    action: "Find Us",
    href: "/contact",
  },
  {
    img: "/images/icon/customer-service.png",
    alt: "Customer Service",
    label: "Customer Service",
    action: "Contact Us",
    href: "/contact",
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
            <a href={item.href}>{item.action}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
