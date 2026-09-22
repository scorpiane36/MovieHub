const BASE_URL = "https://api.themoviedb.org/3";

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
};

async function getPopularMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/popular`, 
        options
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.status_message || "Failed to fetch popular movies");
    }
    return data;
}

export { getPopularMovies };