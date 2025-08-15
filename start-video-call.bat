@echo off
echo Starting Video Call Application...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm start"

echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Frontend Application...
start "Frontend App" cmd /k "cd frontend && npm start"

echo.
echo Both servers are starting...
echo Backend will be available at: http://localhost:5000
echo Frontend will be available at: http://localhost:3000
echo.
echo To test video calls:
echo 1. Open http://localhost:3000 in your browser
echo 2. Create or join a meeting
echo 3. Open the same meeting URL in another browser tab or incognito window
echo 4. Both users should be able to see each other's video
echo.
pause
