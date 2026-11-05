import React from 'react';
import { Send, Clock, ShieldAlert } from 'lucide-react';

export default function ExamHeader({
  candidate,
  timeRemaining,
  totalTime,
  onSubmitClick,
  violationsCount = 0,
  isAntiCheatActive = false
}) {
  const formatTime = (seconds) => {
    if (seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining <= 180;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200">
      {/* Red-white diagonal warning border at the very top edge */}
      <div className="exam-warning-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Avatar, Candidate Name (Hoàng Duy Mạnh), Student ID (dtc245200060) */}
          <div className="flex items-center gap-3 min-w-[200px]">
            <div className="relative">
              <img
                src={candidate?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt={candidate?.name}
                className="w-10 h-10 rounded-full object-cover border border-blue-400 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 leading-tight">
                {candidate?.name || 'Hoàng Duy Mạnh'}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {candidate?.studentId || 'dtc245200060'}
                </span>
                {isAntiCheatActive && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    violationsCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    <ShieldAlert className="w-3 h-3" />
                    Proctoring ON {violationsCount > 0 && `(${violationsCount})`}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Center: Digital Timer (Matching user photos: dark blue LED clock with blue LED numbers) */}
          <div className="flex flex-col items-center">
            <div className="px-5 py-1 rounded-xl bg-[#08182b] border-2 border-[#1e4976] shadow-md flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <div className="text-2xl sm:text-3xl font-digital font-black tracking-widest text-cyan-300">
                {formatTime(timeRemaining)}
              </div>
            </div>
            <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
              Thời gian làm bài còn lại
            </span>
          </div>

          {/* Right: Prominent green "NỘP BÀI" button */}
          <div className="flex items-center justify-end min-w-[160px]">
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/25 hover:scale-[1.02] active:scale-98 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>NỘP BÀI</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
