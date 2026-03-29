import { sideInfoContent } from "../content/personal";

export default function SideInfo() {
  return (
    <>
      <aside className="side-rail side-rail-left" aria-label="Profile info">
        <div className="side-rail-line" />
        {sideInfoContent.leftItems.map((item) => (
          <div key={item.label} className="side-rail-card glass">
            <span className="side-rail-label">{item.label}</span>
            <span className="side-rail-value">{item.value}</span>
          </div>
        ))}
      </aside>

      <aside className="side-rail side-rail-right" aria-label="Technical info">
        {sideInfoContent.rightItems.map((item) => (
          <div key={item.label} className="side-rail-card glass">
            <span className="side-rail-label">{item.label}</span>
            <span className="side-rail-value">{item.value}</span>
          </div>
        ))}
        <a href="#contact" className="side-rail-cta">
          Let&apos;s Build
        </a>
        <div className="side-rail-line" />
      </aside>
    </>
  );
}
