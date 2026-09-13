# Blog Project Starter

A full-stack blog web app with a personal portfolio-style homepage, built with **React** on the frontend and **Node.js/Express + MongoDB** on the backend. Users can sign up/log in with **Firebase Authentication**, read blog posts, like them, and — for the designated admin account — create new posts directly from the UI.

**Live demo:** https://blog-project-starter-live.onrender.com

## Features

- 📖 Public blog feed — fetches and displays all posts from MongoDB
- ❤️ Like button on each post (increments a like counter via the API)
- 🔐 User sign up / login with Firebase Authentication (email & password)
- ✍️ Admin-only post creation form (shown only when the logged-in Firebase UID matches the configured admin UID)
- 🏠 Portfolio-style home page, about, and contact sections
- 🎨 Styled with Tailwind CSS

## Tech Stack

| Layer      | Technology                                  |
|------------|----------------------------------------------|
| Frontend   | React, React Router, Tailwind CSS, Axios      |
| Auth       | Firebase Authentication (client SDK)          |
| Backend    | Node.js, Express                              |
| Database   | MongoDB (via Mongoose)                        |

> Note: Authentication is handled entirely on the frontend via the Firebase client SDK — the backend does **not** verify Firebase tokens. Admin access is currently gated by checking the logged-in user's Firebase UID against a hardcoded value in `Blogs.jsx`. This is fine for a personal/starter project but isn't a secure pattern for production — see [Possible Improvements](#possible-improvements) below.

## Project Structure

```
Blog-project-starter/
├── blog-project-starter-backend/     # Express API server
│   └── index.js                      # Routes: GET/POST /api/blogs, PATCH /api/blogs/like/:id
└── blog-project-starter-frontend/    # React client app
    └── src/
        ├── components/               # Home, Blogs, Login, Signup, About, Contact, Navbar, Footer
        └── config/firebase.js        # Firebase app initialization
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm
- A [MongoDB](https://www.mongodb.com/atlas) database (Atlas free tier works fine)
- A [Firebase project](https://console.firebase.google.com/) with Email/Password sign-in enabled

### Clone the repository

```bash
git clone https://github.com/aarsath/Blog-project-starter.git
cd Blog-project-starter
```

### 1. Backend setup

```bash
cd blog-project-starter-backend
npm install
```

Create a `.env` file in this folder:

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
```

Start the server:

```bash
npm start
```

The API will run at `http://localhost:5000` with these endpoints:

| Method | Endpoint                    | Description                  |
|--------|------------------------------|-------------------------------|
| GET    | `/api/blogs`                 | Fetch all blog posts          |
| POST   | `/api/blogs`                 | Create a new blog post        |
| PATCH  | `/api/blogs/like/:id`        | Increment a post's like count |

### 2. Frontend setup

Open a new terminal:

```bash
cd blog-project-starter-frontend
npm install
```

Set your API URL (optional — defaults to the deployed backend if omitted):

```
REACT_APP_API_URL=http://localhost:5000
```

Update `src/config/firebase.js` with your own Firebase project config (apiKey, authDomain, projectId, etc.) if you're deploying your own instance, and update the admin UID check in `src/components/Blogs.jsx` to match your own Firebase user UID.

Start the app:

```bash
npm start
```

The app will run at `http://localhost:3000`.

## Possible Improvements

- Verify Firebase ID tokens on the backend (via Firebase Admin SDK) instead of trusting the frontend for admin checks
- Move the admin UID and Firebase config out of source code and into environment variables
- Add edit/delete endpoints for blog posts
- Add pagination for the blog feed
- Add a `.env.example` file for both frontend and backend

## License

No license specified yet — consider adding one (e.g. MIT) if this project is meant to be reused by others.
