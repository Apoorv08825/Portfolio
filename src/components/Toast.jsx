import React from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#14130F] text-[#ECE6D3] shadow-2xl border border-[#2E2C21] animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CheckCircle className="w-5 h-5 text-[#F2A65A] shrink-0" />
      <div className="text-sm font-medium">{toast.message}</div>
      <button
        onClick={onClose}
        className="p-1 text-[#9C9781] hover:text-[#ECE6D3] transition-colors ml-2 cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
