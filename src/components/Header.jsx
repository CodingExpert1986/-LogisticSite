import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/track-cargo", label: "TRACK A CARGO" },
  { to: "/services", label: "SERVICES" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT US" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <img
        src="/images/icon/logo-logistic.png"
        className="logo"
        alt="Logistic Logo"
      />

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
