import "./About.css";
import transition from "../assets/transition.png";

function About() {
  return (
    <section className="about">
      {/* Intro */}
      <div className="about-intro" data-aos="fade-up">
        <img src={transition} alt="" className="about-transition" />
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi, I’m <strong>Eroh Oghenemaro Divine</strong>, a software engineer and digital
          problem solver based in Delta State, Nigeria. I build clean,
          scalable, and user-focused applications with a strong balance of
          design and engineering.
        </p>

        <p className="about-text">
          I’m currently studying <strong>Computer Science at Delta State
          University (DELSU)</strong>, where I continue to sharpen my technical
          foundation while working on real-world projects across web
          development, UI/UX, and backend systems.
        </p>
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

        <div className="skills-grid">
          <span className="skill-pill">HTML</span>
          <span className="skill-pill">CSS</span>
          <span className="skill-pill">JavaScript</span>
          <span className="skill-pill">React</span>
          <span className="skill-pill">Node.js</span>
          <span className="skill-pill">Express</span>
          <span className="skill-pill">MongoDB</span>
          <span className="skill-pill">PostgreSQL</span>
          <span className="skill-pill">Git & GitHub</span>
          <span className="skill-pill">Figma</span>
          <span className="skill-pill">GIMP</span>
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
