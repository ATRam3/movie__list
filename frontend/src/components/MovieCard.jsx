import "../css/MovieCard.css"
import { useFavorites } from '../context/FavoritesContext';
function MovieCard({movie}){


    const  { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const favorite = isFavorite(movie.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button 
                        className="favorite-btn" 
                        onClick={toggleFavorite}>
                           {favorite ? '❤️' : '🤍'}
                    </button>
                </div>

                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>⭐ {movie.vote_average}/10</p>
                    <p>{movie.genres}</p>
                    <p>{movie.release_date?.split('-')[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard