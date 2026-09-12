import React from 'react';
import { educationData } from '../data/portfolioData';
import { MapPin, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <Reveal>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academics</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#161510] tracking-tight mb-12 max-w-2xl">
          Academic Journey
        </h2>
      </Reveal>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Reveal key={index} delay={index * 60}>
            <div className="bg-white rounded-2xl border border-[#DCD4BD] p-7 sm:p-8 shadow-xs hover:shadow-md transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 space-y-1.5">
                  <div className="font-bold text-sm text-[#161510]">{edu.period}</div>
                  {edu.score && (
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#F0EAD8] text-[#C1440E] font-semibold text-xs border border-[#DCD4BD]">
                      {edu.score}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-9">
                  <h3 className="font-bold text-xl sm:text-2xl text-[#161510] leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#5B5748]">
                    <span className="font-medium text-[#161510]">{edu.institution}</span>
                    <span className="text-[#DCD4BD]">•</span>
                    <span className="flex items-center gap-1 text-xs text-[#8C8770] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#8C8770]" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#5B5748] leading-relaxed">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C1440E] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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
