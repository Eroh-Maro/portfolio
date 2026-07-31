import studentPortal from "../assets/studentPortal.png";
import bookStore from "../assets/bookStore.png";
import apex from "../assets/apex-legal.png";
import jwAdvisory from "../assets/jw-advisory.png";
const projects = [

{
  slug: "jw-courtship-advisory",
  title: "JW Courtship Advisory",
  tagline: "Marriage Advisory Platform",
  image: jwAdvisory,
  description:
    "A production-ready platform built for a real client to manage confidential matchmaking within the Jehovah's Witness community. Features secure profile management, admin workflows, notifications, and role-based access with a scalable Node.js backend.",
  role: "Backend Developer (Client Project)",
  challenges: [
    "Designed a secure backend with JWT authentication and role-based access for Super Admin, Admin, and Coordinator roles",
    "Built a complete profile management workflow with Cloudinary image uploads and MongoDB",
    "Integrated Hostinger SMTP with Nodemailer for automated email notifications",
    "Implemented admin assignment, ownership, and international matching workflows",
    "Optimized production performance by replacing BullMQ/Redis queues with direct service architecture",
    "Deployed the application to production and resolved real-world deployment issues"
  ],
  stack: [
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Multer",
    "Nodemailer",
    "Helmet",
    "Express Validator",
    "Hostinger",
  ],
  liveUrl: "https://jehovahwitness-advisory.com/",
  githubUrl: "https://github.com/Eroh-Maro/Jehova-witness-courtship-advisory.git",
},
{
    slug: "apex-legal",
    title: "Apex Legal",
    tagline: "Legal Practice Management",
    image: apex,
    description:
      "A capstone project for TechCrush's Backend Bootcamp, built as a legal practice management platform with role-based access across five user types. Currently in progress, with the desktop lawyer interface completed.",
    role: "Backend Team Lead",
    challenges: [
      "Designed JWT authentication with RBAC across 5 roles: Admin, Lawyer, Secretary, Practice Manager, and Paralegal",
      "Built an audit logging system tracking 10+ event types for compliance",
      "Implemented file uploads with Cloudinary and Multer",
      "Set up scheduled background jobs with Node Cron",
      "Integrated Nodemailer for automated email notifications",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Node Cron", "Nodemailer"],
    liveUrl: "https://apex-legal-frontend.vercel.app/",
    githubUrl: "https://github.com/Eroh-Maro/apex-legal.git", // add your repo link
  },
  {
    slug: "student-portal",
    title: "Student Portal",
    tagline: "University Student Portal",
    image: studentPortal,
    description:
      "A university student portal built to streamline course registration, and student records management.",
    role: "Full-stack developer (MERN)",
    challenges: [
      "Designed role-based access so students and admins see different views",
      "Optimized MongoDB queries for fast result lookups at scale",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://student-portal-frontend-maoy.vercel.app/",
    githubUrl: "https://github.com/Eroh-Maro/student-portal-frontend.git", // add your repo link
  },
{
    slug: "book-store",
    title: "Book Store",
    tagline: "E-Commerce",
    image: bookStore,
    description:
      "A full-featured MERN e-commerce platform for browsing, searching, and purchasing books. Includes Firebase authentication and Redux Toolkit for global state management, with a focus on clean UI and a smooth checkout flow.",
    role: "Full-stack developer (MERN)",
    challenges: [
      "Integrated Firebase Authentication with Context API for session management",
      "Structured state with Redux Toolkit, using feature-based slices for books, cart, and orders",
      "Built a responsive product grid with filtering and search",
      "Persisted cart state across sessions to survive page refreshes and re-logins",
    ],
    stack: ["React", "Redux Toolkit", "Context API", "Node.js", "Express", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    liveUrl: "https://book-store-frontend-hgdn.vercel.app",
    githubUrl: "https://github.com/Eroh-Maro/book-store-frontend.git",
  },

];

export default projects;