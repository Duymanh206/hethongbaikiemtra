import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'user_1',
    username: 'dtc245200060',
    fullName: 'Nguyễn Văn An',
    studentId: 'dtc245200060',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  });

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.user) {
          setUser(data.user);
        }
      })
      .catch(err => console.log('Auth check fallback:', err));
  }, []);

  const loginAsStudent = () => {
    setUser({
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Nguyễn Văn An',
      studentId: 'dtc245200060',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    });
  };

  const loginAsTeacher = () => {
    setUser({
      id: 'user_2',
      username: 'giangvien_minh',
      fullName: 'TS. Trần Quang Minh',
      studentId: 'GV1042',
      role: 'teacher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginAsStudent, loginAsTeacher }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

