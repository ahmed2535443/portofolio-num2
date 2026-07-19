export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"><span className="gradient-text">جاهز لبدء مشروعك؟</span></h2>
        <p className="text-gray-400 text-lg mb-12">تواصل معي الآن وخلينا نحول فكرتك لواقع</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://mostaql.com/u/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1fb953] text-white font-bold rounded-lg hover:scale-105 transition-transform text-center">مستقل</a>
          <a href="https://khamsat.com/u/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#ff6b35] text-white font-bold rounded-lg hover:scale-105 transition-transform text-center">خمسات</a>
          <a href="mailto:your@email.com" className="px-6 py-3 border border-dark-600 text-white font-bold rounded-lg hover:border-neon-cyan transition-all text-center">الإيميل</a>
        </div>

        <footer className="border-t border-dark-600 pt-8">
          <p className="text-gray-500 text-sm">2026 &copy; جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </section>
  );
}
