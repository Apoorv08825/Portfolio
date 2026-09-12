import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Reveal from './Reveal';

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast?.(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    onShowToast?.('Opened your mail client to send the message!');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      <Reveal>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#161510] tracking-tight leading-[1.05] mb-6">
          Have an idea?
          <br />
          <span className="text-[#C1440E]">Let&rsquo;s build it.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        {/* Left: direct contact (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl border border-[#DCD4BD] p-6 sm:p-7 shadow-xs divide-y divide-[#DCD4BD]">
              <div className="pb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#F0EAD8] text-[#C1440E] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-[#8C8770]">Direct Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="font-semibold text-[#161510] text-sm truncate block hover:text-[#C1440E] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                  className="p-2 text-[#8C8770] hover:text-[#161510] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-[#3E5C46]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#F0EAD8] text-[#3E5C46] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-[#8C8770]">Phone</div>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#161510] text-sm truncate block hover:text-[#C1440E] transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
                  className="p-2 text-[#8C8770] hover:text-[#161510] transition-colors cursor-pointer shrink-0"
                  title="Copy phone number to clipboard"
                >
                  {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-[#3E5C46]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="py-5 flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#F0EAD8] text-[#5B5748] group-hover:bg-[#F3E1CB] group-hover:text-[#C1440E] flex items-center justify-center shrink-0 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#8C8770]">LinkedIn</div>
                  <span className="font-semibold text-[#161510] text-sm group-hover:text-[#C1440E] transition-colors">/in/apoorv088</span>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="pt-5 flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#F0EAD8] text-[#5B5748] group-hover:bg-[#F3E1CB] group-hover:text-[#C1440E] flex items-center justify-center shrink-0 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#8C8770]">GitHub</div>
                  <span className="font-semibold text-[#161510] text-sm group-hover:text-[#C1440E] transition-colors">/Apoorv08825</span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: message form (7 cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={140}>
            <div className="bg-white rounded-2xl border border-[#DCD4BD] p-7 sm:p-8 shadow-xs">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B5748] mb-2">Your name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F4EC] border border-[#DCD4BD] text-[#161510] text-sm focus:outline-none focus:ring-2 focus:ring-[#C1440E]/20 focus:border-[#C1440E] transition-all placeholder:text-[#8C8770]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B5748] mb-2">Your email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F4EC] border border-[#DCD4BD] text-[#161510] text-sm focus:outline-none focus:ring-2 focus:ring-[#C1440E]/20 focus:border-[#C1440E] transition-all placeholder:text-[#8C8770]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B5748] mb-2">Message / project scope</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about the problem, project, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F4EC] border border-[#DCD4BD] text-[#161510] text-sm focus:outline-none focus:ring-2 focus:ring-[#C1440E]/20 focus:border-[#C1440E] transition-all resize-none placeholder:text-[#8C8770]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
