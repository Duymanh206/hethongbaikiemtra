import React, { useState, useEffect } from 'react';
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
  GraduationCap, 
  AlertCircle,
  RefreshCw,
  ExternalLink
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
    try {
      const res = await fetch('/api/auth/pending-users');
      const data = await res.json();
      if (data.success) {
        setPendingUsers(data.data || []);
      }
    } catch (err) {
      console.error('Fetch pending users error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchPendingUsers();
    }
  }, [isOpen]);

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
        setPendingUsers(prev => prev.filter(u => u.id !== userId));
      } else {
        setMessage({ type: 'error', text: data.message || 'Xử lý thất bại' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Lỗi kết nối máy chủ' });
    } finally {
      setActionLoadingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Header gradient bar */}
        <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 w-full" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header info */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Phê Duyệt Tài Khoản Đăng Ký
                </h3>
                <p className="text-xs text-slate-500">
                  Quản trị viên: <strong>{user?.fullName || 'Hoàng Duy Mạnh'}</strong> (MSSV: {user?.studentId || 'dtc245200060'})
                </p>
              </div>
            </div>

            <button
              onClick={fetchPendingUsers}
              disabled={loading}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all text-xs font-bold flex items-center gap-1.5"
              title="Làm mới danh sách"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Làm mới</span>
            </button>
          </div>

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
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {loading && pendingUsers.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <span>Đang tải danh sách tài khoản chờ duyệt...</span>
              </div>
            ) : pendingUsers.length === 0 ? (
              <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-2">
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
                      onClick={() => handleAction(u.id, 'reject')}
                      disabled={actionLoadingId === u.id}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 transition-all disabled:opacity-50 flex items-center gap-1.5"
                    >
                      <UserX className="w-3.5 h-3.5" />
                      <span>Từ chối</span>
                    </button>

                    <button
                      onClick={() => handleAction(u.id, 'approve')}
                      disabled={actionLoadingId === u.id}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/20 transition-all disabled:opacity-50 flex items-center gap-1.5 active:scale-95"
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
              <span>Hệ thống tự động gửi email thông báo kèm link xác nhận 1-chạm tới Quản trị viên (<strong>dtc245200060@student.edu.vn</strong>). Bạn có thể bấm xác nhận trực tiếp từ email hoặc bấm nút <strong>"Đồng ý phê duyệt"</strong> tại bảng này.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
