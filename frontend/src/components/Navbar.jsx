import { Link } from "react-router-dom"
import "../css/Navbar.css"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { FaSearch } from "react-icons/fa";

function Navbar(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

 

  const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);

        try{
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
        } catch(err) {
        console.log(err)
        setError("Failed to search movies...");
        } finally {
        setLoading(false);
        }

    };


    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>

            <form onSubmit={handleSearch} className="search-form">
                <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    <FaSearch  className="search-icon"/>
                </button>
                </div>
            </form>


            <div className="navbar-link">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}


export default Navbar