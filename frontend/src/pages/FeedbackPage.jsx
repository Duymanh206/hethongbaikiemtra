import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900">Góp Ý & Báo Cáo Hệ Thống</h1>
            <p className="text-xs text-slate-400">Đóng góp ý kiến để hoàn thiện nền tảng khảo thí</p>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-sm text-emerald-900">Cảm ơn bạn đã gửi đóng góp!</h3>
            <p className="text-xs text-emerald-700">Ý kiến của bạn đã được ghi nhận vào hệ thống phản hồi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email liên hệ (tùy chọn)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@student.edu.vn"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nội dung góp ý / lỗi kỹ thuật</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={4}
                placeholder="Mô tả chi tiết ý kiến hoặc lỗi bạn gặp phải trong quá trình làm bài thi..."
                className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Gửi phản hồi</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

