#!/bin/bash

echo "🚀 ConvoCam Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    exit 1
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No remote origin found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/convocam.git"
    exit 1
fi

echo "✅ Git repository found"

# Build the frontend
echo "📦 Building frontend..."
cd frontend
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi
cd ..

echo "✅ Frontend built successfully"

# Commit and push changes
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ Failed to push to GitHub"
    exit 1
fi

echo "✅ Code pushed to GitHub successfully"

echo ""
echo "🎉 Ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Configure:"
echo "   - Framework: Create React App"
echo "   - Root Directory: frontend"
echo "   - Build Command: npm run build"
echo "   - Output Directory: build"
echo "5. Add environment variables:"
echo "   REACT_APP_API_URL=https://your-backend-domain.com"
echo "   REACT_APP_SOCKET_URL=https://your-backend-domain.com"
echo "6. Deploy!"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
