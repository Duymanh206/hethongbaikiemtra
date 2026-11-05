import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage or default on fresh initial install
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('quiz_user');
      if (saved) return JSON.parse(saved);
      // Default initial candidate as specified in prompt
      const defaultUser = {
        id: 'user_1',
        username: 'dtc245200060',
        fullName: 'Hoàng Duy Mạnh',
        studentId: 'dtc245200060',
        role: 'student',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
      localStorage.setItem('quiz_user', JSON.stringify(defaultUser));
      localStorage.setItem('quiz_token', defaultUser.id);
      return defaultUser;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register'

  // Validate session on mount
  useEffect(() => {
    const token = localStorage.getItem('quiz_token');
    if (!token) return;

    fetch(`/api/auth/me?token=${encodeURIComponent(token)}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem('quiz_user', JSON.stringify(data.user));
        } else if (data.success === false && data.message?.includes('hết hạn')) {
          // Token expired or invalid
          setUser(null);
          localStorage.removeItem('quiz_user');
          localStorage.removeItem('quiz_token');
        }
      })
      .catch(err => console.log('Auth check error:', err));
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
        localStorage.setItem('quiz_user', JSON.stringify(data.user));
        localStorage.setItem('quiz_token', data.token || data.user.id);
        setIsAuthModalOpen(false);
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message || 'Đăng nhập không thành công' };
    } catch (err) {
      return { success: false, message: 'Lỗi kết nối máy chủ' };
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
        localStorage.setItem('quiz_user', JSON.stringify(data.user));
        localStorage.setItem('quiz_token', data.token || data.user.id);
        setIsAuthModalOpen(false);
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message || 'Đăng ký không thành công' };
    } catch (err) {
      return { success: false, message: 'Lỗi kết nối máy chủ' };
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
      localStorage.removeItem('quiz_user');
      localStorage.removeItem('quiz_token');
    }
  };

  // Quick switch to student
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
      localStorage.setItem('quiz_user', JSON.stringify(studentUser));
      localStorage.setItem('quiz_token', studentUser.id);
    }
  };

  // Quick switch to teacher
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
