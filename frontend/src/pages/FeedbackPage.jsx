import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Inbox, 
  Sparkles, 
  Tag, 
  Mail, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AdminFeedbackModal from '../components/AdminFeedbackModal';

export default function FeedbackPage() {
  const { user } = useAuth();
  const isAdmin = user?.studentId === 'dtc245200060' || user?.username === 'dtc245200060';

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Góp ý chung');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setErrorMessage('');

    const feedbackPayload = {
      name: user?.fullName || 'Thí sinh',
      email: email.trim(),
      category,
      title: title.trim() || 'Góp ý hệ thống',
      content: content.trim()
    };

    // Save client backup
    try {
      const clientFb = JSON.parse(localStorage.getItem('client_feedbacks') || '[]');
      clientFb.unshift({
        ...feedbackPayload,
        id: `fb_local_${Date.now()}`,
        status: 'unread',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('client_feedbacks', JSON.stringify(clientFb));
    } catch {}

    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackPayload)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Không thể gửi phản hồi');
      }
    } catch (err) {
      // Local success fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Admin Quick Access Banner */}
        {isAdmin && (
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-5 text-white shadow-lg shadow-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                <Inbox className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-black text-sm">Hòm Thư Quản Trị Viên (Hoàng Duy Mạnh)</h3>
                <p className="text-xs text-amber-100">
                  Xem và xử lý tất cả góp ý, báo lỗi từ các bạn thí sinh và giảng viên.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAdminModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white text-amber-900 font-extrabold text-xs shadow-md hover:bg-amber-50 active:scale-95 transition-all cursor-pointer whitespace-nowrap self-end sm:self-auto"
            >
              Mở Hòm Thư Góp Ý
            </button>
          </div>
        )}

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900">Góp Ý & Báo Cáo Hệ Thống</h1>
              <p className="text-xs text-slate-400">Đóng góp ý kiến để hoàn thiện nền tảng khảo thí Quizz PRO</p>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-red-50 text-red-700 border border-red-200 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base text-emerald-900">Cảm ơn bạn đã gửi đóng góp!</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                Ý kiến của bạn đã được ghi nhận vào <strong>Hòm thư của Quản trị viên (Hoàng Duy Mạnh)</strong> để xem xét và xử lý kịp thời.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setContent('');
                  setTitle('');
                }}
                className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
              >
                Gửi thêm ý kiến khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Danh mục góp ý</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Góp ý chung',
                    'Báo cáo lỗi câu hỏi',
                    'Đề xuất tính năng mới',
                    'Giao diện & Trải nghiệm',
                    'Khác'
                  ].map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        category === cat
                          ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tiêu đề ý kiến / nội dung vắn tắt</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="VD: Đề xuất thêm tính năng xem lại các câu đã chọn sai"
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email của bạn (để Admin phản hồi)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="manhvipsv@gmail.com hoặc email của bạn"
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nội dung chi tiết <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={5}
                  placeholder="Mô tả cụ thể ý kiến hoặc lỗi bạn gặp phải..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 font-medium leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Đang gửi phản hồi...' : 'Gửi Ý Kiến Tới Quản Trị Viên'}</span>
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Admin Feedback Mailbox Modal */}
      <AdminFeedbackModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

    </div>
  );
}
