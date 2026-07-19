import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CodeMaster",
    desc: "منصة تعليم البرمجة من الصفر إلى الاحتراف بالعربي. تعلم HTML, CSS, JavaScript, React, Next.js والمزيد مع مشاريع حقيقية وتمارين تفاعلية.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Clerk"],
    category: "ويب",
    image: "/images/codemaster.png",
    liveUrl: "https://my-blog-rho-flax.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "NovaFlow",
    desc: "منصة حلول رقمية ذكية للشركات. أتمتة العمليات، تحليلات لحظية، أمان عالٍ، وتوسعة مرنة مع دعم 24/7.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    category: "ويب",
    image: "/images/novaflow.png",
    liveUrl: "https://landing-nextjs-psi-six.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "بورتفوليو شخصي",
    desc: "موقع بورتفوليو احترافي لمطور ويب مع تصميم عصري وأنيميشن سلسة.",
    tags: ["Vite", "React", "Tailwind CSS"],
    category: "ويب",
    image: "/images/portfolio.png",
    liveUrl: "https://portofolio-num2.vercel.app/",
    githubUrl: "https://github.com/ahmed2535443/portofolio-num2",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-neon-cyan/50 transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-neon-cyan rounded-lg text-dark-800 hover:scale-110 transition-transform" aria-label={`عرض مباشر ${p.title}`}><ExternalLink className="w-5 h-5" /></a>
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-600 rounded-lg text-white hover:scale-110 transition-transform" aria-label={`كود ${p.title}`}><Github className="w-5 h-5" /></a>
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
