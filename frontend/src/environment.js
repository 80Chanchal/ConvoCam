// Environment configuration
export const config = {
  // Backend API URL
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  
  // Socket.IO server URL
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000',
  
  // STUN servers for WebRTC
  STUN_SERVERS: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' }
  ],
  
  // TURN servers (if available) - Add your TURN server credentials here
  TURN_SERVERS: [
    // Example TURN server configuration:
    // {
    //   urls: 'turn:your-turn-server.com:3478',
    //   username: 'your-username',
    //   credential: 'your-password'
    // }
  ],
  
  // Video constraints for desktop
  VIDEO_CONSTRAINTS_DESKTOP: {
    width: { ideal: 1280, max: 1920 },
    height: { ideal: 720, max: 1080 },
    frameRate: { ideal: 30, max: 60 }
  },
  
  // Video constraints for mobile
  VIDEO_CONSTRAINTS_MOBILE: {
    width: { ideal: 640, max: 1280 },
    height: { ideal: 480, max: 720 },
    frameRate: { ideal: 24, max: 30 },
    facingMode: 'user'
  },
  
  // Audio constraints
  AUDIO_CONSTRAINTS: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
    sampleRate: { ideal: 48000 },
    channelCount: { ideal: 2 }
  }
};

// Helper function to detect mobile devices
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Helper function to get appropriate video constraints
export const getVideoConstraints = () => {
  return isMobile() ? config.VIDEO_CONSTRAINTS_MOBILE : config.VIDEO_CONSTRAINTS_DESKTOP;
};

export default config;
