import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="gradient-text">تواصل معي</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">عندك مشروع؟ اشتغل مع بعض!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a
              href="mailto:a7med7any2222@gmail.com"
              className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl border border-dark-600 hover:border-neon-cyan transition-all group"
            >
              <div className="p-3 bg-neon-cyan/10 rounded-lg group-hover:bg-neon-cyan/20 transition-all">
                <Mail className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <div className="text-sm text-gray-400">البريد الإلكتروني</div>
                <div className="font-bold">a7med7any2222@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/201061772800"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl border border-dark-600 hover:border-neon-green transition-all group"
            >
              <div className="p-3 bg-neon-green/10 rounded-lg group-hover:bg-neon-green/20 transition-all">
                <MessageCircle className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <div className="text-sm text-gray-400">واتساب</div>
                <div className="font-bold">+20 106 177 2800</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl border border-dark-600">
              <div className="p-3 bg-neon-purple/10 rounded-lg">
                <MapPin className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <div className="text-sm text-gray-400">الموقع</div>
                <div className="font-bold">Cairo, Egypt</div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-neon-cyan outline-none transition-all"
              aria-label="الاسم"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-neon-cyan outline-none transition-all"
              aria-label="البريد الإلكتروني"
            />
            <textarea
              rows={4}
              placeholder="رسالتك"
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-neon-cyan outline-none transition-all resize-none"
              aria-label="رسالتك"
            />
            <button
              type="button"
              className="w-full py-3 bg-neon-cyan text-dark-800 font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
