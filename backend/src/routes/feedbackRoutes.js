import express from 'express';
import {
  submitFeedback,
  getAllFeedback,
  updateFeedbackStatus,
  deleteFeedback
} from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/all', getAllFeedback);
router.post('/:id/status', updateFeedbackStatus);
router.delete('/:id', deleteFeedback);

export default router;

