import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToSocket } from './src/controllers/socketManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// Middleware - Allow connections from any local network IP
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.47.118.238:3000", // Your specific IP
    /^http:\/\/192\.168\.\d+\.\d+:3000$/, // Allow any 192.168.x.x IP
    /^http:\/\/10\.\d+\.\d+\.\d+:3000$/,  // Allow any 10.x.x.x IP
    /^http:\/\/172\.(1[6-9]|2[0-9]|3[0-1])\.\d+\.\d+:3000$/, // Allow 172.16-31.x.x IPs
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Connect Socket.IO with video call manager
const io = connectToSocket(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log('Server is accessible from any local network device');
  console.log('For mobile testing, use your computer\'s IP address');
});
