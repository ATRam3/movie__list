import { useState, useEffect } from 'react';
import { useParam, Link, useNavigate } from 'react-router-dom';
import { getMovieDetails, getMovieTrailer } from '../services/api';
import { FaHeart, FaRegHeart, FaPlay, FaArrowLeft } from 'react-icons/fa';

function MovieDetail({movie}){
    const { id } = useParam();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    return (

    )
}


export default MovieDetail