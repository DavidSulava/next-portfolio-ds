import { SkillType, ExperienceType } from '@/types';

type Translator = (_key: string) => string;

export const skills = [
  { title: 'JavaScript' },
  { title: 'TypeScript' },
  { title: 'React' },
  { title: 'Vue' },
  { title: 'Next.js' },
  { title: 'Nuxt.js' },
  { title: 'Tailwind' },
  { title: 'Express' },
  { title: 'Laravel' },
  { title: 'Symfony' },
  { title: 'AWS' },
  { title: 'Docker' },
  { title: 'Git' },
  { title: 'Three.js' },
  { title: 'WebGL' },
];

export const experiences = [
  {
    title: 'Frontend',
    company: 'LPMotor',
    date: '2022 - Present',
    description: 'I led web development, offering expertise in Vue.js framework.',
  },
  {
    title: 'Fullstack',
    company: 'Технологика',
    date: '2018 - 2022',
    description: 'I was a fullstack developer, offering expertise in React.js and AWS web services.',
  },
  {
    title: 'Freelancer',
    company: '',
    date: '2018 - 2018',
    description: 'I provided web solutions, applying a range of technologies',
  },
];

export function getSkills(t: Translator): SkillType[] {
  return [
    { title: t('JavaScript') },
    { title: t('TypeScript') },
    { title: t('React') },
    { title: t('Vue') },
    { title: t('Nextjs') },
    { title: t('Tailwind') },
    { title: t('Express') },
    { title: t('Laravel') },
    { title: t('Symfony') },
    { title: t('AWS') },
    { title: t('Docker') },
    { title: t('Git') },
    { title: t('Threejs') },
    { title: t('WebGL') },
  ];
}

export function getExperiences(t: Translator): ExperienceType[] {
  return [
    {
      title: t('frontend.title'),
      company: t('frontend.company'),
      date: t('frontend.date'),
      description: t('frontend.description'),
    },
    {
      title: t('fullstack.title'),
      company: t('fullstack.company'),
      date: t('fullstack.date'),
      description: t('fullstack.description'),
    },
    {
      title: t('freelancer.title'),
      company: t('freelancer.company'),
      date: t('freelancer.date'),
      description: t('freelancer.description'),
    },
  ];
}
