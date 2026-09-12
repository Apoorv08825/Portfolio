import React, { useState } from 'react';
import { TrendingUp, Activity, Database, Cpu } from 'lucide-react';

export default function CryptoSightVisual() {
  const [activeModel, setActiveModel] = useState('rf'); // 'rf', 'ada', 'kmeans'

  const models = {
    rf: {
      name: "Random Forest",
      metric: "R² = 0.942",
      forecast: "+3.8%",
      prediction: "$68,450 USD",
      trend: "Bullish Retest",
      risk: "Moderate",
      details: "Ensemble of 120 decision trees assessing multi-day momentum"
    },
    ada: {
      name: "AdaBoost",
      metric: "MAE = $420",
      forecast: "+2.9%",
      prediction: "$67,890 USD",
      trend: "Adaptive Recovery",
      risk: "Moderate-Low",
      details: "Sequential boosting minimizing outlier residuals on volatile swings"
    },
    kmeans: {
      name: "K-Means Clustering",
      metric: "k = 4 Clusters",
      forecast: "Cluster #2",
      prediction: "Accumulation Zone",
      trend: "Institutional Flow",
      risk: "Balanced",
      details: "Investor profiling grouping high-volume holding behavior"
    }
  };

  const current = models[activeModel];

  return (
    <div className="w-full rounded-2xl bg-[#090D16] border border-slate-800 p-5 text-slate-100 shadow-2xl relative overflow-hidden font-mono text-xs select-none">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200 tracking-wider flex items-center gap-1.5">
              <span>CRYPTOSIGHT SAAS</span>
              <span className="text-[10px] text-emerald-400 font-normal px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-800">
                OFFLINE ML
              </span>
            </div>
            <div className="text-[10px] text-slate-400">BTC Historical Analytics & 7-Day Forecast</div>
          </div>
        </div>

        {/* Model Tabs */}
        <div className="flex items-center bg-slate-900/90 rounded-lg p-1 border border-slate-800">
          <button
            onClick={() => setActiveModel('rf')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
              activeModel === 'rf' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Random Forest
          </button>
          <button
            onClick={() => setActiveModel('ada')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
              activeModel === 'ada' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AdaBoost
          </button>
          <button
            onClick={() => setActiveModel('kmeans')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
              activeModel === 'kmeans' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            K-Means
          </button>
        </div>
      </div>

      {/* Main ML Visualization Canvas */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
        {/* Left 2 Cols: Interactive Prediction Chart */}
        <div className="lg:col-span-2 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Historical vs. Scikit-learn Forecast Horizon</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              {current.metric}
            </span>
          </div>

          {/* SVG Line Chart Simulator */}
          <div className="w-full h-36 relative my-1">
            <svg viewBox="0 0 400 140" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="forecastCone" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="35" x2="400" y2="35" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="70" x2="400" y2="70" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="105" x2="400" y2="105" stroke="#1E293B" strokeDasharray="3 3" />

              {/* Forecast Cone Area */}
              <polygon
                points="240,65 400,20 400,105 240,65"
                fill="url(#forecastCone)"
              />

              {/* Historical Area fill */}
              <polygon
                points="0,110 35,95 70,102 110,75 150,85 190,55 240,65 240,140 0,140"
                fill="url(#chartGrad)"
              />

              {/* Historical Solid Line */}
              <polyline
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,110 35,95 70,102 110,75 150,85 190,55 240,65"
              />

              {/* Forecast Dashed Line */}
              <polyline
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="240,65 280,50 320,42 360,48 400,32"
              />

              {/* Current Day Anchor Pin */}
              <circle cx="240" cy="65" r="4.5" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
              <text x="220" y="85" fill="#94A3B8" fontSize="9" fontFamily="monospace">Today</text>
              <text x="350" y="22" fill="#06B6D4" fontSize="9" fontWeight="bold" fontFamily="monospace">+7d Forecast</text>
            </svg>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <Database className="w-3 h-3 text-slate-400" />
              Dataset: CSV Historical Series (Cleaned)
            </span>
            <span className="text-cyan-400 font-medium">Zero API Dependency</span>
          </div>
        </div>

        {/* Right Col: Current Model Telemetry */}
        <div className="space-y-2.5 flex flex-col justify-between">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Target Prediction</div>
            <div className="text-xl font-extrabold text-slate-100">{current.prediction}</div>
            <div className="text-emerald-400 font-semibold text-[11px] mt-0.5">
              Trajectory: {current.forecast} ({current.trend})
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-[10px] uppercase">Volatility Tier</span>
              <span className="text-[10px] text-amber-400 font-bold px-1.5 py-0.2 rounded bg-amber-950/60 border border-amber-800/60">
                {current.risk}
              </span>
            </div>
            <div className="text-[11px] text-slate-300 leading-snug">
              {current.details}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-cyan-400" />
              Google Colab Pipeline
            </span>
            <span className="text-slate-300">Vite React Frontend</span>
          </div>
        </div>
      </div>
    </div>
  );
}
