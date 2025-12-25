import "./ServicesPage.css";

import transition from "../assets/transition.png";
import webDev from "../assets/webDev.png";
import design from "../assets/design.png";
import consult from "../assets/consult.png";
import deployment from "../assets/deployment.png";

function ServicesPage() {
  return (
    <main className="services-page">
      {/* Page Header */}
      <header className="services-hero" data-aos="fade-up">
        <img
          src={transition}
          alt=""
          className="services-transition"
          aria-hidden="true"
        />

        <h1 className="services-title">Services</h1>
        <p className="services-text">
          I help individuals and businesses design, build, and deploy reliable
          digital products with clarity and intention.
        </p>
      </header>

      {/* Services Grid */}
      <section className="services-content">
        <div className="services-grid">
          <article className="service-card glass">
            <div className="service-icon">
              <img src={webDev} alt="" aria-hidden="true" />
            </div>
            <h3>Web Development</h3>
            <p>
              Scalable, modern web applications built with React, Node, and clean
              architecture.
            </p>
          </article>

          <article className="service-card glass">
            <div className="service-icon">
              <img src={design} alt="" aria-hidden="true" />
            </div>
            <h3>UI / UX Design</h3>
            <p>
              Thoughtful interface design with strong hierarchy, usability, and
              visual clarity.
            </p>
          </article>

          <article className="service-card glass">
            <div className="service-icon">
              <img src={consult} alt="" aria-hidden="true" />
            </div>
            <h3>Consultation</h3>
            <p>
              Technical direction, planning, and decision support for digital
              products.
            </p>
          </article>

          <article className="service-card glass">
            <div className="service-icon">
              <img src={deployment} alt="" aria-hidden="true" />
            </div>
            <h3>Deployment</h3>
            <p>
              Production-ready deployment with performance, security, and
              reliability in mind.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <footer className="services-cta">
        <a href="/hire" className="btn-primary">
          Hire Me
        </a>
      </footer>
    </main>
  );
}

export default ServicesPage;