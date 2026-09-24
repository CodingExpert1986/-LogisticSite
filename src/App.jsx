import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import TrackACargo from "./Trackacargo";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";
import { hasSupabaseConfig, supabase } from "./assets/supabaseClient";
import "./App.css";
import "./Trackacargo.css";
import "./Services.css";
import "./About.css";
import "./Contact.css";

const ADMIN_AUTH_KEY = "logistic-admin-auth";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem(ADMIN_AUTH_KEY) === "true";

    if (!hasSupabaseConfig) {
      return storedValue;
    }

    return storedValue;
  });

  useEffect(() => {
    if (!hasSupabaseConfig) {
      return undefined;
    }

    let isMounted = true;

    const syncSupabaseAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      const loggedIn = Boolean(session);
      setIsAdminLoggedIn(loggedIn);

      if (loggedIn) {
        localStorage.setItem(ADMIN_AUTH_KEY, "true");
      } else {
        localStorage.removeItem(ADMIN_AUTH_KEY);
      }
    };

    syncSupabaseAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const loggedIn = Boolean(session);
      setIsAdminLoggedIn(loggedIn);

      if (loggedIn) {
        localStorage.setItem(ADMIN_AUTH_KEY, "true");
      } else {
        localStorage.removeItem(ADMIN_AUTH_KEY);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleAdminLogin = () => {
    localStorage.setItem(ADMIN_AUTH_KEY, "true");
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = async () => {
    if (hasSupabaseConfig) {
      await supabase.auth.signOut();
    }

    localStorage.removeItem(ADMIN_AUTH_KEY);
    setIsAdminLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-cargo" element={<TrackACargo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            isAdminLoggedIn ? (
              <AdminDashboard onLogout={handleAdminLogout} />
            ) : (
              <AdminLogin onLogin={handleAdminLogin} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
