import React, { useState } from 'react';
import { MapPin, AlertTriangle, ShieldCheck, Radio, Globe, Send, CheckCircle2 } from 'lucide-react';

export default function ResQMapVisual() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'
  const [sosSent, setSosSent] = useState(false);

  const content = {
    en: {
      title: "ResQMap Dispatch HUD",
      sub: "Centralized Emergency Android App",
      status: "GPS Active",
      incidentType: "Flash Flood / Blocked Route",
      locationLabel: "Coordinates Detected",
      sosBtn: sosSent ? "SOS Confirmed & Dispatched" : "Trigger Emergency SOS",
      sosNotice: "Requires user confirmation via Android Intent",
      langToggle: "Switch to हिंदी",
      reliefCenters: "3 Relief Centers within 4.2 km",
      statusReport: "Report Status: Verified & Queued"
    },
    hi: {
      title: "ResQMap प्रेषण HUD",
      sub: "केंद्रीकृत आपातकालीन एंड्रॉइड ऐप",
      status: "जीपीएस सक्रिय",
      incidentType: "बाढ़ / अवरुद्ध मार्ग",
      locationLabel: "स्थान निर्देशांक प्राप्त",
      sosBtn: sosSent ? "एसओएस पुष्ट एवं प्रेषित" : "आपातकालीन एसओएस भेजें",
      sosNotice: "एंड्रॉइड इंटेंट द्वारा उपयोगकर्ता पुष्टि आवश्यक",
      langToggle: "Switch to English",
      reliefCenters: "4.2 किमी के दायरे में 3 राहत केंद्र",
      statusReport: "रिपोर्ट स्थिति: सत्यापित एवं कतारबद्ध"
    }
  };

  const t = content[lang];

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-5 text-slate-100 shadow-2xl relative overflow-hidden font-mono text-xs select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 radar-grid opacity-30 pointer-events-none" />
      
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <span className="font-bold text-slate-200 tracking-wider">RESQMAP // v1.2</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-950 text-rose-300 border border-rose-800">
            EMERGENCY HUD
          </span>
        </div>
        <button
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors cursor-pointer text-[11px]"
        >
          <Globe className="w-3.5 h-3.5 text-rose-400" />
          <span>{t.langToggle}</span>
        </button>
      </div>

      {/* Main HUD Body */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {/* Left Column: Location & Incident Data */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {t.locationLabel}
              </span>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.status}
              </span>
            </div>
            <div className="text-slate-100 font-bold tracking-wider text-[13px]">
              31.2536° N, 75.7037° E
            </div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Phagwara Region, Punjab • Accuracy: ±4.8m
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'en' ? 'Active Incident' : 'सक्रिय घटना'}
              </span>
              <span className="text-[10px] text-slate-500">Firebase Cloud: OK</span>
            </div>
            <div className="text-rose-300 font-semibold">{t.incidentType}</div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800">
              <span>{t.statusReport}</span>
              <span className="text-slate-500">TS: 2026-07-26 14:22</span>
            </div>
          </div>
        </div>

        {/* Right Column: SOS Trigger & Verification */}
        <div className="space-y-3 flex flex-col justify-between">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                {lang === 'en' ? 'SOS Dispatch Channel' : 'एसओएस प्रेषण चैनल'}
              </span>
              <span className="text-[10px] text-slate-400">Android Intent</span>
            </div>
            
            <button
              onClick={() => setSosSent(!sosSent)}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                sosSent 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40' 
                  : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/40 animate-pulse'
              }`}
            >
              {sosSent ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              <span>{t.sosBtn}</span>
            </button>
            <p className="text-[10px] text-center text-slate-400 italic">
              {t.sosNotice}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between text-[11px] text-emerald-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {t.reliefCenters}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold underline cursor-pointer">
              {lang === 'en' ? 'View Map' : 'नक्शा देखें'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="mt-3 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-400 relative z-10">
        <span>KOTLIN • NATIVE XML • FIREBASE STORAGE</span>
        <span className="text-slate-400">STATUS: READY FOR DISPATCH</span>
      </div>
    </div>
  );
}
