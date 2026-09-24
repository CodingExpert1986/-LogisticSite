import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import { supabase, hasSupabaseConfig } from "./assets/supabaseClient";

const demoShipments = [
  {
    tracking_id: "DENNIS003",
    customer_name: "Ali Khan",
    origin: "USA",
    destination: "London",
    status: "Pending",
    current_location: "Manchester",
    eta: "2026-10-22",
    cargo_type: "Electronic",
    weight_kg: 320,
    notes:
      "i want this package to be deliver as soon as possible at her door step",
    timeline: [
      {
        title: "Shipment booked",
        date: "9/23/2026",
        detail: "Cargo is moving from USA.",
      },
      {
        title: "Pending",
        date: "Current status",
        detail: "Currently at Manchester.",
      },
      {
        title: "Estimated arrival",
        date: "2026-10-22",
        detail: "Expected at London.",
      },
    ],
  },
  {
    tracking_id: "TRACK001",
    customer_name: "Ali Khan",
    origin: "Dubai",
    destination: "Lahore",
    status: "In Transit",
    current_location: "Karachi Port",
    eta: "2026-09-28",
    cargo_type: "Electronics",
    weight_kg: 220,
    notes: "Customs clearance in progress.",
    timeline: [
      {
        title: "Shipment booked",
        date: "Sep 18, 2026",
        detail: "Cargo received at Dubai hub.",
      },
      {
        title: "Customs export check",
        date: "Sep 20, 2026",
        detail: "Documentation approved and cargo released.",
      },
      {
        title: "In transit",
        date: "Sep 22, 2026",
        detail: "Cargo is being transported to Karachi.",
      },
      {
        title: "Arriving at destination",
        date: "Sep 28, 2026",
        detail: "Final delivery window is scheduled.",
      },
    ],
  },
  {
    tracking_id: "CARGO2024",
    customer_name: "Fatima Noor",
    origin: "Singapore",
    destination: "Karachi",
    status: "Arrived",
    current_location: "Karachi Warehouse",
    eta: "2026-09-24",
    cargo_type: "Retail Goods",
    weight_kg: 560,
    notes: "Final delivery scheduled for tomorrow.",
    timeline: [
      {
        title: "Shipment booked",
        date: "Sep 10, 2026",
        detail: "Order confirmed and packed.",
      },
      {
        title: "Export approval",
        date: "Sep 12, 2026",
        detail: "Cargo cleared outbound customs.",
      },
      {
        title: "Port arrival",
        date: "Sep 18, 2026",
        detail: "Cargo reached Karachi Port.",
      },
      {
        title: "Delivered to warehouse",
        date: "Sep 24, 2026",
        detail: "Shipment was transferred to local warehousing.",
      },
    ],
  },
  {
    tracking_id: "LOG0099",
    customer_name: "Hassan Ali",
    origin: "Jeddah",
    destination: "Abu Dhabi",
    status: "Delayed",
    current_location: "Customs Checkpoint",
    eta: "2026-09-30",
    cargo_type: "Industrial Parts",
    weight_kg: 940,
    notes: "Customs verification under review.",
    timeline: [
      {
        title: "Shipment booked",
        date: "Sep 16, 2026",
        detail: "Cargo entered the logistics network.",
      },
      {
        title: "Transport in progress",
        date: "Sep 18, 2026",
        detail: "Vehicle left origin facility.",
      },
      {
        title: "Customs hold",
        date: "Sep 21, 2026",
        detail: "Documentation is being reviewed.",
      },
      {
        title: "Pending release",
        date: "Sep 30, 2026",
        detail: "Expected release after verification.",
      },
    ],
  },
];

