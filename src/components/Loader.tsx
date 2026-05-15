import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-accent" />
        <div className="absolute inset-2 animate-spin rounded-full border border-transparent border-b-primary" style={{ animationDirection: "reverse", animationDuration: "1.6s" }} />
        <div className="absolute inset-0 flex items-center justify-center font-display text-sm font-bold gradient-text">SP</div>
        <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
      </div>
    </div>
  );
}
