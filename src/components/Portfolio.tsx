import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "متجر إلكتروني", desc: "متجر متكامل مع نظام دفع وإدارة منتجات", tags: ["Next.js", "Tailwind"], category: "ويب" },
  { title: "لوحة تحكم", desc: "لوحة تحكم لإدارة المحتوى والمستخدمين", tags: ["React", "Node.js"], category: "تطبيقات" },
  { title: "موقع شخصي", desc: "موقع بورتفوليو احترافي مع أنيميشن", tags: ["Next.js", "CSS"], category: "ويب" },
  { title: "تطبيق مهام", desc: "تطبيق إدارة مهام مع مزامنة لحظية", tags: ["React", "Firebase"], category: "تطبيقات" },
];

const filters = ["الكل", "ويب", "تطبيقات"];

export default function Portfolio() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4"><span className="gradient-text">أعمالي</span></h2>
        <p className="text-gray-400 text-center mb-12">مجموعة من المشاريع اللي عملتها</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={`px-5 py-2 rounded-lg transition-all ${active === f ? "bg-neon-cyan text-dark-800 font-bold" : "bg-dark-700 text-gray-400 hover:text-white"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-neon-cyan/50 transition-all group">
              <div className="h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 relative">
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="p-3 bg-neon-cyan rounded-lg text-dark-800 hover:scale-110 transition-transform" aria-label={`عرض ${p.title}`}><ExternalLink className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-dark-600 rounded-lg text-white hover:scale-110 transition-transform" aria-label={`كود ${p.title}`}><Github className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (<span key={j} className="px-3 py-1 bg-dark-600 text-neon-cyan text-xs rounded-full">{t}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
