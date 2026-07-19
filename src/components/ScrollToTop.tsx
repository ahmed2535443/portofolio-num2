import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 p-3 bg-neon-cyan text-dark-800 rounded-full shadow-lg shadow-neon-cyan/30 hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
      aria-label="العودة للأعلى"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
