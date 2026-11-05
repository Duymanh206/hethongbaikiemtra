import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  Inbox, 
  X, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Mail, 
  User, 
  Tag, 
  RefreshCw,
  Search,
  Filter,
  Check,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminFeedbackModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [actionLoadingId, setActionLoadingId] = useState(null);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/feedback/all');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setFeedbacks(data.data);
      }
    } catch (err) {
      console.error('Fetch feedback error:', err);
      // Client fallback from localStorage
      try {
        const clientFb = JSON.parse(localStorage.getItem('client_feedbacks') || '[]');
        setFeedbacks(clientFb);
      } catch {}
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchFeedbacks();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleUpdateStatus = async (id, status) => {
    setActionLoadingId(id);
    try {
      await fetch(`/api/feedback/${id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, status } : f));
    } catch (err) {
      console.error('Update status error:', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa thư góp ý này?')) return;
    setActionLoadingId(id);
    try {
      await fetch(`/api/feedback/${id}`, { method: 'DELETE' });
      setFeedbacks(prev => prev.filter(f => f.id !== id));
    } catch (err) {
      console.error('Delete feedback error:', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  if (!isOpen) return null;

  const filteredFeedbacks = feedbacks.filter(f => {
    const matchesSearch = 
      (f.name && f.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (f.email && f.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (f.title && f.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (f.content && f.content.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'ALL' || f.category === selectedCategory;
    const matchesStatus = selectedStatus === 'ALL' || f.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const unreadCount = feedbacks.filter(f => f.status === 'unread').length;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 my-auto flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Top gradient */}
        <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 w-full shrink-0" />

        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  Hòm Thư Góp Ý & Báo Cáo
                </h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black">
                    {unreadCount} mới
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500">
                Quản trị viên: <strong>{user?.fullName || 'Hoàng Duy Mạnh'}</strong> (<code>dtc245200060</code>)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={fetchFeedbacks}
              disabled={loading}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              title="Làm mới hòm thư"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Làm mới</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Đóng cửa sổ (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo người gửi, email, tiêu đề, nội dung..."
              className="w-full text-xs pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 outline-none focus:border-blue-500 shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs py-2 px-3 rounded-xl bg-white border border-slate-200 outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="ALL">Mọi danh mục</option>
              <option value="Góp ý chung">Góp ý chung</option>
              <option value="Báo cáo lỗi câu hỏi">Báo cáo lỗi câu hỏi</option>
              <option value="Đề xuất tính năng mới">Đề xuất tính năng</option>
              <option value="Giao diện & Trải nghiệm">Giao diện & Trải nghiệm</option>
              <option value="Khác">Khác</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-xs py-2 px-3 rounded-xl bg-white border border-slate-200 outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="ALL">Mọi trạng thái</option>
              <option value="unread">Chưa đọc</option>
              <option value="read">Đã xem</option>
              <option value="resolved">Đã xử lý</option>
            </select>
          </div>
        </div>

        {/* Messages List */}
        <div className="p-6 space-y-3 overflow-y-auto flex-1">
          {loading && feedbacks.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              <div className="w-6 h-6 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <span>Đang tải thư góp ý...</span>
            </div>
          ) : filteredFeedbacks.length === 0 ? (
            <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Hòm thư sạch sẽ!</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Hiện tại không có thư góp ý nào phù hợp với bộ lọc tìm kiếm của bạn.
              </p>
            </div>
          ) : (
            filteredFeedbacks.map(f => {
              const isUnread = f.status === 'unread';
              const isResolved = f.status === 'resolved';

              return (
                <div
                  key={f.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isUnread 
                      ? 'bg-amber-50/40 border-amber-200 shadow-xs ring-1 ring-amber-300/40' 
                      : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className={`w-2.5 h-2.5 rounded-full ${isUnread ? 'bg-amber-500 animate-pulse' : isResolved ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      <span className="text-sm font-bold text-slate-900">{f.title || 'Thư góp ý'}</span>

                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {f.category}
                      </span>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isUnread ? 'bg-amber-100 text-amber-800' : isResolved ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {isUnread ? 'Chưa đọc' : isResolved ? 'Đã xử lý' : 'Đã xem'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{new Date(f.createdAt).toLocaleString('vi-VN')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-100 mb-3 whitespace-pre-wrap">
                    {f.content}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {f.name}
                      </span>
                      {f.email && (
                        <a 
                          href={`mailto:${f.email}?subject=Phản hồi góp ý từ Quản trị viên Quizz PRO`}
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {f.email}
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {isUnread ? (
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(f.id, 'read')}
                          disabled={actionLoadingId === f.id}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 border border-blue-200 transition-all cursor-pointer"
                        >
                          Đánh dấu đã xem
                        </button>
                      ) : !isResolved ? (
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(f.id, 'resolved')}
                          disabled={actionLoadingId === f.id}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-600 hover:bg-emerald-50 border border-emerald-200 transition-all cursor-pointer flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã xử lý xong</span>
                        </button>
                      ) : null}

                      <button
                        type="button"
                        onClick={() => handleDelete(f.id)}
                        disabled={actionLoadingId === f.id}
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-all cursor-pointer"
                        title="Xóa thư này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Email Admin nhận thông báo: <strong>manhvipsv@gmail.com</strong></span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <X className="w-4 h-4" />
            <span>Đóng hòm thư</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

