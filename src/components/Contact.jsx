import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { contactContent } from "../content/contact";
import { personalInfo } from "../content/personal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
  };

  return (
    <section id="contact" className="section">
      <SectionReveal direction="right">
        <div className="section-chip">
          <span className="section-chip-icon">◌</span>
          Signal Channel
        </div>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">{contactContent.sectionIntro}</p>

        <div
          className="glass section-panel"
          style={{
            maxWidth: "800px",
            margin: "auto",
            padding: "34px",
            background: "linear-gradient(135deg, rgba(245,241,236,0.72), rgba(228,220,214,0.56))"
          }}
        >
          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder={personalInfo.email}
              value={form.email}
              onChange={handleChange}
              required
              className="input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="input"
            />

            <button className="btn btn-primary">
              Send Message 🚀
            </button>
          </form>

          {/* SOCIAL LINKS */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            {contactContent.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
