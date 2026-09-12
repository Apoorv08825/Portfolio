import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#DCD4BD] bg-[#F7F4EC] py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-extrabold text-[#161510] text-lg tracking-tight">
            {personalInfo.name}
          </div>
          <div className="text-xs text-[#8C8770] font-mono mt-1">
            {personalInfo.status}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-[#5B5748] hover:text-[#161510] hover:bg-[#F0EAD8] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-[#5B5748] hover:text-[#161510] hover:bg-[#F0EAD8] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-lg text-[#5B5748] hover:text-[#161510] hover:bg-[#F0EAD8] transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 ml-2 rounded-lg border border-[#DCD4BD] hover:border-[#161510] hover:bg-[#F0EAD8] text-[#5B5748] hover:text-[#161510] transition-colors cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#DCD4BD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8770] font-mono gap-2 text-center sm:text-left">
        <div>© {currentYear} {personalInfo.name}. All verified portfolio records reserved.</div>
        <div>Designed &amp; built with React, Vite &amp; Tailwind CSS.</div>
      </div>
    </footer>
  );
}
