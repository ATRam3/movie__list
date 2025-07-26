import {useState} from "react"
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../servces/api";
import "../css/home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
    };


    const [movies, setMovies] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        console.log("Fetching movie data...");
        fetch('https://api.themoviedb.org/3/movie/popular')
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
    }, []);

    if (loading) return <div>Loading movies...</div>;

    fetch('https://api.themoviedb.org/3/movie/popular')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for Movies..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                } 
            </div>
        </div>
    )
}

export default Home