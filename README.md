# Sri Sukhmani Institute Website (MERN + Tailwind)

A full-stack college website built with:

- MongoDB + Mongoose
- Express.js
- React (Vite)
- Node.js
- Tailwind CSS v4

## Features

- Modern multi-page engineering college frontend
- B.Tech-only admissions flow with 4 departments (ME, EE, CSE, Civil)
- Department photos and syllabus assets integrated on the website
- Contact form (stored in MongoDB)
- Events listing + add event functionality
- Teacher Host section with full CRUD on store updates
- Student Store section to view teacher updates in real time
- Live campus stats endpoint
- Reusable React component architecture

## Project Structure

- `backend/` - Express API + MongoDB models
- `frontend/` - React + Tailwind client app

## Backend Setup

1. Go to backend folder:
   `cd backend`
2. Create env file:
   Copy `.env.example` to `.env`
3. Update MongoDB connection string in `.env`
5. Install dependencies (already installed):
   `npm install`
6. Start backend:
   `npm run dev`

Backend default URL: `http://localhost:4000`

## Frontend Setup

1. Go to frontend folder:
   `cd frontend`
2. Create env file:
   Copy `.env.example` to `.env`
3. Install dependencies (already installed):
   `npm install`
4. Start frontend:
   `npm run dev`

Frontend default URL: `http://localhost:5173`
