import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            id="nav-brand"
            className="text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap"
          >
            {t.brand}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <nav className="flex items-center gap-6 xl:gap-8 text-sm font-bold text-slate-500">
              <a href="#about" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.about}</a>
              <a href="#projects" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.projects}</a>
              <a href="#technical" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.technical}</a>
              <a href="#experience" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.experience}</a>
              <a href="#research" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.research}</a>
              <a href="#contact" className="hover:text-slate-950 transition-colors uppercase tracking-widest">{t.contact}</a>
            </nav>

            <button
              onClick={toggleLanguage}
              id="nav-lang-toggle"
              className="flex items-center gap-2 text-xs font-bold text-slate-950 px-4 py-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'العربية' : 'ENGLISH'}</span>
            </button>
          </div>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-950"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-12 space-y-8 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-6 text-2xl font-bold text-slate-950">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.projects}</a>
            <a href="#technical" onClick={() => setMobileMenuOpen(false)}>{t.technical}</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.experience}</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)}>{t.research}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.about}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
          </nav>
          <button
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-sm font-bold text-slate-950"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'العربية' : 'ENGLISH'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
