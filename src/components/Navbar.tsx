import { useState, useEffect, useRef } from "react";

const links = [
  { name: "الرئيسية", href: "#home", id: "home" },
  { name: "خدماتي", href: "#services", id: "services" },
  { name: "أعمالي", href: "#portfolio", id: "portfolio" },
  { name: "عني", href: "#about", id: "about" },
  { name: "تواصل", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i]!.offsetTop <= scrollPos) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-dark-800/90 backdrop-blur-sm border-b border-dark-600">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">Dev<span className="text-neon-cyan">.</span></a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${activeSection === link.id ? "text-neon-cyan font-bold" : "text-gray-300 hover:text-neon-cyan"}`}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 bg-neon-cyan text-dark-800 rounded-lg font-bold hover:shadow-lg hover:shadow-neon-cyan/30 transition-all">
            ابدأ مشروعك
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded" aria-label={isOpen ? "إغلاق" : "فتح"} aria-expanded={isOpen}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`md:hidden bg-dark-800 border-t border-dark-600 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block py-2 transition-colors ${activeSection === link.id ? "text-neon-cyan font-bold" : "text-gray-300 hover:text-neon-cyan"}`}>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block mt-4 px-4 py-2 bg-neon-cyan text-dark-800 rounded-lg font-bold text-center">
            ابدأ مشروعك
          </a>
        </div>
      </div>
    </nav>
  );
}
