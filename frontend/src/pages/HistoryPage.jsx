import React, { useState, useEffect } from 'react';
import { History, Clock, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

export default function HistoryPage({ onReviewAttempt }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/attempts/history/all')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setHistory(data.data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hồ sơ cá nhân</span>
            <h1 className="text-2xl font-black text-slate-900 mt-0.5">Lịch Sử Làm Bài & Khảo Thí</h1>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Tổng số lượt: {history.length}
          </span>
        </div>

        {loading ? (
          <div className="py-16 text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-slate-500 mt-2">Đang tải lịch sử thi...</p>
          </div>
        ) : history.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <History className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <h3 className="font-bold text-slate-700 text-sm">Chưa có lịch sử làm bài</h3>
            <p className="text-xs text-slate-400 mt-1">Các bài kiểm tra bạn hoàn thành sẽ xuất hiện tại đây.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map(att => {
              const isPassed = att.score >= 5.0;
              return (
                <div
                  key={att.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 transition-all"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {att.quizCategory || 'Đề thi trắc nghiệm'}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900">
                      {att.quizTitle}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                      <span>Nộp lúc: {new Date(att.submittedAt).toLocaleString('vi-VN')}</span>
                      <span>Thời lượng: {Math.floor((att.durationSeconds || 0) / 60)} phút</span>
                      {att.violationsCount > 0 && (
                        <span className="text-amber-600 font-semibold">
                          ⚠️ {att.violationsCount} vi phạm
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0">
                    <div className="text-right">
                      <div className={`text-xl font-black ${isPassed ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {att.score?.toFixed(1)} <span className="text-xs text-slate-400 font-bold">/ 10</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        Đúng {att.correctCount}/{att.totalCount} ({att.percentage}%)
                      </div>
                    </div>

                    <button
                      onClick={() => onReviewAttempt(att.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
                    >
                      <span>Xem lại</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

