import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations('common');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">{t('notFound')}</p>
      <Link href={`/${locale}`} className="px-6 py-3 bg-black text-white rounded-lg">
        {t('goHome')}
      </Link>
    </div>
  );
}
