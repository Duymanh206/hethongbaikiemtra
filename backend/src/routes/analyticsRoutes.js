import express from 'express';
import { generateQuizAnalytics, exportQuizResultsToExcel } from '../services/exportService.js';

const router = express.Router();

router.get('/:quizId', (req, res) => {
  try {
    const analytics = generateQuizAnalytics(req.params.quizId);
    if (!analytics) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy dữ liệu bài thi' });
    }
    res.json({ success: true, data: analytics });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/:quizId/export-excel', (req, res) => {
  try {
    const buffer = exportQuizResultsToExcel(req.params.quizId);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="BangDiem_${req.params.quizId}.xlsx"`);
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

