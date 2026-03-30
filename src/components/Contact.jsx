import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { contactContent } from "../content/contact";
import { personalInfo } from "../content/personal";

export default function Contact() {
  const [activeLink, setActiveLink] = useState("LinkedIn");
  const [feedback, setFeedback] = useState("");

  const handleContactClick = async (link) => {
    setActiveLink(link.label);

    if (link.copyValue && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(link.copyValue);
        setFeedback(`${link.label} copied. Use it directly or open your app.`);
      } catch {
        setFeedback(`${link.label} ready to use.`);
      }
      return;
    }

    setFeedback(link.message);
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
          className="glass section-panel contact-panel"
          style={{
            maxWidth: "800px",
            margin: "auto",
            padding: "34px",
            background: "linear-gradient(135deg, rgba(245,241,236,0.72), rgba(228,220,214,0.56))"
          }}
        >
          <div className="contact-grid">
            <div className="contact-intro">
              <span className="contact-kicker">Direct Contact</span>
              <h3>Pick the fastest way to reach me.</h3>
              <p>
                LinkedIn for professional outreach, email for detailed conversations,
                and phone for immediate coordination.
              </p>
              <div className="contact-focus-card">
                <span className="contact-focus-label">Active channel</span>
                <strong>{activeLink}</strong>
                <p>{feedback || "Click any card to open it. Email and phone also copy on click."}</p>
              </div>
            </div>

            <div className="contact-methods">
              {contactContent.socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={activeLink === link.label ? "contact-method is-active" : "contact-method"}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={() => handleContactClick(link)}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="contact-method-topline">{link.label}</span>
                  <span className="contact-method-value">{link.value}</span>
                  <span className="contact-method-hint">{link.hint}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-quick-note">
            <span className="contact-quick-note-dot" />
            {personalInfo.location}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
