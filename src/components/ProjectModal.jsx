import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Layers, ShieldAlert, ExternalLink, Download } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const dive = [
    { label: 'Problem', icon: ShieldAlert, text: project.deepDive.problem },
    { label: 'What I built', icon: CheckCircle, text: project.deepDive.solution },
    { label: 'How it works', icon: Layers, text: project.deepDive.implementation },
    { label: 'Outcome', icon: ArrowRight, text: project.deepDive.outcome }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161510]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F7F4EC] rounded-2xl border border-[#DCD4BD] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 sm:py-5 border-b border-[#DCD4BD] bg-[#F0EAD8]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F3E1CB] text-[#C1440E] font-bold border border-[#DCD4BD] shrink-0">
              PROJECT {project.number}
            </span>
            <div className="min-w-0">
              <h3 className="font-bold text-[#161510] text-lg sm:text-xl truncate">
                {project.name}
              </h3>
              <p className="text-xs text-[#5B5748] truncate">{project.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.isDownload ? (
              <a
                href={project.demoUrl}
                download={project.downloadName || "ResQMap.apk"}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                title="Download Android APK"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download APK</span>
              </a>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                title="Open Live Vercel Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Live App</span>
              </a>
            ) : null}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCD4BD] hover:bg-[#EAE4D2] bg-[#F7F4EC] text-[#161510] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#5B5748]" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#8C8770] hover:text-[#161510] hover:bg-[#EAE4D2] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#F7F4EC]">
          {/* Project Real Banner / Screenshot */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-[#DCD4BD] bg-[#161510] shadow-md">
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-h-80 object-cover object-center"
              />
            </div>
          )}

          {/* Deep Dive Case Study Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dive.map(({ label, icon: Icon, text }) => (
              <div key={label} className="p-5 rounded-xl bg-white border border-[#DCD4BD] shadow-xs">
                <div className="flex items-center gap-2 text-[#161510] font-bold text-xs uppercase tracking-wider mb-2">
                  <Icon className="w-4 h-4 text-[#C1440E]" />
                  <span>{label}</span>
                </div>
                <p className="text-sm text-[#5B5748] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Technology & Infrastructure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161510] mb-3">
              Technology &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DCD4BD] text-[#161510] text-xs font-mono font-medium shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features & Architectural Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161510] mb-3">
              Key Features &amp; Architectural Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5B5748]">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#C1440E] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#DCD4BD] bg-[#F0EAD8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5B5748]">
          <span className="font-mono">Completed {project.date}</span>
          <div className="flex items-center gap-3">
            {project.isDownload ? (
              <a
                href={project.demoUrl}
                download={project.downloadName || "ResQMap.apk"}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white font-bold transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK ({project.downloadName})</span>
              </a>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white font-bold transition-colors cursor-pointer shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Vercel App</span>
              </a>
            ) : null}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#161510] hover:bg-[#33312B] text-[#F7F4EC] font-semibold transition-colors cursor-pointer shadow-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
