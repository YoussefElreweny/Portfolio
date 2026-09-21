import React from 'react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-slate-950">
            {language === 'en' ? 'Youssef Elreweny' : 'يوسف الرويني'}
          </p>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} — {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
