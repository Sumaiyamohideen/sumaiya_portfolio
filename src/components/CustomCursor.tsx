import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-screen transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 48 : 18,
          height: hovering ? 48 : 18,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.75 0.28 305 / 0.9), oklch(0.6 0.27 280 / 0.4) 60%, transparent 75%)",
          boxShadow: "0 0 24px oklch(0.75 0.28 305 / 0.7)",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] h-[400px] w-[400px] rounded-full opacity-40"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.6 0.27 305 / 0.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </>
  );
}
