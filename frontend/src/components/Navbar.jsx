import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  Compass, 
  PlusCircle, 
  Swords, 
  History, 
  HelpCircle, 
  MessageSquare, 
  User, 
  LogOut, 
  LogIn,
  UserPlus,
  Menu, 
  X,
  GraduationCap,
  ShieldCheck,
  Bell
} from 'lucide-react';
import AdminApprovalModal from './AdminApprovalModal';

export default function Navbar({ activePage, setActivePage }) {
  const { 
    user, 
    logout, 
    openLogin, 
    openRegister, 
    loginAsStudent, 
    loginAsTeacher 
  } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [approvalModalOpen, setApprovalModalOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);

  const isAdmin = user?.studentId === 'dtc245200060' || user?.username === 'dtc245200060' || user?.isAdmin;

  // Poll for pending users count if Admin
  useEffect(() => {
    if (!isAdmin) return;
    const fetchPending = () => {
      fetch('/api/auth/pending-users')
        .then(r => r.json())
        .then(d => {
          let count = (d.success && d.pendingCount) ? d.pendingCount : 0;
          try {
            const clientPending = JSON.parse(localStorage.getItem('client_pending_users') || '[]');
            count = Math.max(count, clientPending.length);
          } catch {}
          setPendingCount(count);
        })
        .catch(() => {
          try {
            const clientPending = JSON.parse(localStorage.getItem('client_pending_users') || '[]');
            setPendingCount(clientPending.length);
          } catch {}
        });
    };
    fetchPending();
    const interval = setInterval(fetchPending, 5000);
    return () => clearInterval(interval);
  }, [isAdmin]);

  const navItems = [
    { id: 'explore', label: 'Khám phá', icon: Compass },
    { id: 'create', label: 'Tạo quiz', icon: PlusCircle },
    { id: 'battle-lobby', label: 'Thi đấu', icon: Swords },
    { id: 'history', label: 'Lịch sử', icon: History },
    { id: 'analytics', label: 'Thống kê & Báo cáo', icon: GraduationCap },
    { id: 'guide', label: 'Hướng dẫn', icon: HelpCircle },
    { id: 'feedback', label: 'Góp ý', icon: MessageSquare }
  ];

  const handleLogout = async () => {
    setUserDropdownOpen(false);
    await logout();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActivePage('explore')} 
              className="flex items-center gap-2.5 group transition-transform active:scale-95"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Quizz<span className="text-blue-600">.</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-1">
                  Online Battle Pro
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 shadow-2xs' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User Profile Area (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Admin Approval Button (Hoàng Duy Mạnh) */}
            {isAdmin && (
              <button
                onClick={() => setApprovalModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 border border-amber-300 text-xs font-bold transition-all shadow-xs"
                title="Phê duyệt tài khoản đăng ký mới"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Duyệt đăng ký</span>
                {pendingCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] flex items-center justify-center font-black animate-pulse">
                    {pendingCount}
                  </span>
                )}
              </button>
            )}

            {user ? (
              <>
                <button
                  onClick={() => setActivePage('history')}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Quiz của tôi
                </button>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2.5 p-1.5 pl-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white shadow-2xs transition-all active:scale-95"
                  >
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        {user.fullName || 'Thí sinh'}
                      </div>
                      <div className="text-[10px] font-mono text-blue-600 leading-tight">
                        {user.studentId || user.username || 'MSSV'}
                      </div>
                    </div>
                    <img
                      src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                      alt={user.fullName}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/20"
                    />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                      <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                            isAdmin 
                              ? 'bg-amber-100 text-amber-900' 
                              : user.role === 'teacher' 
                                ? 'bg-indigo-100 text-indigo-800' 
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {isAdmin ? '👑 QUẢN TRỊ VIÊN' : user.role === 'teacher' ? 'GIẢNG VIÊN' : 'SINH VIÊN'}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{user.fullName}</p>
                        <p className="text-xs font-mono text-blue-600">ID/MSSV: {user.studentId || user.username}</p>
                        {user.email && <p className="text-[11px] text-slate-400 truncate">{user.email}</p>}
                      </div>

                      {/* Admin link inside dropdown */}
                      {isAdmin && (
                        <div className="py-1 border-b border-slate-100">
                          <button
                            onClick={() => {
                              setUserDropdownOpen(false);
                              setApprovalModalOpen(true);
                            }}
                            className="w-full text-left px-4 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                              <span>Duyệt tài khoản mới</span>
                            </div>
                            {pendingCount > 0 && (
                              <span className="px-1.5 py-0.5 rounded-full bg-amber-600 text-white text-[10px]">
                                {pendingCount}
                              </span>
                            )}
                          </button>
                        </div>
                      )}

                      <div className="py-1">
                        <button
                          onClick={() => {
                            loginAsStudent();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                            <span>Sinh viên (dtc245200060)</span>
                          </div>
                          {user.role === 'student' && <span className="text-blue-600 font-bold">✓</span>}
                        </button>
                        
                        <button
                          onClick={() => {
                            loginAsTeacher();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Giảng viên (TS. Minh)</span>
                          </div>
                          {user.role === 'teacher' && <span className="text-blue-600 font-bold">✓</span>}
                        </button>
                      </div>

                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Đăng xuất tài khoản</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={openLogin}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"
                >
                  <LogIn className="w-3.5 h-3.5 text-blue-600" />
                  <span>Đăng nhập</span>
                </button>

                <button
                  onClick={openRegister}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs shadow-blue-500/20 transition-all active:scale-95"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Đăng ký</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => setApprovalModalOpen(true)}
                className="p-1.5 rounded-lg bg-amber-500/20 text-amber-700 border border-amber-300 text-xs font-bold flex items-center gap-1"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                {pendingCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-amber-600 text-white text-[9px] flex items-center justify-center font-bold">
                    {pendingCount}
                  </span>
                )}
              </button>
            )}

            {!user && (
              <button
                onClick={openLogin}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold"
              >
                Đăng nhập
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {user ? (
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 mb-2">
              <div className="flex items-center gap-2.5">
                <img
                  src={user.avatar}
                  alt={user.fullName}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">{user.fullName}</div>
                  <div className="text-[10px] text-blue-600 font-mono">MSSV: {user.studentId}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="p-2 rounded-lg text-red-600 hover:bg-red-50 text-xs font-bold flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Thoát</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              <button
                onClick={() => {
                  openLogin();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-600" />
                <span>Đăng nhập</span>
              </button>
              <button
                onClick={() => {
                  openRegister();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Đăng ký</span>
              </button>
            </div>
          )}

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Admin Approval Modal */}
      <AdminApprovalModal
        isOpen={approvalModalOpen}
        onClose={() => setApprovalModalOpen(false)}
      />
    </header>
  );
}
