const API_KEY = "4c99ce3b76aee88e0ab7d031da9e6cc1";
const BASE_URL = "https://api.themoviedb.rog/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURLComponent(
             query
         )}`
    );
    const data = await response.json();
    return data.results
};

