export const navLinks = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
];

export const socialLinks = [
  { url: 'https://github.com/DavidSulava', img: '/github.png' },
  { url: 'https://perm.hh.ru/resume/6bf50ac1ff0f842ccf0039ed1f6f6c754a7167', img: '/hh.ru.svg' },
  { url: 'https://t.me/DavidSulava', img: '/telegram.svg' },
];

// eslint-disable-next-line no-unused-vars
type Translator = (_key: string) => string;

export function getNavLinks(t: Translator, locale: string) {
  return [
    { url: `/${locale}`, title: t('home') },
    { url: `/${locale}/about`, title: t('about') },
    { url: `/${locale}/portfolio`, title: t('portfolio') },
  ];
}
