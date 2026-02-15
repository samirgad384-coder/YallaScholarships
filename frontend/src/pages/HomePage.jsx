import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BellRing,
  BrainCircuit,
  Check,
  Compass,
  Moon,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';

const features = [
  { icon: BrainCircuit, title: 'بحث بالذكاء الاصطناعي', text: 'ابحث بأسئلة طبيعية واحصل على أفضل النتائج فورًا.' },
  { icon: Compass, title: 'مطابقة ذكية', text: 'خوارزمية تقييم دقيقة حسب مستواك واهتماماتك.' },
  { icon: BellRing, title: 'تنبيهات فورية', text: 'لا تفوت أي موعد نهائي عبر إشعارات لحظية.' },
  { icon: Zap, title: 'مقارنة فورية', text: 'قارن التمويل والمتطلبات وفرص القبول بسهولة.' },
];

const scholarships = [
  { name: 'DAAD Excellence', country: 'ألمانيا', funding: 'تمويل كامل', deadline: '20 نوفمبر 2026' },
  { name: 'Chevening Leaders', country: 'المملكة المتحدة', funding: 'تمويل كامل', deadline: '10 أكتوبر 2026' },
  { name: 'MEXT Global', country: 'اليابان', funding: 'تمويل + راتب', deadline: '15 ديسمبر 2026' },
  { name: 'Erasmus+', country: 'أوروبا', funding: 'تمويل جزئي/كامل', deadline: '05 يناير 2027' },
];

const testimonials = [
  { name: 'سارة أحمد', role: 'طب بشري - مصر', quote: 'وفرت عليّ شهور بحث. حصلت على قبول في أقل من 6 أسابيع.' },
  { name: 'محمد عادل', role: 'هندسة - المغرب', quote: 'واجهة راقية ونتائج دقيقة. أفضل منصة منح جربتها.' },
  { name: 'لينا خالد', role: 'علوم بيانات - الأردن', quote: 'الـ Premium فعليًا غيّر طريقة تقديمي بالكامل.' },
];

