import express from 'express';
import { generateDetailedExplanation, convertTextToJsonQuiz } from '../services/aiService.js';
import { db } from '../database/db.js';

const router = express.Router();

router.post('/explain', async (req, res) => {
  try {
    const { questionId, userAnswer } = req.body;
    const question = db.findOne('questions', q => q.id === questionId);
    if (!question) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy câu hỏi' });
    }

    const options = db.find('question_options', o => o.questionId === questionId);
    const explanation = await generateDetailedExplanation(question, userAnswer, options);

    res.json({ success: true, data: explanation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/convert-text', (req, res) => {
  try {
    const { rawText } = req.body;
    if (!rawText || !rawText.trim()) {
      return res.status(400).json({ success: false, message: 'Nội dung văn bản không được để trống' });
    }

    const result = convertTextToJsonQuiz(rawText);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

