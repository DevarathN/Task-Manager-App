🚀 Live Demo

Frontend (Vercel): https://task-manager-app-7pif.vercel.app

Backend (Render): https://task-manager-app-l7e9.onrender.com

🧩 Features

✅ Add new tasks with title & description
✅ Edit existing tasks
✅ Delete tasks
✅ Filter tasks by status (Pending, In Progress, Completed)
✅ Pagination for better task management
✅ MongoDB Atlas integration
✅ Responsive UI built with React
✅ Deployed on Render (backend) and Vercel (frontend)

🏗️ Tech Stack

Frontend
React
Axios
React Icons
CSS

Backend
Node.js
Express.js
Mongoose (MongoDB ODM)
MongoDB Atlas (Database)
CORS
dotenv

⚙️ Installation (Local Setup)

1️⃣ Clone the Repository
git clone https://github.com/DevarathN/Task-Manager-App.git

2️⃣ Setup Backend
cd backend 
npm install

Create a .env file in your backend folder
.env should look like this
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:3000

Run Backend
npm start

3️⃣ Setup Frontend
cd ../frontend
npm install

Create a .env file in the frontend folder as well with the following values
REACT_APP_API_URL=http://localhost:5000/api/tasks

Run the frontend:
npm start

Frontend: http://localhost:3000
Backend: http://localhost:5000

🌐 Deployment
Backend (Render)

Push your backend to GitHub.

Go to Render.com 
https://render.com/

Step 1- Create a New Web Service → connect your repo.

Step2- Add environment variables:

MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=https://your-frontend.vercel.app
Make sure root directory is backend or whatever folder name you have provided for storing backend files

Deploy!

Frontend (Vercel)

Push your frontend to GitHub.

Go to Vercel.com
https://vercel.com/

Create a New Project → select frontend as Root Directory.

Add an environment variable:

REACT_APP_API_URL=https://your-backend.onrender.com/api/tasks


Deploy!

