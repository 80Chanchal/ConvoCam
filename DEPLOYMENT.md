# 🚀 ConvoCam Deployment Guide

## Deploying to Vercel

### Prerequisites
- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com)
- Your ConvoCam project pushed to GitHub

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

### Step 2: Deploy Frontend to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Click "New Project"**

3. **Import your GitHub repository**

4. **Configure the project:**
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

5. **Environment Variables (Add these):**
   ```
   REACT_APP_API_URL=https://your-backend-domain.com
   REACT_APP_SOCKET_URL=https://your-backend-domain.com
   ```

6. **Click "Deploy"**

### Step 3: Deploy Backend (Separate Service)

Since Vercel is for frontend deployment, you'll need to deploy your backend separately:

#### Option A: Railway (Recommended)
1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set root directory to `backend`
4. Add environment variables for your database and other services
5. Deploy

#### Option B: Render
1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set root directory to `backend`
5. Configure environment variables
6. Deploy

#### Option C: Heroku
1. Go to [Heroku](https://heroku.com)
2. Create a new app
3. Connect your GitHub repository
4. Set buildpacks for Node.js
5. Configure environment variables
6. Deploy

### Step 4: Update Environment Variables

After deploying your backend, update the environment variables in Vercel with your actual backend URL:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Update:
   ```
   REACT_APP_API_URL=https://your-backend-app.railway.app
   REACT_APP_SOCKET_URL=https://your-backend-app.railway.app
   ```

### Step 5: Configure CORS (Backend)

Make sure your backend allows requests from your Vercel domain:

```javascript
// In your backend app.js
app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'http://localhost:3000' // for development
  ],
  credentials: true
}));
```

### Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test the video call functionality
3. Check if Socket.IO connections work
4. Verify all features are working

### Troubleshooting

#### Common Issues:

1. **CORS Errors:**
   - Ensure your backend CORS configuration includes your Vercel domain
   - Check that environment variables are correctly set

2. **Socket.IO Connection Issues:**
   - Verify the SOCKET_URL environment variable
   - Check if your backend supports WebSocket connections

3. **Build Errors:**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are properly installed

4. **Environment Variables Not Working:**
   - Redeploy after adding environment variables
   - Check variable names (must start with `REACT_APP_`)

### Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to separate service
- [ ] Environment variables configured
- [ ] CORS properly configured
- [ ] Database connected and working
- [ ] Socket.IO connections working
- [ ] Video calls functional
- [ ] All features tested

### Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

### Monitoring

- Use Vercel Analytics to monitor performance
- Set up error tracking with Sentry
- Monitor your backend service logs
- Set up uptime monitoring

---

**Your ConvoCam app will be live at:** `https://your-app.vercel.app`
