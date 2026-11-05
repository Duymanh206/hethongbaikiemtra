import crypto from 'crypto';
import { db } from '../database/db.js';
import { sendAdminApprovalEmail, ADMIN_EMAIL } from '../services/mailService.js';

// Helper to sanitize user object (exclude password and tokens)
function sanitizeUser(u) {
  if (!u) return null;
  const { password, approvalToken, ...safeUser } = u;
  return safeUser;
}

// Ensure default accounts exist with password and active status
export function initAuthAccounts() {
  const users = db.getTable('users');

  // 1. Admin & Student: Hoàng Duy Mạnh (dtc245200060)
  const student = users.find(u => u.username === 'dtc245200060' || u.studentId === 'dtc245200060');
  if (!student) {
    db.insert('users', {
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Hoàng Duy Mạnh',
      studentId: 'dtc245200060',
      email: 'manhvipsv@gmail.com',
      password: '123',
      role: 'student',
      status: 'active',
      isAdmin: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: '2026-03-01T08:00:00.000Z'
    });
  } else {
    db.update('users', u => u.id === student.id, {
      password: student.password || '123',
      status: 'active',
      isAdmin: true
    });
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
      status: 'active',
      isAdmin: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      createdAt: '2026-02-15T09:30:00.000Z'
    });
  } else {
    db.update('users', u => u.id === teacher.id, {
      password: teacher.password || '123',
      status: 'active'
    });
  }
}

