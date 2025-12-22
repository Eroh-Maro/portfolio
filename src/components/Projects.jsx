import "./Projects.css";
import transition from "../assets/transition.png";

import est8 from "../assets/est8.png";
import bookStore from "../assets/bookStore.png";
import delsu from "../assets/delsu.png";

function Projects() {
  return (
    <section className="projects">
      {/* Intro */}
      <div className="projects-intro" data-aos="fade-up">
        <img src={transition} alt="" className="projects-transition" />
        <h2 className="projects-title">My Portfolio</h2>
        <p className="projects-text">
          Explore some of my recent projects showcasing my skills in web
          development, UI/UX design, and software engineering.
        </p>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        <a
          href="https://est8-hub-frontend.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={est8} alt="EST8 Hub" />
          <div className="project-overlay">
            <h3>EST8 Hub</h3>
            <span>Real Estate Platform</span>
          </div>
        </a>

        <div className="project-card" data-aos="zoom-in-up">
          <img src={bookStore} alt="Book Store" />
          <div className="project-overlay">
            <h3>Book Store</h3>
            <span>UI / UX & Frontend</span>
          </div>
        </div>

        <div className="project-card" data-aos="zoom-in-up">
          <img src={delsu} alt="Delsu Event Hub" />
          <div className="project-overlay">
            <h3>Delsu Event Hub</h3>
            <span>Event Management</span>
          </div>
        </div>
      </div>
            {/* View All */}
      <div className="projects-cta" data-aos="zoom-in-up">
        <a href="/portfolio" className="projects-viewall">
          View All
        </a>
      </div>

    </section>
  );
}

export default Projects;
