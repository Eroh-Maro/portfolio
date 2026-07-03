import { useParams, Link } from "react-router-dom";
import certifications from "../data/certifications";
import "./CertificationDetail.css";

function CertificationDetail() {
  const { slug } = useParams();
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) {
    return (
      <section className="cert-detail">
        <p>Certification not found.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="cert-detail" data-aos="fade-up">
      <Link to="/" className="back-link">← Back to certifications</Link>

      <img src={cert.image} alt={cert.title} className="cert-detail-image" />

      <h1>{cert.title}</h1>
      <p className="cert-detail-issuer">
        {cert.issuer} &middot; {cert.date}
        {cert.duration && ` · ${cert.duration}`}
      </p>

      {cert.role && <p className="cert-detail-role">{cert.role}</p>}

      <p className="cert-detail-description">{cert.description}</p>

      {cert.score && (
        <p className="cert-score">
          Score: <strong>{cert.score}</strong>
        </p>
      )}

      {cert.credentialId && (
        <p className="cert-credential-id">
          Credential ID: <strong>{cert.credentialId}</strong>
        </p>
      )}

      {cert.highlights && cert.highlights.length > 0 && (
        <>
          <h3>Highlights</h3>
          <ul className="cert-highlights">
            {cert.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      )}

      <h3>Skills Covered</h3>
      <div className="cert-skills">
        {cert.skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>

      {cert.images && cert.images.length > 0 && (
        <>
          <h3>Gallery</h3>
          <div className="cert-gallery">
            {cert.images.map((img, i) => (
              <img key={i} src={img} alt={`${cert.title} extra ${i + 1}`} />
            ))}
          </div>
        </>
      )}

      {cert.verifyUrl && (
        <div className="cert-detail-links">
          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
            Verify Credential
          </a>
        </div>
      )}
    </section>
  );
}

export default CertificationDetail;