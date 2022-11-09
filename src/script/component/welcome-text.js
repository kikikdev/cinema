class WelcomeText extends HTMLElement {
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        h2 {
        font-size: 48px;
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 32px;
        }
        p {
          font-size: 24px;
          font-weight: 500;
          margin-left: 32px;
          margin-right: 32px;
        }
        /* --------- MEDIA QUERY --------- */
        @media screen and (max-width: 768px) {
          h2 {
            font-size: 36px;
          }
          p {
            font-size: 20px;
            font-weight: lighter;
          }
        }
        @media screen and (max-width: 357px) {
          h2 {
            font-size: 34px;
          }
          p {
            font-size: 16px;
            font-weight: lighter;
          }
        }
      </style>
      <div class="welcome">
        <h2>Welcome To U-Cinema</h2>
        <p>Get thousand of movie reference information. Explore Now.</p>
      </div>
    `;
  }
}

customElements.define("welcome-text", WelcomeText);
