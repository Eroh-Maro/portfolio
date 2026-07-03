import { Link } from "react-router-dom";
import "./Certifications.css";
import certifications from "../data/certifications";

function Certifications() {
  return (
    <section className="certifications">
      <div className="certifications-intro" data-aos="fade-up">
        <h2 className="certifications-title">Certifications</h2>
        <p className="certifications-text">
          Credentials that back up the skills behind my projects.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <Link
            key={cert.slug}
            to={`/certifications/${cert.slug}`}
            className="cert-card"
            data-aos="zoom-in-up"
          >
            <div className="cert-image-wrap">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Certifications;