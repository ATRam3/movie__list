import "../css/favorites.css";
import MovieCard from "../components/MovieCard";
import { useFavorites } from '../context/FavoritesContext';

function Favorite(){

    const {favorites } = useFavorites();

    return(
        <div className="home">
            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            ) : (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default Favorite