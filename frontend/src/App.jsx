import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from "./pages/Home";
import Favorite from './pages/Favorites';
import Navbar from './components/Navbar';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div>
      <Navbar />
      <main className='main__content'>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App