function Counter({ value, label, suffix = '+' }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const step = Math.max(1, Math.ceil(value / 45));
        const timer = setInterval(() => {
          start += step;
          if (start >= value) {
            setDisplay(value);
            clearInterval(timer);
            return;
          }
          setDisplay(start);
        }, 28);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <p className="text-3xl font-black text-brand-600 dark:text-brand-100">{display}{suffix}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('yalla-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('yalla-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { id: 'features', text: 'المزايا' },
      { id: 'how', text: 'طريقة العمل' },
      { id: 'scholarships', text: 'المنح' },
      { id: 'pricing', text: 'الأسعار' },
      { id: 'testimonials', text: 'التجارب' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-hero-light dark:bg-hero-dark">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="section-shell">
          <div className={`rounded-2xl px-5 ${scrolled ? 'glass shadow-xl' : ''}`}>
            <div className="flex h-14 items-center justify-between">
              <p className="text-lg font-black tracking-tight">Yalla Scholarships</p>
              <nav className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
                    {link.text}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsDark((p) => !p)} className="glass rounded-xl p-2" type="button" aria-label="theme toggle">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link to="/auth" className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5">
                  ابدأ مجانًا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <section className="section-shell relative overflow-hidden py-14 sm:py-20">
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-10 top-16 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl" />
          <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -right-10 top-36 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
                <Sparkles size={14} /> منصة منح بمعيار عالمي
              </span>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                أول منصة عربية <span className="gradient-text">Premium SaaS</span> لاكتشاف أقوى المنح في العالم
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Yalla Scholarships تجمع الذكاء الاصطناعي، مقارنة الفرص، والتنبيهات الذكية في تجربة واحدة أنيقة وسريعة.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/auth" className="rounded-2xl bg-brand-600 px-6 py-3 font-bold text-white shadow-glow transition hover:-translate-y-1">
                  أنشئ حسابك الآن
                </Link>
                <a href="#features" className="glass rounded-2xl px-6 py-3 font-semibold">
                  استكشف المزايا
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass rounded-3xl p-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">لوحة توصية ذكية</p>
              <div className="mt-4 space-y-3">
                {['منح ممولة بالكامل خلال 45 يوم', 'أفضل مطابقة لتخصص علوم البيانات', '3 منح أولوية حسب ملفك'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/70 p-3 dark:bg-slate-900/60">
                    <span className="rounded-lg bg-emerald-500/15 p-1 text-emerald-500"><Check size={16} /></span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="section-shell py-12 sm:py-20">
          <h2 className="text-center text-3xl font-black sm:text-4xl">مزايا مصممة لنتائج أسرع</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.article key={feature.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5 transition hover:-translate-y-2 hover:shadow-xl">
                  <span className="mb-4 inline-flex rounded-xl bg-brand-500/10 p-2 text-brand-600 dark:text-brand-200"><Icon /></span>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{feature.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="how" className="section-shell py-12 sm:py-20">
          <h2 className="text-center text-3xl font-black sm:text-4xl">كيف تعمل المنصة؟</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['أنشئ ملفك الأكاديمي', 'استقبل أفضل المنح المطابقة', 'قدّم بثقة عبر خطوات واضحة'].map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass relative rounded-2xl p-6">
                <span className="text-5xl font-black text-brand-100 dark:text-brand-900">0{i + 1}</span>
                <p className="mt-2 font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="scholarships" className="section-shell py-12 sm:py-20">
          <div className="mb-7 flex items-end justify-between">
            <h2 className="text-3xl font-black sm:text-4xl">نماذج منح مميزة</h2>
            <Link to="/auth" className="text-sm font-bold text-brand-600">عرض الكل ←</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {scholarships.map((item) => (
              <motion.article key={item.name} whileHover={{ y: -8 }} className="glass rounded-2xl p-5">
                <p className="text-xs text-slate-500 dark:text-slate-300">{item.country}</p>
                <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
                <p className="mt-4 text-sm">التمويل: <span className="font-semibold text-emerald-500">{item.funding}</span></p>
                <p className="text-sm">آخر موعد: <span className="font-semibold">{item.deadline}</span></p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell py-12 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Counter value={250} label="ألف مستخدم نشط" />
            <Counter value={70} label="دولة" />
            <Counter value={20} label="ألف منحة" />
            <Counter value={96} label="رضا المستخدم" suffix="%" />
          </div>
        </section>

        <section id="pricing" className="section-shell py-12 sm:py-20">
          <h2 className="text-center text-3xl font-black sm:text-4xl">أسعار بسيطة وواضحة</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="glass rounded-3xl p-7">
              <p className="text-sm font-semibold text-slate-500">Free</p>
              <p className="mt-3 text-4xl font-black">$0</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• تصفح المنح الأساسية</li>
                <li>• فلترة محدودة</li>
                <li>• ملف شخصي واحد</li>
              </ul>
            </article>
            <article className="relative rounded-3xl border border-brand-300 bg-gradient-to-b from-brand-600 to-brand-700 p-7 text-white shadow-glow">
              <span className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700">الأكثر اختيارًا</span>
              <p className="text-sm font-semibold text-brand-100">Premium</p>
              <p className="mt-3 text-4xl font-black">$12<span className="text-lg">/شهريًا</span></p>
              <ul className="mt-5 space-y-2 text-sm text-brand-50">
                <li>• مطابقة AI متقدمة</li>
                <li>• تنبيهات لحظية غير محدودة</li>
                <li>• مقارنة فرص + أولوية دعم</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="testimonials" className="section-shell py-12 sm:py-20">
          <h2 className="text-center text-3xl font-black sm:text-4xl">ماذا يقول طلابنا؟</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="glass rounded-2xl p-5">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">“{t.quote}”</p>
                <p className="mt-4 font-bold">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pb-16 pt-8 sm:pb-24">
          <div className="rounded-3xl bg-gradient-to-l from-slate-900 to-brand-700 p-10 text-center text-white">
            <h3 className="text-3xl font-black">جاهز تبدأ رحلتك نحو منحة أحلامك؟</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-100">انضم الآن لـ Yalla Scholarships وابدأ تجربة عالمية بمعيار Premium من اليوم الأول.</p>
            <Link to="/auth" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-1">
              ابدأ الآن مجانًا
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 py-10 dark:border-white/10">
        <div className="section-shell grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-black">Yalla Scholarships</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">المنصة العربية الأولى للمنح بواجهة SaaS عالمية.</p>
          </div>
          <div>
            <p className="font-bold">المنصة</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300"><li>المزايا</li><li>الأسعار</li><li>التحديثات</li></ul>
          </div>
          <div>
            <p className="font-bold">الدعم</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300"><li>مركز المساعدة</li><li>تواصل معنا</li><li>سياسة الخصوصية</li></ul>
          </div>
          <div>
            <p className="font-bold">تابعنا</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Telegram · LinkedIn · X</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
