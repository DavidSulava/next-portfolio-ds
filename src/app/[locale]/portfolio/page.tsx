'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import PageWrapper from '@/components/PageWrapper';
import { getPortfolioItems } from '@/data/portfolio';
import { publicPath } from '@/lib/publicPath';
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const common = useTranslations('common');
  const itemsT = useTranslations('portfolioItems');

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  const portfolioItems = getPortfolioItems(itemsT);

  return (
    <PageWrapper>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-7xl text-center">
          <div>{t('title')}</div>
          <span className="italic text-3xl">
            {common('scrollDown')}
          </span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex rounded">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {portfolioItems.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-40 md:w-96 md:h-64 lg:w-[700px] lg:h-[380px] xl:w-[650px] xl:h-[300px]">
                    <Image className="rounded" src={publicPath + item.img} alt="project image" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="p-2 text-sm md:p-4 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold rounded w-fit"
                  >
                    {t('goToSite')}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-7xl">{t('haveProject')}</h1>
        <div className="relative flex items-center justify-center">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] pointer-events-none"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                {common('webDev')}
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="https://t.me/DavidSulava"
            target="_blank"
            className="w-16 h-16 md:w-28 md:h-28 absolute z-100 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            {common('contactMe')}
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
