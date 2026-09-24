import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award as AwardIcon, BookOpen, Clock, Mic } from 'lucide-react';
import { Award, Language, Publication, PublicationStatus } from '../types.ts';
import { translations } from '../data/translations.ts';
import { orcidUrl } from '../data/profile.ts';

interface ResearchProps {
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

const ResearchHeader: React.FC<{ language: Language; as: 'h1' | 'h2' }> = ({ language, as: Heading }) => {
  const t = translations[language].research;
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
      <div className="max-w-2xl">
        <Heading className="text-4xl font-bold tracking-tight text-slate-950 mb-4">{t.title}</Heading>
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
  );
};

const ResearchStats: React.FC<{ language: Language }> = ({ language }) => (
  <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
    {translations[language].research.stats.map((stat) => (
      <div key={stat.label} className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8">
        <p className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">{stat.value}</p>
        <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</p>
      </div>
    ))}
  </div>
);

const PublicationGroup: React.FC<{
  title: string;
  icon: React.ReactNode;
  items: Publication[];
  readLabel: string;
}> = ({ title, icon, items, readLabel }) => (
  <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2.5 bg-slate-950 text-white rounded-xl">{icon}</div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h3>
    </div>
    <ul className="divide-y divide-slate-100">
      {items.map((publication) => (
        <PublicationItem key={publication.id} publication={publication} readLabel={readLabel} />
      ))}
    </ul>
  </div>
);

/** Short research summary shown on the home page, linking to the full /research page. */
export const ResearchPreview: React.FC<{ publications: Publication[]; language: Language }> = ({
  publications,
  language,
}) => {
  const t = translations[language].research;
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;
  const featured = publications.filter((p) => p.status === 'peer-reviewed').slice(0, 2);

  return (
    <section id="research" className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ResearchHeader language={language} as="h2" />
        <ResearchStats language={language} />
        <PublicationGroup
          title={t.featured}
          icon={<BookOpen className="w-5 h-5" />}
          items={featured}
          readLabel={t.readPaper}
        />
        <div className="mt-10">
          <a
            href="/research"
            id="research-view-all"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-lg hover:bg-slate-800 transition-all group"
          >
            {t.viewAll}
            <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

/** Full research page: every publication, talk and award. */
export const ResearchPage: React.FC<ResearchProps> = ({ publications, awards, language }) => {
  const t = translations[language].research;
  const BackArrow = language === 'ar' ? ArrowRight : ArrowLeft;

  const groups: { status: PublicationStatus; title: string; icon: React.ReactNode }[] = [
    { status: 'peer-reviewed', title: t.peerReviewed, icon: <BookOpen className="w-5 h-5" /> },
    { status: 'in-press', title: t.inPress, icon: <Clock className="w-5 h-5" /> },
    { status: 'talk', title: t.talks, icon: <Mic className="w-5 h-5" /> },
  ];

  return (
    <section id="research" className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors"
        >
          <BackArrow className="w-4 h-4" />
          {t.backHome}
        </a>
        <ResearchHeader language={language} as="h1" />
        <ResearchStats language={language} />

        <div className="space-y-8">
          {groups.map(({ status, title, icon }) => {
            const items = publications.filter((p) => p.status === status);
            if (items.length === 0) return null;
            return <PublicationGroup key={status} title={title} icon={icon} items={items} readLabel={t.readPaper} />;
          })}
        </div>

        <div id="awards" className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 mb-10">{t.awardsTitle}</h2>
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
                <h3 className="text-lg font-bold text-slate-950 leading-snug mb-1">{award.title[language]}</h3>
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
