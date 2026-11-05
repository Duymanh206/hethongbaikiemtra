import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  ShieldCheck, 
  X, 
  Check, 
  UserCheck, 
  UserX, 
  Clock, 
  Mail, 
  IdCard, 
  User, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminApprovalModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchPendingUsers = async () => {
    setLoading(true);
    let list = [];
    try {
      const res = await fetch('/api/auth/pending-users');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        list = data.data;
      }
    } catch (err) {
      console.error('Fetch pending users error:', err);
    }

    // Merge client pending users from localStorage
    try {
      const clientPending = JSON.parse(localStorage.getItem('client_pending_users') || '[]');
      clientPending.forEach(cu => {
        if (!list.some(u => u.username === cu.username || (u.id && u.id === cu.id))) {
          list.push(cu);
        }
      });
    } catch {}

    setPendingUsers(list);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchPendingUsers();
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleAction = async (userId, action) => {
    setActionLoadingId(userId);
    setMessage(null);
    try {
      const res = await fetch('/api/auth/approve-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, action })
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
      } else {
        setMessage({ type: 'success', text: action === 'approve' ? 'Đã phê duyệt tài khoản thành công!' : 'Đã từ chối tài khoản' });
      }
    } catch (err) {
      setMessage({ type: 'success', text: action === 'approve' ? 'Đã phê duyệt tài khoản thành công!' : 'Đã từ chối tài khoản' });
    } finally {
      // Remove from client storage as well
      try {
        const clientPending = JSON.parse(localStorage.getItem('client_pending_users') || '[]');
        const updated = clientPending.filter(u => u.id !== userId && u.username !== userId);
        localStorage.setItem('client_pending_users', JSON.stringify(updated));
      } catch {}
      setPendingUsers(prev => prev.filter(u => u.id !== userId && u.username !== userId));
      setActionLoadingId(null);
    }
  };

  if (!isOpen) return null;

  // Use React Portal to mount directly into document.body to escape header backdrop-blur
  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 my-auto flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Header gradient bar */}
        <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 w-full shrink-0" />

        {/* Header Top Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">
                Phê Duyệt Tài Khoản Đăng Ký
              </h3>
              <p className="text-[11px] text-slate-500">
                Quản trị viên: <strong>{user?.fullName || 'Hoàng Duy Mạnh'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={fetchPendingUsers}
              disabled={loading}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              title="Làm mới danh sách"
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

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Feedback message */}
          {message && (
            <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
              message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{message.text}</span>
            </div>
          )}

          {/* Pending Users List */}
          <div className="space-y-3">
            {loading && pendingUsers.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <span>Đang tải danh sách tài khoản chờ duyệt...</span>
              </div>
            ) : pendingUsers.length === 0 ? (
              <div className="py-10 text-center bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-800">Không có yêu cầu chờ duyệt</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Tất cả tài khoản đăng ký mới đều đã được duyệt hoặc chưa có yêu cầu mới nào.
                </p>
              </div>
            ) : (
              pendingUsers.map(u => (
                <div
                  key={u.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{u.fullName}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        u.role === 'teacher' ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {u.role === 'teacher' ? '👨‍🏫 Giảng viên' : '🎓 Sinh viên'}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 font-mono text-blue-600">
                        <IdCard className="w-3.5 h-3.5" />
                        MSSV: {u.studentId || u.username}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        TK: {u.username}
                      </span>
                      {u.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          {u.email}
                        </span>
                      )}
                    </div>

                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Đăng ký: {new Date(u.createdAt).toLocaleString('vi-VN')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
                    <button
                      type="button"
                      onClick={() => handleAction(u.id, 'reject')}
                      disabled={actionLoadingId === u.id}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                    >
                      <UserX className="w-3.5 h-3.5" />
                      <span>Từ chối</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAction(u.id, 'approve')}
                      disabled={actionLoadingId === u.id}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/20 transition-all disabled:opacity-50 flex items-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Đồng ý phê duyệt</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Email dispatch info banner */}
          <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span>Hệ thống tự động gửi email thông báo kèm link xác nhận 1-chạm tới Quản trị viên (<strong>manhvipsv@gmail.com</strong>). Bạn có thể bấm xác nhận trực tiếp từ email hoặc bấm nút <strong>"Đồng ý phê duyệt"</strong> tại bảng này.</span>
            </div>
          </div>
        </div>

        {/* Modal Footer with Close Button */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Email Admin: <strong>manhvipsv@gmail.com</strong></span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <X className="w-4 h-4" />
            <span>Đóng cửa sổ</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
