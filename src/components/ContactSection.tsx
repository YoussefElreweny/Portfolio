import React from 'react';
import { Mail, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

const LinkedInLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      fill="#fff"
      d="M7.1 9.6H4.7V19h2.4V9.6ZM5.9 5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM19.3 13.8c0-2.6-1.4-4.4-3.8-4.4-1.2 0-2.1.6-2.5 1.3V9.6h-2.3V19H13v-4.7c0-1.3.4-2.5 1.9-2.5s1.9 1.3 1.9 2.6V19h2.5v-5.2Z"
    />
  </svg>
);

const GitHubLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"
    />
  </svg>
);

const socialLinks = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/youssef-elreweny',
    url: 'https://www.linkedin.com/in/youssef-elreweny',
    Logo: LinkedInLogo,
    logoClassName: 'w-10 h-10',
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'github.com/YoussefElreweny',
    url: 'https://github.com/YoussefElreweny',
    Logo: GitHubLogo,
    logoClassName: 'w-10 h-10 text-slate-950',
  },
];

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = translations[language].contact;
  const isRtl = language === 'ar';
  const emailAddress = 'y.reweny@gmail.com';

  return (
    <section id="contact" className="py-32 sm:py-48 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {language === 'en' 
              ? "I'm always open to new opportunities and collaborations. Let's build something great together."
              : "أنا متاح دائماً للفرص والتعاون الجديد. دعنا نبني شيئاً رائعاً معاً."}
          </p>
          
          <div className="pt-8">
            <a
              href={`mailto:${emailAddress}`}
              id="contact-email-link"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-lg hover:bg-slate-800 transition-all group"
            >
              <Mail className="w-5 h-5" />
              <span>{t.email}</span>
              {isRtl ? (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto pt-12 grid gap-4 sm:grid-cols-2 text-start">
          {socialLinks.map(({ id, name, handle, url, Logo, logoClassName }) => (
            <a
              key={id}
              href={url}
              id={`contact-${id}-link`}
              target="_blank"
              rel="me noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-950 hover:shadow-lg transition-all group"
            >
              <Logo className={`${logoClassName} shrink-0`} />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-950">{name}</p>
                <p className="text-sm text-slate-500 truncate" dir="ltr">{handle}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
