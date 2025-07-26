function MovieCard({movie}){

    function onFavoriteClick(){
        alert("clicked");
    }
    return(
        <div className="movie__card">
            <div className="movie__poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie__overlay">
                    <button className="favorite__btn" onClick={onFavoriteClick}>

                    </button>
                </div>
            </div>
        </div>
    )
}