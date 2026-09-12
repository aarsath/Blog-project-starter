# Blog Project Starter

A full-stack starter template for a blog application, built with React, Node.js/Express, Firebase Authentication, and MongoDB Atlas. The project is split into two parts:

- **`blog-project-starter-backend`** — REST API (Node.js + Express) that verifies Firebase-issued auth tokens and handles blog post/comment logic against a MongoDB Atlas database.
- **`blog-project-starter-frontend`** — React client that uses the Firebase JS SDK for sign up/login and consumes the API to render the blog UI.

## Features

- User authentication via Firebase Authentication (email/password, and optionally Google/other providers)
- Create, read, update, and delete blog posts stored in MongoDB Atlas
- Comment on posts
- REST API separated from the client, so either side can be swapped or redeployed independently

## Tech Stack

| Layer      | Technology                             |
|------------|------------------------------------------|
| Frontend   | React, Firebase JS SDK (Auth)            |
| Backend    | Node.js, Express, Firebase Admin SDK     |
| Database   | MongoDB Atlas (via Mongoose)             |
| Auth       | Firebase Authentication                  |

## Project Structure

```
Blog-project-starter/
├── blog-project-starter-backend/    # Express API server
└── blog-project-starter-frontend/   # React client app
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or yarn
- A [Firebase project](https://console.firebase.google.com/) with **Authentication** enabled (Email/Password, and any other providers you want)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier is fine for development)

### Clone the repository

```bash
git clone https://github.com/aarsath/Blog-project-starter.git
cd Blog-project-starter
```

### 0. Set up Firebase Authentication and MongoDB Atlas

**Firebase (Authentication only):**
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project (or use an existing one).
2. Under **Build > Authentication**, enable the sign-in methods you want (e.g. Email/Password).
3. Register a **Web app** in Project Settings to get your frontend Firebase config (`apiKey`, `authDomain`, `projectId`, etc.).
4. Generate a **service account key** (Project Settings > Service Accounts > Generate new private key) so the backend can verify tokens with the Firebase Admin SDK.

**MongoDB Atlas (database):**
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Under **Database Access**, create a database user with a username/password.
3. Under **Network Access**, allow your IP (or `0.0.0.0/0` for local dev).
4. Grab your connection string from **Connect > Drivers** — it looks like `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>`.

### 1. Set up the backend

```bash
cd blog-project-starter-backend
npm install
```

Create a `.env` file in the backend folder with your configuration, e.g.:

```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-client-email
FIREBASE_PRIVATE_KEY=your-service-account-private-key
```

The backend uses [Mongoose](https://mongoosejs.com/) to connect to MongoDB Atlas for data storage, and the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) to verify ID tokens sent by the frontend.

Start the backend server:

```bash
npm start
```

The API should now be running at `http://localhost:5000` (or whichever port you configured).

### 2. Set up the frontend

Open a new terminal window:

```bash
cd blog-project-starter-frontend
npm install
```

Add your Firebase web app config to a `.env` file:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Running Both Together

Make sure the backend is running before starting the frontend, since the client depends on the API for data.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

No license specified yet — consider adding one (e.g. MIT) if this project is meant to be reused by others.

---

**Note:** This README was generated based on the visible repository structure. Update the environment variable names, ports, and scripts above to match the actual `package.json` files and configuration in the backend and frontend folders. Also make sure your MongoDB Atlas **Network Access** and database user credentials are locked down before deploying, and never commit your `.env` file or Firebase service account key to version control.
