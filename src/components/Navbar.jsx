import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const sectionOrder = ['hero', 'skills', 'projects', 'certifications', 'experience', 'education', 'contact'];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 140;
      for (let i = sectionOrder.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionOrder[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionOrder[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'py-3.5 bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#DCD4BD] shadow-xs'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand: Clean Name without creator tag */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group cursor-pointer"
          >
            <span className="font-extrabold text-[#161510] text-lg sm:text-xl tracking-tight group-hover:text-[#C1440E] transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav Links in original attractive colors */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#C1440E] font-bold'
                      : 'text-[#5B5748] hover:text-[#161510] font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Resume only (Search removed as requested) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5B5748] hover:text-[#161510] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DCD4BD] bg-[#F7F4EC] px-5 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col divide-y divide-[#DCD4BD]">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-3 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#C1440E] font-bold' : 'text-[#5B5748]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full mt-5 py-3 rounded-lg bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View &amp; Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
