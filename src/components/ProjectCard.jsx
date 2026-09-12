import React from 'react';
import { ExternalLink, TrendingUp, ShieldCheck, MapPin, Radio, Download } from 'lucide-react';
import { GithubIcon } from './Icons';
import Reveal from './Reveal';

// Custom visual banner for each project in the 3-column grid
function ProjectBanner({ projectId }) {
  if (projectId === 'resqmap') {
    return (
      <div className="relative w-full h-48 sm:h-52 bg-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80 font-mono text-xs select-none">
        {/* Background Radar Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C1440E]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C1440E] animate-pulse" />
            <span className="font-bold text-slate-200 tracking-wider">RESQMAP // v1.2</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-[#C1440E]/30 text-[#F3E1CB] border border-[#C1440E]/60 font-semibold text-[9px]">
            EMERGENCY HUD
          </span>
        </div>

        {/* Center Telemetry Card */}
        <div className="relative z-10 p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#C1440E]/20 border border-[#C1440E]/40 flex items-center justify-center text-[#F2A65A] shrink-0">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white flex items-center gap-1">
                <span>GPS Location Active</span>
                <MapPin className="w-3 h-3 text-[#F2A65A]" />
              </div>
              <div className="text-[9px] text-slate-400">31.2536° N, 75.7037° E • Bilingual</div>
            </div>
          </div>
          <span className="px-2 py-1 rounded bg-[#C1440E] text-white font-bold text-[9px] uppercase tracking-wider animate-pulse">
            SOS READY
          </span>
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
          <span>Relief Radius: 4.2 km</span>
          <span className="text-[#F2A65A] font-medium">Bilingual EN/HI</span>
        </div>
      </div>
    );
  }

  if (projectId === 'cryptosight') {
    return (
      <div className="relative w-full h-48 sm:h-52 bg-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80 font-mono text-xs select-none">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#3E5C46]/30 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8FB89A] animate-pulse" />
            <span className="font-bold text-slate-200 tracking-wider">CRYPTOSIGHT // ML</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-[#3E5C46]/40 text-[#8FB89A] border border-[#3E5C46] font-semibold text-[9px]">
            BTC 7-DAY FORECAST
          </span>
        </div>

        {/* Center Price & Trend Card */}
        <div className="relative z-10 p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Bitcoin Trend Model</div>
            <div className="text-base font-bold text-white flex items-center gap-2">
              <span>$67,420.50</span>
              <span className="text-[10px] text-[#8FB89A] font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 inline mr-0.5" /> +4.82%
              </span>
            </div>
          </div>
          {/* Mini Sparkline Visualization */}
          <div className="w-20 h-7 flex items-end gap-1">
            {[40, 55, 48, 65, 75, 70, 90].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="w-2 rounded-t bg-[#8FB89A]/80"
              />
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
          <span>Model: Random Forest &amp; K-Means</span>
          <span className="text-[#8FB89A] font-medium">Offline ML Pipeline</span>
        </div>
      </div>
    );
  }

  // Default: secure-auth
  return (
    <div className="relative w-full h-48 sm:h-52 bg-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80 font-mono text-xs select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F2A65A]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F2A65A] animate-pulse" />
          <span className="font-bold text-slate-200 tracking-wider">SECURE AUTH // OS</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-[#2E2C21] text-[#F2A65A] border border-[#F2A65A]/40 font-semibold text-[9px]">
          SESSION TELEMETRY
        </span>
      </div>

      {/* Center Security Card */}
      <div className="relative z-10 p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#F2A65A]/20 border border-[#F2A65A]/30 flex items-center justify-center text-[#F2A65A] shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">MFA &amp; Active Defense</div>
            <div className="text-[9px] text-slate-400">TOTP Authenticator • Instant Revoke</div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-[#2E2C21] text-[#F2A65A] border border-[#F2A65A]/40 text-[9px] font-bold">
          SECURE
        </span>
      </div>

      {/* Bottom Tagline */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
        <span>Brute-Force Shield Active</span>
        <span className="text-[#F2A65A] font-medium">Supabase &amp; JWT</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index, onOpenModal }) {
  return (
    <Reveal delay={index * 60}>
      <article
        onClick={() => onOpenModal(project)}
        className="group relative bg-white rounded-2xl border border-[#DCD4BD] overflow-hidden shadow-[0_2px_12px_rgba(22,21,16,0.04)] hover:shadow-2xl hover:shadow-[#161510]/12 hover:border-[#C1440E] hover:-translate-y-2.5 hover:scale-[1.025] transition-all duration-300 ease-out flex flex-col h-full cursor-pointer"
      >
        {/* Top Visual Banner with subtle zoom on hover */}
        <div className="overflow-hidden relative w-full h-48 sm:h-52 bg-[#161510] border-b border-[#DCD4BD]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
              <ProjectBanner projectId={project.id} />
            </div>
          )}
        </div>

        {/* Card Content Body matching the user reference image */}
        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Category Eyebrow */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F0EAD8] text-[#C1440E] border border-[#DCD4BD] text-[11px] font-semibold">
              {project.badge}
            </span>
            <span className="text-[11px] font-mono text-[#8C8770]">{project.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#161510] group-hover:text-[#C1440E] transition-colors mb-2.5 tracking-tight leading-snug">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#5B5748] leading-relaxed mb-5 flex-1">
            {project.shortDescription}
          </p>

          {/* Technologies Pills */}
          <div className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#F0EAD8] text-[#5B5748] text-[11px] font-medium border border-[#DCD4BD]/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] text-[#8C8770] font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links Row matching reference image: GitHub | Live Demo / Download APK */}
          <div className="pt-4 border-t border-[#DCD4BD]/60 flex items-center justify-between text-xs font-semibold">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-[#5B5748] hover:text-[#161510] transition-colors py-1 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-[#8C8770]" />
                <span>GitHub</span>
              </a>
            ) : (
              <span />
            )}

            {project.isDownload ? (
              <a
                href={project.demoUrl}
                download={project.downloadName || "ResQMap.apk"}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
                title="Download Android APK"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{project.demoLabel || 'Download APK'}</span>
              </a>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C1440E] hover:bg-[#8F3308] text-white font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
                title="Open Live Vercel Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.demoLabel || 'Live Demo'}</span>
              </a>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(project);
                }}
                className="inline-flex items-center gap-1.5 text-[#C1440E] hover:text-[#8F3308] font-bold transition-colors py-1 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Case Study</span>
              </button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
