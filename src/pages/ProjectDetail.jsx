import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <p>Project not found.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="project-detail" data-aos="fade-up">
      <Link to="/" className="back-link">← Back to projects</Link>

      <img src={project.image} alt={project.title} className="detail-image" />

      <h1>{project.title}</h1>
      <p className="detail-tagline">{project.tagline}</p>
      <p className="detail-description">{project.description}</p>

      <h3>My Role</h3>
      <p>{project.role}</p>

      <h3>Key Challenges</h3>
      <ul>
        {project.challenges.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h3>Stack</h3>
      <div className="detail-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="stack-badge">{tech}</span>
        ))}
      </div>

      <div className="detail-links">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;