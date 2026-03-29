import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { projectsContent } from "../content/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsContent.items[0]);

  return (
    <section id="projects" className="section">
      <SectionReveal direction="left">
        <div className="section-chip">
          <span className="section-chip-icon">⌘</span>
          Generated Builds
        </div>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">{projectsContent.sectionIntro}</p>

        <div className="projects-shell glass section-panel">
          <div className="projects-grid">
            <div className="projects-menu" role="tablist" aria-label="Project list">
              {projectsContent.items.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={`projects-card ${activeProject.id === project.id ? "is-active" : ""}`}
                  onClick={() => setActiveProject(project)}
                  aria-pressed={activeProject.id === project.id}
                >
                  <span className="projects-card-icon">{project.icon}</span>
                  <span className="projects-card-copy">
                    <span className="projects-card-title">{project.title}</span>
                    <span className="projects-card-kicker">{project.kicker}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="projects-detail glass">
              <img src={activeProject.image} className="project-img" alt={activeProject.title} />
              <div className="projects-detail-badge">
                <span className="projects-detail-badge-icon">{activeProject.icon}</span>
                Featured Build
              </div>
              <h3 className="projects-detail-title">{activeProject.title}</h3>
              <p className="projects-detail-text">{activeProject.summary}</p>
              <div className="projects-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="projects-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="pill-link projects-cta">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
