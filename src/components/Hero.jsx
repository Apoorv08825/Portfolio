import React from 'react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Hero({ onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#F7F4EC]">
      {/* Subtle warm ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/4 w-96 h-96 bg-[#F3E1CB]/40 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-24 right-1/4 w-96 h-96 bg-[#F0EAD8]/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Circular profile photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal delay={100}>
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl shadow-[#161510]/10 border-4 sm:border-[6px] border-white ring-1 ring-[#DCD4BD] bg-[#F0EAD8] transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="/apoorv.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Content hierarchy without creator badge, in previous attractive colors */}
          <div className="lg:col-span-7">
            
            {/* Main Name Heading */}
            <Reveal delay={60}>
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#161510] tracking-tight leading-[1.1] mb-3">
                {personalInfo.name}
              </h1>
            </Reveal>

            {/* Subtitle / Role Headline in previous attractive rust color */}
            <Reveal delay={120}>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#C1440E] tracking-tight mb-5 flex flex-wrap items-center gap-x-2">
                <span>Computer Science Engineer</span>
                <span className="text-[#DCD4BD] font-normal">|</span>
                <span>Android</span>
                <span className="text-[#DCD4BD] font-normal">|</span>
                <span>AI/ML</span>
                <span className="text-[#DCD4BD] font-normal">|</span>
                <span>Builder</span>
              </div>
            </Reveal>

            {/* Bio introduction paragraph */}
            <Reveal delay={180}>
              <p className="text-[#5B5748] text-base sm:text-[17px] leading-relaxed max-w-2xl mb-7">
                I am <span className="font-semibold text-[#161510]">{personalInfo.name}</span>, currently pursuing my B.Tech in Computer Science and Engineering at {personalInfo.institution}. With expertise in Android Development, Machine Learning, and Full-Stack Systems, I build scalable applications and innovative solutions that solve real-world problems.
              </p>
            </Reveal>

            {/* Contact row with previous warm color hover */}
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-8 text-[#5B5748] text-sm font-medium">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-[#C1440E] transition-colors group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#8C8770] group-hover:text-[#C1440E] transition-colors" />
                  <span>Email</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 hover:text-[#C1440E] transition-colors group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#8C8770] group-hover:text-[#C1440E] transition-colors" />
                  <span>Phone</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C1440E] transition-colors group cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#8C8770] group-hover:text-[#C1440E] transition-colors" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C1440E] transition-colors group cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-[#8C8770] group-hover:text-[#C1440E] transition-colors" />
                  <span>GitHub</span>
                </a>
              </div>
            </Reveal>

            {/* Action Buttons in previous attractive styling */}
            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Button 1: Download Resume */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                {/* Button 2: Let's Connect */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#161510] hover:border-[#C1440E] hover:text-[#C1440E] text-[#161510] bg-transparent text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
