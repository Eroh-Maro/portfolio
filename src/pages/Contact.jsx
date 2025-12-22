import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import transition from "../assets/transition.png";

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <header className="contact-hero" data-aos="fade-up">
        <img
          src={transition}
          alt=""
          className="contact-transition"
        />

        <h1 className="contact-title">Contact</h1>

        <p className="contact-text">
          Have a question, idea, or just want to connect?
          Feel free to reach out — I’ll respond as soon as I can.
        </p>
      </header>

      {/* Content */}
      <section className="contact-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form glass"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p className="form-status success">
                Message sent successfully. I’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={isSending}
            >
              {isSending ? (
                <span className="btn-loading">
                  Sending<span className="dots" />
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </form>

          {/* Contact Info */}
          <aside className="contact-info glass">
            <h3>Other ways to reach me</h3>

            <ul>
              <li>
                <span>Email</span>
                <a href="mailto:maroeroh@gmail.com">
                  maroeroh@gmail.com
                </a>
              </li>

              <li>
                <span>WhatsApp</span>
                <a
                  href="https://wa.me/2348149489321"
                  target="_blank"
                  rel="noreferrer"
                >
                  +234 814 948 9321
                </a>
              </li>

              <li>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/oghenemaro-eroh-379978372"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/oghenemaro-eroh
                </a>
              </li>

              <li>
                <span>Location</span>
                <p>Nigeria</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Contact;
