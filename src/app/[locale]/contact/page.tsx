'use client';

import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  const text = t('sayHello');

  return (
    <PageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>{t('dear')}</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            readOnly
            placeholder={t('placeholder')}
          />
          <span>{t('myMail')}</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            readOnly
            placeholder={t('emailPlaceholder')}
          />
          <span>{t('regards')}</span>
          <a
            href="https://t.me/DavidSulava"
            target="_blank"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 text-center cursor-pointer hover:bg-purple-300 transition-colors"
          >
            {t('sendTelegram')}
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
