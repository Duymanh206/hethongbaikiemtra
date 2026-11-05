import React, { useState } from 'react';
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
  Menu, 
  X,
  GraduationCap
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const { user, loginAsStudent, loginAsTeacher } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems = [
    { id: 'explore', label: 'Khám phá', icon: Compass },
    { id: 'create', label: 'Tạo quiz', icon: PlusCircle },
    { id: 'battle-lobby', label: 'Thi đấu', icon: Swords },
    { id: 'history', label: 'Lịch sử', icon: History },
    { id: 'analytics', label: 'Thống kê & Báo cáo', icon: GraduationCap },
    { id: 'guide', label: 'Hướng dẫn', icon: HelpCircle },
    { id: 'feedback', label: 'Góp ý', icon: MessageSquare }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
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
                        ? 'bg-blue-50 text-blue-700 shadow-xs' 
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

          {/* User Profile Area */}
          <div className="hidden sm:flex items-center gap-3">
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
                className="flex items-center gap-2.5 p-1.5 pl-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white shadow-xs transition-all"
              >
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {user?.fullName || 'Thí sinh'}
                  </div>
                  <div className="text-[10px] font-mono text-blue-600 leading-tight">
                    {user?.studentId || 'Chưa có MSSV'}
                  </div>
                </div>
                <img
                  src={user?.avatar}
                  alt={user?.fullName}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/20"
                />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs text-slate-400">Đăng nhập với tư cách</p>
                    <p className="text-sm font-bold text-slate-800">{user?.fullName}</p>
                    <p className="text-xs font-mono text-blue-600">MSSV: {user?.studentId}</p>
                  </div>
                  <button
                    onClick={() => {
                      loginAsStudent();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>Chuyển sang Sinh viên (dtc245200060)</span>
                    {user?.role === 'student' && <span className="text-blue-600 font-bold">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      loginAsTeacher();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>Chuyển sang Giảng viên (GV1042)</span>
                    {user?.role === 'teacher' && <span className="text-blue-600 font-bold">✓</span>}
                  </button>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => setUserDropdownOpen(false)}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
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
    </header>
  );
}

