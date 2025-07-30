import { createContext, useState, useContext } from "react";

const FavoritesContent = createContext();

function useFavorites (){
    return useContext(FavoritesContent);
}

function FavoritesProvider ({children}){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');

        if(storedFavorites){
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if(!favorites.some(fav => fav.id === movie.id)){
            setFavorites(prev => [...prev, movie]);
        }
    }
}