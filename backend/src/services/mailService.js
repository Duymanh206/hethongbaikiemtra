import { db } from '../database/db.js';

// Admin email address (Hoàng Duy Mạnh)
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'manhvipsv@gmail.com';

/**
 * Dispatch approval notification email to Admin (Hoàng Duy Mạnh)
 */
export async function sendAdminApprovalEmail({ user, approvalLink, rejectLink }) {
  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const roleText = user.role === 'teacher' ? '👨‍🏫 Giảng viên' : '🎓 Sinh viên';

  const emailSubject = `[Quizz. PRO] 🔔 Yêu cầu phê duyệt tài khoản: ${user.fullName} (${user.studentId})`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px; color: #ffffff; text-align: center; }
        .content { padding: 28px; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: #dbeafe; color: #1e40af; font-size: 12px; font-weight: bold; margin-bottom: 12px; }
        .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #f8fafc; border-radius: 12px; overflow: hidden; }
        .info-table td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        .info-table td.label { font-weight: 600; color: #64748b; width: 38%; }
        .info-table td.value { font-weight: 700; color: #0f172a; }
        .actions { text-align: center; margin: 30px 0 10px; }
        .btn { display: inline-block; padding: 14px 28px; border-radius: 12px; font-size: 14px; font-weight: bold; text-decoration: none; margin: 6px; }
        .btn-approve { background: #16a34a; color: #ffffff !important; box-shadow: 0 4px 10px rgba(22, 163, 74, 0.3); }
        .btn-reject { background: #fee2e2; color: #991b1b !important; }
        .footer { padding: 16px; background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2 style="margin: 0; font-size: 22px;">Quizz. Online Battle Pro</h2>
          <p style="margin: 6px 0 0; opacity: 0.9; font-size: 13px;">Hệ Thống Quản Trị & Khảo Thí Trực Tuyến</p>
        </div>
        <div class="content">
          <div class="badge">YÊU CẦU ĐĂNG KÝ MỚI</div>
          <h3 style="margin: 0 0 8px; color: #0f172a; font-size: 18px;">Kính gửi Quản trị viên Hoàng Duy Mạnh,</h3>
          <p style="font-size: 14px; color: #475569; line-height: 1.5;">
            Hệ thống vừa nhận được yêu cầu đăng ký tài khoản mới từ người dùng dưới đây. Vui lòng xem xét thông tin và xác nhận phê duyệt:
          </p>

          <table class="info-table">
            <tr>
              <td class="label">Họ và tên:</td>
              <td class="value">${user.fullName}</td>
            </tr>
            <tr>
              <td class="label">Mã sinh viên (MSSV):</td>
              <td class="value">${user.studentId}</td>
            </tr>
            <tr>
              <td class="label">Tên tài khoản:</td>
              <td class="value">${user.username}</td>
            </tr>
            <tr>
              <td class="label">Email người dùng:</td>
              <td class="value">${user.email || 'Chưa cung cấp'}</td>
            </tr>
            <tr>
              <td class="label">Vai trò đăng ký:</td>
              <td class="value">${roleText}</td>
            </tr>
            <tr>
              <td class="label">Thời gian đăng ký:</td>
              <td class="value">${timestamp}</td>
            </tr>
          </table>

          <div class="actions">
            <a href="${approvalLink}" class="btn btn-approve">
              ✓ ĐỒNG Ý PHÊ DUYỆT TÀI KHOẢN
            </a>
            <a href="${rejectLink}" class="btn btn-reject">
              ✕ TỪ CHỐI
            </a>
          </div>

          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 20px;">
            Sau khi bạn bấm <b>Đồng ý</b>, người dùng này sẽ lập tức được kích hoạt và có thể đăng nhập vào làm bài cũng như tạo đề thi.
          </p>
        </div>
        <div class="footer">
          Quizz. Online Battle Pro • Quản trị viên: Hoàng Duy Mạnh (dtc245200060)
        </div>
      </div>
    </body>
    </html>
  `;

  // 1. Log to database for in-app Admin Notification Dashboard
  try {
    const notification = {
      id: `notif_${Date.now()}`,
      userId: user.id,
      userName: user.fullName,
      studentId: user.studentId,
      userRole: user.role,
      approvalToken: user.approvalToken,
      approvalLink,
      rejectLink,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    db.insert('system_notifications', notification);
  } catch (err) {
    console.error('Failed to log notification:', err);
  }

  // 2. Dispatch real email via FormSubmit API (Sends directly to manhvipsv@gmail.com with zero configuration)
  try {
    const fsRes = await fetch(`https://formsubmit.co/ajax/${ADMIN_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: emailSubject,
        _template: 'box',
        _captcha: 'false',
        _replyto: user.email || 'noreply@student.edu.vn',
        'TIÊU ĐỀ': 'YÊU CẦU PHÊ DUYỆT TÀI KHOẢN MỚI',
        'Kính gửi': 'Quản trị viên Hoàng Duy Mạnh',
        'Họ và tên thí sinh': user.fullName,
        'Mã sinh viên (MSSV)': user.studentId,
        'Tên tài khoản': user.username,
        'Email thí sinh': user.email || 'Chưa cung cấp',
        'Vai trò': roleText,
        'Thời gian đăng ký': timestamp,
        '👉 BẤM VÀO ĐÂY ĐỂ PHÊ DUYỆT NGAY': approvalLink,
        '👉 BẤM VÀO ĐÂY ĐỂ TỪ CHỐI': rejectLink
      }),
      signal: AbortSignal.timeout(6000)
    });
    const fsJson = await fsRes.json().catch(() => ({}));
    console.log(`[EMAIL DISPATCHED VIA FORMSUBMIT] Sent to ${ADMIN_EMAIL}:`, fsJson);
  } catch (err) {
    console.warn('[FORMSUBMIT DISPATCH NOTICE]', err.message);
  }

  // 3. Dispatch real email via Web3Forms API (High-delivery zero-config direct mailbox dispatch)
  try {
    const w3Res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'e7323ff6-2d1f-4efc-8b83-a75d50688972',
        to: ADMIN_EMAIL,
        from_name: 'Quizz Online Battle Pro',
        subject: emailSubject,
        message: `Kính gửi Quản trị viên Hoàng Duy Mạnh,\n\nHệ thống có yêu cầu đăng ký tài khoản mới:\n- Họ và tên: ${user.fullName}\n- MSSV: ${user.studentId}\n- Tên tài khoản: ${user.username}\n- Email: ${user.email || 'Chưa cung cấp'}\n- Vai trò: ${roleText}\n- Thời gian: ${timestamp}\n\n👉 BẤM VÀO ĐÂY ĐỂ PHÊ DUYỆT NGAY:\n${approvalLink}\n\n👉 BẤM VÀO ĐÂY ĐỂ TỪ CHỐI:\n${rejectLink}`
      }),
      signal: AbortSignal.timeout(6000)
    });
    const w3Json = await w3Res.json().catch(() => ({}));
    console.log(`[EMAIL DISPATCHED VIA WEB3FORMS] Sent to ${ADMIN_EMAIL}:`, w3Json);
  } catch (err) {
    console.warn('[WEB3FORMS DISPATCH NOTICE]', err.message);
  }

  // 3. Dispatch real email via Resend API if API key is provided
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Quizz System <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: emailSubject,
          html: emailHtml
        })
      });
      console.log(`[EMAIL DISPATCHED VIA RESEND] Sent to ${ADMIN_EMAIL}`);
    } catch (err) {
      console.error('[EMAIL DISPATCH ERROR]', err);
    }
  }

  // 3. Dispatch via Webhook if webhook URL provided
  if (process.env.EMAIL_WEBHOOK_URL) {
    try {
      await fetch(process.env.EMAIL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: ADMIN_EMAIL,
          subject: emailSubject,
          user,
          approvalLink,
          rejectLink,
          timestamp
        })
      });
    } catch (err) {
      console.error('[EMAIL WEBHOOK ERROR]', err);
    }
  }

  // 4. Output to server console for immediate 1-click local/server testing
  console.log(`\n======================================================`);
  console.log(`📧 [NEW REGISTRATION PENDING ADMIN APPROVAL]`);
  console.log(`   Candidate: ${user.fullName} (${user.studentId})`);
  console.log(`   Username:  ${user.username} | Role: ${user.role}`);
  console.log(`   APPROVE LINK: ${approvalLink}`);
  console.log(`   REJECT LINK:  ${rejectLink}`);
  console.log(`======================================================\n`);

  return { success: true, emailSentTo: ADMIN_EMAIL };
}

