import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FeaturedProjects } from './components/FeaturedProjects.tsx';
import { TechnicalWork } from './components/TechnicalWork.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ResearchPage, ResearchPreview } from './components/ResearchSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { projects, technicalProjects } from './data/projects.ts';
import { experience, leadership, publications, awards } from './data/profile.ts';
import { Language } from './types.ts';

const isResearchPage = window.location.pathname.replace(/\/+$/, '') === '/research';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  // Sync Language & RTL/LTR
  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col font-sans selection:bg-slate-950 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {isResearchPage ? (
          <ResearchPage
            publications={publications}
            awards={awards}
            language={language}
          />
        ) : (
          <>
            <Hero
              language={language}
              onOpenResume={() => {}}
            />

            <AboutSection
              language={language}
            />

            <FeaturedProjects
              projects={projects}
              language={language}
            />

            <TechnicalWork
              projects={technicalProjects}
              language={language}
            />

            <ExperienceSection
              experience={experience}
              leadership={leadership}
              language={language}
            />

            <ResearchPreview
              publications={publications}
              language={language}
            />
          </>
        )}

        <ContactSection
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer language={language} />

      <WhatsAppButton language={language} />
    </div>
  );
}
