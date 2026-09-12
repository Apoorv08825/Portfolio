import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  const [hoveredTrait, setHoveredTrait] = useState(null);

  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12">

        {/* Left: identity & narrative (5 cols) */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#161510] tracking-tight leading-[1.15]">
              Building software with purpose and architectural discipline.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-4 text-[#5B5748] text-sm sm:text-base leading-relaxed">
              <p>{personalInfo.about.lead}</p>
              <p>{personalInfo.about.narrative}</p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 pt-6 border-t border-[#DCD4BD] space-y-3.5 text-xs font-medium text-[#5B5748]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E5C46] shrink-0 mt-0.5" />
                <span>B.Tech in Computer Science &amp; Engineering (LPU, CGPA 7.41)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E5C46] shrink-0 mt-0.5" />
                <span>Native Android engineering (Kotlin, XML, Firebase)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E5C46] shrink-0 mt-0.5" />
                <span>Applied Machine Learning (Scikit-learn, Regression, Random Forest, K-Means)</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: numbered trait rows (7 cols) */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-[#DCD4BD] border-t border-b border-[#DCD4BD]">
            {personalInfo.about.traits.map((trait, i) => {
              const isHovered = hoveredTrait === trait.id;
              return (
                <Reveal key={trait.id} delay={i * 60}>
                  <div
                    onMouseEnter={() => setHoveredTrait(trait.id)}
                    onMouseLeave={() => setHoveredTrait(null)}
                    className="group py-6 sm:py-7 grid grid-cols-12 gap-4 items-start cursor-default transition-colors"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className={`font-mono text-sm transition-colors ${isHovered ? 'text-[#C1440E] font-bold' : 'text-[#8C8770]'}`}>
                        {trait.id}
                      </span>
                    </div>

                    <div className={`col-span-10 sm:col-span-11 transition-transform duration-300 ${isHovered ? 'translate-x-1.5' : ''}`}>
                      <h3 className="font-bold text-xl sm:text-2xl text-[#161510] group-hover:text-[#C1440E] transition-colors">
                        {trait.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#5B5748] leading-relaxed max-w-xl">
                        {trait.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
