import "./movie-card.js";

class MovieGallery extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        .placeholder {
          font-weight: lighter;
          color: var(--background);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += /* html */ `
      <h2 class="placeholder">${message}</h2>
    `;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._movies.forEach((movie) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = movie;
      this.shadowDOM.appendChild(movieCard);
    });
  }
}

customElements.define("movie-gallery", MovieGallery);
