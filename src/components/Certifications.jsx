import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { ShieldCheck, ExternalLink, Award, Eye } from 'lucide-react';
import Reveal from './Reveal';
import CertificateModal from './CertificateModal';

// Landscape rectangular preview thumbnail component for certificate
function CertificatePreviewThumbnail({ cert }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#14130F] overflow-hidden border-b border-[#DCD4BD] flex items-center justify-center select-none group/thumb">
      {/* If an image exists, attempt to show it */}
      {cert.image && (
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Hide image and show procedural thumbnail if image is not yet placed
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById(`thumb-fallback-${cert.id}`);
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      )}

      {/* High-fidelity procedural certificate landscape design */}
      <div
        id={`thumb-fallback-${cert.id}`}
        style={{ display: cert.image ? 'none' : 'flex' }}
        className="w-full h-full bg-gradient-to-br from-[#1C1A13] via-[#14130F] to-[#2E2C21] p-5 flex-col justify-between relative overflow-hidden"
      >
        {/* Decorative watermarks and border */}
        <div className="absolute inset-2 border border-[#9C9781]/30 rounded-lg pointer-events-none" />
        <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#C1440E]/10 rounded-full blur-xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-[#F2A65A] font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#F2A65A]" />
            <span>{cert.issuer}</span>
          </div>
          <span className="font-mono text-[#9C9781] text-[10px]">{cert.date}</span>
        </div>

        {/* Center Title */}
        <div className="relative z-10 my-auto py-2">
          <div className="text-[9px] uppercase tracking-widest text-[#9C9781] mb-0.5">Certificate of Completion</div>
          <h4 className="font-bold text-[#ECE6D3] text-sm sm:text-[15px] leading-snug line-clamp-2">
            {cert.title}
          </h4>
          <div className="text-[10px] text-[#F2A65A] font-medium mt-1">
            Awarded to: Apoorv Suryawanshi
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-[9px] pt-1.5 border-t border-[#2E2C21] text-[#9C9781] font-mono">
          <span className="flex items-center gap-1 text-[#F2A65A]">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified Credential</span>
          </span>
          <span>ID: {cert.id?.toUpperCase() || 'VERIFIED'}</span>
        </div>
      </div>

      {/* Hover Eye Overlay: Click to view full certificate image */}
      <div className="absolute inset-0 bg-[#161510]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white gap-1.5 z-20">
        <div className="w-10 h-10 rounded-full bg-[#C1440E] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <Eye className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold tracking-wide shadow-sm text-[#ECE6D3]">View Certificate</span>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28 border-t border-[#DCD4BD]">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAD8] text-[#C1440E] text-xs font-semibold mb-4 border border-[#DCD4BD]">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Accreditations</span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#161510] tracking-tight leading-[1.15]">
              Certifications &amp; Credentials
            </h2>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="max-w-md text-[#5B5748] text-sm sm:text-base leading-relaxed">
            Click any certificate card to view the official credential image, verify authenticity, or download the certificate record.
          </p>
        </Reveal>
      </div>

      {/* Rectangular Landscape 3-Column Grid with Hover Pop Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {certificationsData.map((cert, index) => (
          <Reveal key={cert.id || index} delay={index * 50}>
            <article
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white rounded-2xl border border-[#DCD4BD] overflow-hidden shadow-[0_2px_12px_rgba(22,21,16,0.03)] hover:shadow-2xl hover:shadow-[#161510]/12 hover:border-[#C1440E] hover:-translate-y-2.5 hover:scale-[1.025] transition-all duration-300 ease-out flex flex-col h-full cursor-pointer"
            >
              {/* Top Rectangular Certificate Thumbnail with Zoom on Hover */}
              <CertificatePreviewThumbnail cert={cert} />

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#C1440E] bg-[#F0EAD8] px-2.5 py-0.5 rounded border border-[#DCD4BD]">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-2">
                    {cert.grade && (
                      <span className="font-mono text-[11px] font-bold text-[#3E5C46] bg-[#E5EFE7] px-2 py-0.5 rounded border border-[#C2D9C8]">
                        {cert.grade}
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#8C8770]">{cert.date}</span>
                  </div>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#161510] leading-snug mb-2 group-hover:text-[#C1440E] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B5748] leading-relaxed mb-5 flex-1 line-clamp-2">
                  {cert.description}
                </p>

                {/* Card Action Footer */}
                <div className="pt-3.5 border-t border-[#DCD4BD]/60 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="inline-flex items-center gap-1.5 text-[#C1440E] font-bold hover:text-[#8F3308] transition-colors py-1 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>

                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[#5B5748] hover:text-[#C1440E] font-medium transition-colors py-1 cursor-pointer"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-[#8C8770] font-mono text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3E5C46]" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
