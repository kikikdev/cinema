import "../component/movie-gallery.js";
import "../component/search-bar.js";
import "../component/welcome-text.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchBar = document.querySelector("search-bar");
  const movieGallery = document.querySelector("movie-gallery");

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchBar.value).then(renderResult).catch(fallbackResult);
  };

  const showMovies = () => {
    DataSource.showMovies().then(renderResult).catch(fallbackResult);
  };

  const renderResult = (results) => {
    // akses setter movies pada file movie-gallery.js
    movieGallery.movies = results;
  };

  const fallbackResult = (message) => {
    // akses fungsi renderError() pada file movie-gallery.js
    movieGallery.renderError(message);
  };

  // akses setter clickEvent pada file search-bar.js
  searchBar.clickEvent = onButtonSearchClicked;
  showMovies();
};

export default main;
