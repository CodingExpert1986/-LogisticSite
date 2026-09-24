import { useState } from "react";
import { hasSupabaseConfig, supabase } from "./assets/supabaseClient";

const DEMO_ADMIN_EMAIL = "admin@logistic.com";
const DEMO_ADMIN_PASSWORD = "admin123";

function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!hasSupabaseConfig) {
      if (
        form.email.trim().toLowerCase() === DEMO_ADMIN_EMAIL &&
        form.password === DEMO_ADMIN_PASSWORD
      ) {
        onLogin();
        return;
      }

      setError("Invalid email or password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password,
        });

      if (signInError || !data.user) {
        throw signInError || new Error("Authentication failed.");
      }

      onLogin();
    } catch (signInError) {
      setError(
        signInError?.message ||
          "Unable to sign in. Check your Supabase credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-box">
        <p className="section-kicker">Restricted access</p>
        <h1>Admin Login</h1>

        {!hasSupabaseConfig && (
          <p className="login-demo-note">
            Demo access: admin@logistic.com / admin123
          </p>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={
                hasSupabaseConfig ? "admin@example.com" : DEMO_ADMIN_EMAIL
              }
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={
                hasSupabaseConfig ? "your-password" : DEMO_ADMIN_PASSWORD
              }
            />
          </label>

          {error && <div className="admin-message error">{error}</div>}

          <button
            type="submit"
            className="admin-submit login-submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default AdminLogin;
