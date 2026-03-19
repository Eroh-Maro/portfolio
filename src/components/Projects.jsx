import "./Projects.css";
import transition from "../assets/transition.png";

import studentPortal from "../assets/studentPortal.png";
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
          href="https://student-portal-frontend-maoy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={studentPortal} alt="Student Portal" />
          <div className="project-overlay">
            <h3>Student Portal</h3>
            <span>University Student Portal</span>
          </div>
        </a>

    <a 
    href="https://book-store-frontend-hgdn.vercel.app"
    target="_blank"
          rel="noopener noreferrer"
          className="project-card"
    >
      <div className="project-card" data-aos="zoom-in-up">
          <img src={bookStore} alt="Book Store" />
          <div className="project-overlay">
            <h3>Book Store</h3>
            <span>E-Commerce</span>
          </div>
        </div>

    </a>
        
        <a href="https://delsu-hub-frontend.vercel.app">
          <div className="project-card" data-aos="zoom-in-up">
          <img src={delsu} alt="Delsu Event Hub" />
          <div className="project-overlay">
            <h3>Delsu Event Hub</h3>
            <span>Event Management</span>
          </div>
        </div>
        </a>
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
