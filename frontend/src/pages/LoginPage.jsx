import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  LogIn, 
  UserPlus, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  Award,
  IdCard,
  Mail,
  GraduationCap,
  Layers,
  Swords
} from 'lucide-react';

export default function LoginPage() {
  const { login, register } = useAuth();

  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'

  // URL Invite PIN if present
  const [invitedPin, setInvitedPin] = useState('');

  // Login form state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register form state
  const [regFullName, setRegFullName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regStudentId, setRegStudentId] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regRole, setRegRole] = useState('student');
  const [showRegPassword, setShowRegPassword] = useState(false);

  // Status
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [pendingNotice, setPendingNotice] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pin = params.get('pin') || params.get('battle') || params.get('room');
    if (pin) {
      setInvitedPin(pin);
    }
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setPendingNotice(null);

    if (!loginUsername.trim()) {
      setErrorMessage('Vui lòng nhập Tên đăng nhập hoặc Mã sinh viên');
      return;
    }
    if (!loginPassword) {
      setErrorMessage('Vui lòng nhập mật khẩu');
      return;
    }

    setLoading(true);
    const result = await login(loginUsername, loginPassword);
    setLoading(false);

    if (result.success) {
      setSuccessMessage(result.message || 'Đăng nhập thành công! Đang chuyển hướng...');
    } else {
      if (result.pendingApproval) {
        setPendingNotice(result.message);
      } else {
        setErrorMessage(result.message || 'Đăng nhập không thành công. Vui lòng kiểm tra lại');
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setPendingNotice(null);

    if (!regFullName.trim()) {
      setErrorMessage('Vui lòng nhập Họ và tên');
      return;
    }
    if (!regUsername.trim()) {
      setErrorMessage('Vui lòng nhập Tên tài khoản');
      return;
    }
    if (!regPassword || regPassword.length < 3) {
      setErrorMessage('Mật khẩu phải có ít nhất 3 ký tự');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    const result = await register({
      fullName: regFullName,
      username: regUsername,
      studentId: regStudentId || regUsername,
      email: regEmail,
      password: regPassword,
      role: regRole
    });
    setLoading(false);

    if (result.success) {
      if (result.pendingApproval) {
        setPendingNotice(result.message);
        // Reset form
        setRegFullName('');
        setRegUsername('');
        setRegStudentId('');
        setRegEmail('');
        setRegPassword('');
        setRegConfirmPassword('');
      } else {
        setSuccessMessage('Đăng ký tài khoản thành công!');
      }
    } else {
      setErrorMessage(result.message || 'Đăng ký không thành công');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      
      {/* Top Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              Quizz<span className="text-blue-400">.</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Online Battle Pro
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Cổng Thi Trắc Nghiệm Trực Tuyến Chuẩn Hóa</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Hệ thống giám sát thi bảo mật</span>
        </div>
      </header>

      {/* Main Authentication Section */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Intro & Features */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {invitedPin && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-bold animate-pulse">
                <Swords className="w-4 h-4" />
                <span>Bạn có lời mời vào Phòng Thi Đấu PIN #{invitedPin}! Hãy đăng nhập để tham gia.</span>
              </div>
            )}

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Nền Tảng Thi Độc Quyền Dành Cho Sinh Viên & Giảng Viên</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Đăng nhập để vào phòng làm bài & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">thi đấu trắc nghiệm</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Vui lòng nhập tài khoản hoặc mã sinh viên để truy cập ngân hàng đề thi, làm bài kiểm tra 15 phút, giữa kỳ và tham gia phòng thi đấu trực tiếp.
            </p>

            {/* System highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <BookOpen className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-0.5">Đề thi phong phú</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Đúng/sai, kéo thả phân loại, trắc nghiệm đơn</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-0.5">Giám sát bảo mật</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Toàn màn hình, cảnh báo chuyển tab gian lận</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-0.5">Chấm điểm tức thì</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Phân tích ma trận kết quả & bảng xếp hạng</p>
              </div>
            </div>

            {/* System Info Badge */}
            <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/20 text-xs text-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Hệ thống Khảo thí & Thi đấu Trực tuyến Chuẩn hóa</span>
              </div>
              <span className="text-[10px] text-blue-300/70 hidden sm:inline">Phê duyệt bởi Quản trị viên</span>
            </div>
          </div>

          {/* Right Column: Auth Card */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/40 border border-slate-100 overflow-hidden text-slate-800">
              
              <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 w-full" />

              <div className="p-6 sm:p-8">
                
                {/* Tab Switcher */}
                <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6 border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('login');
                      setErrorMessage('');
                      setSuccessMessage('');
                    }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'login'
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Đăng nhập</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('register');
                      setErrorMessage('');
                      setSuccessMessage('');
                    }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'register'
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Đăng ký mới</span>
                  </button>
                </div>

                {/* Pending Notice Alert */}
                {pendingNotice && (
                  <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-800">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Đang chờ Quản trị viên phê duyệt:</span>
                    </div>
                    <p className="leading-relaxed text-[11px]">{pendingNotice}</p>
                    <p className="text-[10px] text-amber-700 pt-1 italic">
                      * Quản trị viên (Hoàng Duy Mạnh) đã nhận được email thông báo và sẽ bấm duyệt để bạn có thể vào làm bài.
                    </p>
                  </div>
                )}

                {/* Feedback Alerts */}
                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span className="font-medium">{errorMessage}</span>
                  </div>
                )}

                {successMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="font-semibold">{successMessage}</span>
                  </div>
                )}

                {/* TAB 1: LOGIN */}
                {activeTab === 'login' && (
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tên đăng nhập / Mã sinh viên
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={loginUsername}
                          onChange={(e) => setLoginUsername(e.target.value)}
                          placeholder="Nhập mã sinh viên hoặc tên đăng nhập"
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 font-medium placeholder:text-slate-400 transition-all bg-slate-50/50 hover:bg-white"
                          required
                          autoFocus
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Mật khẩu
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          type={showLoginPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Nhập mật khẩu"
                          className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 font-medium placeholder:text-slate-400 transition-all bg-slate-50/50 hover:bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                        >
                          {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <LogIn className="w-4 h-4" />
                          <span>Đăng Nhập Vào Hệ Thống</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* TAB 2: REGISTER */}
                {activeTab === 'register' && (
                  <form onSubmit={handleRegisterSubmit} className="space-y-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-800 flex items-start gap-1.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Sau khi bạn gửi đăng ký, hệ thống sẽ gửi email tới Quản trị viên Hoàng Duy Mạnh để xét duyệt kích hoạt tài khoản.</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Họ và tên thí sinh / Giảng viên
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={regFullName}
                          onChange={(e) => setRegFullName(e.target.value)}
                          placeholder="VD: Nguyễn Văn An"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tên tài khoản
                        </label>
                        <input
                          type="text"
                          value={regUsername}
                          onChange={(e) => setRegUsername(e.target.value)}
                          placeholder="VD: an_nguyen"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mã sinh viên (MSSV)
                        </label>
                        <input
                          type="text"
                          value={regStudentId}
                          onChange={(e) => setRegStudentId(e.target.value)}
                          placeholder="VD: 245200001"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email nhận thông báo
                      </label>
                      <input
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="VD: an.nguyen@student.edu.vn"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mật khẩu
                        </label>
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Tối thiểu 3 ký tự"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nhập lại mật khẩu
                        </label>
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          value={regConfirmPassword}
                          onChange={(e) => setRegConfirmPassword(e.target.value)}
                          placeholder="Khớp với mật khẩu"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Vai trò tham gia
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setRegRole('student')}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                            regRole === 'student'
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          🎓 Sinh viên
                        </button>
                        <button
                          type="button"
                          onClick={() => setRegRole('teacher')}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                            regRole === 'teacher'
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          👨‍🏫 Giảng viên
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 active:scale-98 transition-all disabled:opacity-50 mt-3"
                    >
                      {loading ? 'Đang gửi yêu cầu...' : 'Gửi Yêu Cầu Đăng Ký & Chờ Phê Duyệt'}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-white/10 text-center text-xs text-slate-500 backdrop-blur-md">
        © 2026 Quizz. Online Battle Pro — Hệ Thống Khảo Thí & Thi Đấu Trắc Nghiệm Trực Tuyến. Bản quyền thuộc về Hoàng Duy Mạnh.
      </footer>

    </div>
  );
}
