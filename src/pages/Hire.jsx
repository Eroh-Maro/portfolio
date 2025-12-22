// src/pages/Hire.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Hire.css";

/* ================================
   Pricing Config
================================ */

const BASE_PRICES = {
  landing: 250000,
  portfolio: 350000,
  business: 450000,
  webapp: 700000,
  mvp: 900000,
  design: 300000,
};

const CONSULTATION_PRICES = {
  "1m": 100000,
  "2m": 200000,
  "3m": 325000,
};

const PAGE_PRICES = {
  "1-3": 0,
  "4-6": 80000,
  "7-10": 150000,
  "10+": 220000,
};

const FEATURE_PRICES = {
  blog: 60000,
  contact: 30000,
  booking: 100000,
  auth: 120000,
  payments: 180000,
  admin: 220000,
  api: 120000,
  database: 150000,
  deployment: 60000,
};

const TIMELINE_MULTIPLIER = {
  rush: 1.4,
  normal: 1.15,
  relaxed: 1.0,
  flexible: 0.95,
};

function Hire() {
  const formRef = useRef(null);

  const [projectType, setProjectType] = useState("");
  const [pages, setPages] = useState("");
  const [features, setFeatures] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [consultDuration, setConsultDuration] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const isConsultation = projectType === "consultation";

  const toggleFeature = (key) => {
    setFeatures((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  /* ================================
     Price Calculation
  ================================ */

  const calculateExactPrice = () => {
    let total = 0;

    if (isConsultation) {
      total = CONSULTATION_PRICES[consultDuration] || 0;
    } else {
      total += BASE_PRICES[projectType] || 0;
      total += PAGE_PRICES[pages] || 0;
      features.forEach((f) => (total += FEATURE_PRICES[f] || 0));
      total *= TIMELINE_MULTIPLIER[timeline] || 1;
    }

    return Math.round(total);
  };

  const exactPrice = calculateExactPrice();

  const MIN_PROJECT_PRICE = 250000;
  const MIN_CONSULT_PRICE = 100000;

  const rawLow = Math.round(exactPrice * 0.9);
  const rawHigh = Math.round(exactPrice * 1.1);

  const rangeLow = isConsultation
    ? Math.max(rawLow, MIN_CONSULT_PRICE)
    : Math.max(rawLow, MIN_PROJECT_PRICE);

  const rangeHigh = rawHigh;

  /* ================================
     Submit (EmailJS)
  ================================ */

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      project_type: projectType,
      consult_duration: consultDuration || "N/A",
      pages: pages || "N/A",
      timeline: timeline || "N/A",
      features: features.length ? features.join(", ") : "None",
      description: formRef.current.description.value,
      referral: formRef.current.referral.value,
      exact_price: `₦${exactPrice.toLocaleString()}`,
      price_range: `₦${rangeLow.toLocaleString()} – ₦${rangeHigh.toLocaleString()}`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_HIRE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <main className="hire-page">
      <header className="hire-hero">
        <h1>Hire Me</h1>
        <p>Serious projects only. Pricing is based on scope and complexity.</p>
      </header>

      {!submitted ? (
        <form ref={formRef} className="hire-form glass" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Project type</label>
            <select
              required
              value={projectType}
              onChange={(e) => {
                setProjectType(e.target.value);
                setPages("");
                setFeatures([]);
                setTimeline("");
                setConsultDuration("");
              }}
            >
              <option value="">Select</option>
              <option value="landing">Landing Page</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="business">Business Website</option>
              <option value="webapp">Web Application</option>
              <option value="mvp">MVP</option>
              <option value="design">UI / UX Design</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          {isConsultation && (
            <div className="form-group">
              <label>Consultation duration</label>
              <select
                required
                value={consultDuration}
                onChange={(e) => setConsultDuration(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1m">1 month</option>
                <option value="2m">2 months</option>
                <option value="3m">3 months</option>
              </select>
            </div>
          )}

          {!isConsultation && (
            <>
              <div className="form-group">
                <label>Number of pages</label>
                <select
                  required
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1-3">1–3</option>
                  <option value="4-6">4–6</option>
                  <option value="7-10">7–10</option>
                  <option value="10+">10+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Features</label>
                <div className="checkbox-grid">
                  {Object.keys(FEATURE_PRICES).map((key) => (
                    <label key={key} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={features.includes(key)}
                        onChange={() => toggleFeature(key)}
                      />
                      {key}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Timeline</label>
                <select
                  required
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="rush">Less than 2 weeks</option>
                  <option value="normal">2–4 weeks</option>
                  <option value="relaxed">1–2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </>
          )}

          <div className="form-group">
            <label>How did you hear about me?</label>
            <select name="referral">
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Twitter / X</option>
              <option>Referral</option>
              <option>WhatsApp</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project description</label>
            <textarea name="description" rows="4" required />
          </div>

          {exactPrice > 0 && (
            <p className="estimate-note">
              Estimated range:{" "}
              <strong>
                ₦{rangeLow.toLocaleString()} – ₦{rangeHigh.toLocaleString()}
              </strong>
            </p>
          )}

          <p className="minimum-note">
            Minimum project price: <strong>₦250,000</strong>
            <br />
            Minimum consultation fee: <strong>₦100,000 / month</strong>
          </p>

          <button className="btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Request a quote"}
          </button>
        </form>
      ) : (
        <div className="hire-success glass">
          <h3>Request received</h3>
          <p>I’ll reach out shortly, or you can contact me directly.</p>
        </div>
      )}
    </main>
  );
}

export default Hire;
