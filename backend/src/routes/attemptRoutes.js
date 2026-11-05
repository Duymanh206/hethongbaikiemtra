import express from 'express';
import {
  startAttempt,
  syncAttemptState,
  recordViolation,
  submitAttempt,
  getAttemptResult,
  getUserAttemptsHistory
} from '../controllers/attemptController.js';

const router = express.Router();

router.post('/start', startAttempt);
router.put('/:id/sync', syncAttemptState);
router.post('/:id/violation', recordViolation);
router.post('/:id/submit', submitAttempt);
router.get('/:id/result', getAttemptResult);
router.get('/history/all', getUserAttemptsHistory);

export default router;

