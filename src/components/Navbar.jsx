import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import developer from "../assets/developer.png";
import "./Navbar.css";

function Navbar({ onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for floating pill
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else if (window.scrollY < 20) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={developer} alt="Developer logo" className="logo-img" />
            <span className="logo-text">SWE</span>
          </Link>

          {/* Desktop links */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/servicesPage">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <div className="theme-switch">
              <span className="theme-label">Theme</span>
              <button
                className="theme-toggle"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
              >
                <span className="toggle-thumb" />
              </button>
            </div>

            <Link to="/hire" className="hire-btn">
              Hire Me
            </Link>

            {/* Mobile menu button */}
            <button
              className={`menu-toggle ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop (blur + dim background) */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About Me
        </Link>
        <Link to="/servicesPage" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link to="/hire" onClick={() => setOpen(false)}>
          Hire Me
        </Link>
      </div>
    </>
  );
}

export default Navbar;
