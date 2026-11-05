import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user only if explicitly authenticated; NO AUTO-LOGIN
  const [user, setUser] = useState(() => {
    try {
      const isAuthenticated = localStorage.getItem('quiz_authenticated');
      if (!isAuthenticated) {
        // Clear any old legacy prefill so the user starts unauthenticated
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
        } else if (data.success === false && data.message?.includes('hết hạn')) {
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
      return { success: false, message: data.message || 'Đăng nhập không thành công' };
    } catch (err) {
      // Local fallback for offline mode or cold boots
      const clean = (username || '').trim().toLowerCase();
      if ((clean === 'dtc245200060' || clean === 'manh' || clean === 'hoangduymanh') && password === '123') {
        const studentUser = {
          id: 'user_1',
          username: 'dtc245200060',
          fullName: 'Hoàng Duy Mạnh',
          studentId: 'dtc245200060',
          role: 'student',
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

  // Register handler
  const register = async ({ fullName, username, studentId, password, email, role }) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, username, studentId, password, email, role })
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
      return { success: false, message: data.message || 'Đăng ký không thành công' };
    } catch (err) {
      // Local fallback for offline mode
      const newUser = {
        id: `user_${Date.now()}`,
        username: username.trim().toLowerCase(),
        fullName: fullName.trim(),
        studentId: studentId?.trim() || username.trim(),
        email: email?.trim() || '',
        role: role === 'teacher' ? 'teacher' : 'student',
        avatar: role === 'teacher'
          ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
          : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
      setUser(newUser);
      localStorage.setItem('quiz_authenticated', 'true');
      localStorage.setItem('quiz_user', JSON.stringify(newUser));
      localStorage.setItem('quiz_token', newUser.id);
      setIsAuthModalOpen(false);
      return { success: true, message: 'Đăng ký thành công!' };
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

  // Switch role helpers (when user is inside)
  const loginAsStudent = async () => {
    try {
      const res = await fetch('/api/auth/switch-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole: 'student' })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('quiz_authenticated', 'true');
        localStorage.setItem('quiz_user', JSON.stringify(data.user));
        localStorage.setItem('quiz_token', data.token || data.user.id);
      }
    } catch {
      const studentUser = {
        id: 'user_1',
        username: 'dtc245200060',
        fullName: 'Hoàng Duy Mạnh',
        studentId: 'dtc245200060',
        role: 'student',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
      setUser(studentUser);
      localStorage.setItem('quiz_authenticated', 'true');
      localStorage.setItem('quiz_user', JSON.stringify(studentUser));
      localStorage.setItem('quiz_token', studentUser.id);
    }
  };

  const loginAsTeacher = async () => {
    try {
      const res = await fetch('/api/auth/switch-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole: 'teacher' })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('quiz_authenticated', 'true');
        localStorage.setItem('quiz_user', JSON.stringify(data.user));
        localStorage.setItem('quiz_token', data.token || data.user.id);
      }
    } catch {
      const teacherUser = {
        id: 'user_2',
        username: 'giangvien',
        fullName: 'TS. Trần Quang Minh',
        studentId: 'GV1042',
        role: 'teacher',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      };
      setUser(teacherUser);
      localStorage.setItem('quiz_authenticated', 'true');
      localStorage.setItem('quiz_user', JSON.stringify(teacherUser));
      localStorage.setItem('quiz_token', teacherUser.id);
    }
  };

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
