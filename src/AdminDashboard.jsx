import { useEffect, useState } from "react";
import { supabase, hasSupabaseConfig } from "./assets/supabaseClient";

const STORAGE_KEY = "logistic-demo-shipments";

const defaultForm = {
  tracking_id: "",
  customer_name: "",
  origin: "",
  destination: "",
  status: "In Transit",
  current_location: "",
  eta: "",
  cargo_type: "",
  weight_kg: "",
  notes: "",
};

const demoSeed = [
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
  },
];

function AdminDashboard({ onLogout }) {
  const [shipments, setShipments] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const loadShipments = async () => {
    if (hasSupabaseConfig) {
      const { data, error } = await supabase
        .from("shipments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        setMessage({
          text: `Unable to load shipments: ${error.message}`,
          type: "error",
        });
        return;
      }

      setShipments(data || []);
      return;
    }

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const next = stored.length ? stored : demoSeed;
    setShipments(next);
  };

  useEffect(() => {
    loadShipments();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(defaultForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trackingId = form.tracking_id.trim();
    const customerName = form.customer_name.trim();
    const origin = form.origin.trim();
    const destination = form.destination.trim();
    const currentLocation = form.current_location.trim();
    const cargoType = form.cargo_type.trim();

    if (
      !trackingId ||
      !customerName ||
      !origin ||
      !destination ||
      !currentLocation ||
      !form.eta ||
      !cargoType
    ) {
      setMessage({
        text: "Please fill in all required shipment fields.",
        type: "error",
      });
      return;
    }

    const normalizedTrackingId = trackingId.toUpperCase();

    if (!editingId) {
      const existingShipment = shipments.some(
        (item) =>
          (item.tracking_id || "").toUpperCase() === normalizedTrackingId,
      );

      if (existingShipment) {
        setMessage({
          text: "A shipment with this Tracking ID already exists.",
          type: "error",
        });
        return;
      }
    }

    const payload = {
      ...form,
      tracking_id: normalizedTrackingId,
      weight_kg: Number(form.weight_kg) || 0,
    };

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      if (hasSupabaseConfig) {
        if (editingId) {
          const { error } = await supabase
            .from("shipments")
            .update(payload)
            .eq("id", editingId);

          if (error) {
            throw error;
          }
        } else {
          const { error } = await supabase.from("shipments").insert([payload]);

          if (error) {
            throw error;
          }
        }
      } else {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        const next = editingId
          ? stored.map((item) =>
              item.id === editingId || item.tracking_id === editingId
                ? { ...payload, id: item.id || item.tracking_id }
                : item,
            )
          : [payload, ...stored].slice(0, 20);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setShipments(next);
      }

      setMessage({
        text: editingId
          ? "Shipment updated successfully."
          : hasSupabaseConfig
            ? "Shipment added to Supabase successfully."
            : "Shipment saved locally for demo mode.",
        type: "success",
      });

      resetForm();
      await loadShipments();
    } catch (error) {
      setMessage({
        text: error.message || "Unable to save shipment.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id || item.tracking_id);
    setForm({
      tracking_id: item.tracking_id || "",
      customer_name: item.customer_name || "",
      origin: item.origin || "",
      destination: item.destination || "",
      status: item.status || "In Transit",
      current_location: item.current_location || "",
      eta: item.eta || "",
      cargo_type: item.cargo_type || "",
      weight_kg: item.weight_kg || "",
      notes: item.notes || "",
    });
    setMessage({ text: `Editing shipment ${item.tracking_id}`, type: "info" });
  };

  const handleDelete = async (item) => {
    const id = item.id || item.tracking_id;
    const confirmed = window.confirm(
      `Delete shipment ${item.tracking_id}? This action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      if (hasSupabaseConfig) {
        const { error } = await supabase
          .from("shipments")
          .delete()
          .eq("id", id);

        if (error) {
          throw error;
        }
      } else {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        const next = stored.filter(
          (entry) => (entry.id || entry.tracking_id) !== id,
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setShipments(next);
      }

      setMessage({
        text: `Shipment ${item.tracking_id} deleted successfully.`,
        type: "success",
      });

      if (editingId === id) {
        resetForm();
      }

      await loadShipments();
    } catch (error) {
      setMessage({
        text: error.message || "Unable to delete shipment.",
        type: "error",
      });
    }
  };

  return (
    <main className="admin-page">
      <section className="admin-hero">
        <div className="admin-hero-header">
          <div>
            <p className="section-kicker">Operations center</p>
            <h1>Logistics Admin Dashboard</h1>
          </div>
          {onLogout && (
            <button type="button" className="logout-button" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>
      </section>

      <section className="admin-layout">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>Add shipment</h2>

          <div className="form-grid">
            <label>
              Tracking ID
              <input
                type="text"
                name="tracking_id"
                value={form.tracking_id}
                onChange={handleChange}
                placeholder="TRACK123"
              />
            </label>

            <label>
              Customer Name
              <input
                type="text"
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
                placeholder="Ali Khan"
              />
            </label>

            <label>
              Origin
              <input
                type="text"
                name="origin"
                value={form.origin}
                onChange={handleChange}
                placeholder="Dubai"
              />
            </label>

            <label>
              Destination
              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Lahore"
              />
            </label>

            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="In Transit">In Transit</option>
                <option value="Arrived">Arrived</option>
                <option value="Delayed">Delayed</option>
                <option value="Pending">Pending</option>
              </select>
            </label>

            <label>
              Current Location
              <input
                type="text"
                name="current_location"
                value={form.current_location}
                onChange={handleChange}
                placeholder="Karachi Port"
              />
            </label>

            <label>
              ETA
              <input
                type="date"
                name="eta"
                value={form.eta}
                onChange={handleChange}
              />
            </label>

            <label>
              Cargo Type
              <input
                type="text"
                name="cargo_type"
                value={form.cargo_type}
                onChange={handleChange}
                placeholder="Electronics"
              />
            </label>

            <label>
              Weight (kg)
              <input
                type="number"
                name="weight_kg"
                value={form.weight_kg}
                onChange={handleChange}
                placeholder="220"
              />
            </label>
          </div>

          <label className="full-width">
            Notes
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Add shipment notes"
            />
          </label>

          {message.text && (
            <div className={`admin-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="admin-actions">
            <button type="submit" className="admin-submit" disabled={loading}>
              {loading
                ? "Saving..."
                : editingId
                  ? "Update Shipment"
                  : "Create Shipment"}
            </button>
            {editingId && (
              <button
                type="button"
                className="admin-cancel"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <aside className="admin-sidebar">
          <div className="admin-card">
            <h3>Shipment overview</h3>
            <p>{shipments.length} active records</p>
            <span>
              {hasSupabaseConfig ? "Supabase connected" : "Demo mode"}
            </span>
          </div>

          <div className="admin-list">
            <h3>Recent shipments</h3>
            {shipments.slice(0, 6).map((item) => (
              <div key={item.tracking_id || item.id} className="mini-shipment">
                <div>
                  <strong>{item.tracking_id}</strong>
                  <p>{item.customer_name || "Customer"}</p>
                </div>
                <div className="mini-actions">
                  <span>{item.status || "Pending"}</span>
                  <button type="button" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default AdminDashboard;
