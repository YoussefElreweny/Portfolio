import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface HeroProps {
  language: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;
  const isRtl = language === 'ar';

  return (
    <section id="hero-section" className="relative pt-32 pb-32 sm:pt-48 sm:pb-52 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <div className="space-y-4">
              <h1
                id="hero-greeting"
                className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-950 leading-[1.05]"
              >
                {t.greeting}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium">
                {t.role}
              </p>
            </div>

            <p
              id="hero-subheadline"
              className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed text-balance"
            >
              {t.subheadline}
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="#projects"
                id="hero-btn-view-work"
                className="inline-flex items-center gap-2 text-lg font-bold text-slate-950 group border-b-2 border-slate-950 pb-1 hover:text-slate-600 hover:border-slate-400 transition-all"
              >
                <span>{t.cta}</span>
                {isRtl ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-full lg:aspect-square overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-2xl">
              <img
                src="/src/assets/images/profile.jpeg"
                alt="Youssef Elreweny"
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
