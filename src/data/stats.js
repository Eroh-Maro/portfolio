import presloadedCert from "../assets/presloaded-cert.png";
import techcrushCert from "../assets/techcrush-cert.png";
import hamplusCert from "../assets/hamplus-cert.png";

const certifications = [
  {
    slug: "presloaded-academy",
    title: "Web Development",
    issuer: "Presloaded Academy",
    date: "June 2026",
    image: presloadedCert,
    credentialId: "",
    description:
      "A web development program covering core fundamentals through to building functional, real-world web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    verifyUrl: "",
  },
  {
    slug: "techcrush-backend",
    title: "Backend Bootcamp",
    issuer: "TechCrush",
    date: "June 2026",
    image: techcrushCert,
    credentialId: "TEC-E5F11ED5",
    description:
      "An intensive backend development bootcamp focused on building secure, scalable server-side applications. Apex Legal was the capstone project for this program.",
    skills: ["Node.js", "Express", "MongoDB", "JWT Authentication", "REST APIs"],
    verifyUrl: "",
  },
  {
    slug: "hamplus-frontend",
    title: "Frontend Scholarship",
    issuer: "Hamplus Hub",
    date: "December 2025",
    image: hamplusCert,
    credentialId: "HH-ND/WB_FE/2025/001",
    description:
      "A competitive frontend scholarship — selected as one of 5 from my department via NACOS DELSU. Focused on modern frontend development practices and UI engineering.",
    skills: ["React", "UI/UX Principles", "Responsive Design"],
    verifyUrl: "",
  },
];

export default certifications;