import React from 'react';
import { FaTimes } from 'react-icons/fa';
import "../css/TrailerModal.css";

const TrailerModal = ({ trailerKey, onClose }) => {
  return (
    <div className="trailer-modal-overlay">
      <div className="trailer-modal-content">
        <button 
          className="trailer-modal-close" 
          onClick={onClose}
          aria-label="Close trailer"
        >
          <FaTimes />
        </button>
        
        {trailerKey ? (
          <div className="trailer-video-container">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="trailer-video"
            />
          </div>
        ) : (
          <div className="trailer-unavailable">
            <p>Trailer not available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;