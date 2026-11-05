import { db } from '../database/db.js';
import { ADMIN_EMAIL } from '../services/mailService.js';

// POST /api/feedback/submit
export const submitFeedback = async (req, res) => {
  try {
    const { name = 'Thí sinh', email = '', category = 'Góp ý chung', title = '', content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập nội dung góp ý' });
    }

    const newFeedback = {
      id: `fb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: (name || 'Ẩn danh').trim(),
      email: (email || '').trim(),
      category: category || 'Góp ý chung',
      title: (title || 'Góp ý hệ thống').trim(),
      content: content.trim(),
      status: 'unread', // 'unread' | 'read' | 'resolved'
      createdAt: new Date().toISOString()
    };

    db.insert('feedbacks', newFeedback);

    res.json({
      success: true,
      message: 'Cảm ơn bạn! Ý kiến đóng góp của bạn đã được chuyển tới Hòm thư Quản trị viên (Hoàng Duy Mạnh).',
      feedback: newFeedback
    });
  } catch (error) {
    console.error('submitFeedback error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/feedback/all
export const getAllFeedback = (req, res) => {
  try {
    const feedbacks = db.getTable('feedbacks') || [];
    const sorted = [...feedbacks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const unreadCount = sorted.filter(f => f.status === 'unread').length;

    res.json({
      success: true,
      unreadCount,
      totalCount: sorted.length,
      data: sorted
    });
  } catch (error) {
    console.error('getAllFeedback error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/feedback/:id/status
export const updateFeedbackStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status = 'read' } = req.body;

    const updated = db.update('feedbacks', f => f.id === id, { status });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phản hồi' });
    }

    res.json({ success: true, message: 'Đã cập nhật trạng thái thư góp ý!', feedback: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/feedback/:id
export const deleteFeedback = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = db.delete('feedbacks', f => f.id === id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy thư để xóa' });
    }

    res.json({ success: true, message: 'Đã xóa thư góp ý thành công!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

