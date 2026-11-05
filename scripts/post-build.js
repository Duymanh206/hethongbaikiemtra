import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const frontendDist = path.join(rootDir, 'frontend', 'dist');
const rootDist = path.join(rootDir, 'dist');
const backendDist = path.join(rootDir, 'backend', 'dist');

console.log('[POST-BUILD] Ensuring dist directories exist across root and backend...');

// Server entrypoint fallback code
const serverCode = `import app from '../../backend/src/app.js';\nexport default app;\n`;

// 1. Put entrypoint files in frontend/dist if it exists
if (fs.existsSync(frontendDist)) {
  fs.writeFileSync(path.join(frontendDist, 'index.js'), serverCode);
  fs.writeFileSync(path.join(frontendDist, 'app.js'), serverCode);
  fs.writeFileSync(path.join(frontendDist, 'server.js'), serverCode);
  
  // 2. Sync to root/dist
  fs.mkdirSync(rootDist, { recursive: true });
  fs.cpSync(frontendDist, rootDist, { recursive: true });

  // 3. Sync to backend/dist
  fs.mkdirSync(backendDist, { recursive: true });
  fs.cpSync(frontendDist, backendDist, { recursive: true });

  console.log('[POST-BUILD] Successfully synced dist to root/dist and backend/dist!');
} else {
  // If frontendDist does not exist, create minimal fallback dist in all locations
  [frontendDist, rootDist, backendDist].forEach(d => {
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, 'index.html'), '<!DOCTYPE html><html><body><h1>Quizz System</h1></body></html>');
    fs.writeFileSync(path.join(d, 'index.js'), serverCode);
    fs.writeFileSync(path.join(d, 'app.js'), serverCode);
    fs.writeFileSync(path.join(d, 'server.js'), serverCode);
  });
}
