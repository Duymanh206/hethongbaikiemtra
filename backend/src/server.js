import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import { setupBattleSocket } from './sockets/battleHandler.js';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Initialize Socket.io with permissive CORS for real-time multiplayer
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Setup battle socket events
setupBattleSocket(io);

server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 QUIZ & BATTLE SERVER RUNNING ON PORT ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`=================================================`);
});

