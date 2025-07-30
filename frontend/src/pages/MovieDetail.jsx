import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { getMovieDetails, getMovieTrailer } from '../services/api';
import TrailerModal from '../components/TrailerModal';
import "../css/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        
        const trailerFromDetails = movieData.videos?.results?.find(
          v => v.type === "Trailer"
        );
        
        if (trailerFromDetails) {
          setTrailer(trailerFromDetails);
        } else {
          const trailerData = await getMovieTrailer(id);
          setTrailer(trailerData);
        }
        
        const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
        setIsFavorite(!!favorites[id]);
      } catch (error) {
        console.error("Failed to load movie data:", error);
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    
    if (isFavorite) {
      delete favorites[id];
    } else {
      favorites[id] = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="error-container">
        <h2 className="error-title">Movie Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="error-button"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="movie-detail-container">
      {showTrailerModal && (
        <TrailerModal 
          trailerKey={trailer?.key} 
          onClose={() => setShowTrailerModal(false)} 
        />
      )}

      <button 
        onClick={() => navigate(-1)}
        className="back-button"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="movie-content">
        {/* Poster Section */}
        <div className="poster-section">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className="poster-image"
            />
          ) : (
            <div className="poster-placeholder">
              <span>No poster available</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="details-section">
          <div className="detail-header">
            <div>
              <h1 className="movie-title">
                {movie.title}
                {movie.release_date && (
                  <span className="release-year">
                    ({movie.release_date.substring(0, 4)})
                  </span>
                )}
              </h1>
              
              <div className="genres-container">
                {movie.genres?.map(genre => (
                  <span
                    key={genre.id}
                    className="genre-badge"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={toggleFavorite}
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          {/* Rating and Runtime */}
          <div className="movie-stats">
            <div className="rating-container">
              <div className="rating-circle">
                {movie.vote_average?.toFixed(1)}
              </div>
              <span className="rating-text">
                /10 ({movie.vote_count} votes)
              </span>
            </div>
            
            {movie.runtime && (
              <div className="runtime-text">
                <span className="info-label">Runtime:</span> {movie.runtime} mins
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="overview-section">
            <h2 className="section-title">Overview</h2>
            <p className="overview-text">
              {movie.overview || "No overview available."}
            </p>
          </div>

          {/* Trailer Button */}
          {trailer ? (
            <button
              onClick={() => setShowTrailerModal(true)}
              className="trailer-button"
            >
              <FaPlay /> Watch Trailer
            </button>
          ) : (
            <p className="trailer-unavailable-text">Trailer not available</p>
          )}

          {/* Additional Info */}
          <div className="additional-info">
            {movie.production_companies?.length > 0 && (
              <div className="companies-container">
                <h3 className="section-title">Production Companies</h3>
                <div className="companies-list">
                  {movie.production_companies.map(company => (
                    <span key={company.id} className="company-badge">
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <p className="info-item">
              <span className="info-label">Original Title:</span> {movie.original_title}
            </p>
            {movie.original_language && (
              <p className="info-item">
                <span className="info-label">Original Language:</span> {movie.original_language.toUpperCase()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;