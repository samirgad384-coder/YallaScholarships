import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState('signup');
  const isSignup = mode === 'signup';

  const subtitle = useMemo(
    () =>
      isSignup
        ? 'أنشئ حسابك وابدأ التقديم على أفضل المنح.'
        : 'أهلاً بعودتك! سجل دخولك لاستكمال رحلتك.',
    [isSignup]
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-hero-light px-4 py-10 dark:bg-hero-dark">
      <div className="glass w-full max-w-md rounded-3xl p-7">
        <Link to="/" className="text-sm font-semibold text-brand-600">
          ← الرجوع للصفحة الرئيسية
        </Link>
        <h1 className="mt-4 text-2xl font-black">{isSignup ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>

        <div className="mt-5 grid grid-cols-2 rounded-xl bg-brand-50 p-1 dark:bg-white/10">
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`rounded-lg py-2 text-sm font-semibold ${isSignup ? 'bg-white text-brand-600 shadow dark:bg-slate-900' : ''}`}
          >
            إنشاء حساب
          </button>
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-lg py-2 text-sm font-semibold ${!isSignup ? 'bg-white text-brand-600 shadow dark:bg-slate-900' : ''}`}
          >
            تسجيل دخول
          </button>
        </div>

        <form className="mt-5 space-y-3" noValidate>
          {isSignup && (
            <input
              type="text"
              placeholder="الاسم الكامل"
              autoComplete="name"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm dark:border-white/10 dark:bg-slate-900/70"
            />
          )}
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm dark:border-white/10 dark:bg-slate-900/70"
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm dark:border-white/10 dark:bg-slate-900/70"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            {isSignup ? 'ابدأ الآن' : 'دخول'}
          </button>
        </form>
      </div>
    </main>
  );
}
