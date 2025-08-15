@echo off
echo Finding your computer's IP address for mobile testing...
echo.

echo Your computer's IP addresses:
ipconfig | findstr "IPv4"

echo.
echo ========================================
echo INSTRUCTIONS FOR MOBILE TESTING:
echo ========================================
echo.
echo 1. Look for your IP address above (usually starts with 192.168.x.x)
echo 2. Make sure your mobile device is on the SAME WiFi network as your computer
echo 3. Update the IP address in frontend/src/environment.js
echo 4. Replace '192.168.1.100' with your actual IP address
echo 5. Restart both frontend and backend servers
echo 6. On your mobile device, go to: http://YOUR_IP_ADDRESS:3000
echo.
echo Example: If your IP is 192.168.1.50, use http://192.168.1.50:3000
echo.
pause
