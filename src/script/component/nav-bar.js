class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
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
        :host {
          display: block;
          background-color: var(--primary-color);
          color: var(--highlight);
          display: flex;
          justify-content: space-between;
          font-weight: 900;
          letter-spacing: 1px;
          box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h1{
          padding: 10px 0px 10px 50px;
        }
        ul {
          display: flex;
          font-size: 0.9em;
          margin-right: 50px;
        }
        ul li {
          display: flex;
          align-items: center;
          margin-left: 30px;
        }
        ul li a {
          text-decoration: none;
          text-align: center;
          color: var(--white);
          cursor: pointer;
          transition: 0.5s;
        }
        ul li a:hover {
          color: var(--highlight);
          transition: 1s;
        }
        button {
          display: none;
        }
        /* --------- MEDIA QUERY --------- */
        @media screen and (max-width: 768px) {
          h1{
            padding-left: 40px;
          }
          ul li {
            display: none;
          }
          button {
            display: flex;
            align-items: center;
            background-color: transparent;
            font-size: 24px;
            padding-right: 40px;
            color: var(--white);
            border: none;
          }
        }
        @media screen and (max-width: 335px) {
          h1{
            font-size: 27px;
          }
          button {
            font-size: 18px;
          }
        }
      </style>
      <h1>U-CINEMA</h1>
      <ul>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Now Playing</a></li>
        <li><a href="#">Upcoming</a></li>
        <li><a href="#">Top Rated</a></li>
      </ul>
      <button id="navToggle"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    `;
  }
}

customElements.define("nav-bar", NavBar);
