import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Download, Eye, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <Reveal>
        <div className="relative bg-[#14130F] text-[#ECE6D3] rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 border border-[#2E2C21] shadow-xl blueprint-grid-dark">
          {/* Ambient light glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#F2A65A]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2C21] text-[#F2A65A] border border-[#F2A65A]/30 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#ECE6D3]">
              Want the complete story?
            </h2>

            <p className="text-[#9C9781] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Review my complete educational background, verified coursework, project architectures, and certified technical credentials in your preferred format.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F2A65A] hover:bg-[#ECE6D3] text-[#14130F] font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume in Browser</span>
              </button>

              <a
                href={personalInfo.resumePdf}
                download="Apoorv_Suryawanshi_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#2E2C21] hover:border-[#F2A65A] hover:text-[#F2A65A] text-[#ECE6D3] font-semibold text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#F2A65A]" />
                <span>Download PDF</span>
              </a>

              <a
                href={personalInfo.resumeDocx}
                download="APOORV_CV.docx"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-[#2E2C21]/70 hover:border-[#2E2C21] text-[#9C9781] hover:text-[#ECE6D3] font-medium text-sm transition-all cursor-pointer"
                title="Download Microsoft Word document"
              >
                <Download className="w-4 h-4" />
                <span>DOCX Version</span>
              </a>
            </div>

            <div className="pt-8 border-t border-[#2E2C21] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#9C9781] font-mono">
              <span className="flex items-center gap-1.5 text-[#F2A65A]">
                <ShieldCheck className="w-4 h-4" />
                Single source of truth CV
              </span>
              <span>Lovely Professional University</span>
              <span>Computer Science &amp; Engineering</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