function Trackacargo() {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const buildTimeline = (shipmentData) => {
    if (shipmentData.timeline?.length) {
      return shipmentData.timeline;
    }

    return [
      {
        title: "Shipment booked",
        date: shipmentData.created_at
          ? new Date(shipmentData.created_at).toLocaleDateString()
          : "Available now",
        detail: `Cargo is moving from ${shipmentData.origin || "the origin facility"}.`,
      },
      {
        title: shipmentData.status || "Shipment update",
        date: "Current status",
        detail: shipmentData.current_location
          ? `Currently at ${shipmentData.current_location}.`
          : "The latest shipment status is available above.",
      },
      ...(shipmentData.eta
        ? [
            {
              title: "Estimated arrival",
              date: shipmentData.eta,
              detail: `Expected at ${shipmentData.destination || "the destination"}.`,
            },
          ]
        : []),
    ];
  };

  const lookupShipment = async (id) => {
    if (!hasSupabaseConfig) {
      const match = demoShipments.find(
        (shipmentItem) =>
          shipmentItem.tracking_id.toUpperCase() === id.toUpperCase(),
      );

      if (!match) {
        return { error: true, data: null };
      }

      return { error: false, data: match };
    }

    const { data, error } = await supabase
      .from("shipments")
      .select("*")
      .ilike("tracking_id", id)
      .maybeSingle();

    return {
      error,
      data: data ? { ...data, timeline: buildTimeline(data) } : data,
    };
  };

  const handleTrackSubmit = async (e) => {
    e.preventDefault();
    const id = trackingId.trim();

    if (!id) return;

    setLoading(true);
    setMessage({ text: "", type: "" });

    const { data, error } = await lookupShipment(id.toUpperCase());

    if (error || !data) {
      setMessage({
        text: "Tracking number not found. Please verify the ID and try again.",
        type: "error",
      });
      setShipment(null);
      setLoading(false);
      return;
    }

    setShipment(data);
    setMessage({
      text: "Tracking success! Cargo details loaded.",
      type: "success",
    });
    setLoading(false);
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
            ENTER YOUR <br /> TRACKING ID
          </p>
        </div>
        <div className="cards-row">
          <p>
            USE THE ID <br /> FROM YOUR RECEIPT
          </p>
        </div>
        <div className="cards-row">
          <p>
            SUBMIT THE FORM <br /> TO TRACK
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

      {shipment && (
        <section className="shipment-details" style={{ marginTop: "2rem" }}>
          <div className="shipment-header">
            <div>
              <p className="section-kicker">Cargo overview</p>
              <h2>Shipment Details</h2>
            </div>
            <span
              className={`shipment-status ${shipment.status?.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {shipment.status || "Pending"}
            </span>
          </div>

          <div className="shipment-grid">
            <div className="shipment-card-box">
              <span>Tracking ID</span>
              <strong>{shipment.tracking_id}</strong>
            </div>
            <div className="shipment-card-box">
              <span>Origin</span>
              <strong>{shipment.origin || "N/A"}</strong>
            </div>
            <div className="shipment-card-box">
              <span>Destination</span>
              <strong>{shipment.destination || "N/A"}</strong>
            </div>
            <div className="shipment-card-box">
              <span>Current location</span>
              <strong>{shipment.current_location || "N/A"}</strong>
            </div>
            <div className="shipment-card-box">
              <span>ETA</span>
              <strong>{shipment.eta || "N/A"}</strong>
            </div>
            <div className="shipment-card-box">
              <span>Cargo type</span>
              <strong>{shipment.cargo_type || "N/A"}</strong>
            </div>
            <div className="shipment-card-box">
              <span>Weight</span>
              <strong>{shipment.weight_kg || "N/A"} kg</strong>
            </div>
            <div className="shipment-card-box">
              <span>Customer</span>
              <strong>{shipment.customer_name || "N/A"}</strong>
            </div>
          </div>

          <div className="shipment-bottom-grid">
            <div className="shipment-notes">
              <h3>Operations note</h3>
              <p>{shipment.notes || "No notes available."}</p>
            </div>

            <div className="shipment-timeline">
              <h3>Transit timeline</h3>
              <ul>
                {(shipment.timeline || []).map((item, index) => (
                  <li key={`${shipment.tracking_id}-${index}`}>
                    <span className="timeline-dot" />
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.date}</small>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

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
