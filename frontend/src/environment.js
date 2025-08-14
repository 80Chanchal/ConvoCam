// Environment configuration
export const config = {
  // Backend API URL
  API_URL: process.env.REACT_APP_API_URL || 'https://your-backend-domain.com',
  
  // Socket.IO server URL
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || 'https://your-backend-domain.com',
  
  // STUN servers for WebRTC
  STUN_SERVERS: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ],
  
  // TURN servers (if available)
  TURN_SERVERS: [],
  
  // Video constraints
  VIDEO_CONSTRAINTS: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
    frameRate: { ideal: 30 }
  },
  
  // Audio constraints
  AUDIO_CONSTRAINTS: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true
  }
};

export default config;
