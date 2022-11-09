import "./styles/style.css";
import "./script/component/nav-bar.js";
import { API_URL, IMG_URL } from "./script/data/constant.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);

/* ----- STICKY SEARCH BAR ----- */
window.onscroll = () => {
  stickyFunction();
};

const searchBar = document.querySelector("search-bar");
const sticky = searchBar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    searchBar.classList.add("sticky");
  } else {
    searchBar.classList.remove("sticky");
  }
}

/* ----- POP UP MOVIE ----- */
const showPopup = document.querySelector("movie-gallery");
showPopup.addEventListener("click", function () {
  // alert("halo");
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
  const popup = document.querySelector("#showPopup");
  popup.innerHTML = /* html */ `
    <div id="popup" class="popup">
      <a href="#" class="close"><i class="fa-solid fa-circle-xmark"></i></a>
      <div class="row">
        <div class="movie-poster">
          <img src="#" alt="Movie Title">
        </div>
        <ul>
          <li>Movie Title</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia doloribus exercitationem cupiditate aspernatur. Natus nihil illum aliquid, culpa quam tempore rerum hic, ex perspiciatis quisquam tenetur ipsum facilis dignissimos nisi?lorem Lorem ipsum dolor sit, amet consectetur 
          </li>
          <li>Release Date : 08-11-2022</li>
        </ul>
      </div>
    </div>
    <a href="#" class="close-popup"></a>
  `;
});
