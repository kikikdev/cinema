import { IMG_URL } from "../data/constant.js";

class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  getColor(vote) {
    if (vote >= 7.0) {
      return "green";
    } else if (vote >= 6.0) {
      return "orange";
    } else {
      return "red";
    }
  }

  render() {
    this.shadowDOM.innerHTML = /*html*/ `
      <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          position: relative;
          border-radius: 10px;
          margin-bottom: 18px;
          overflow: hidden;
          border: 3px solid var(--background);
          
        }
        .movie {
          width: 250px;
          margin: 10px;
          border-radius: 10px;
          box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
          background-color: var(--primary-color);
        }
        .thumbnail {
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          object-position: center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          transition: 1s;
        }
        img:hover {
          transform: scale(105%); 
          overflow: hidden;
        }
        .movie-info {
          color: var(--white);
          background-color: var(--primary-color);
          align-items: center;
          padding: 8px 16px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .movie-info h2 {
          width: 150px;
          font-size: 18px;
          margin-top: 0;
        }
        .movie-info span {
          padding: 4px 8px;
          border-radius: 7px;
          font-weight: bold;
          font-size: 15px;
          background-color: var(--background);
        }
        .movie-info span.green {
          color: lime;
        }
        .movie-info span.orange {
          color: orange;
        }
        .movie-info span.red {
          color: red;
        }
        .overview {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--white);
          color: var(--primary-color);
          padding: 16px;
          margin: 10px;
          max-height: 100%;
          transform: translateY(120%);
          transition: transform 0.3s ease-in;
          cursor: pointer;
        }
        .overview p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        .movie:hover .overview {
          transform: translateY(0);
        }
        .overview button {
          padding: 5px 10px;
          margin-top: 8px;
          border-radius: 5px;
          background-color: var(--primary-color);
          color: var(--white);
          border: none;
          cursor: pointer;
        }
        .overview button:hover{
          background-color: var(--background);
        }
        a {
          color: white;
          text-decoration: none;
        }
        .popup {
          color: white;
          position: fixed;
          padding: 10px;
          width: 600px;
          border-radius: 0.5em;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(100, 111, 212, 0.9);
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.5s, visibility 0s linear 0.5s;
          z-index: 1;
        }
        .popup:target {
          visibility: visible;
          opacity: 1;
          transition-delay: 0s;
        }
        .popup-close {
          position: absolute;
          padding: 10px;
          /* max-height: 500px; */
          border-radius: 0.5em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.9);
        }
        .popup .close {
          position: absolute;
          right: -20px;
          top: -20px;
          padding: 0px 5px;
          color: var(--highlight);
          transition: color 0.3s;
          font-size: 24px;
          line-height: 1.5;
          font-weight: 700;
        }
        .popup .close:hover {
          color: var(--secondary-color);
        }
        .close-popup {
          background-color: rgba(0, 0, 0, 0.7);
          cursor: default;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s, visibility 0s linear 0.5s;
        }
        .popup:target + .close-popup {
          opacity: 1;
          visibility: visible;
          transition-delay: 0s;
        }
        .movie-poster {
          width: 100%;
          display: flex;
        }
        .movie-poster img {
          width: 100%;
          object-fit: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .row {
          display: flex;
        }
        .row ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
        }
        .row ul li {
          width: 350px;
          list-style-type: none;
          color: var(--primary-color);
          background-color: var(--white);
          padding: 5px 10px;
          margin: 5px;
          border-radius: 5px;
        }
      </style>
      <div class="movie">
        <div class="thumbnail">
          <img src="${IMG_URL + this._movie.poster_path}" alt="${this._movie.title}">
        </div>
        <div class="movie-info">
          <h2>${this._movie.title}</h2>
          <span class="${this.getColor(this._movie.vote_average)}"><i class="fa-solid fa-star"></i> ${this._movie.vote_average}</span>
        </div>
        <div class="overview">
          <p>${this._movie.overview}</p>
          <button><a href="#popup">See Detail</a></button>
        </div>
        
      </div>
    `;
  }
}

customElements.define("movie-card", MovieCard);
