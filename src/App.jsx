import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global shortcut (Ctrl+K or Cmd+K) to open Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll progress calculation, used for the thin top indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message) => {
    setToast({ message });
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#161510] selection:bg-[#F2A65A]/30 selection:text-[#161510] font-sans relative">
      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#C1440E] z-50 origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Certifications />
        <Education />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onShowToast={showToast}
      />

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
