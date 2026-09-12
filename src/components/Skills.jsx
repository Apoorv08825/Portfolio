import React, { useState } from 'react';
import { 
  Smartphone, 
  Cloud, 
  Code2, 
  Brain, 
  Database, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import Reveal from './Reveal';

// Technical skills cards curated to precisely match the 3-column grid design with previous attractive colors
const skillCards = [
  {
    id: 'android',
    title: 'Android Development',
    description: 'Specialized in native Android engineering with Kotlin, XML layouts, Activity Lifecycle, and Firebase cloud integrations.',
    icon: Smartphone,
    iconColor: 'text-[#C1440E]',
    iconBg: 'bg-[#F3E1CB]',
    iconRing: 'ring-[#F0EAD8]',
    tags: ['Kotlin', 'Android Studio', 'XML', 'Firebase', 'GPS API']
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Experience with Oracle Cloud Infrastructure (Certified AI Foundations), Vercel deployments, Firebase Auth, and serverless application hosting.',
    icon: Cloud,
    iconColor: 'text-[#0284C7]',
    iconBg: 'bg-sky-100/70',
    iconRing: 'ring-sky-50',
    tags: ['Oracle Cloud (OCI)', 'Vercel', 'Firebase Auth', 'Cloud Storage', 'Git/GitHub']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Proficient in modern web development using React, Node.js, Express, JavaScript, and Tailwind CSS for scalable, responsive user experiences.',
    icon: Code2,
    iconColor: 'text-[#3E5C46]',
    iconBg: 'bg-[#E5EFE7]',
    iconRing: 'ring-[#F0EAD8]',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vite']
  },
  {
    id: 'aiml',
    title: 'Machine Learning & AI',
    description: 'Predictive modeling and analytical pipelines using Scikit-learn, Random Forest, AdaBoost, Linear Regression, and K-Means customer segmentation.',
    icon: Brain,
    iconColor: 'text-[#C1440E]',
    iconBg: 'bg-rose-100/70',
    iconRing: 'ring-rose-50',
    tags: ['Python', 'Scikit-learn', 'Google Colab', 'Random Forest', 'K-Means', 'Kaggle']
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Expertise in relational database schema design, SQL querying, ER modeling, normalization, and ACID transactions (Infosys DBMS Certified).',
    icon: Database,
    iconColor: 'text-[#7C3AED]',
    iconBg: 'bg-purple-100/70',
    iconRing: 'ring-purple-50',
    tags: ['SQL', 'Relational DB', 'ER Modeling', 'Normalization', 'ACID Transactions']
  },
  {
    id: 'core',
    title: 'Core Systems & Algorithms',
    description: 'Strong foundation in Data Structures, Object-Oriented Programming (OOP), Operating Systems principles, and algorithmic problem solving in C++ and Java.',
    icon: Cpu,
    iconColor: 'text-[#8F3308]',
    iconBg: 'bg-[#F0EAD8]',
    iconRing: 'ring-[#EFE9D7]',
    tags: ['C++', 'Java', 'Data Structures', 'Algorithms', 'OOP Design', 'Linux']
  }
];

export default function Skills() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="skills" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      
      {/* Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#161510] tracking-tight">
            Technical Skills
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 text-[#5B5748] text-base sm:text-[17px] leading-relaxed">
            Specialized in Android, AI/ML, and full-stack software development with expertise across modern languages, cloud platforms, and data systems.
          </p>
        </Reveal>
      </div>

      {/* 3-Column Card Grid with previous colors & Pop Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skillCards.map((card, index) => {
          const IconComponent = card.icon;
          const isSelected = selectedCard === card.id;

          return (
            <Reveal key={card.id} delay={index * 60}>
              <div
                onClick={() => setSelectedCard(isSelected ? null : card.id)}
                className={`group relative bg-white rounded-2xl border p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-out ${
                  isSelected
                    ? 'border-[#C1440E] shadow-2xl ring-2 ring-[#C1440E]/20 -translate-y-2.5 scale-[1.03]'
                    : 'border-[#DCD4BD] shadow-[0_2px_12px_rgba(22,21,16,0.04)] hover:shadow-2xl hover:shadow-[#161510]/12 hover:border-[#C1440E] hover:-translate-y-2.5 hover:scale-[1.03]'
                }`}
              >
                {/* Circular icon container */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ring-8 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-2 ${card.iconBg} ${card.iconColor} ${card.iconRing}`}
                >
                  <IconComponent className="w-8 h-8 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#161510] mb-3 tracking-tight group-hover:text-[#C1440E] transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#5B5748] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Technology pill tags in previous colors */}
                <div className="mt-auto w-full pt-4 border-t border-[#DCD4BD]/60 flex flex-wrap justify-center gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#F0EAD8] border border-[#DCD4BD] text-[#5B5748] text-xs font-medium transition-colors group-hover:border-[#C1440E]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
