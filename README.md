# 🚀 Live Demo

Frontend (Vercel): https://task-manager-app-7pif.vercel.app

Backend (Render): https://task-manager-app-l7e9.onrender.com

# 🧩 Features

✅ Add new tasks with title & description

✅ Edit existing tasks easily

✅ Delete tasks instantly

✅ Filter tasks by status (Pending, In Progress, Completed)

✅ Pagination for better task management

✅ MongoDB Atlas integration for cloud storage

✅ Responsive UI built with React

✅ Deployed on Render (backend) and Vercel (frontend)

# 🏗️ Tech Stack

### Frontend
React

Axios

React Icons

CSS

### Backend
Node.js

Express.js

Mongoose (MongoDB ODM)

MongoDB Atlas (Database)

CORS

dotenv

# ⚙️ Installation (Local Setup)

### 1️⃣ Clone the Repository
git clone https://github.com/DevarathN/Task-Manager-App.git

### 2️⃣ Setup Backend
<pre>cd backend 

npm install</pre>


Create a .env file in your backend folder

.env should look like this

<pre>PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

CLIENT_URL=http://localhost:3000</pre>

Run Backend

<pre>npm start</pre>

### 3️⃣ Setup Frontend

<pre>cd ../frontend

npm install</pre>

Create a .env file in the frontend folder as well with the following values
REACT_APP_API_URL=http://localhost:5000/api/tasks

Run the frontend:

<pre>npm start</pre>

Frontend: http://localhost:3000

Backend: http://localhost:5000

# 🌐 Deployment
### Backend (Render)

Push your backend to GitHub.

Go to [Render.com](https://render.com/)

Step 1- Create a New Web Service → connect your repo.

Step 2- Add environment variables:

<pre>MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=https://your-frontend.vercel.app</pre>
Make sure root directory is backend or whatever folder name you have provided for storing backend files

Deploy!

### Frontend (Vercel)

Push your frontend to GitHub.

Go to [Vercel.com](https://vercel.com/)

Create a New Project → select frontend as Root Directory.

Add an environment variable:

REACT_APP_API_URL=https://your-backend.onrender.com/api/tasks


Deploy!

