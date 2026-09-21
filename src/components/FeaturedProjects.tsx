import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface FeaturedProjectsProps {
  projects: Project[];
  language: Language;
}

const ProjectCard: React.FC<{ project: Project; language: Language }> = ({ project, language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <div className="group space-y-6">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-3xl transition-all duration-700 shadow-sm group-hover:shadow-2xl">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          {project.images && project.images.length > 0 ? (
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  alt={project.title[language]}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-12`}>
              <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    {project.title[language]}
                  </h3>
              </div>
            </div>
          )}
        </a>

        {project.images && project.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <button
              onClick={prevImage}
              className="p-3 rounded-full bg-white/90 text-slate-900 hover:bg-white transition-all pointer-events-auto backdrop-blur-md shadow-xl active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="p-3 rounded-full bg-white/90 text-slate-900 hover:bg-white transition-all pointer-events-auto backdrop-blur-md shadow-xl active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {project.images && project.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDirection(idx > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${
                  idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 px-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            {project.title[language]}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full border border-slate-200 text-slate-400 hover:text-slate-950 hover:bg-slate-50 transition-all shadow-sm"
                title={language === 'en' ? 'View Source' : 'عرض الكود'}
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full border border-slate-200 text-slate-950 hover:bg-slate-950 hover:text-white transition-all group/link shadow-sm"
            >
              <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </a>
          </div>
        </div>
        
        <p className="text-lg text-slate-600 leading-relaxed w-full">
          {project.description[language]}
        </p>

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wider uppercase">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  language,
}) => {
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-16">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};
