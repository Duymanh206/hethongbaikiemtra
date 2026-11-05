import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Download, 
  FileSpreadsheet, 
  Printer, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export default function AnalyticsPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/quizzes')
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data.length > 0) {
          setQuizzes(d.data);
          setSelectedQuizId(d.data[0].id);
        }
      });
  }, []);

  useEffect(() => {
    if (!selectedQuizId) return;
    setLoading(true);
    fetch(`/api/analytics/${selectedQuizId}`)
      .then(r => r.json())
      .then(d => {
        if (d.success) setAnalytics(d.data);
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, [selectedQuizId]);

  const handleExportExcel = () => {
    if (!selectedQuizId) return;
    window.open(`/api/analytics/${selectedQuizId}/export-excel`, '_blank');
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Khảo Thí & Đảm Bảo Chất Lượng
            </span>
            <h1 className="text-2xl font-black text-slate-900 mt-0.5">
              Thống Kê Phổ Điểm & Báo Cáo Khảo Thí
            </h1>
          </div>

          {/* Action buttons: Excel & PDF */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportExcel}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Xuất Excel (.xlsx)</span>
            </button>

            <button
              onClick={handlePrintPdf}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>In báo cáo / PDF</span>
            </button>
          </div>
        </div>

        {/* Quiz Selector */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Chọn đề thi:</span>
          <select
            value={selectedQuizId}
            onChange={(e) => setSelectedQuizId(e.target.value)}
            className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none"
          >
            {quizzes.map(q => (
              <option key={q.id} value={q.id}>{q.title}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-slate-500 mt-3">Đang tính toán ma trận phổ điểm...</p>
          </div>
        ) : analytics ? (
          <div className="space-y-6">
            
            {/* 4 Summary Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Tổng lượt thi</span>
                <div className="text-2xl font-black text-slate-800 mt-1 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>{analytics.totalAttempts}</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Điểm trung bình</span>
                <div className="text-2xl font-black text-blue-600 mt-1 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>{analytics.avgScore} <span className="text-xs text-slate-400 font-normal">/ 10</span></span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Tỷ lệ đạt (&gt;= 5.0)</span>
                <div className="text-2xl font-black text-emerald-600 mt-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{analytics.passRate}%</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Điểm cao nhất</span>
                <div className="text-2xl font-black text-amber-500 mt-1">
                  {analytics.highestScore?.toFixed(1)} / 10
                </div>
              </div>
            </div>

            {/* Score Distribution Chart Bar */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Phổ Điểm Thí Sinh (Khoảng Điểm Hệ 10)
                </h3>
              </div>

              <div className="grid grid-cols-5 gap-3 pt-6 items-end min-h-[180px]">
                {Object.entries(analytics.scoreDistribution || {}).map(([range, count], idx) => {
                  const maxCount = Math.max(...Object.values(analytics.scoreDistribution || {}), 1);
                  const heightPercent = Math.max(15, Math.round((count / maxCount) * 100));

                  return (
                    <div key={range} className="flex flex-col items-center gap-2">
                      <span className="text-xs font-bold text-slate-700">{count} SV</span>
                      <div className="w-full bg-slate-100 rounded-t-xl overflow-hidden flex items-end h-32">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-xl transition-all duration-500 ${
                            idx === 4 ? 'bg-emerald-500' : idx === 3 ? 'bg-blue-600' : idx === 2 ? 'bg-indigo-500' : 'bg-rose-400'
                          }`}
                        ></div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 whitespace-nowrap">
                        {range} đ
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question Error Rate Table (Highest Error Questions First) */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                  <h3 className="font-bold text-base text-slate-900">
                    Phân Tích Tỷ Lệ Trả Lời Sai Ở Từng Câu Hỏi
                  </h3>
                </div>
                <span className="text-xs text-slate-400">Xếp theo độ khó giảm dần</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[10px]">
                      <th className="py-2.5 px-3">Thứ tự</th>
                      <th className="py-2.5 px-3">Loại câu</th>
                      <th className="py-2.5 px-3">Nội dung câu hỏi</th>
                      <th className="py-2.5 px-3 text-right">Lượt làm</th>
                      <th className="py-2.5 px-3 text-right">Tỷ lệ sai (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {analytics.questionErrorRates?.map(q => {
                      const isHighError = q.errorRate >= 40;
                      return (
                        <tr key={q.questionId} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-3 font-bold text-blue-700">Câu {q.orderIndex}</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-[10px]">
                              {q.type}
                            </span>
                          </td>
                          <td className="py-3 px-3 max-w-md font-medium text-slate-800 line-clamp-2">
                            {q.content}
                          </td>
                          <td className="py-3 px-3 text-right font-mono text-slate-600">
                            {q.totalAnswered}
                          </td>
                          <td className="py-3 px-3 text-right font-bold">
                            <span className={`px-2 py-0.5 rounded-full ${
                              isHighError ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              {q.errorRate}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ) : null}

      </div>
    </div>
  );
}

