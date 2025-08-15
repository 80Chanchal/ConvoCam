# Video Call Troubleshooting Guide

## Issues Fixed

### 1. Backend Socket Manager Not Connected
**Problem**: The `socketManager.js` was not being used in the main backend application.
**Solution**: Updated `backend/app.js` to properly import and use the video call socket manager.

### 2. Environment Configuration Issues
**Problem**: Placeholder URLs in `environment.js` were preventing proper connections.
**Solution**: Updated URLs to use `localhost:5000` for development.

### 3. WebRTC Configuration Issues
**Problem**: Minimal STUN server configuration and missing connection optimizations.
**Solution**: Added multiple STUN servers and improved WebRTC configuration.

### 4. Missing Error Handling
**Problem**: No proper error handling for connection failures.
**Solution**: Added comprehensive error handling and debugging logs.

## How to Test Multi-User Video Calls

### Prerequisites
1. Make sure both frontend and backend are running
2. Backend should be on port 5000
3. Frontend should be on port 3000

### Testing Steps

1. **Start the Backend**:
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm start
   ```

3. **Test with Multiple Users**:
   - Open the app in one browser tab
   - Create or join a meeting
   - Open the same meeting URL in another browser tab (or incognito window)
   - Both users should be able to see each other's video

### Debugging

1. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Look for connection logs and errors
   - Verify socket connection is established

2. **Check Backend Logs**:
   - Monitor the backend console for connection events
   - Look for any error messages

3. **Network Issues**:
   - Ensure both users are on the same network or have proper internet access
   - Check if firewall is blocking WebRTC connections

## Common Issues and Solutions

### Issue: "Failed to connect to video server"
**Solution**: 
- Check if backend is running on port 5000
- Verify the SOCKET_URL in environment.js
- Check browser console for specific error messages

### Issue: "Camera access denied"
**Solution**:
- Allow camera and microphone permissions in browser
- Use HTTPS or localhost for testing
- Check if camera is being used by another application

### Issue: Users can't see each other
**Solution**:
- Check if both users are in the same meeting room
- Verify WebRTC connection states in browser console
- Ensure STUN servers are accessible

### Issue: Poor video quality
**Solution**:
- Check internet connection speed
- Reduce video resolution in environment.js
- Close other bandwidth-intensive applications

## Advanced Configuration

### Adding TURN Servers
For better connectivity across different networks, add TURN servers:

```javascript
// In environment.js
TURN_SERVERS: [
  {
    urls: 'turn:your-turn-server.com:3478',
    username: 'your-username',
    credential: 'your-password'
  }
]
```

### Production Deployment
For production:
1. Update environment variables with your domain
2. Use HTTPS for both frontend and backend
3. Add proper TURN servers
4. Configure CORS properly

## Testing Checklist

- [ ] Backend server starts without errors
- [ ] Frontend connects to backend successfully
- [ ] Camera and microphone permissions are granted
- [ ] Local video displays correctly
- [ ] Multiple users can join the same meeting
- [ ] Users can see each other's video
- [ ] Audio works between users
- [ ] Users can leave and rejoin meetings
- [ ] Chat functionality works

## Support

If you're still experiencing issues:
1. Check the browser console for specific error messages
2. Verify all prerequisites are met
3. Test with different browsers
4. Check network connectivity and firewall settings
