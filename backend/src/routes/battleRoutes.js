import express from 'express';
import {
  createRoom,
  joinRoom,
  getRoom,
  startBattle,
  nextQuestion,
  submitAnswer,
  finishBattle
} from '../controllers/battleController.js';

const router = express.Router();

router.post('/create-room', createRoom);
router.post('/join-room', joinRoom);
router.get('/room/:pin', getRoom);
router.post('/start', startBattle);
router.post('/next-question', nextQuestion);
router.post('/submit-answer', submitAnswer);
router.post('/finish', finishBattle);

export default router;

