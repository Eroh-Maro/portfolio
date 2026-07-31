import "./About.css";
import transition from "../assets/transition.png";
import profilePhoto from "../assets/profile.jpg";

function About() {
  return (
    <section className="about">
      {/* Intro */}
<div className="about-intro" data-aos="fade-up">
  

  <img
    src={profilePhoto}
    alt="Eroh Oghenemaro Divine"
    className="about-photo"
  />
  
  <h1 className="about-title">About Me</h1>
  <p className="about-text">
    Hi, I'm <strong>Eroh Oghenemaro Divine</strong>, a Backend-focused software engineer experienced
     in designing and deploying production-grade REST APIs, authentication systems, and role-based
      access control using Node.js, Express, and the MERN stack. Experienced across MongoDB and PostgreSQL,
       building secure backend architectures, third-party integrations, and scalable production applications. 
       Proven ability to translate complex business requirements into well-structured backend systems from 
       architecture through deployment.
  </p>

  <p className="about-text">
    I'm currently studying <strong>Computer Science at Delta State
    University (DELSU)</strong>, where I continue to sharpen my technical
    foundation while working on real-world projects across web
    development, UI/UX, and backend systems.
  </p>
  <img src={transition} alt="" className="about-transition" />

</div>

      {/* Experience */}
      <div className="about-experience" data-aos="fade-up">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3>Frontend Development Tutor</h3>
            <span className="experience-org">Latitude Tech Academy</span>
          </div>
          <p>
  Trained 30+ Southern Delta University (SDU) IT students in frontend development fundamentals, guiding them through core web technologies and deployment workflows with hands-on instruction and practical projects.
</p>
        </div>
      </div>

      {/* Values */}
      <div className="about-values">
        <div className="value-card">
          <h3>Problem Solving</h3>
          <p>
            I enjoy breaking complex problems into simple, effective solutions
            that are easy to maintain and scale.
          </p>
        </div>

        <div className="value-card">
          <h3>Design + Engineering</h3>
          <p>
            My background in UI/UX allows me to build products that not only
            work well, but feel intuitive and polished.
          </p>
        </div>

        <div className="value-card">
          <h3>Continuous Growth</h3>
          <p>
            I’m constantly learning new technologies, improving my workflow,
            and refining my craft through real projects.
          </p>
        </div>
      </div>

      {/* Skills */}
<div className="about-skills">
  <h2 className="skills-title">My Skills</h2>

  <div className="skills-categories">
    <div className="skills-category">
      <h4 className="skills-category-title">Frontend</h4>
      <div className="skills-grid">
        <span className="skill-pill">HTML</span>
        <span className="skill-pill">CSS</span>
        <span className="skill-pill">JavaScript</span>
        <span className="skill-pill">React</span>
        <span className="skill-pill">Figma</span>
      </div>
    </div>

    <div className="skills-category">
      <h4 className="skills-category-title">Backend</h4>
      <div className="skills-grid">
        <span className="skill-pill">Node.js</span>
        <span className="skill-pill">Express</span>
        <span className="skill-pill">MongoDB</span>
        <span className="skill-pill">PostgreSQL</span>
      </div>
    </div>

    <div className="skills-category">
      <h4 className="skills-category-title">Tools & Deployment</h4>
      <div className="skills-grid">
        <span className="skill-pill">Git & GitHub</span>
        <span className="skill-pill">GIMP</span>
        <span className="skill-pill">Vercel</span>
        <span className="skill-pill">Render</span>
      </div>
    </div>
  </div>
</div>

      {/* CTA */}
      <div className="about-cta">
        <p>
          I’m open to collaborations, internships, and freelance opportunities.
        </p>
        <a href="/hire" className="about-btn">
          Let’s Work Together
        </a>
      </div>
    </section>
  );
}

export default About;