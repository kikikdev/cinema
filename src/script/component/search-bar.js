class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchInput").value;
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `    
      <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        #searchBar {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 0px 0px 0px 36px;
          display: flex;
          justify-content: center;
          width: cover;
          margin: 65px 32px;
          border-radius: 50px;
          background: var(--white);
        }
        input {
          border: none;
          color: var(--primary-color);
          background-color: transparent;
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          width: 100%;
        }
        input:focus {
          outline: none;
        }
        input:focus::placeholder {
          font-weight: bold;
          font-family: "Poppins", sans-serif;
        }
        input::placeholder {
          color: var(--primary-color);
          font-weight: normal;
        }
        button {
          cursor: pointer;
          font-size: 20px;
          padding: 10px 36px;
          border-radius: 50px;
          margin-left: auto;
          background-color: #4158D0;
          background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
          color: var(--white);
          font-weight: bold;
          border: none;
          text-transform: uppercase;
          transition: 1s;
        }
        /* --------- MEDIA QUERY --------- */
        @media screen and (max-width: 400px) {
          .search-bar button {
            padding: 10px 12px;
            border-radius: 30px;
          }
        }
      </style>      
      <div id="searchBar" class="search-bar">
        <input class="seacrh-input" placeholder="Search Movie Here.." id="searchInput" />
        <button id="searchButton" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    `;

    this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
