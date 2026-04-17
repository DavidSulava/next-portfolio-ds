import type { MotionValue } from 'framer-motion';
import { ReactNode } from 'react';
// Navigation types
export interface NavLinkType {
  url: string;
  title: string;
}
export interface ContactLinkType {
  url: string;
  img: string;
}
// Component props types
export interface NavLinkProps {
  link: NavLinkType;
}
export interface TransitionProviderProps {
  children: ReactNode;
}
export interface BrainProps {
  scrollYProgress: MotionValue<number>;
}
// About page types
export interface SkillType {
  title: string;
}
export interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
  isLeftSide?: boolean;
  isRightSide?: boolean;
}
// Portfolio page types
export interface PortfolioItemType {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}
// Animation variants type
export interface AnimationVariants {
  [key: string]: {
    x?: number;
    y?: number;
    opacity?: number;
    rotation?: number;
    transition?: {
      duration?: number;
      repeat?: number;
      delay?: number;
      ease?: string;
    };
  };
}
