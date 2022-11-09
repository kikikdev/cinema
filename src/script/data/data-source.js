import { API_URL } from "./constant.js";

class DataSource {
  static showMovies() {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.results);
        return responseJson.results;
      })
      .catch((error) => {
        return error;
      });
  }
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=9466ee7e4e307bf4d40d514d11250c37&query=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (!results.length) {
          return `${keyword} is not found`;
        }
        return results;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default DataSource;
