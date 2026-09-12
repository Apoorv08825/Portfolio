import React, { useState } from 'react';
import { Shield, Key, RefreshCw, Terminal } from 'lucide-react';

export default function SecureAuthVisual() {
  const [sessionActive, setSessionActive] = useState(true);
  const [mfaCode] = useState('847 219');
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, type: 'AUTH_OK', msg: 'TOTP Token verified • algorithm: SHA1/30s', ts: '14:28:01' },
    { id: 2, type: 'BCRYPT_OK', msg: 'Password hash validated • salt cost: 12', ts: '14:28:02' },
    { id: 3, type: 'JWT_ISSUE', msg: 'Session token minted • exp: 3600s', ts: '14:28:02' },
    { id: 4, type: 'SOC_CHECK', msg: 'Anomalous velocity check passed • IP tier 1', ts: '14:28:03' }
  ]);

  const handleRevoke = () => {
    if (sessionActive) {
      setSessionActive(false);
      setAuditLogs(prev => [
        { id: Date.now(), type: 'REVOKE_OK', msg: 'Server-side session terminated & blacklisted', ts: 'Just now' },
        ...prev
      ]);
    } else {
      setSessionActive(true);
      setAuditLogs(prev => [
        { id: Date.now(), type: 'SESSION_RESTORED', msg: 'Re-authenticated with TOTP MFA pipeline', ts: 'Just now' },
        ...prev
      ]);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#090D15] border border-slate-800 p-5 text-slate-100 shadow-2xl relative overflow-hidden font-mono text-xs select-none">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 subtle-grid opacity-25 pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-950/80 border border-indigo-700/60 text-indigo-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200 tracking-wider flex items-center gap-1.5">
              <span>OS AUTH SECURITY FRAMEWORK</span>
              <span className="text-[10px] text-indigo-400 font-normal px-1.5 py-0.2 rounded bg-indigo-950 border border-indigo-800">
                PROD PIPELINE
              </span>
            </div>
            <div className="text-[10px] text-slate-400">JWT • TOTP MFA • bcrypt • Server Revocation</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border flex items-center gap-1 ${
            sessionActive 
              ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800' 
              : 'bg-rose-950/70 text-rose-300 border-rose-800'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sessionActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
            {sessionActive ? 'SESSION: VALID' : 'SESSION: REVOKED'}
          </span>
        </div>
      </div>

      {/* Main Framework Grid */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
        {/* Left Column: TOTP & Verification Card */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1">
                <Key className="w-3.5 h-3.5 text-indigo-400" />
                TOTP Authenticator
              </span>
              <span className="text-[10px] text-indigo-300">RFC 6238</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-lg font-bold tracking-widest text-slate-100">{mfaCode}</span>
              <span className="text-[10px] text-indigo-400 animate-pulse">24s left</span>
            </div>
            <div className="text-[10px] text-slate-400">
              bcrypt salted hash verified with server-side secret
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-slate-400 text-[10px] uppercase tracking-wider">Session Control</div>
            <button
              onClick={handleRevoke}
              className={`w-full py-2 px-3 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                sessionActive
                  ? 'bg-rose-900/40 hover:bg-rose-900/70 text-rose-200 border border-rose-700/60'
                  : 'bg-emerald-900/40 hover:bg-emerald-900/70 text-emerald-200 border border-emerald-700/60'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{sessionActive ? 'Simulate Server Revocation' : 'Re-Authenticate Session'}</span>
            </button>
          </div>
        </div>

        {/* Right 2 Columns: Live Audit Log Console */}
        <div className="lg:col-span-2 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/70 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>OS Security Audit Log Stream</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold">Real-Time Monitor</span>
            </div>

            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-1.5 rounded bg-slate-900/60 border border-slate-800/60 flex items-start justify-between gap-2 text-[10px]">
                  <div className="flex items-start gap-1.5">
                    <span className={`px-1 py-0.2 rounded font-bold ${
                      log.type.includes('OK') ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                      log.type.includes('REVOKE') ? 'bg-rose-950 text-rose-400 border border-rose-800' :
                      'bg-indigo-950 text-indigo-400 border border-indigo-800'
                    }`}>
                      {log.type}
                    </span>
                    <span className="text-slate-300 font-sans">{log.msg}</span>
                  </div>
                  <span className="text-slate-400 shrink-0">{log.ts}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] text-slate-400">
            <span>PROTECTION: BRUTE-FORCE • REPLAY • CREDENTIAL STUFFING</span>
            <span className="text-indigo-400">SUPABASE & NODE.JS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
