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
  
  // Video constraints for desktop
  VIDEO_CONSTRAINTS_DESKTOP: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
    frameRate: { ideal: 30 }
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
    autoGainControl: true
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
