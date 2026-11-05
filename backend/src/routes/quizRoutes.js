import express from 'express';
import multer from 'multer';
import {
  getAllQuizzes,
  getQuizById,
  getQuizExamQuestions,
  importDocxQuiz,
  createQuiz,
  addReview
} from '../controllers/quizController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } });

router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.get('/:id/exam', getQuizExamQuestions);
router.post('/import-docx', upload.single('file'), importDocxQuiz);
router.post('/', createQuiz);
router.post('/:id/reviews', addReview);

export default router;

