# Backend - Automated Resume Screening System

This backend service processes resumes, analyzes them using AI, and provides an API to retrieve match scores.

## 🚀 Features
- 📄 **Upload resumes** (PDF/DOCX)
- 🤖 **AI-powered match score** using **Google Gemini API**
- 📊 **Admin panel** to filter and review candidates
- ⚡ **Optimized Express API** with MVC architecture

## 📂 Folder Structure
```
backend/
│── src/
│   ├── controllers/       # Business logic
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   ├── services/          # External API (Google Gemini)
│   ├── config/            # Database connection
│   ├── middlewares/       # Middleware (auth, error handling)
│   ├── utils/             # Helper functions
│   ├── server.js          # Main entry point
│── .env                   # Environment variables
│── package.json           # Dependencies
│── README.md              # Backend documentation
```

## 🛠️ Setup Instructions

### 1️⃣ **Install Dependencies**
```sh
cd backend
npm install
```

### 2️⃣ **Setup Environment Variables**
Create a `.env` file in `backend/` and add:
```
PORT=5000
MONGO_URI=your_mongodb_string
GEMINI_API_KEY=your_google_api_key
```

### 3️⃣ **Run the Backend**
```sh
npm start
```
You should see:
```
MongoDB Connected: localhost
Server running on port 5000
```

## 🔥 API Endpoints
| Method | Endpoint           | Description                     |
|--------|-------------------|--------------------------------|
| POST   | `/api/resumes/upload` | Upload a resume (PDF/DOCX)    |
| GET    | `/api/resumes`      | Retrieve all resumes & scores |

## ✅ Future Enhancements
- 🔄 **Batch resume processing**
- 🏆 **AI-based job recommendations**
- 🔐 **Admin authentication**


