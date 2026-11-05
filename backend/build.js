import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('[BACKEND-BUILD] Preparing backend output directory for Vercel...');

const distDir = path.join(__dirname, 'dist');
fs.mkdirSync(distDir, { recursive: true });

// 1. Entrypoint server code explicitly importing express for Vercel Express analyzer
const serverCode = `import express from 'express';\nimport app from '../src/app.js';\nexport default app;\n`;
fs.writeFileSync(path.join(distDir, 'index.js'), serverCode);
fs.writeFileSync(path.join(distDir, 'app.js'), serverCode);
fs.writeFileSync(path.join(distDir, 'server.js'), serverCode);

// 2. Copy frontend assets if available
const frontendDist = path.resolve(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(frontendDist)) {
  fs.cpSync(frontendDist, distDir, { recursive: true });
  console.log('[BACKEND-BUILD] Copied frontend/dist to backend/dist');
} else {
  const htmlContent = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><title>Quizz System</title></head><body><div id="root"></div></body></html>`;
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
}

console.log('[BACKEND-BUILD] backend/dist is ready!');
