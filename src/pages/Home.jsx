import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/tmdb.js";
import "../styles/Home.css";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="home">
            {/* Navigation bar */}
            <nav>
                <div className="nav-left">
                    <h1>Movie Hub</h1>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>


            <main className="movie-container">

                <div className="movie-list-header">
                    <h1>Popular Movies</h1>
                </div>

                {/* Listing the movies */}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    error ? (<p>Error: {error}</p>) : (
                        <div className="movie-list">
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )

                )}
            </main>
        </div>
    )
}

export default Home;