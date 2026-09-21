import React from 'react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = translations[language];
  
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Who am I */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-balance">
              {t.about.text}
            </p>
          </div>

          {/* What I do */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              {t.whatIDo.title}
            </h2>
            <div className="space-y-8">
              {t.whatIDo.items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
