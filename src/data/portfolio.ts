import { PortfolioItemType } from '@/types';

type Translator = (_key: string) => string;

export const portfolioItems = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Vue LPMotor CMS',
    desc: 'Create a website with a quiz or an online store with a shopping cart and delivery options.',
    img: '/worck_examples/lp_motor.png',
    link: 'https://lpmotor.ru/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Next.js Phone Customization',
    desc: 'Design your perfect phone case with our intuitive editor. Express yourself with custom artwork, photos, or choose from our curated collection of designs.',
    img: '/worck_examples/phone_customisation_studio.png',
    link: 'https://davidsulava.github.io/phone-customisation-studio/',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'React 18 Shadow generator',
    desc: 'Box Shadow Generator for React with Tailwind CSS.',
    img: '/worck_examples/shadow_generator.png',
    link: 'https://davidsulava.github.io/shadow-css/',
  },
];

export function getPortfolioItems(t: Translator): PortfolioItemType[] {
  return [
    {
      id: 1,
      color: 'from-red-300 to-blue-300',
      title: t('item1.title'),
      desc: t('item1.desc'),
      img: '/worck_examples/lp_motor.png',
      link: 'https://lpmotor.ru/',
    },
    {
      id: 2,
      color: 'from-blue-300 to-violet-300',
      title: t('item2.title'),
      desc: t('item2.desc'),
      img: '/worck_examples/phone_customisation_studio.png',
      link: 'https://davidsulava.github.io/phone-customisation-studio/',
    },
    {
      id: 3,
      color: 'from-violet-300 to-purple-300',
      title: t('item3.title'),
      desc: t('item3.desc'),
      img: '/worck_examples/shadow_generator.png',
      link: 'https://davidsulava.github.io/shadow-css/',
    },
  ];
}
