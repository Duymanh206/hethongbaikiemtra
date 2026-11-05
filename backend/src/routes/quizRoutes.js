import express from 'express';
import multer from 'multer';
import {
  getAllQuizzes,
  getQuizById,
  getQuizExamQuestions,
  getCoursesWithTopics,
  importDocxQuiz,
  createQuiz,
  addReview,
  parseQuizTextController,
  deleteQuiz,
  getEnglishFlashcards
} from '../controllers/quizController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } });

router.get('/', getAllQuizzes);
router.get('/english/flashcards', getEnglishFlashcards);
router.get('/meta/courses-with-topics', getCoursesWithTopics);
router.get('/:id', getQuizById);
router.get('/:id/exam', getQuizExamQuestions);
router.post('/import-docx', upload.single('file'), importDocxQuiz);
router.post('/parse-text', parseQuizTextController);
router.post('/', createQuiz);
router.post('/:id/reviews', addReview);

// Delete quiz (Admin-only)
router.delete('/:id', deleteQuiz);
router.post('/:id/delete', deleteQuiz);

export default router;
