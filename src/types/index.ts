import type { MotionValue } from 'framer-motion';
import { ReactNode } from 'react';

export interface NavLinkType {
  url: string;
  title: string;
}

export interface ContactLinkType {
  url: string;
  img: string;
}

export interface NavLinkProps {
  link: NavLinkType;
}

export interface TransitionProviderProps {
  children: ReactNode;
}

export interface BrainProps {
  scrollYProgress: MotionValue<number>;
}

export interface SkillType {
  title: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface PortfolioItemType {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}
