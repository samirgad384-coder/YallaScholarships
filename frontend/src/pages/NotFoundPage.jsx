import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-hero-light px-4 dark:bg-hero-dark">
      <div className="glass w-full max-w-xl rounded-3xl p-8 text-center">
        <p className="text-sm font-semibold text-brand-600">404</p>
        <h1 className="mt-2 text-3xl font-black">الصفحة غير موجودة</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          الرابط الذي تحاول الوصول إليه غير متاح حاليًا. يمكنك العودة للصفحة الرئيسية.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white">
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
