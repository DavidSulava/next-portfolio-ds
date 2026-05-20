'use client';

import Brain from '@/components/brain';
import PageWrapper from '@/components/PageWrapper';
import ScrollIndicator from '@/components/ScrollIndicator';
import ExperienceCard from '@/components/ExperienceCard';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { skills, experiences } from '@/data/about';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <PageWrapper>
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center align-start">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              My name is David Sulava. I&apos;m a web developer with nearly seven years of experience, focused mainly on building modern, user-friendly interfaces and web applications.
              While my core expertise lies in frontend development (Vue, React), I&apos;m also comfortable working with backend technologies like Node.js and PHP.
              I value clean code, teamwork, and continuous professional growth.
            </p>
            <span className="italic">
              Every line of code is a step toward turning an idea into reality!
            </span>
            <ScrollIndicator />
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((item) => (
                <div
                  key={item.title}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {item.title}
                </div>
              ))}
            </motion.div>
            <ScrollIndicator />
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
            >
              {experiences.map((item, index) => (
                <ExperienceCard
                  key={item.title}
                  title={item.title}
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  isLeft={index % 2 === 0}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* SVG */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageWrapper>
  );
}
