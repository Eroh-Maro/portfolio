import "./Stats.css";

import clientsIcon from "../assets/consult.png";
import projectsIcon from "../assets/webDev.png";
import certIcon from "../assets/design.png";
import experienceIcon from "../assets/deployment.png";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid" data-aos="fade-left">
        <div className="stat-card">
          <div className="stat-icon">
            <img src={clientsIcon} alt="" />
          </div>
          <span className="stat-number">8</span>
          <span className="stat-label">Clients</span>
        </div>

        <div className="stat-card stat-highlight">
          <div className="stat-icon">
            <img src={projectsIcon} alt="" />
          </div>
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <img src={certIcon} alt="" />
          </div>
          <span className="stat-number">5</span>
          <span className="stat-label">Certifications</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <img src={experienceIcon} alt="" />
          </div>
          <span className="stat-number">03</span>
          <span className="stat-label">Years Experience</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
