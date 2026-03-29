import SectionReveal from "./SectionReveal";
import { educationContent } from "../content/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionReveal direction="left">
        <div className="section-chip">
          <span className="section-chip-icon">◔</span>
          Academic Track
        </div>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">{educationContent.sectionIntro}</p>

        <div className="education-shell glass section-panel">
          {educationContent.items.map((item) => (
            <div key={item.id} className="education-card glass">
              <div className="education-degree">{item.degree}</div>
              <div className="education-school">{item.institution}</div>
              <div className="education-location">{item.location}</div>
              {item.period ? <div className="education-period">{item.period}</div> : null}
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
