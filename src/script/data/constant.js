const API_KEY = "api_key=9466ee7e4e307bf4d40d514d11250c37";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_MOVIE_URL = "/discover/movie?sort_by=popularity.desc&";
const API_URL = `${BASE_URL}${POPULAR_MOVIE_URL}${API_KEY}`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export { API_URL, IMG_URL };
