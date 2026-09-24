export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  tagline?: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  category?: 'production' | 'prototype';
  categoryLabel?: {
    en: string;
    ar: string;
  };
  url: string;
  techStack: string[];
  features?: {
    en: string[];
    ar: string[];
  };
  accentColor?: string;
  isProduction?: boolean;
  role?: {
    en: string;
    ar: string;
  };
  stats?: {
    en: string;
    ar: string;
  };
  bgGradient: string;
  images: string[];
  githubUrl?: string;
}

export interface TechnicalProject {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  challenge: {
    en: string;
    ar: string;
  };
  solution: {
    en: string;
    ar: string;
  };
  techStack: string[];
  githubUrl: string;
}

export interface SkillCategory {
  title: {
    en: string;
    ar: string;
  };
  skills: string[];
  iconName: string;
}

export interface Localized {
  en: string;
  ar: string;
}

export interface TimelineEntry {
  id: string;
  role: Localized;
  organization: Localized;
  period: Localized;
  description: Localized;
  logo?: string;
}

export type PublicationStatus = 'peer-reviewed' | 'in-press' | 'talk';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  url?: string;
}

export interface Award {
  id: string;
  title: Localized;
  issuer: Localized;
  year: string;
  description: Localized;
}
