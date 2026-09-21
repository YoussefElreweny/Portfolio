import React from 'react';
import { Github, Code2, Cpu } from 'lucide-react';
import { TechnicalProject, Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface TechnicalWorkProps {
  projects: TechnicalProject[];
  language: Language;
}

export const TechnicalWork: React.FC<TechnicalWorkProps> = ({ projects, language }) => {
  const t = translations[language].technical;
  const isRtl = language === 'ar';

  return (
    <section id="technical" className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                  <Code2 className="w-8 h-8" />
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors"
                >
                  <span>{t.viewCode}</span>
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">
                {project.title[language]}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                {project.description[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {t.challenge}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {project.challenge[language]}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {t.solution}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {project.solution[language]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100"
                  >
                    <Cpu className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
