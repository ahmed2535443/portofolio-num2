export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm mb-6 border border-neon-cyan/20">
          مطور ويب محترف
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          أحول أفكارك <span className="gradient-text">لواقع رقمي</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          متخصص في تطوير مواقع ويب حديثة وسريعة بأحدث التقنيات
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#portfolio" className="px-6 py-3 bg-neon-cyan text-dark-800 font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all text-center">
            شاهد أعمالي
          </a>
          <a href="#contact" className="px-6 py-3 border border-dark-600 text-white rounded-lg hover:border-neon-cyan transition-all text-center">
            تواصل معي
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
