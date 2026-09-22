import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title} 
                    className="movie-poster-img" />
            </div>
            <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-release-date">{movie.release_date}</p>
            </div>
        </div>

    )
}

export default MovieCard;