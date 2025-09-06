# Easy Render Deployment Guide

## 🚀 One-Click Deployment

1. **Go to [Render.com](https://render.com)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**: `https://github.com/ggvignesh/wotnot-additional-feature.git`
4. **Use these settings:**
   - **Name**: `wotnot-app`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements.txt && cd frontend/app && npm install && npm run build`
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

## 📝 Optional Environment Variables:
- `SECRET_KEY` - Add a random string for security
- `DATABASE_URL` - If you need a database later