// POST /api/auth/register
export const register = async (req, res) => {
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

    const approvalToken = crypto.randomBytes(24).toString('hex');
    const newUserId = `user_${Date.now()}`;

    // Host & Origin URL resolution
    const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
    const host = req.headers['x-forwarded-host'] || req.get('host') || 'localhost:5000';
    const baseUrl = `${protocol}://${host}`;

    const approvalLink = `${baseUrl}/api/auth/approve?userId=${newUserId}&token=${approvalToken}&action=approve`;
    const rejectLink = `${baseUrl}/api/auth/approve?userId=${newUserId}&token=${approvalToken}&action=reject`;

    const newUser = {
      id: newUserId,
      username: cleanUsername,
      fullName: fullName.trim(),
      studentId: cleanStudentId,
      email: email.trim() || `${cleanUsername}@student.edu.vn`,
      password: password.trim(),
      role: role === 'teacher' ? 'teacher' : 'student',
      status: 'pending', // REQUIRE ADMIN APPROVAL BEFORE ENTERING
      approvalToken,
      avatar: role === 'teacher'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString()
    };

    db.insert('users', newUser);

    // Send email notification to Admin (Hoàng Duy Mạnh)
    await sendAdminApprovalEmail({
      user: newUser,
      approvalLink,
      rejectLink
    });

    res.json({
      success: true,
      pendingApproval: true,
      message: 'Đăng ký tài khoản thành công! Thông báo đã được gửi tới email Quản trị viên (Hoàng Duy Mạnh). Vui lòng đợi Quản trị viên duyệt để kích hoạt tài khoản!',
      approvalLink, // provided for testing/instant verification
      user: sanitizeUser(newUser)
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

    // Check account approval status
    if (user.status === 'pending') {
      return res.status(403).json({
        success: false,
        pendingApproval: true,
        message: 'Tài khoản của bạn đang chờ Quản trị viên (Hoàng Duy Mạnh) phê duyệt. Vui lòng liên hệ Admin hoặc đợi duyệt trước khi đăng nhập!'
      });
    }

    if (user.status === 'rejected') {
      return res.status(403).json({
        success: false,
        message: 'Yêu cầu tạo tài khoản của bạn đã bị từ chối bởi Quản trị viên.'
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

    if (user.status === 'pending') {
      return res.json({
        success: false,
        user: null,
        pendingApproval: true,
        message: 'Tài khoản đang chờ duyệt'
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

// GET /api/auth/approve (Direct link from Admin email)
export const approveAccountByLink = (req, res) => {
  try {
    const { userId, token, action = 'approve' } = req.query;

    if (!userId || !token) {
      return res.status(400).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">Đường link phê duyệt không hợp lệ!</h2>
          <p>Thiếu tham số userId hoặc token xác thực.</p>
        </div>
      `);
    }

    const user = db.findOne('users', u => u.id === userId);
    if (!user) {
      return res.status(404).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">Không tìm thấy thông tin tài khoản!</h2>
        </div>
      `);
    }

    if (user.approvalToken !== token) {
      return res.status(403).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">Mã token xác nhận không chính xác hoặc đã hết hạn!</h2>
        </div>
      `);
    }

    const isApprove = action === 'approve';
    const newStatus = isApprove ? 'active' : 'rejected';

    db.update('users', u => u.id === userId, {
      status: newStatus,
      approvedAt: new Date().toISOString()
    });

    // Also update notification record if exists
    try {
      db.update('system_notifications', n => n.userId === userId, { status: newStatus });
    } catch {}

    const title = isApprove ? 'ĐÃ PHÊ DUYỆT TÀI KHOẢN THÀNH CÔNG!' : 'ĐÃ TỪ CHỐI TÀI KHOẢN';
    const color = isApprove ? '#16a34a' : '#dc2626';
    const icon = isApprove ? '✅' : '❌';
    const desc = isApprove 
      ? `Tài khoản <b>${user.fullName}</b> (Mã: <code>${user.studentId}</code>) đã được kích hoạt. Người dùng này hiện đã có thể đăng nhập để làm bài và tạo đề thi trên hệ thống.`
      : `Đã từ chối yêu cầu đăng ký của người dùng <b>${user.fullName}</b>.`;

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px; text-align: center; color: #1e293b; }
          .box { max-width: 520px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .icon { font-size: 54px; margin-bottom: 16px; }
          h2 { margin: 0 0 12px; color: ${color}; font-size: 22px; }
          p { color: #475569; font-size: 15px; line-height: 1.6; }
          .btn { display: inline-block; margin-top: 24px; padding: 12px 28px; background: #2563eb; color: white; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="icon">${icon}</div>
          <h2>${title}</h2>
          <p>${desc}</p>
          <a href="/" class="btn">Vào Trang Chủ Quizz. PRO</a>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Approve link error:', error);
    res.status(500).send('Lỗi máy chủ khi xử lý phê duyệt');
  }
};

// GET /api/auth/pending-users (For Admin Dashboard)
export const getPendingUsers = (req, res) => {
  try {
    const users = db.find('users', u => u.status === 'pending');
    res.json({
      success: true,
      pendingCount: users.length,
      data: users.map(sanitizeUser)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/approve-user (Admin button click in app)
export const approveUserByAdmin = (req, res) => {
  try {
    const { userId, action = 'approve' } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'Thiếu userId' });
    }

    const user = db.findOne('users', u => u.id === userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
    }

    const newStatus = action === 'approve' ? 'active' : 'rejected';
    db.update('users', u => u.id === userId, {
      status: newStatus,
      approvedAt: new Date().toISOString()
    });

    try {
      db.update('system_notifications', n => n.userId === userId, { status: newStatus });
    } catch {}

    res.json({
      success: true,
      message: action === 'approve'
        ? `Đã phê duyệt thành công tài khoản ${user.fullName}!`
        : `Đã từ chối tài khoản ${user.fullName}!`,
      user: sanitizeUser({ ...user, status: newStatus })
    });
  } catch (error) {
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
        status: 'active',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      };
    } else {
      user = db.findOne('users', u => u.studentId === 'dtc245200060') || {
        id: 'user_1',
        username: 'dtc245200060',
        fullName: 'Hoàng Duy Mạnh',
        studentId: 'dtc245200060',
        role: 'student',
        status: 'active',
        isAdmin: true,
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
