import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161510]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        className="relative w-full max-w-5xl h-[90vh] bg-[#F7F4EC] border border-[#DCD4BD] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD4BD] bg-[#F0EAD8]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 border border-[#C1440E]/40 text-[#C1440E] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-medium text-[#161510] text-lg truncate">
                Curriculum Vitae — {personalInfo.name}
              </h3>
              <p className="text-xs text-[#8C8770]">
                Verified B.Tech Computer Science &amp; Engineering candidate • LPU
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <a
              href={personalInfo.resumePdf}
              download="Apoorv_Suryawanshi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] text-xs font-mono transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>
            <a
              href={personalInfo.resumeDocx}
              download="APOORV_CV.docx"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#DCD4BD] hover:border-[#161510] text-[#5B5748] hover:text-[#161510] text-xs font-mono transition-colors cursor-pointer"
              title="Download original Microsoft Word format"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOCX</span>
            </a>
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8C8770] hover:text-[#161510] transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#8C8770] hover:text-[#161510] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body / PDF viewer */}
        <div className="flex-1 w-full bg-[#F0EAD8] p-2 sm:p-4 overflow-hidden flex flex-col">
          <div className="w-full flex-1 overflow-hidden border border-[#DCD4BD] bg-white">
            <object data={personalInfo.resumePdf} type="application/pdf" className="w-full h-full">
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <FileText className="w-16 h-16 text-[#C1440E] mb-4" />
                <h4 className="text-lg font-display font-medium text-[#161510] mb-2">Resume ready for download</h4>
                <p className="text-sm text-[#5B5748] max-w-md mb-6">
                  Your browser can open or download the complete PDF and DOCX files directly using the buttons below.
                </p>
                <div className="flex items-center gap-3">
                  <a href={personalInfo.resumePdf} download="Apoorv_Suryawanshi_Resume.pdf" className="px-5 py-2.5 bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] font-medium text-sm transition-colors">
                    Download resume (PDF)
                  </a>
                  <a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#DCD4BD] hover:border-[#161510] text-[#161510] font-medium text-sm transition-colors">
                    Open in new tab
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#DCD4BD] bg-[#F0EAD8] flex items-center justify-between text-xs text-[#8C8770] font-mono">
          <div className="flex items-center gap-1.5 text-[#3E5C46] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified source: single source of truth CV</span>
          </div>
          <span>Apoorv Suryawanshi • Lovely Professional University</span>
        </div>
      </div>
    </div>
  );
}
