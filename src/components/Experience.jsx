import SectionReveal from "./SectionReveal";
import { experienceContent } from "../content/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionReveal direction="right">
        <div className="section-chip">
          <span className="section-chip-icon">◍</span>
          Work History
        </div>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">{experienceContent.sectionIntro}</p>

        <div className="timeline-shell glass section-panel">
          <div className="timeline-head">
            <div>
              <div className="timeline-role">{experienceContent.role}</div>
              <div className="timeline-company">{experienceContent.company}</div>
              <div className="timeline-brand">{experienceContent.brand}</div>
            </div>
            <div className="timeline-meta">
              <span>{experienceContent.location}</span>
              <span>{experienceContent.start} - Present</span>
            </div>
          </div>

          <div className="timeline-grid">
            <div className="timeline-column">
              <h3 className="timeline-title">Key Contributions</h3>
              {experienceContent.achievements.map((item) => (
                <div key={item} className="timeline-item">
                  <span className="timeline-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="timeline-column glass timeline-awards">
              <h3 className="timeline-title">Awards & Certifications</h3>
              {experienceContent.awards.map((item) => (
                <div key={item} className="timeline-item">
                  <span className="timeline-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
