import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: pos.x - 100,
      top: pos.y - 100,
      width: 240,
      height: 240,
      background: "radial-gradient(circle, rgba(196,122,82,0.24) 0%, rgba(148,90,116,0.12) 55%, transparent 72%)",
      borderRadius: "50%",
      filter: "blur(90px)",
      opacity: 0.55,
      pointerEvents: "none",
      zIndex: 0
    }} />
  );
}
