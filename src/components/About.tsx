const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"];
const stats = [
  { label: "مشروع منجز", value: "50+" },
  { label: "عميل سعيد", value: "30+" },
  { label: "سنة خبرة", value: "5+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12"><span className="gradient-text">عني</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">مطور ويب شغوف ببناء تجارب رقمية مميزة. بأكثر من 5 سنوات خبرة في تطوير مواقع ويب حديثة وتطبيقات تفاعلية.</p>
            <p className="text-gray-400 mb-6 leading-relaxed">بحب أشتغل على مشاريع جديدة وأتعلم تقنيات حديثة. هدفي هو تحويل أفكار العملاء لواقع رقمي يتجاوز توقعاتهم.</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (<span key={s} className="px-3 py-1 bg-dark-700 text-neon-cyan rounded-lg text-sm border border-dark-600">{s}</span>))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-dark-700 rounded-xl border border-dark-600">
                <div className="text-3xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
