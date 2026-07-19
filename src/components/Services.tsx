import { Globe, Monitor, Zap, Palette } from "lucide-react";

const services = [
  { icon: Globe, title: "تطوير مواقع الويب", desc: "مواقع حديثة بأحدث التقنيات مثل React و Next.js" },
  { icon: Monitor, title: "تطبيقات الويب", desc: "تطبيقات تفاعلية لإدارة البيانات والمحتوى" },
  { icon: Zap, title: "تحسين الأداء", desc: "تحسين سرعة الموقع وتجربة المستخدم" },
  { icon: Palette, title: "واجهات المستخدم", desc: "تصميم واجهات عصرية وسهلة الاستخدام" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4"><span className="gradient-text">خدماتي</span></h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">أقدم مجموعة متكاملة من خدمات تطوير الويب</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-dark-700 p-6 rounded-xl border border-dark-600 hover:border-neon-cyan/50 transition-all hover:scale-105 group">
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition-colors">
                <service.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
