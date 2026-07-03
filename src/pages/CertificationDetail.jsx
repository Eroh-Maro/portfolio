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
      </p>

      <p className="cert-detail-description">{cert.description}</p>

      {cert.credentialId && (
        <p className="cert-credential-id">
          Credential ID: <strong>{cert.credentialId}</strong>
        </p>
      )}

      <h3>Skills Covered</h3>
      <div className="cert-skills">
        {cert.skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>

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