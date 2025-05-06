📌 Description
TODO-APP is full-stack task management application built with the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to create, manage, and track tasks through a clean and responsive interface.

Designed for productivity and scalability, TODO-APP features full CRUD functionality, persistent database storage, and a well-structured frontend/backend architecture.

This project demonstrates end-to-end full-stack development, with a strong focus on backend architecture, frontend responsiveness, and RESTful API design.

🚀 Live Demo
🚧 Deployment in progress...
📽️ Watch demo video (coming soon)
🔗 Link to deployed app will go here

📸 Preview

![TODO-APP Preview](../assets/TODO-APP-preview.png)



⚙️ Features

    📝 Create, update, complete, and delete to-dos

    🎯 Mark items as complete/incomplete

    💾 Persistent storage via MongoDB

    🔄 Real-time updates using Axios

    📱 Responsive layout for desktop and mobile

    🔐 (Planned) User authentication with JWT

    🏷️ (Planned) Categorize and filter tasks


🛠️ Tech Stack

### Frontend
- **React 19** (Hooks, Functional Components)  
  > ⚠️ *React 19 is installed, but new features unique to React 19 were not utilized.*
- **Axios** — HTTP client for API requests
- **React Router DOM** — Routing and navigation
- **React Icons** — Icon integration
- **React Scripts** — Build and run scripts

### Backend
- **Node.js & Express.js** — Server and RESTful API
- **MongoDB** — NoSQL database
- **Mongoose** — Schema modeling and queries
- **dotenv** — Environment variable management
- **CORS** — Cross-origin resource sharing


📂 Project Structure
```bash
TODO-APP/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoList.js
│   │   │   └── TodoItem.js
│   │   ├── pages/
│   │   │   └── Home.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── server.js
│   └── .env (excluded)
├── assets/
│   └── TODO-APP-preview.png
└── README.md
```

🧪 Setup Instructions

📦 Prerequisites

    Node.js & npm installed

    MongoDB running locally or MongoDB Atlas account

🚀 Installation Steps

1.  Clone the repository

```bash
git clone https://github.com/tobyanderson1983/TODO-APP.git
cd TODO-APP
```

2. Install dependencies for frontend and backend

```bash
cd frontend && npm install
cd ../backend && npm install
```

3. Configure backend environment Create a .env file in /backend/:
```bash
MONGO_URI=mongodb://localhost:27017/todos
PORT=5000
```

4. Run the backend server

```bash
cd ../backend
npm run dev
```

5. Run the frontend app

```bash
cd ../frontend
npm start
```

🧭 Roadmap

- [ ] Add user authentication (register/login)
- [ ] Deploy frontend (Netlify/Vercel)
- [ ] Deploy backend (Render/Heroku)
- [ ] Add edit functionality for todos
- [ ] Add filtering and tags for task categorization
- [ ] Add due dates or priorities



🧠 What I Learned

- 🏗️ Full-stack architecture using the MERN stack

-🔌 RESTful API design and integration

- ⚛️ React state management with Hooks

- 📦 Async operations and error handling in UI

- 📁 Scalable and modular project structuring

- 🌐 Connecting frontend to backend securely using Axioss


🙌 Credits

    Built with 💻 and ☕ by Toby Anderson
    Feel free to reach out or fork this repo for your own learning!

📄 License

    This project is licensed under the MIT License — free to use and modify.

