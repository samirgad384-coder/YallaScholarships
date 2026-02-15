import { useMemo, useState } from 'react';

const highlights = [
  { label: 'طالب مسجل', value: '150K+' },
  { label: 'منحة محدثة', value: '20K+' },
  { label: 'دولة', value: '75+' },
];

const benefits = [
  'فلترة ذكية حسب الدولة والتخصص والميزانية.',
  'ترشيحات شخصية على أساس ملفك الأكاديمي.',
  'تنبيهات فورية قبل مواعيد إغلاق المنح.',
  'روابط تقديم موثوقة وخطوات واضحة لكل منحة.',
];

export default function AuthPage() {
  const [mode, setMode] = useState('signup');
  const isSignup = mode === 'signup';

  const subtitle = useMemo(
    () =>
      isSignup
        ? 'أنشئ حسابك وابدأ خطة البحث الذكية الآن.'
        : 'أهلاً بعودتك! أكمل رحلتك نحو المنحة المناسبة.',
    [isSignup]
  );

  return (
    <main className="auth-layout">
      <section className="showcase-panel">
        <span className="badge">من أقوى منصات المنح في العالم</span>
        <h1>منح يلااا — وجهتك الأسرع لأقوى المنح العالمية</h1>
        <p>
          نحن نبني تجربة متكاملة للطلاب العرب: اكتشف منح ممولة بالكامل، قارن الفرص
          بسهولة، وخذ توصية دقيقة تساعدك على القبول أسرع.
        </p>

        <div className="stats-grid">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <ul className="benefits-list">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="auth-panel">
        <div className="auth-card">
          <div className="auth-switch">
            <button
              className={isSignup ? 'active' : ''}
              onClick={() => setMode('signup')}
              type="button"
            >
              إنشاء حساب
            </button>
            <button
              className={!isSignup ? 'active' : ''}
              onClick={() => setMode('login')}
              type="button"
            >
              تسجيل دخول
            </button>
          </div>

          <h2>{isSignup ? 'ابدأ رحلتك الدراسية اليوم' : 'تسجيل الدخول'}</h2>
          <p className="subtitle">{subtitle}</p>

          <form className="auth-form">
            {isSignup && <input placeholder="الاسم الكامل" type="text" />}
            <input placeholder="البريد الإلكتروني" type="email" />
            <input placeholder="كلمة المرور" type="password" />
            {isSignup && <input placeholder="الدولة" type="text" />}
            <button type="submit">{isSignup ? 'إنشاء الحساب' : 'دخول'}</button>
          </form>

          <p className="helper-text">
            بالمتابعة أنت توافق على الشروط وسياسة الخصوصية الخاصة بمنح يلااا.
          </p>
        </div>
      </section>
    </main>
  );
}
