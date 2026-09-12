import React from 'react';
import { trainingData } from '../data/portfolioData';
import { CheckCircle2, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <Reveal>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Practical Experience</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#161510] tracking-tight mb-12 max-w-2xl">
          Training &amp; Hands-on Development
        </h2>
      </Reveal>

      <div className="space-y-8">
        {trainingData.map((item, index) => (
          <Reveal key={index} delay={index * 60}>
            <div className="bg-white rounded-2xl border border-[#DCD4BD] p-8 sm:p-10 shadow-xs hover:shadow-md transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Left meta column */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-3xl font-extrabold text-[#C1440E]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-4 space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#161510]">{item.period}</div>
                    <div className="text-xs text-[#8C8770]">{item.type}</div>
                  </div>
                </div>

                {/* Right content column */}
                <div className="lg:col-span-9">
                  <h3 className="font-bold text-2xl sm:text-3xl text-[#161510] leading-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#C1440E]">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm text-[#5B5748] leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#8C8770] mb-3">
                      Key focus areas &amp; outcomes
                    </div>
                    <ul className="space-y-2.5">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#5B5748] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#3E5C46] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#DCD4BD]/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#8C8770] mb-2.5">
                      Technologies &amp; Frameworks
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#F0EAD8] border border-[#DCD4BD] text-[#5B5748] text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
