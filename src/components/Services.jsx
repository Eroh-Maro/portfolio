// src/components/Services.jsx
import { Link } from "react-router-dom";
import "./Services.css";

import transition from "../assets/transition.png";
import webDev from "../assets/webDev.png";
import consult from "../assets/consult.png";
import design from "../assets/design.png";
import deployment from "../assets/deployment.png";

function Services() {
  return (
    <section className="services">
      {/* Intro */}
      <div className="services-intro"  data-aos="fade-up">
        <img src={transition} alt="" className="services-transition" />
        <h2 className="services-title">My services</h2>
        <p className="services-text">
          I offer a range of services including web development, mobile app
          development, and software prototyping to help bring your ideas to life.
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid">
        <div className="service-card" data-aos="flip-left">
          <img src={webDev} alt="" className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Modern, responsive websites and web applications built with
            performance and scalability in mind.
          </p>
        </div>

        <div className="service-card" data-aos="flip-left">
          <img src={consult} alt="" className="service-icon" />
          <h3>Consultancy</h3>
          <p>
            Expert guidance on architecture, technology choices, and product
            direction.
          </p>
        </div>

        <div className="service-card" data-aos="flip-left">
          <img src={design} alt="" className="service-icon" />
          <h3>UI / UX</h3>
          <p>
            Clean, usable interfaces and thoughtful experiences focused on real
            users.
          </p>
        </div>

        <div className="service-card" data-aos="flip-left">
          <img src={deployment} alt="" className="service-icon" />
          <h3>Software Deployment</h3>
          <p>
            Reliable deployment and delivery for web and mobile applications.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="services-cta" data-aos="zoom-in">
        <Link to="/hire" className="services-hire-btn">
          Hire Me
        </Link>
      </div>
    </section>
  );
}

export default Services;
