import presloadedCert from "../assets/presloaded-academy-cert.png";
import techcrushCert from "../assets/techcrush-backend-cert.png";
import hamplusCert from "../assets/hamplus-frontend-cert.png";
import presloadedGrad from "../assets/presloaded-graduation.jpeg"
import hamplusGroupPhoto from "../assets/hamplus-group-picture.jpeg"
import techCrushLeaderboard from "../assets/techCrush-leaderboard.png"




const certifications = [
  {
    slug: "presloaded-academy",
    title: "Web Development",
    issuer: "Presloaded Academy",
    date: "June 2026",
    duration: "6 months",
    image: presloadedCert,
    images: [presloadedGrad], // add extra image imports here, e.g. [debateWinPhoto, hackathonPhoto]
    credentialId: "",
    description:
      "A 6-month web development program covering core fundamentals through to building functional, real-world web applications. Served as Team Captain of Tech Titans, leading the team to win the 'Humans vs AI' debate and the program hackathon with Connect Abraka, a platform built to connect tech professionals in Abraka.",
    role: "Team Captain, Tech Titans",
    highlights: [
      "Led team to victory in the 'Humans vs AI' debate",
      "Won the hackathon with Connect Abraka, a platform for connecting techies in Abraka",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    verifyUrl: "",
  },
{
    slug: "techcrush-backend",
    title: "Backend Bootcamp",
    issuer: "TechCrush",
    date: "June 2026",
    duration: "",
    image: techcrushCert,
    images: [techCrushLeaderboard],
    credentialId: "TEC-E5F11ED5",
    score: "90/100 aggregate",
    description:
      "An intensive backend development bootcamp focused on building secure, scalable server-side applications. Scored 90/100 aggregate. Served as Lead Backend Developer for Group 11's capstone project, Apex Legal.",
    role: "Lead Backend Developer, Group 11",
    highlights: [
      "Led backend architecture and implementation for Group 11's capstone project, Apex Legal",
      "Scored 90/100 aggregate in the bootcamp",
    ],
    skills: ["Node.js", "Express", "MongoDB", "JWT Authentication", "REST APIs"],
    verifyUrl: "",
  },
  {
    slug: "hamplus-frontend",
    title: "Frontend Scholarship",
    issuer: "Hamplus Hub",
    date: "December 2025",
    duration: "",
    image: hamplusCert,
    images: [hamplusGroupPhoto],
    credentialId: "HH-ND/WB_FE/2025/001",
    description:
      "A competitive frontend scholarship — selected as one of 5 from my department via NACOS DELSU. Focused on modern frontend development practices and UI engineering.",
    highlights: [],
    skills: ["React", "UI/UX Principles", "Responsive Design"],
    verifyUrl: "",
  },
];

export default certifications;