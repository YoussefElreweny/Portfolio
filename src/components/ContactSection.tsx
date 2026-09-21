import React from 'react';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

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
      </div>
    </section>
  );
};
