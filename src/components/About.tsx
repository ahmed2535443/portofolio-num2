const skills = [
  { name: "React", level: 70 },
  { name: "Next.js", level: 65 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node.js", level: 50 },
  { name: "TypeScript", level: 45 },
  { name: "Git / GitHub", level: 60 },
  { name: "Firebase", level: 55 },
  { name: "MongoDB", level: 50 },
];

const stats = [
  { label: "سنة تعلم", value: "1+" },
  { label: "مشاريع منجزة", value: "5+" },
  { label: "كورسات مكتملة", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">عني</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              مطور Full Stack شغوف ببناء تطبيقات الويب. بحب أتعلم تقنيات جديدة وأحول الأفكار لواقع من خلال الكود.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              حالياً ركزي على React و Next.js وتقنيات الويب الحديثة. بحب أحل المشاكل وأحسّن مهاراتي باستمرار.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-dark-700 text-neon-cyan rounded-lg text-sm border border-dark-600"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-dark-700 rounded-xl border border-dark-600"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* مهارات + مستويات */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8">
            <span className="gradient-text">المهارات</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{skill.name}</span>
                  <span className="text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
