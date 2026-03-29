import heroImage from "../assets/hero.png";
import { personalInfo } from "../content/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="section hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        className="glass section-panel hero-panel"
        style={{
          width: "min(1100px, 100%)",
          background: "linear-gradient(135deg, rgba(246,242,237,0.72), rgba(228,220,213,0.58))"
        }}
      >
        <div className="hero-layout">
          <div className="hero-copy">
            <p
              style={{
                display: "inline-flex",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.42)",
                color: "var(--accent)",
                fontWeight: 700,
                marginBottom: "22px"
              }}
            >
              {personalInfo.heroBadge}
            </p>

            <h1 className="section-title hero-title" style={{ marginBottom: "20px" }}>
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-strong))",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                {personalInfo.name}
              </span>
            </h1>

            <p className="section-subtitle" style={{ margin: "0 0 28px", maxWidth: "640px" }}>
              {personalInfo.heroSummary}
            </p>

            <div className="hero-actions" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary" style={{ textDecoration: "none" }}>
                View Projects
              </a>
              <a href="#contact" className="pill-link">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait-orb hero-portrait-orb-one" />
            <div className="hero-portrait-orb hero-portrait-orb-two" />
            <div className="hero-portrait-card">
              <div className="hero-portrait-frame">
                <img
                  src={heroImage}
                  alt="Portrait"
                  className="hero-portrait-image"
                />
              </div>
            </div>
            <div className="hero-portrait-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
