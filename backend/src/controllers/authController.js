import { db } from '../database/db.js';

// Helper to sanitize user object (exclude password)
function sanitizeUser(u) {
  if (!u) return null;
  const { password, ...safeUser } = u;
  return safeUser;
}

// Ensure default accounts exist with password
export function initAuthAccounts() {
  const users = db.getTable('users');

  // 1. Student: Hoàng Duy Mạnh (dtc245200060)
  const student = users.find(u => u.username === 'dtc245200060' || u.studentId === 'dtc245200060');
  if (!student) {
    db.insert('users', {
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Hoàng Duy Mạnh',
      studentId: 'dtc245200060',
      email: 'dtc245200060@student.edu.vn',
      password: '123',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: '2026-03-01T08:00:00.000Z'
    });
  } else if (!student.password) {
    db.update('users', u => u.id === student.id, { password: '123' });
  }

  // 2. Teacher: TS. Trần Quang Minh (GV1042 / giangvien)
  const teacher = users.find(u => u.username === 'giangvien' || u.username === 'giangvien_minh' || u.studentId === 'GV1042');
  if (!teacher) {
    db.insert('users', {
      id: 'user_2',
      username: 'giangvien',
      fullName: 'TS. Trần Quang Minh',
      studentId: 'GV1042',
      email: 'tqminh@edu.vn',
      password: '123',
      role: 'teacher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      createdAt: '2026-02-15T09:30:00.000Z'
    });
  } else if (!teacher.password) {
    db.update('users', u => u.id === teacher.id, { password: '123' });
  }
}

// POST /api/auth/register
export const register = (req, res) => {
  try {
    const { fullName, username, studentId, password, email = '', role = 'student' } = req.body;

    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập họ và tên' });
    }
    if (!username || !username.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập tên đăng nhập' });
    }
    if (!password || password.trim().length < 3) {
      return res.status(400).json({ success: false, message: 'Mật khẩu phải có ít nhất 3 ký tự' });
    }

    const cleanUsername = username.trim().toLowerCase();
    const cleanStudentId = (studentId || username).trim();

    // Check if user already exists
    const existing = db.findOne('users', u => 
      u.username.toLowerCase() === cleanUsername || 
      (u.studentId && u.studentId.toLowerCase() === cleanStudentId.toLowerCase())
    );

    if (existing) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tên đăng nhập hoặc Mã định danh/MSSV này đã tồn tại trên hệ thống' 
      });
    }

    const newUser = {
      id: `user_${Date.now()}`,
      username: cleanUsername,
      fullName: fullName.trim(),
      studentId: cleanStudentId,
      email: email.trim() || `${cleanUsername}@student.edu.vn`,
      password: password.trim(),
      role: role === 'teacher' ? 'teacher' : 'student',
      avatar: role === 'teacher'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString()
    };

    db.insert('users', newUser);

    res.json({
      success: true,
      message: 'Đăng ký tài khoản thành công!',
      user: sanitizeUser(newUser),
      token: newUser.id
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/login
export const login = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !username.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập tên đăng nhập hoặc Mã sinh viên' });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập mật khẩu' });
    }

    const cleanInput = username.trim().toLowerCase();

    // Find user by username, studentId, or email
    let user = db.findOne('users', u => 
      u.username.toLowerCase() === cleanInput ||
      (u.studentId && u.studentId.toLowerCase() === cleanInput) ||
      (u.email && u.email.toLowerCase() === cleanInput)
    );

    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Không tìm thấy tài khoản với tên đăng nhập hoặc MSSV này' 
      });
    }

    // Verify password
    if (user.password && user.password !== password.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mật khẩu không chính xác' 
      });
    }

    res.json({
      success: true,
      message: 'Đăng nhập thành công!',
      user: sanitizeUser(user),
      token: user.id
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/auth/me
export const getMe = (req, res) => {
  try {
    // Check Authorization header or x-user-id
    const authHeader = req.headers.authorization;
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else if (req.headers['x-user-id']) {
      token = req.headers['x-user-id'];
    } else if (req.query.token) {
      token = req.query.token;
    }

    if (!token) {
      return res.json({
        success: false,
        user: null,
        message: 'Chưa đăng nhập'
      });
    }

    const user = db.findOne('users', u => u.id === token || u.username === token || u.studentId === token);
    if (!user) {
      return res.json({
        success: false,
        user: null,
        message: 'Phiên đăng nhập không tồn tại hoặc đã hết hạn'
      });
    }

    res.json({
      success: true,
      user: sanitizeUser(user)
    });
  } catch (error) {
    console.error('getMe error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/logout
export const logout = (req, res) => {
  res.json({
    success: true,
    message: 'Đã đăng xuất thành công!'
  });
};

// POST /api/auth/switch-role
export const switchRole = (req, res) => {
  try {
    const { targetRole } = req.body;
    let user;

    if (targetRole === 'teacher') {
      user = db.findOne('users', u => u.role === 'teacher') || {
        id: 'user_2',
        username: 'giangvien',
        fullName: 'TS. Trần Quang Minh',
        studentId: 'GV1042',
        role: 'teacher',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      };
    } else {
      user = db.findOne('users', u => u.studentId === 'dtc245200060') || {
        id: 'user_1',
        username: 'dtc245200060',
        fullName: 'Hoàng Duy Mạnh',
        studentId: 'dtc245200060',
        role: 'student',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
    }

    res.json({
      success: true,
      message: `Đã chuyển sang tài khoản ${user.role === 'teacher' ? 'Giảng viên' : 'Sinh viên'}!`,
      user: sanitizeUser(user),
      token: user.id
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
