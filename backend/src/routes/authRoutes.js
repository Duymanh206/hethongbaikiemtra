import express from 'express';
import { 
  register, 
  login, 
  getMe, 
  logout, 
  switchRole,
  approveAccountByLink,
  getPendingUsers,
  approveUserByAdmin
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);
router.post('/logout', logout);
router.post('/switch-role', switchRole);

// Approval endpoints
router.get('/approve', approveAccountByLink);
router.get('/pending-users', getPendingUsers);
router.post('/approve-user', approveUserByAdmin);

export default router;
