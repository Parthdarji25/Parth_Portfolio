import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { skillsContent } from "../content/skills";

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillsContent.groups[0]);

  return (
    <section id="skills" className="section">
      <SectionReveal direction="right">
        <div className="section-chip">
          <span className="section-chip-icon">◈</span>
          AI Stack Matrix
        </div>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">{skillsContent.sectionIntro}</p>

        <div className="skills-shell glass section-panel">
          <div className="skills-grid">
            <div className="skills-menu" role="tablist" aria-label="Skill groups">
              {skillsContent.groups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={`skills-card ${activeGroup.id === group.id ? "is-active" : ""}`}
                  onClick={() => setActiveGroup(group)}
                  aria-pressed={activeGroup.id === group.id}
                >
                  <span className="skills-card-icon">{group.icon}</span>
                  <span className="skills-card-copy">
                    <span className="skills-card-title">{group.title}</span>
                    <span className="skills-card-kicker">{group.kicker}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="skills-detail glass">
              <div className="skills-detail-badge">
                <span className="skills-detail-badge-icon">{activeGroup.icon}</span>
                Core Track
              </div>
              <h3 className="skills-detail-title">{activeGroup.title}</h3>
              <p className="skills-detail-text">{activeGroup.summary}</p>
              <div className="skills-tags">
                {activeGroup.tools.map((tool) => (
                  <span key={tool} className="skills-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
