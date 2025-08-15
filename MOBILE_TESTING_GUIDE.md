# 📱 Mobile Testing Guide for ConvoCam

## 🚨 Common Mobile Connection Issues

### **Issue 1: "Failed to connect to video server"**

**Problem**: Mobile devices can't connect to `localhost:5000`

**Root Cause**: 
- `localhost` on mobile refers to the mobile device itself, not your development computer
- Mobile devices need to connect to your computer's actual IP address

**Solution**: Use your computer's IP address instead of localhost

---

## 🔧 Step-by-Step Mobile Testing Setup

### **Step 1: Find Your Computer's IP Address**

#### **On Windows:**
```bash
# Run this command in Command Prompt or PowerShell
ipconfig
```

Look for your IP address (usually starts with `192.168.x.x` or `10.x.x.x`)

#### **On Mac/Linux:**
```bash
# Run this command in Terminal
ifconfig
# or
ip addr
```

### **Step 2: Update the Configuration**

1. **Find your IP address** from Step 1
2. **Open** `frontend/src/environment.js`
3. **Replace** the placeholder IP address:

```javascript
// Replace '192.168.1.100' with your actual IP address
return 'http://YOUR_ACTUAL_IP:5000';
```

**Example**: If your IP is `192.168.1.50`, change it to:
```javascript
return 'http://192.168.1.50:5000';
```

### **Step 3: Restart Your Servers**

1. **Stop** both frontend and backend servers (Ctrl+C)
2. **Restart backend**:
   ```bash
   cd backend
   npm start
   ```
3. **Restart frontend**:
   ```bash
   cd frontend
   npm start
   ```

### **Step 4: Test on Mobile**

1. **Ensure** your mobile device is on the **SAME WiFi network** as your computer
2. **Open** your mobile browser
3. **Navigate** to: `http://YOUR_IP_ADDRESS:3000`
   
   **Example**: `http://192.168.1.50:3000`

---

## 🔍 Troubleshooting Mobile Issues

### **Issue: Still can't connect**

**Check these:**

1. **Same Network**: Both devices must be on the same WiFi
2. **Firewall**: Windows Firewall might be blocking connections
3. **Antivirus**: Some antivirus software blocks local connections
4. **Router Settings**: Some routers block local network communication

### **Issue: Camera/Microphone not working**

**Solutions:**

1. **Use HTTPS**: Mobile browsers require HTTPS for camera access
2. **Use localhost**: For testing, use `localhost:3000` on the same device
3. **Check Permissions**: Allow camera/microphone when prompted

### **Issue: Poor video quality on mobile**

**Solutions:**

1. **Reduce video quality** in `environment.js`:
   ```javascript
   VIDEO_CONSTRAINTS_MOBILE: {
     width: { ideal: 320, max: 640 },  // Lower resolution
     height: { ideal: 240, max: 480 },
     frameRate: { ideal: 15, max: 24 }  // Lower frame rate
   }
   ```

2. **Check internet speed** on mobile device
3. **Close other apps** using camera/microphone

---

## 🛠️ Alternative Solutions

### **Solution 1: Use ngrok (Recommended for Testing)**

1. **Install ngrok**:
   ```bash
   npm install -g ngrok
   ```

2. **Expose your backend**:
   ```bash
   ngrok http 5000
   ```

3. **Use the ngrok URL** in your environment.js:
   ```javascript
   SOCKET_URL: 'https://your-ngrok-url.ngrok.io'
   ```

### **Solution 2: Use Local Network Discovery**

1. **Enable network discovery** on Windows
2. **Use computer name** instead of IP:
   ```javascript
   SOCKET_URL: 'http://YOUR_COMPUTER_NAME:5000'
   ```

### **Solution 3: Use USB Debugging (Android)**

1. **Enable USB debugging** on Android
2. **Connect via USB**
3. **Use ADB port forwarding**:
   ```bash
   adb reverse tcp:3000 tcp:3000
   adb reverse tcp:5000 tcp:5000
   ```

---

## 📋 Mobile Testing Checklist

- [ ] Computer and mobile on same WiFi network
- [ ] IP address correctly configured in environment.js
- [ ] Backend server restarted with new configuration
- [ ] Frontend server restarted
- [ ] Mobile browser can access the frontend URL
- [ ] Camera and microphone permissions granted
- [ ] Video call connects successfully
- [ ] Audio and video work properly
- [ ] Screen sharing works (if supported)
- [ ] Chat functionality works

---

## 🚀 Quick Test Commands

### **Find IP Address (Windows)**
```bash
get-ip-address.bat
```

### **Test Backend Connection**
```bash
curl http://YOUR_IP:5000/api/health
```

### **Test Frontend Connection**
Open in browser: `http://YOUR_IP:3000`

---

## 📞 Support

If you're still having issues:

1. **Check browser console** for specific error messages
2. **Verify network connectivity** between devices
3. **Try different browsers** (Chrome, Safari, Firefox)
4. **Check device compatibility** with WebRTC
5. **Use the troubleshooting guide** in the main README

---

## 🔒 Security Note

**For Production:**
- Use HTTPS for all connections
- Implement proper authentication
- Use TURN servers for NAT traversal
- Configure proper CORS settings
- Add rate limiting and security headers

**For Development:**
- The current setup is for local testing only
- Don't expose these ports to the internet
- Use ngrok or similar tools for secure testing
