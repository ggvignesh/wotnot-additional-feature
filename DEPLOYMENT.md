# Easy Render Deployment Guide

## 🚀 One-Click Deployment

1. **Go to [Render.com](https://render.com)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**: `https://github.com/ggvignesh/wotnot-additional-feature.git`
4. **Use these settings:**
   - **Name**: `wotnot-app`
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Build Command**: `cd backend && npm install && cd ../frontend/app && npm install && npm run build`
   - **Start Command**: `cd backend && node server.js`
   - **Plan**: `Free`

5. **Click "Create Web Service"**

## ✅ That's it! 

Your app will automatically:
- Install Python dependencies
- Install Node.js dependencies  
- Build the Vue.js frontend
- Start the Express server
- Serve both frontend and backend from one URL

## 🔗 Your app will be available at:
`https://wotnot-app.onrender.com`

## 📝 Environment Variables to Add:
- `OPENAI_API_KEY` - Your OpenAI API key (required for AI features)
- `SECRET_KEY` - Add a random string for security (optional)
- `DATABASE_URL` - If you need a database later (optional)

### How to add environment variables in Render:
1. Go to your service dashboard
2. Click "Environment" tab
3. Add each variable with its value
4. Click "Save Changes"
