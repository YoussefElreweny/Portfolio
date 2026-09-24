import React from 'react';
import { ArrowUpRight, Award as AwardIcon, BookOpen, Clock, Mic } from 'lucide-react';
import { Award, Language, Publication, PublicationStatus } from '../types.ts';
import { translations } from '../data/translations.ts';
import { orcidUrl } from '../data/profile.ts';

interface ResearchSectionProps {
  publications: Publication[];
  awards: Award[];
  language: Language;
}

export const OrcidLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#A6CE39" />
    <path fill="#fff" d="M7.4 9.6h1.5v7.2H7.4V9.6Zm.75-2.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
    <path
      fill="#fff"
      d="M10.4 9.6h3.2c3 0 4.4 2.2 4.4 3.6 0 1.6-1.3 3.6-4.3 3.6h-3.3V9.6Zm1.5 5.9h1.7c2.4 0 2.9-1.8 2.9-2.3 0-1-.6-2.3-2.8-2.3h-1.8v4.6Z"
    />
  </svg>
);

// Emphasise the portfolio owner's name inside an author list.
const Authors: React.FC<{ authors: string }> = ({ authors }) => {
  const parts = authors.split(/(Elreweny, Y\.)/);
  return (
    <>
      {parts.map((part, idx) =>
        part === 'Elreweny, Y.' ? (
          <strong key={idx} className="font-bold text-slate-700">{part}</strong>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        )
      )}
    </>
  );
};

const PublicationItem: React.FC<{ publication: Publication; readLabel: string }> = ({ publication, readLabel }) => (
  <li className="py-6 first:pt-0 last:pb-0" dir="ltr">
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
      <div className="flex-1 space-y-2 text-left">
        <h4 className="font-bold text-slate-950 leading-snug">{publication.title}</h4>
        <p className="text-sm text-slate-500">
          <Authors authors={publication.authors} />
        </p>
        <p className="text-sm text-slate-600 italic">
          {publication.venue} · {publication.year}
        </p>
      </div>
      {publication.url && (
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start shrink-0 px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-950 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors"
        >
          {readLabel}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  </li>
);

export const ResearchSection: React.FC<ResearchSectionProps> = ({ publications, awards, language }) => {
  const t = translations[language].research;

  const groups: { status: PublicationStatus; title: string; icon: React.ReactNode }[] = [
    { status: 'peer-reviewed', title: t.peerReviewed, icon: <BookOpen className="w-5 h-5" /> },
    { status: 'in-press', title: t.inPress, icon: <Clock className="w-5 h-5" /> },
    { status: 'talk', title: t.talks, icon: <Mic className="w-5 h-5" /> },
  ];

  return (
    <section id="research" className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">{t.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.subtitle}</p>
          </div>
          <a
            href={orcidUrl}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-3 self-start lg:self-auto shrink-0 px-6 py-3 rounded-full bg-white border border-slate-200 font-bold text-slate-950 hover:border-slate-950 hover:shadow-lg transition-all"
          >
            <OrcidLogo className="w-6 h-6" />
            {t.orcid}
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          {t.stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8">
              <p className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">{stat.value}</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {groups.map(({ status, title, icon }) => {
            const items = publications.filter((p) => p.status === status);
            if (items.length === 0) return null;
            return (
              <div key={status} className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-slate-950 text-white rounded-xl">{icon}</div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h3>
                </div>
                <ul className="divide-y divide-slate-100">
                  {items.map((publication) => (
                    <PublicationItem key={publication.id} publication={publication} readLabel={t.readPaper} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div id="awards" className="mt-24">
          <h3 className="text-3xl font-bold tracking-tight text-slate-950 mb-10">{t.awardsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-slate-50 rounded-xl text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                    <AwardIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{award.year}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-950 leading-snug mb-1">{award.title[language]}</h4>
                <p className="text-sm font-semibold text-slate-500 mb-4">{award.issuer[language]}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{award.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
