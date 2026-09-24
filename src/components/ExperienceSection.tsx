import React from 'react';
import { Briefcase, Users } from 'lucide-react';
import { Language, TimelineEntry } from '../types.ts';
import { translations } from '../data/translations.ts';

interface ExperienceSectionProps {
  experience: TimelineEntry[];
  leadership: TimelineEntry[];
  language: Language;
}

const Timeline: React.FC<{
  title: string;
  icon: React.ReactNode;
  entries: TimelineEntry[];
  language: Language;
}> = ({ title, icon, entries, language }) => (
  <div>
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2.5 bg-slate-950 text-white rounded-xl">{icon}</div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h3>
    </div>
    <ol className="space-y-10">
      {entries.map((entry) => (
        <li key={entry.id} className="flex gap-5">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm p-2 flex items-center justify-center">
            {entry.logo && (
              <img
                src={entry.logo}
                alt={`${entry.organization.en} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
              {entry.period[language]}
            </p>
            <h4 className="text-lg font-bold text-slate-950 leading-snug">{entry.role[language]}</h4>
            <p className="text-sm font-semibold text-slate-500 mb-3">{entry.organization[language]}</p>
            <p className="text-slate-600 leading-relaxed">{entry.description[language]}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, leadership, language }) => {
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Timeline
            title={t.work}
            icon={<Briefcase className="w-5 h-5" />}
            entries={experience}
            language={language}
          />
          <Timeline
            title={t.leadership}
            icon={<Users className="w-5 h-5" />}
            entries={leadership}
            language={language}
          />
        </div>
      </div>
    </section>
  );
};
