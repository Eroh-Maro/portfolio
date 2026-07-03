import { Link } from "react-router-dom";
import "./Projects.css";
import transition from "../assets/transition.png";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-intro" data-aos="fade-up">
        <img src={transition} alt="" className="projects-transition" />
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-text">
          Explore some of my recent projects showcasing my skills in web
          development, UI/UX design, and software engineering.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="project-card"
            data-aos="zoom-in-up"
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <span>{project.tagline}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="projects-cta" data-aos="zoom-in-up">
        <Link to="/portfolio" className="projects-viewall">
          View All
        </Link>
      </div>
    </section>
  );
}

export default Projects;