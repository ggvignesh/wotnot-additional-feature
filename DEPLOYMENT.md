# Deployment Guide for Render

## Backend Deployment

### Environment Variables to set in Render:
- `DATABASE_URL` - Will be automatically provided by Render PostgreSQL service
- `SECRET_KEY` - Generate a secure random string
- `ALGORITHM` - Set to "HS256"
- `ACCESS_TOKEN_EXPIRE_MINUTES` - Set to "30"

### Build Command:
```bash
pip install -r backend/requirements.txt
```

### Start Command:
```bash
cd backend/wati && uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Frontend Deployment

### Environment Variables to set in Render:
- `VUE_APP_API_URL` - Set to your backend service URL (e.g., https://wotnot-backend.onrender.com)
- `VUE_APP_WS_URL` - Set to your backend WebSocket URL (e.g., wss://wotnot-backend.onrender.com/ws)

### Build Command:
```bash
cd frontend/app && npm install && npm run build
```

### Publish Directory:
```
frontend/app/dist
```

## Database Setup

The PostgreSQL database will be automatically created by Render. Make sure to:
1. Create a PostgreSQL service in Render
2. Connect it to your backend service
3. The DATABASE_URL will be automatically provided

## Services to Deploy:

1. **Backend Service** (Python/Web)
   - Source: GitHub repository
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `cd backend/wati && uvicorn main:app --host 0.0.0.0 --port $PORT`

2. **Frontend Service** (Static Site)
   - Source: GitHub repository
   - Build Command: `cd frontend/app && npm install && npm run build`
   - Publish Directory: `frontend/app/dist`

3. **Database Service** (PostgreSQL)
   - Plan: Free tier
   - Database name: wotnot
