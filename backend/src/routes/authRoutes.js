import express from 'express';
import { 
  register, 
  login, 
  getMe, 
  logout, 
  switchRole 
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);
router.post('/logout', logout);
router.post('/switch-role', switchRole);

export default router;
