# 🎥 ConvoCam - Modern Video Calling Platform

A beautiful, responsive, and feature-rich video calling application built with React and Node.js.

## ✨ Features

### 🎯 Core Features
- **HD Video Calls** - Crystal clear video and audio quality
- **Meeting Creation** - Generate unique meeting codes instantly
- **Shareable Links** - Easy meeting sharing with copy-to-clipboard
- **Real-time Chat** - Advanced chat with file sharing and emojis
- **Screen Sharing** - Share your screen during calls
- **Meeting History** - Track all your past meetings
- **Mobile Responsive** - Works perfectly on all devices

### 🎨 Design Features
- **Modern UI/UX** - Beautiful gradient designs and animations
- **Glassmorphism Effects** - Contemporary visual design
- **Responsive Layout** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Engaging user interactions
- **Professional Typography** - Clean and readable text

### 🔒 Security Features
- **End-to-End Encryption** - Secure communication
- **Private Meetings** - Password-protected rooms
- **User Authentication** - Secure login and registration
- **Meeting Privacy** - Control who joins your meetings

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ConvoCam
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the backend server**
   ```bash
   cd ../backend
   npm run dev
   ```

5. **Start the frontend application**
   ```bash
   cd ../frontend
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

### Creating a Meeting
1. Sign up or log in to your account
2. Click "Create Meeting" on the home page
3. Share the generated link with participants
4. Start your video call

### Joining a Meeting
1. Enter the meeting code in the input field
2. Click "Join Meeting"
3. Allow camera and microphone permissions
4. Start communicating!

### Using Chat
1. Click the chat icon during a call
2. Type your message and press Enter
3. Attach files using the paperclip icon
4. Use emojis for expressive communication

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **Material-UI** - Component library
- **Socket.IO Client** - Real-time communication
- **WebRTC** - Peer-to-peer video calls
- **CSS Modules** - Styled components

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time server
- **MongoDB** - Database (optional)
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
ConvoCam/
├── backend/
│   ├── app.js              # Main server file
│   ├── package.json        # Backend dependencies
│   └── src/
│       ├── controllers/    # Business logic
│       ├── models/         # Data models
│       └── routes/         # API routes
├── frontend/
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── styles/         # CSS modules
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Purple)
- **Secondary**: `#764ba2` (Deep Purple)
- **Accent**: `#4ecdc4` (Teal)
- **Success**: `#28a745` (Green)
- **Warning**: `#ffc107` (Yellow)
- **Error**: `#dc3545` (Red)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights with gradient text
- **Body**: Regular weight with good line height

### Spacing
- **Grid System**: 8px base unit
- **Padding**: 16px, 24px, 32px
- **Margins**: 8px, 16px, 24px, 32px

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Configuration
Update `frontend/src/environment.js` for custom settings:

```javascript
export const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000',
  // ... other settings
};
```

## 🚀 Deployment

### Backend Deployment
1. Set up your production environment
2. Configure environment variables
3. Run `npm run prod` for production mode

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure your domain and SSL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Material-UI** for the component library
- **Socket.IO** for real-time communication
- **WebRTC** for peer-to-peer video calls
- **Unsplash** for beautiful images

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ by the ConvoCam Team**
