import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import attemptRoutes from './routes/attemptRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import { db } from './database/db.js';
import { initAuthAccounts } from './controllers/authController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize default student & teacher accounts
initAuthAccounts();

const app = express();

app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    system: 'Online Quiz & Real-time Battle Platform API',
    timestamp: new Date().toISOString()
  });
});

// API Routes (supports both /api/path and /path when behind Vercel serverless proxy)
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/quizzes', quizRoutes);
app.use('/quizzes', quizRoutes);

app.use('/api/attempts', attemptRoutes);
app.use('/attempts', attemptRoutes);

app.use('/api/analytics', analyticsRoutes);
app.use('/analytics', analyticsRoutes);

app.use('/api/ai', aiRoutes);
app.use('/ai', aiRoutes);

// Serve frontend static build if available
const frontendDistPath = path.join(__dirname, '..', '..', 'frontend', 'dist');
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/socket.io')) {
      return next();
    }
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ success: false, message: err.message || 'Lỗi hệ thống máy chủ' });
});

export default app;
