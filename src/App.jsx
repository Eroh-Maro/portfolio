import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Load saved theme (or fallback to dark)
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="appContainer">
      {/* pass toggleTheme to navbar */}
      <Navbar onToggleTheme={toggleTheme} />

      <ScrollToTop behavior="auto" />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
