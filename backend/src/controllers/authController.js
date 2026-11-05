import crypto from 'crypto';
import { db } from '../database/db.js';
import { sendAdminApprovalEmail, ADMIN_EMAIL } from '../services/mailService.js';

// Helper to sanitize user object (exclude password and tokens)
function sanitizeUser(u) {
  if (!u) return null;
  const { password, approvalToken, ...safeUser } = u;
  return safeUser;
}

// Helper to resolve canonical public base URL for emails and 1-touch links
export function getBaseUrl(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/+$/, '');

  if (req) {
    const origin = req.headers?.origin;
    if (origin && !origin.includes('localhost') && !origin.includes('127.0.0.1')) {
      return origin;
    }

    const referer = req.headers?.referer;
    if (referer && !referer.includes('localhost') && !referer.includes('127.0.0.1')) {
      try {
        return new URL(referer).origin;
      } catch {}
    }

    const forwardedHost = req.headers?.['x-forwarded-host'];
    if (forwardedHost && !forwardedHost.includes('localhost') && !forwardedHost.includes('127.0.0.1')) {
      const proto = req.headers?.['x-forwarded-proto'] || 'https';
      return `${proto}://${forwardedHost}`;
    }

    const host = (typeof req.get === 'function' ? req.get('host') : req.headers?.host);
    if (host && !host.includes('localhost') && !host.includes('127.0.0.1')) {
      const proto = req.headers?.['x-forwarded-proto'] || 'https';
      return `${proto}://${host}`;
    }
  }

  return 'https://hethongbaikiemtra-n58g.vercel.app';
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

  // 3. Candidate: Anh (Dtc245200067)
  const candidateAnh = users.find(u => 
    u.username?.toLowerCase() === 'anh' || 
    u.username?.toLowerCase() === 'dtc245200067' || 
    u.studentId?.toLowerCase() === 'dtc245200067'
  );
  if (!candidateAnh) {
    db.insert('users', {
      id: 'user_cand_anh',
      username: 'anh',
      fullName: 'Anh',
      studentId: 'Dtc245200067',
      email: 'dtc245200067@student.edu.vn',
      password: '123',
      role: 'student',
      status: 'active',
      isAdmin: false,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: '2026-11-05T06:00:00.000Z'
    });
  } else {
    db.update('users', u => u.id === candidateAnh.id, {
      status: 'active',
      password: candidateAnh.password || '123',
      isAdmin: false
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
      u.username?.toLowerCase() === cleanUsername || 
      (u.studentId && u.studentId?.toLowerCase() === cleanStudentId.toLowerCase())
    );

    if (existing) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tên đăng nhập hoặc Mã định danh/MSSV này đã tồn tại trên hệ thống' 
      });
    }

    const approvalToken = crypto.randomBytes(24).toString('hex');
    const newUserId = `user_${Date.now()}`;

    // Canonical Base URL resolution
    const baseUrl = getBaseUrl(req);
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
      status: 'pending', // Phải chờ Quản trị viên (Hoàng Duy Mạnh) phê duyệt mới được đăng nhập!
      isAdmin: false,
      approvalToken,
      avatar: role === 'teacher'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString()
    };

    db.insert('users', newUser);

    // Send email notification to Admin (Hoàng Duy Mạnh)
    sendAdminApprovalEmail({
      user: newUser,
      approvalLink,
      rejectLink
    }).catch(err => console.error('Email error:', err));

    res.json({
      success: true,
      pendingApproval: true,
      message: 'Đăng ký tài khoản thành công! Thông báo đã được gửi tới email Quản trị viên (Hoàng Duy Mạnh). Vui lòng đợi quản trị viên bấm phê duyệt để kích hoạt tài khoản của bạn trước khi đăng nhập.',
      approvalLink,
      rejectLink,
      adminEmail: ADMIN_EMAIL,
      user: sanitizeUser(newUser)
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !username.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập tên đăng nhập hoặc Mã sinh viên' });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập mật khẩu' });
    }

    const cleanInput = username.trim().toLowerCase();

    // 1. Check local DB
    let user = db.findOne('users', u => 
      u.username?.toLowerCase() === cleanInput ||
      (u.studentId && u.studentId?.toLowerCase() === cleanInput) ||
      (u.email && u.email?.toLowerCase() === cleanInput)
    );

    // 2. If not found, sync from cloud store
    if (!user) {
      await db.syncFromCloud();
      user = db.findOne('users', u => 
        u.username?.toLowerCase() === cleanInput ||
        (u.studentId && u.studentId?.toLowerCase() === cleanInput) ||
        (u.email && u.email?.toLowerCase() === cleanInput)
      );
    }

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

    // If account was rejected or locked by Admin
    if (user.status === 'rejected' || user.status === 'locked') {
      return res.status(403).json({
        success: false,
        message: 'Tài khoản của bạn đã bị khóa hoặc từ chối bởi Quản trị viên (Hoàng Duy Mạnh).'
      });
    }

    // If user status is pending, DO NOT allow login until Admin approves!
    if (user.status === 'pending') {
      const baseUrl = getBaseUrl(req);
      const approvalToken = user.approvalToken || 'token';
      const approvalLink = `${baseUrl}/api/auth/approve?userId=${user.id}&token=${approvalToken}&action=approve`;
      const rejectLink = `${baseUrl}/api/auth/approve?userId=${user.id}&token=${approvalToken}&action=reject`;

      return res.status(403).json({
        success: false,
        pendingApproval: true,
        message: 'Tài khoản của bạn đang chờ Quản trị viên (Hoàng Duy Mạnh) phê duyệt kích hoạt. Vui lòng đợi quản trị viên duyệt trước khi đăng nhập!',
        approvalLink,
        rejectLink,
        adminEmail: ADMIN_EMAIL,
        user: {
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          studentId: user.studentId,
          email: user.email
        }
      });
    }

    // Enforce strict admin permission: ONLY dtc245200060
    const isStrictAdmin = user.studentId === 'dtc245200060' || user.username === 'dtc245200060';
    user.isAdmin = isStrictAdmin;

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

    const cleanToken = String(token).toLowerCase();
    const user = db.findOne('users', u => 
      u.id === token || 
      u.username?.toLowerCase() === cleanToken || 
      (u.studentId && u.studentId?.toLowerCase() === cleanToken)
    );

    if (!user) {
      return res.json({
        success: false,
        user: null,
        message: 'Phiên đăng nhập không tồn tại hoặc đã hết hạn'
      });
    }

    if (user.status === 'rejected' || user.status === 'locked') {
      return res.json({
        success: false,
        user: null,
        message: 'Tài khoản đã bị khóa'
      });
    }

    if (user.status === 'pending') {
      return res.json({
        success: false,
        user: null,
        pendingApproval: true,
        message: 'Tài khoản đang chờ Quản trị viên (Hoàng Duy Mạnh) phê duyệt'
      });
    }

    const isStrictAdmin = user.studentId === 'dtc245200060' || user.username === 'dtc245200060';
    user.isAdmin = isStrictAdmin;

    res.json({
      success: true,
      user: sanitizeUser(user)
    });
  } catch (error) {
    console.error('getMe error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/auth/approve (Direct 1-touch link from Admin email / Zalo / Mess)
export const approveAccountByLink = async (req, res) => {
  try {
    const { userId, token, action = 'approve' } = req.query;

    if (!userId) {
      return res.status(400).send(`
        <div style="font-family: -apple-system, sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">Đường link phê duyệt không hợp lệ!</h2>
          <p>Thiếu thông tin người dùng cần phê duyệt.</p>
        </div>
      `);
    }

    await db.syncFromCloud();
    const cleanId = String(userId).toLowerCase();
    const user = db.findOne('users', u => 
      (u.id && String(u.id).toLowerCase() === cleanId) ||
      (u.username && u.username.toLowerCase() === cleanId) ||
      (u.studentId && u.studentId.toLowerCase() === cleanId)
    );

    if (!user) {
      return res.status(404).send(`
        <div style="font-family: -apple-system, sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">Không tìm thấy thông tin tài khoản!</h2>
          <p>Tài khoản có thể đã bị xóa hoặc đường link không chính xác.</p>
          <a href="/" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background: #2563eb; color: white; text-decoration: none; border-radius: 8px;">Về trang chủ</a>
        </div>
      `);
    }

    const isApprove = action === 'approve';

    // If already active, show friendly notification
    if (isApprove && user.status === 'active') {
      return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Tài khoản đã được kích hoạt</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 30px 16px; text-align: center; color: #1e293b; }
            .box { max-width: 520px; margin: 40px auto; background: white; padding: 40px 24px; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .icon { font-size: 52px; margin-bottom: 12px; }
            h2 { margin: 0 0 10px; color: #16a34a; font-size: 22px; font-weight: 800; }
            p { color: #475569; font-size: 14px; line-height: 1.6; }
            .card { background: #f1f5f9; padding: 16px; border-radius: 14px; margin: 20px 0; text-align: left; font-size: 13px; color: #334155; }
            .btn { display: inline-block; margin-top: 20px; padding: 13px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="box">
            <div class="icon">✅</div>
            <h2>TÀI KHOẢN ĐÃ ĐƯỢC KÍCH HOẠT TRƯỚC ĐÓ!</h2>
            <p>Tài khoản <b>${user.fullName}</b> (MSSV: <code>${user.studentId}</code>, Tên đăng nhập: <code>${user.username}</code>) hiện đang hoạt động bình thường trên hệ thống.</p>
            <div class="card">
              <div><b>👤 Thí sinh:</b> ${user.fullName}</div>
              <div><b>🆔 MSSV / Mã định danh:</b> ${user.studentId}</div>
              <div><b>⚡ Trạng thái:</b> <span style="color: #16a34a; font-weight: bold;">HOẠT ĐỘNG (ACTIVE)</span></div>
            </div>
            <a href="/" class="btn">Vào Hệ Thống Quizz. PRO</a>
          </div>
        </body>
        </html>
      `);
    }

    const newStatus = isApprove ? 'active' : 'rejected';

    db.update('users', u => u.id === user.id, {
      status: newStatus,
      approvedAt: new Date().toISOString(),
      approvedBy: 'Admin Hoàng Duy Mạnh (Email 1-touch)'
    });

    try {
      db.update('system_notifications', n => n.userId === user.id || n.studentId === user.studentId, { status: newStatus });
    } catch {}

    const title = isApprove ? 'ĐÃ PHÊ DUYỆT TÀI KHOẢN THÀNH CÔNG!' : 'ĐÃ TỪ CHỐI TÀI KHOẢN';
    const color = isApprove ? '#16a34a' : '#dc2626';
    const icon = isApprove ? '🎉' : '✕';
    const desc = isApprove 
      ? `Tài khoản <b>${user.fullName}</b> (MSSV: <code>${user.studentId}</code>, Tên: <code>${user.username}</code>) đã được kích hoạt thành công! Thí sinh hiện đã có thể đăng nhập ngay trên hệ thống.`
      : `Đã từ chối yêu cầu đăng ký của người dùng <b>${user.fullName}</b>.`;

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 30px 16px; text-align: center; color: #1e293b; }
          .box { max-width: 520px; margin: 40px auto; background: white; padding: 40px 24px; border-radius: 24px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .icon { font-size: 56px; margin-bottom: 14px; }
          h2 { margin: 0 0 12px; color: ${color}; font-size: 22px; font-weight: 800; }
          p { color: #475569; font-size: 15px; line-height: 1.6; }
          .card { background: #f1f5f9; padding: 16px; border-radius: 14px; margin: 20px 0; text-align: left; font-size: 13px; color: #334155; }
          .btn { display: inline-block; margin-top: 15px; padding: 13px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 14px; box-shadow: 0 4px 12px rgba(37,99,235,0.25); }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="icon">${icon}</div>
          <h2>${title}</h2>
          <p>${desc}</p>
          <div class="card">
            <div><b>👤 Họ và tên:</b> ${user.fullName}</div>
            <div><b>🆔 Mã sinh viên (MSSV):</b> ${user.studentId}</div>
            <div><b>🔑 Tên đăng nhập:</b> ${user.username}</div>
            <div><b>📧 Email nhận thông báo:</b> ${user.email || 'Chưa cung cấp'}</div>
            <div><b>⚡ Trạng thái:</b> <span style="color: ${color}; font-weight: bold;">${isApprove ? 'ĐÃ KÍCH HOẠT (ACTIVE)' : 'TỪ CHỐI (REJECTED)'}</span></div>
          </div>
          <a href="/" class="btn">Vào Hệ Thống Quizz. PRO</a>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('approveAccountByLink error:', error);
    res.status(500).send(`<h2>Lỗi xử lý: ${error.message}</h2>`);
  }
};

// POST /api/auth/resend-approval (Manual or automatic reminder dispatch to Admin email)
export const resendApprovalEmail = async (req, res) => {
  try {
    const { username, studentId, userId } = req.body;
    const cleanQuery = String(username || studentId || userId || '').trim().toLowerCase();

    if (!cleanQuery) {
      return res.status(400).json({ success: false, message: 'Vui lòng cung cấp tên đăng nhập hoặc MSSV' });
    }

    await db.syncFromCloud();
    const user = db.findOne('users', u => 
      (u.id && String(u.id).toLowerCase() === cleanQuery) ||
      (u.username && u.username.toLowerCase() === cleanQuery) ||
      (u.studentId && u.studentId.toLowerCase() === cleanQuery)
    );

    if (!user) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy tài khoản người dùng với thông tin này' });
    }

    if (user.status === 'active') {
      return res.json({
        success: true,
        alreadyActive: true,
        message: 'Tài khoản này đã được Quản trị viên phê duyệt kích hoạt trước đó! Bạn có thể đăng nhập ngay.'
      });
    }

    const baseUrl = getBaseUrl(req);
    const approvalToken = user.approvalToken || crypto.randomBytes(24).toString('hex');
    if (!user.approvalToken) {
      db.update('users', u => u.id === user.id, { approvalToken });
    }

    const approvalLink = `${baseUrl}/api/auth/approve?userId=${user.id}&token=${approvalToken}&action=approve`;
    const rejectLink = `${baseUrl}/api/auth/approve?userId=${user.id}&token=${approvalToken}&action=reject`;

    // Trigger email notification
    await sendAdminApprovalEmail({
      user,
      approvalLink,
      rejectLink
    });

    res.json({
      success: true,
      message: `Đã gửi email thông báo phê duyệt tới Quản trị viên Hoàng Duy Mạnh (${ADMIN_EMAIL}) kèm liên kết kích hoạt 1 chạm!`,
      approvalLink,
      adminEmail: ADMIN_EMAIL,
      user: sanitizeUser(user)
    });
  } catch (error) {
    console.error('resendApprovalEmail error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/auth/pending-users (For Admin Dashboard)
export const getPendingUsers = async (req, res) => {
  try {
    await db.syncFromCloud();
    const allUsers = db.getTable('users');
    const pendingUsers = allUsers.filter(u => u.status === 'pending');
    res.json({
      success: true,
      pendingCount: pendingUsers.length,
      data: pendingUsers.map(sanitizeUser),
      allUsers: allUsers.map(sanitizeUser)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/auth/approve-user (Admin button click in app)
export const approveUserByAdmin = async (req, res) => {
  try {
    const { userId, username, studentId, action = 'approve' } = req.body;
    const identifier = userId || username || studentId;
    if (!identifier) {
      return res.status(400).json({ success: false, message: 'Thiếu thông tin người dùng' });
    }

    await db.syncFromCloud();

    const cleanId = String(identifier).toLowerCase();
    let user = db.findOne('users', u => 
      (u.id && String(u.id).toLowerCase() === cleanId) ||
      (u.username && u.username.toLowerCase() === cleanId) ||
      (u.studentId && u.studentId.toLowerCase() === cleanId)
    );

    if (!user) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
    }

    const newStatus = action === 'approve' ? 'active' : 'rejected';
    const updated = db.update('users', u => u.id === user.id, {
      status: newStatus,
      approvedAt: new Date().toISOString()
    });

    try {
      db.update('system_notifications', n => n.userId === user.id || n.studentId === user.studentId, { status: newStatus });
    } catch {}

    res.json({
      success: true,
      message: action === 'approve'
        ? `Đã phê duyệt & kích hoạt thành công tài khoản ${user.fullName}!`
        : `Đã từ chối/khóa tài khoản ${user.fullName}!`,
      user: sanitizeUser(updated || { ...user, status: newStatus })
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

// POST /api/auth/switch-role (Disabled for security)
export const switchRole = (req, res) => {
  return res.status(403).json({
    success: false,
    message: 'Chức năng chuyển đổi vai trò nhanh đã bị vô hiệu hóa vì lý do bảo mật. Vui lòng đăng nhập bằng đúng tài khoản của bạn.'
  });
};
