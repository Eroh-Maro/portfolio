// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.documentElement;
    setTheme(html.getAttribute("data-theme") || "dark");

    const observer = new MutationObserver(() => {
      setTheme(html.getAttribute("data-theme"));
    });

    observer.observe(html, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const imageSrc =
    theme === "light" ? "/me-white.png" : "/me-dark.png" ;

  return (
    <section className="hero">
      <div className="hero-left" data-aos="fade-right">
        <span className="hero-badge">Hello, I’m</span>

        <h1 className="hero-title">
          Eroh <span>Maro</span>
        </h1>

        <p className="hero-subtitle">
          Software Engineer & Digital Problem Solver
        </p>

        <div className="hero-actions">
          <Link to="/about" className="btn-primary">
            Get to know me
          </Link>
          <Link to="/servicesPage" className="btn-secondary">
            View my services
          </Link>
        </div>
      </div>

      <div className="hero-right" data-aos="fade-left">
        <img
          src={imageSrc}
          alt="Eroh Maro"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
