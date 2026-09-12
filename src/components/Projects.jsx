import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
import { Sparkles } from 'lucide-react';

const filters = [
  { id: 'ALL', label: 'All Projects' },
  { id: 'BUILD', label: 'ResQMap' },
  { id: 'SOLVE', label: 'CryptoSight' },
  { id: 'EXPLORE', label: 'Secure Auth' }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');

  const filteredProjects = filterCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <Reveal>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#161510] tracking-tight max-w-2xl leading-[1.15]">
            Real systems, built to work under real constraints.
          </h2>
          <p className="max-w-sm text-[#5B5748] text-sm sm:text-base leading-relaxed">
            Native Android, applied machine learning, and full-stack security — treated as case studies, not screenshots.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-6 border-b border-[#DCD4BD] text-xs font-semibold uppercase tracking-wider">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterCategory(f.id)}
              className={`pb-2 transition-all cursor-pointer ${
                filterCategory === f.id
                  ? 'text-[#C1440E] border-b-2 border-[#C1440E] font-bold'
                  : 'text-[#8C8770] hover:text-[#161510] font-medium'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* 3-Column Card Grid matching reference image with Pop Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenModal={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
