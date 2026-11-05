import React from 'react';
import { Send, Clock, User, ShieldAlert } from 'lucide-react';

export default function ExamHeader({
  candidate,
  timeRemaining,
  totalTime,
  onSubmitClick,
  violationsCount = 0,
  isAntiCheatActive = false
}) {
  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    if (seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining <= 180; // less than 3 minutes

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* 1.1 Red-white diagonal warning border at the very top edge */}
      <div className="exam-warning-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Avatar, Candidate Name, Student ID */}
          <div className="flex items-center gap-3 min-w-[200px]">
            <div className="relative">
              <img
                src={candidate?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt={candidate?.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-blue-600 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 leading-tight">
                {candidate?.name || 'Nguyễn Văn An'}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  {candidate?.studentId || 'dtc245200060'}
                </span>
                {isAntiCheatActive && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    violationsCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    <ShieldAlert className="w-3 h-3" />
                    Proctoring {violationsCount > 0 ? `(${violationsCount} vi phạm)` : 'ON'}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Center: Digital Timer (LED/Digital style, large MM:SS, dark background) */}
          <div className="flex flex-col items-center">
            <div className={`px-5 py-1.5 rounded-xl border-2 flex items-center gap-3 transition-colors ${
              isLowTime 
                ? 'bg-rose-950 border-rose-600 shadow-lg shadow-rose-900/30' 
                : 'bg-slate-950 border-slate-700 shadow-lg shadow-slate-900/40'
            }`}>
              <Clock className={`w-5 h-5 animate-spin ${isLowTime ? 'text-rose-400' : 'text-emerald-400'}`} style={{ animationDuration: '6s' }} />
              <div className={`text-2xl sm:text-3xl font-digital font-extrabold tracking-widest ${
                isLowTime ? 'text-rose-400 animate-pulse' : 'text-emerald-400'
              }`}>
                {formatTime(timeRemaining)}
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
              Thời gian làm bài còn lại
            </span>
          </div>

          {/* Right: Prominent green "NỘP BÀI" button */}
          <div className="flex items-center justify-end min-w-[160px]">
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-98 transition-all"
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

