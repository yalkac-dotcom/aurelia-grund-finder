import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/80 transition-all"
      aria-label="Nach oben scrollen"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
