import React, { useEffect, useState, useCallback } from 'react';
import { X, Download, ExternalLink, ShieldCheck, Award, ZoomIn, ZoomOut } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);

  const handleModalClose = useCallback(() => {
    setZoom(1);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleModalClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleModalClose]);

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161510]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleModalClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${certificate.title} credential`}
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F7F4EC] rounded-2xl border border-[#DCD4BD] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header in previous warm paper palette */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD4BD] bg-[#F0EAD8]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4EC] text-[#C1440E] flex items-center justify-center shrink-0 border border-[#DCD4BD]">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#C1440E] font-bold bg-[#F3E1CB]/70 px-2 py-0.5 rounded">
                  {certificate.issuer}
                </span>
                {certificate.grade && (
                  <span className="font-mono text-[11px] font-bold text-[#3E5C46] bg-[#E5EFE7] px-2 py-0.5 rounded border border-[#C2D9C8]">
                    {certificate.grade}
                  </span>
                )}
                <span className="text-xs text-[#8C8770] font-mono">• {certificate.date}</span>
              </div>
              <h3 className="font-bold text-[#161510] text-base sm:text-lg truncate mt-0.5">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F7F4EC] border border-[#DCD4BD] rounded-lg p-1 mr-2 shadow-xs">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.75}
                className="p-1.5 rounded hover:bg-[#F0EAD8] text-[#5B5748] disabled:opacity-40 cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-2 py-1 text-xs font-mono text-[#5B5748] hover:bg-[#F0EAD8] rounded cursor-pointer"
                title="Reset zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 2.5}
                className="p-1.5 rounded hover:bg-[#F0EAD8] text-[#5B5748] disabled:opacity-40 cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {certificate.pdf ? (
              <a
                href={certificate.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F4EC] hover:bg-[#F0EAD8] text-[#161510] border border-[#DCD4BD] text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                title="Download official certificate PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#C1440E]" />
                <span className="hidden sm:inline">PDF</span>
              </a>
            ) : certificate.image ? (
              <a
                href={certificate.image}
                download={`${certificate.title.replace(/\s+/g, '_')}.png`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F4EC] hover:bg-[#F0EAD8] text-[#161510] border border-[#DCD4BD] text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                title="Download certificate image"
              >
                <Download className="w-3.5 h-3.5 text-[#C1440E]" />
                <span className="hidden sm:inline">Download</span>
              </a>
            ) : null}

            <button
              onClick={handleModalClose}
              className="p-2 rounded-lg text-[#8C8770] hover:text-[#161510] hover:bg-[#F0EAD8] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image View Container */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#14130F] flex items-center justify-center min-h-[360px] max-h-[65vh]">
          <div
            className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-w-full"
            style={{ transform: `scale(${zoom})` }}
          >
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-w-full max-h-[58vh] object-contain rounded-lg shadow-2xl border border-[#2E2C21] bg-white"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallbackEl = document.getElementById(`fallback-modal-${certificate.id}`);
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />
            ) : null}

            {/* Fallback procedural certificate card preview if image file is not yet placed */}
            <div
              id={`fallback-modal-${certificate.id}`}
              style={{ display: certificate.image ? 'none' : 'flex' }}
              className="w-full max-w-2xl aspect-[16/10] bg-gradient-to-br from-[#FDFCF7] via-[#F7F4EC] to-[#F0EAD8] text-[#161510] rounded-xl p-8 sm:p-12 shadow-2xl border-4 border-[#DCD4BD] flex-col justify-between relative overflow-hidden select-none"
            >
              {/* Decorative Certificate Guilloche / Corner Ornaments */}
              <div className="absolute inset-2 border-2 border-[#DCD4BD]/60 rounded-lg pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#F2A65A]/20 to-transparent pointer-events-none" />

              {/* Top Issuer Row */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD4BD]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#161510] text-[#F7F4EC] flex items-center justify-center font-bold text-lg shadow-md ring-4 ring-[#F0EAD8]">
                    <Award className="w-6 h-6 text-[#F2A65A]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8C8770] font-bold">Certificate of Completion</div>
                    <div className="text-lg font-extrabold text-[#161510] tracking-tight">{certificate.issuer}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-[#8C8770] uppercase tracking-wider">Date Issued</div>
                  <div className="text-sm font-semibold text-[#161510]">{certificate.date}</div>
                </div>
              </div>

              {/* Recipient & Certificate Title */}
              <div className="py-6 text-center">
                <div className="text-xs uppercase tracking-widest text-[#8C8770] font-medium mb-1">
                  This is proudly presented to
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#161510] tracking-tight mb-3">
                  Apoorv Suryawanshi
                </div>
                <div className="text-xs text-[#5B5748] max-w-md mx-auto mb-2">
                  for successfully completing all professional curriculum and examination requirements for
                </div>
                <div className="text-base sm:text-xl font-bold text-[#C1440E] max-w-lg mx-auto leading-snug">
                  {certificate.title}
                </div>
              </div>

              {/* Bottom Verification Seal */}
              <div className="flex items-center justify-between pt-4 border-t border-[#DCD4BD]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3E5C46]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Educational Credential</span>
                </div>
                <div className="text-[11px] font-mono text-[#8C8770] bg-[#F0EAD8] px-2.5 py-1 rounded border border-[#DCD4BD]">
                  ID: AP-CERT-{certificate.id?.toUpperCase() || 'VERIFIED'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Details in previous warm paper palette */}
        <div className="px-6 py-4 border-t border-[#DCD4BD] bg-[#F0EAD8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5B5748]">
          <p className="line-clamp-1 max-w-xl">
            {certificate.description}
          </p>

          <div className="flex items-center gap-3 shrink-0">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C1440E] hover:text-[#8F3308] font-semibold"
              >
                <span>External Verification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={handleModalClose}
              className="px-4 py-2 rounded-lg bg-[#161510] hover:bg-[#C1440E] text-[#F7F4EC] font-semibold cursor-pointer shadow-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
