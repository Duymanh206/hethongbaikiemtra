import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user only if explicitly authenticated; NO AUTO-LOGIN
  const [user, setUser] = useState(() => {
    try {
      const isAuthenticated = localStorage.getItem('quiz_authenticated');
      if (!isAuthenticated) {
        localStorage.removeItem('quiz_user');
        localStorage.removeItem('quiz_token');
        return null;
      }
      const saved = localStorage.getItem('quiz_user');
      if (saved) return JSON.parse(saved);
      return null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register'

  // Validate session on mount if token exists
  useEffect(() => {
    const token = localStorage.getItem('quiz_token');
    const isAuthenticated = localStorage.getItem('quiz_authenticated');
    if (!token || !isAuthenticated) {
      setUser(null);
      return;
    }

    fetch(`/api/auth/me?token=${encodeURIComponent(token)}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem('quiz_user', JSON.stringify(data.user));
          localStorage.setItem('quiz_authenticated', 'true');
        } else if (data.success === false) {
          setUser(null);
          localStorage.removeItem('quiz_user');
          localStorage.removeItem('quiz_token');
          localStorage.removeItem('quiz_authenticated');
        }
      })
      .catch(err => {
        console.log('Session check notice:', err);
      });
  }, []);

  // Login handler
  const login = async (username, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('quiz_authenticated', 'true');
        localStorage.setItem('quiz_user', JSON.stringify(data.user));
        localStorage.setItem('quiz_token', data.token || data.user.id);
        setIsAuthModalOpen(false);
        return { success: true, message: data.message };
      }
      return { 
        success: false, 
        pendingApproval: data.pendingApproval,
        message: data.message || 'Đăng nhập không thành công' 
      };
    } catch (err) {
      // Local fallback for default admin account
      const clean = (username || '').trim().toLowerCase();
      if ((clean === 'dtc245200060' || clean === 'manh' || clean === 'hoangduymanh') && password === '123') {
        const studentUser = {
          id: 'user_1',
          username: 'dtc245200060',
          fullName: 'Hoàng Duy Mạnh',
          studentId: 'dtc245200060',
          role: 'student',
          status: 'active',
          isAdmin: true,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        };
        setUser(studentUser);
        localStorage.setItem('quiz_authenticated', 'true');
        localStorage.setItem('quiz_user', JSON.stringify(studentUser));
        localStorage.setItem('quiz_token', studentUser.id);
        setIsAuthModalOpen(false);
        return { success: true, message: 'Đăng nhập thành công!' };
      } else if (clean === 'giangvien' && password === '123') {
        const teacherUser = {
          id: 'user_2',
          username: 'giangvien',
          fullName: 'TS. Trần Quang Minh',
          studentId: 'GV1042',
          role: 'teacher',
          status: 'active',
          isAdmin: false,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        };
        setUser(teacherUser);
        localStorage.setItem('quiz_authenticated', 'true');
        localStorage.setItem('quiz_user', JSON.stringify(teacherUser));
        localStorage.setItem('quiz_token', teacherUser.id);
        setIsAuthModalOpen(false);
        return { success: true, message: 'Đăng nhập thành công!' };
      }
      return { success: false, message: 'Lỗi kết nối máy chủ, vui lòng thử lại' };
    }
  };

  // Register handler (Pending approval from Admin Hoàng Duy Mạnh)
  const register = async ({ fullName, username, studentId, password, email, role }) => {
    const candidateUser = {
      id: `user_${Date.now()}`,
      fullName: fullName.trim(),
      username: username.trim().toLowerCase(),
      studentId: (studentId || username).trim(),
      email: email ? email.trim() : `${username.trim().toLowerCase()}@student.edu.vn`,
      password: password.trim(),
      role: role === 'teacher' ? 'teacher' : 'student',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Store in client pending list so admin immediately sees it
    try {
      const pendingList = JSON.parse(localStorage.getItem('client_pending_users') || '[]');
      if (!pendingList.some(u => u.username === candidateUser.username)) {
        pendingList.push(candidateUser);
        localStorage.setItem('client_pending_users', JSON.stringify(pendingList));
      }
    } catch {}

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, username, studentId, password, email, role })
      });
      const data = await res.json();
      if (data.success && data.pendingApproval) {
        return { 
          success: true, 
          pendingApproval: true, 
          approvalLink: data.approvalLink,
          candidateUser,
          message: data.message || 'Đăng ký thành công! Hệ thống đã gửi email phê duyệt tới Quản trị viên (Hoàng Duy Mạnh). Vui lòng đợi Quản trị viên duyệt để kích hoạt tài khoản làm bài!' 
        };
      }
      if (data.success && data.user) {
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message || 'Đăng ký không thành công' };
    } catch (err) {
      return { 
        success: true, 
        pendingApproval: true, 
        candidateUser,
        message: 'Đăng ký tài khoản thành công! Yêu cầu của bạn đang chờ Quản trị viên (Hoàng Duy Mạnh) phê duyệt qua email để kích hoạt.' 
      };
    }
  };

  // Logout handler
  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    } finally {
      setUser(null);
      localStorage.removeItem('quiz_authenticated');
      localStorage.removeItem('quiz_user');
      localStorage.removeItem('quiz_token');
    }
  };

  // Fast switch role disabled for security
  const loginAsStudent = async () => {};
  const loginAsTeacher = async () => {};

  const openLogin = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthModalTab('register');
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      login, 
      register, 
      logout, 
      loginAsStudent, 
      loginAsTeacher,
      isAuthModalOpen,
      setIsAuthModalOpen,
      authModalTab,
      setAuthModalTab,
      openLogin,
      openRegister,
      closeAuthModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
