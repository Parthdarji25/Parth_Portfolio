import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavClick = (href) => (event) => {
    event.preventDefault();
    setActiveLink(href);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(mediaQuery.matches);

    updateMobile();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMobile);
    } else {
      mediaQuery.addListener(updateMobile);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > 36);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      let currentLink = "#home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const top = section.offsetTop - 140;
          const bottom = top + section.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            currentLink = link.href;
          }
        }
      });

      setActiveLink(currentLink);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMobile);
      } else {
        mediaQuery.removeListener(updateMobile);
      }
    };
  }, []);

  return (
    <nav
      className={scrolled ? "navbar-shell navbar-scrolled" : "navbar-shell"}
      style={{
        position: "fixed",
        top: scrolled ? "10px" : "18px",
        left: "50%",
        transform: "translateX(-50%)",
        width: isMobile
          ? "calc(100% - 16px)"
          : scrolled
            ? "min(980px, calc(100% - 24px))"
            : "min(1120px, calc(100% - 24px))",
        padding: isMobile
          ? "12px 14px 16px"
          : scrolled
            ? "10px 16px 14px"
            : "14px 20px 18px",
        display: "flex",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        gap: isMobile ? "12px" : "18px",
        zIndex: 20,
        borderRadius: isMobile ? "20px" : scrolled ? "18px" : "26px",
        background: scrolled
          ? "linear-gradient(135deg, rgba(245,238,228,0.9), rgba(232,225,216,0.82))"
          : "linear-gradient(135deg, rgba(245,238,228,0.78), rgba(230,223,214,0.66))",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: scrolled
          ? "0 20px 44px rgba(75, 53, 36, 0.16)"
          : "0 16px 34px rgba(86, 62, 42, 0.12)",
        backdropFilter: "blur(18px)",
        flexWrap: isMobile ? "wrap" : "nowrap"
      }}
    >
      <a
        href="#home"
        className="navbar-brand"
        onClick={handleNavClick("#home")}
        style={{
          textDecoration: "none",
          width: isMobile ? "100%" : "auto",
          textAlign: isMobile ? "center" : "left"
        }}
      >
        <span className="navbar-brand-mark">PD</span>
        <span className="navbar-brand-copy">
          <span className="navbar-brand-name">Parth Darji</span>
          <span className="navbar-brand-role">Software Engineer</span>
        </span>
      </a>

      <div
        className="navbar-links"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          width: isMobile ? "100%" : "auto"
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick(link.href)}
            className={activeLink === link.href ? "navbar-link active" : "navbar-link"}
            style={{
              textDecoration: "none",
              color: activeLink === link.href ? "#fff8f1" : "#445168",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "999px",
              background: activeLink === link.href
                ? "linear-gradient(135deg, #c97a52, #9d5c78)"
                : "rgba(255,255,255,0.42)",
              border: activeLink === link.href
                ? "1px solid rgba(255,255,255,0.18)"
                : "1px solid rgba(255,255,255,0.62)",
              boxShadow: activeLink === link.href
                ? "0 10px 22px rgba(149, 92, 120, 0.24)"
                : "none"
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <span
        style={{
          position: "absolute",
          left: isMobile ? "14px" : "18px",
          right: isMobile ? "14px" : "18px",
          bottom: "7px",
          height: "3px",
          borderRadius: "999px",
          background: "rgba(92, 82, 75, 0.12)",
          overflow: "hidden"
        }}
      >
        <span
          style={{
            display: "block",
            height: "100%",
            width: `${scrollProgress}%`,
            borderRadius: "999px",
            background: "linear-gradient(90deg, #c97a52, #9d5c78)",
            transition: "width 0.2s ease"
          }}
        />
      </span>
    </nav>
  );
}
