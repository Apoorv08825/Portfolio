import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, Code2, Briefcase, GraduationCap, Award, Mail, Phone, ArrowRight, X, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function CommandPalette({ isOpen, onClose, onOpenResume, onShowToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        setQuery('');
        setSelectedIndex(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const actions = [
    {
      id: 'resume-view',
      title: 'View In-Browser Resume (PDF)',
      category: 'Resume & CV',
      icon: <FileText className="w-4 h-4 text-[#3E5C46]" />,
      perform: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'resume-pdf',
      title: 'Download Resume (PDF)',
      category: 'Resume & CV',
      icon: <FileText className="w-4 h-4 text-[#3E5C46]" />,
      perform: () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumePdf;
        link.download = 'Apoorv_Suryawanshi_Resume.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'resume-docx',
      title: 'Download Original Word CV (DOCX)',
      category: 'Resume & CV',
      icon: <FileText className="w-4 h-4 text-blue-600" />,
      perform: () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumeDocx;
        link.download = 'APOORV_CV.docx';
        link.click();
        onClose();
      }
    },
    {
      id: 'proj-resqmap',
      title: 'ResQMap — Emergency Response Android Application',
      category: 'Projects',
      icon: <Code2 className="w-4 h-4 text-rose-500" />,
      perform: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'proj-cryptosight',
      title: 'CryptoSight SaaS — Machine Learning Analytics System',
      category: 'Projects',
      icon: <Code2 className="w-4 h-4 text-[#3E5C46]" />,
      perform: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'proj-secureauth',
      title: 'Secure Authentication Framework for Operating Systems',
      category: 'Projects',
      icon: <Code2 className="w-4 h-4 text-indigo-500" />,
      perform: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-skills',
      title: 'Inspect Technical Stack & Skills',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      perform: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-experience',
      title: 'View Kotlin Android Training at LPU',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-purple-500" />,
      perform: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-certifications',
      title: 'View Oracle AI & Infosys DBMS Certifications',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-[#8C8770]" />,
      perform: () => {
        onClose();
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-education',
      title: 'View Education (LPU B.Tech CSE, CGPA 7.41)',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-[#3E5C46]" />,
      perform: () => {
        onClose();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact-email',
      title: 'Copy Email Address (apoorv08825@gmail.com)',
      category: 'Contact',
      icon: <Mail className="w-4 h-4 text-rose-500" />,
      perform: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onShowToast('Copied email to clipboard!');
        onClose();
      }
    },
    {
      id: 'contact-phone',
      title: 'Copy Phone Number (+91 9685639904)',
      category: 'Contact',
      icon: <Phone className="w-4 h-4 text-[#3E5C46]" />,
      perform: () => {
        navigator.clipboard.writeText(personalInfo.phone);
        onShowToast('Copied phone number to clipboard!');
        onClose();
      }
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile (@Apoorv08825)',
      category: 'Social Links',
      icon: <GithubIcon className="w-4 h-4 text-[#161510]" />,
      perform: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile (/in/apoorv088)',
      category: 'Social Links',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-600" />,
      perform: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((action) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-[#161510]/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#F7F4EC] border border-[#DCD4BD] overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#DCD4BD] gap-3 bg-[#F0EAD8]">
          <Search className="w-5 h-5 text-[#8C8770] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or skill (e.g. ResQMap, Resume, C++, LPU)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-[#161510] placeholder:text-[#8C8770] focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-[#5B5748] border border-[#DCD4BD]">
            ESC
          </kbd>
          <button onClick={onClose} className="sm:hidden p-1 text-[#8C8770] hover:text-[#161510] cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-1.5 divide-y divide-[#DCD4BD]">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8C8770] font-mono">
              No matching actions found for "{query}"
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#161510] text-[#F7F4EC]' : 'text-[#5B5748] hover:bg-[#F0EAD8]'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className={`p-1.5 ${isSelected ? 'bg-[#2E2C21]' : 'bg-[#F0EAD8]'}`}>
                      {action.icon}
                    </div>
                    <span className="font-medium truncate">{action.title}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[10px] font-mono px-2 py-0.5 ${
                      isSelected ? 'bg-[#2E2C21] text-[#9C9781]' : 'bg-[#F0EAD8] text-[#8C8770]'
                    }`}>
                      {action.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F2A65A] translate-x-0.5' : 'text-[#DCD4BD]'} transition-transform`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#F0EAD8] border-t border-[#DCD4BD] flex items-center justify-between text-[11px] font-mono text-[#8C8770]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#C1440E] font-semibold">Command Center</span>
        </div>
      </div>
    </div>
  );
}
