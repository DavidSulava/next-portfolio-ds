'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import { publicPath } from '@/lib/publicPath';
import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations('home');
  const common = useTranslations('common');

  return (
    <PageWrapper>
      <div className="h-full flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src={publicPath + '/hero.png'} alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t('title')}
          </h1>
          <p className="md:text-xl">
            {t('description')}
          </p>
          <div className="w-full flex gap-4">
            <Link
              prefetch={null}
              href={`/${locale}/portfolio`}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              {t('viewWork')}
            </Link>
            <Link
              prefetch={null}
              href="https://t.me/DavidSulava"
              target="_blank"
              className="p-4 rounded-lg ring-1 ring-black"
            >
              {common('contactMe')}
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
