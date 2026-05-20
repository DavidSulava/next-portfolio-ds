'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'en'
            ? 'bg-black text-white'
            : 'bg-transparent text-black hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ru')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'ru'
            ? 'bg-black text-white'
            : 'bg-transparent text-black hover:bg-gray-100'
        }`}
      >
        RU
      </button>
    </div>
  );
}
