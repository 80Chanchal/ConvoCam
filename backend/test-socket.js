import { createServer } from 'http';
import { connectToSocket } from './src/controllers/socketManager.js';

const server = createServer();
const io = connectToSocket(server);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Test socket server running on port ${PORT}`);
  console.log('Socket server is ready for video calls!');
});

// Add some basic logging
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});
