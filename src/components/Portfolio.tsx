import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "بورتفوليو شخصي",
    desc: "موقع بورتفوليو احترافي مبني بـ Next.js مع وضع ليلي ودعم عربي/إنجليزي.",
    tags: ["React", "Next.js", "Tailwind"],
    category: "ويب",
    image: "/images/1.PNG",
    liveUrl: "https://portofolio-num2.vercel.app/",
    githubUrl: "https://github.com/ahmed2535443/portofolio-num2",
  },
  {
    title: "CodeMaster",
    desc: "منصة تعليم البرمجة من الصفر إلى الاحتراف بالعربي.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Clerk"],
    category: "ويب",
    image: "/images/2.PNG",
    liveUrl: "https://my-blog-rho-flax.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "NovaFlow",
    desc: "منصة حلول رقمية ذكية للشركات.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    category: "ويب",
    image: "/images/3.PNG",
    liveUrl: "https://landing-nextjs-psi-six.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "نظام إدارة العملاء (CRM)",
    desc: "نظام لإدارة جهات الاتصال والعروض - قيد التطوير.",
    tags: ["React", "CRM"],
    category: "ويب",
    image: "/images/1.PNG",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "منصة تعليمية",
    desc: "منصة تعليمية لإدارة الكورسات والمتابعة مع دروس تفاعلية - قيد التطوير.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "ويب",
    image: "/images/2.PNG",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = ["الكل", "ويب", "قريبًا"];

export default function Portfolio() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? projects : active === "قريبًا" ? projects.filter((p) => p.liveUrl === "#") : projects.filter((p) => p.category === active && p.liveUrl !== "#");

  return (
    <section id="portfolio" className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4"><span className="gradient-text">أعمالي</span></h2>
        <p className="text-gray-400 text-center mb-12">مشاريع عملتها أو قيد التطوير</p>

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
                <img src={p.image} alt={`Screenshot of ${p.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {p.liveUrl !== "#" && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-neon-cyan rounded-lg text-dark-800 hover:scale-110 transition-transform" aria-label={`عرض مباشر ${p.title}`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {p.githubUrl !== "#" && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-600 rounded-lg text-white hover:scale-110 transition-transform" aria-label={`كود ${p.title}`}>
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                {p.liveUrl === "#" && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-neon-purple text-white text-xs rounded-full font-bold">
                    قريباً
                  </div>
                )}
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
