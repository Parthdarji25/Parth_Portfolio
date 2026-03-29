import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { aboutContent } from "../content/about";

export default function About() {
  const [activeItem, setActiveItem] = useState(aboutContent.highlights[0]);

  return (
    <section id="about" className="section">
      <SectionReveal direction="left">
        <div className="section-chip">
          <span className="section-chip-icon">◎</span>
          Neural Profile
        </div>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">{aboutContent.sectionIntro}</p>

        <div className="about-shell glass section-panel">
          <div className="about-intro">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about-copy">{paragraph}</p>
            ))}
          </div>

          <div className="about-grid">
            <div className="about-menu" role="tablist" aria-label="About highlights">
              {aboutContent.highlights.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`about-card ${activeItem.id === item.id ? "is-active" : ""}`}
                  onClick={() => setActiveItem(item)}
                  aria-pressed={activeItem.id === item.id}
                >
                  <span className="about-card-icon">{item.icon}</span>
                  <span className="about-card-copy">
                    <span className="about-card-title">{item.title}</span>
                    <span className="about-card-kicker">{item.kicker}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="about-detail glass">
              <div className="about-detail-badge">
                <span className="about-detail-badge-icon">{activeItem.icon}</span>
                Active Focus
              </div>
              <h3 className="about-detail-title">{activeItem.title}</h3>
              <p className="about-detail-text">{activeItem.description}</p>
              <div className="about-detail-list">
                {activeItem.points.map((point) => (
                  <div key={point} className="about-point">
                    <span className="about-point-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-footer-note">{aboutContent.footer}</div>
        </div>
      </SectionReveal>
    </section>
  );
}
