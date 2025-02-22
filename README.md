# Automated Resume Screening

## Overview
This project is an **Automated Resume Screening System** that allows users to **upload their resumes**, which are then analyzed against a **job description** to generate a **match score**. The system stores resumes and scores, enabling admins to filter and review applicants based on relevance.

## Features
- **Resume Upload:** Users can upload resumes in **PDF** or **DOCX** format.
- **Job Description Matching:** Resumes are compared against a job description.
- **AI-Powered Scoring:
- **Admin Dashboard:** View and filter resumes by match score.

## Tech Stack
- **Backend:** Node.js (Express)
- **Database:** MongoDB (storing resumes, scores, job descriptions)
- **Frontend:** React.js (for UI)
- **AI API:** Google Gemini API (for match score generation)
- **Storage:** MongoDB GridFS (for resume files)

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A Google Cloud account with **Gemini API access**

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/resume-screening.git
   cd resume-screening
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your-mongodb-connection-string
   GOOGLE_API_KEY=your-google-gemini-api-key
   PORT=5000
   ```
4. **Run the application:**
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:5000`

## API Endpoints
| Method | Endpoint        | Description                   |
|--------|----------------|-------------------------------|
| POST   | `/upload`      | Uploads a resume             |
| GET    | `/resumes`     | Fetches all resumes & scores |
| GET    | `/resume/:id`  | Fetches a specific resume    |

## Deployment
To deploy, configure **Google Cloud**, set up **MongoDB Atlas**, and push to your hosting service (e.g., Vercel, AWS, Google Cloud Run).

<!-- ## Contributing
1. **Fork the repository**
2. **Create a new branch** (`feature/resume-upload`)
3. **Commit changes** (`git commit -m "Added resume upload"`)
4. **Push changes** (`git push origin feature/resume-upload`)
5. **Open a Pull Request**
 -->


