# Movie Explorer - React Movie Database
https://screenshot.png

Movie Explorer is a modern, responsive web application that allows users to discover, search, and explore movies using the TMDB API. Built with React and React Router, this application showcases popular movies, provides detailed information about each film, and offers a seamless user experience.

# Features
🎬 Popular Movie Listings - Browse trending movies

🔍 Advanced Search - Find movies by title, genre, or year

🎥 Movie Details - Comprehensive information about each film

❤️ Favorites System - Save your favorite movies

📱 Fully Responsive - Works on mobile, tablet, and desktop

🌓 Dark/Light Mode - Choose your preferred theme

⚡ Performance Optimized - Fast loading with lazy components

# Live Demo
Check out the live demo: Movie Explorer Live

# Technologies Used
Frontend: React 18, React Router 6

State Management: React Context API

Styling: CSS Modules, Flexbox, Grid

API: The Movie Database (TMDB) API

Build Tool: Vite

Deployment: vercel

# Getting Started
Follow these instructions to set up the project locally on your machine.

# Prerequisites
Node.js (v14 or higher)

npm (v7 or higher)

TMDB API key (free at themoviedb.org)

# Installation
Clone the repository:

bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
Install dependencies:

bash
npm install
Create environment file:
Create a .env.local file in the root directory and add your TMDB API key:

env
VITE_TMDB_API_KEY=your_api_key_here
Run the development server:

bash
npm run dev
Open in your browser:

text
http://localhost:5173
Available Scripts
npm run dev: Start development server

npm run build: Create production build

npm run lint: Run ESLint for code quality

npm run preview: Preview production build locally

# Project Structure 

movie-explorer/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, icons, etc.
│   ├── components/          # Reusable components
│   │   ├── MovieCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── context/             # Context providers
│   │   ├── MovieContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/               # Custom hooks
│   │   ├── useMovies.jsx
│   │   └── useLocalStorage.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetail.jsx
│   │   └── ...
│   ├── services/            # API services
│   │   └── tmdb.js
│   ├── styles/              # Global styles
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Main application
│   └── main.jsx             # Entry point
├── .env.local               # Environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore
├── package.json
└── README.md