import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  Play, 
  MessageSquare, 
  CheckCircle2, 
  Lightbulb, 
  FileText,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function LessonDetailModal({
  isOpen,
  onClose,
  unit,
  gradeName,
  textbookName,
  onOpenFlashcard,
  onStartPractice
}) {
  const [activeTab, setActiveTab] = useState('vocabulary'); // 'vocabulary' | 'grammar' | 'patterns'

  if (!isOpen || !unit) return null;

  const playWordAudio = (wordText) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(wordText);
      u.lang = 'en-US';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-5 sm:p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/30 text-[11px] font-extrabold uppercase tracking-wider">
              {gradeName || 'Tiếng Anh Phổ Thông'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[11px] font-semibold">
              {textbookName || 'SGK Global Success'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {unit.title}
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">
            {unit.vietnameseTitle}
          </p>

          {/* Sub Navigation Tabs inside Modal */}
          <div className="flex items-center gap-2 mt-5 border-b border-white/15 pb-1">
            <button
              type="button"
              onClick={() => setActiveTab('vocabulary')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'vocabulary'
                  ? 'bg-white text-blue-800 shadow-md'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Từ Vựng ({unit.vocabulary?.length || 0})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('grammar')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'grammar'
                  ? 'bg-white text-blue-800 shadow-md'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>Ngữ Pháp & Mẹo Nhớ</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('patterns')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'patterns'
                  ? 'bg-white text-blue-800 shadow-md'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Mẫu Câu Giao Tiếp</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: VOCABULARY LIST */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <div>
                  <h4 className="font-extrabold text-sm text-blue-900">
                    Bảng Từ Vựng Trọng Tâm Bám Sát Bài Học
                  </h4>
                  <p className="text-xs text-blue-700/90 mt-0.5">
                    Kèm phiên âm IPA chuẩn quốc tế, loại từ và câu ví dụ minh họa song ngữ Anh - Việt
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenFlashcard && onOpenFlashcard(unit)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>🎴 MỞ FLASHCARD LẬT 2 MẶT & LUYỆN ĐỌC AI</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {unit.vocabulary?.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-base text-slate-900">{v.word}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase">
                              {v.type}
                            </span>
                          </div>
                          <div className="text-xs font-mono text-blue-600">{v.ipa}</div>
                        </div>

                        <button
                          type="button"
                          onClick={() => playWordAudio(v.word)}
                          className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all cursor-pointer shrink-0"
                          title="Phát âm từ này"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 text-xs font-bold text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200/70">
                        👉 {v.meaning}
                      </div>
                    </div>

                    {v.example && (
                      <div className="pt-2 border-t border-slate-100 text-[11px] space-y-0.5">
                        <p className="font-medium text-slate-700 italic">"{v.example}"</p>
                        {v.exampleVi && <p className="text-slate-500">"{v.exampleVi}"</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: GRAMMAR FOCUS */}
          {activeTab === 'grammar' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-3">
                <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm sm:text-base">
                  <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>Trọng Tâm Ngữ Pháp Bài Học (Grammar Focus)</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-indigo-200 text-xs sm:text-sm text-indigo-950 font-semibold leading-relaxed">
                  {unit.grammarFocus}
                </div>
              </div>

              {unit.tips && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                    <span>💡 Mẹo Học Nhanh & Tránh Lỗi Sai Phổ Biến</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {unit.tips}
                  </p>
                </div>
              )}

              {unit.overview && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mục tiêu bài học:</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {unit.overview}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SENTENCE PATTERNS */}
          {activeTab === 'patterns' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1">
                <h4 className="font-extrabold text-sm text-teal-900">
                  Mẫu Câu Giao Tiếp Thường Dùng (Everyday English)
                </h4>
                <p className="text-xs text-teal-700">
                  Thực hành các mẫu câu hỏi đáp quen thuộc trong bài học để tự tin nói tiếng Anh hằng ngày
                </p>
              </div>

              <div className="space-y-2.5">
                {unit.sentencePatterns?.map((pat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-slate-800">{pat}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => playWordAudio(pat.split('(')[0].replace(/[-–]/g, ''))}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
                      title="Nghe phát âm câu này"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Đã nắm vững kiến thức? Hãy làm bài trắc nghiệm để kiểm tra mức độ ghi nhớ!
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenFlashcard && onOpenFlashcard(unit)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-blue-300 text-blue-700 hover:bg-blue-50 font-bold text-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Học Flashcard</span>
            </button>

            <button
              type="button"
              onClick={() => onStartPractice && onStartPractice(unit)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            >
              <span>Luyện tập ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
