/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/component/movie-card.js":
/*!********************************************!*\
  !*** ./src/script/component/movie-card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/constant.js */ "./src/script/data/constant.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MovieCard = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MovieCard, _HTMLElement);
  var _super = _createSuper(MovieCard);
  function MovieCard() {
    var _this;
    _classCallCheck(this, MovieCard);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }
  _createClass(MovieCard, [{
    key: "movie",
    set: function set(movie) {
      this._movie = movie;
      this.render();
    }
  }, {
    key: "getColor",
    value: function getColor(vote) {
      if (vote >= 7.0) {
        return "green";
      } else if (vote >= 6.0) {
        return "orange";
      } else {
        return "red";
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = /*html*/"\n      <style>\n        @import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n        :host {\n          display: block;\n          position: relative;\n          border-radius: 10px;\n          margin-bottom: 18px;\n          overflow: hidden;\n          border: 3px solid var(--background);\n          \n        }\n        .movie {\n          width: 250px;\n          margin: 10px;\n          border-radius: 10px;\n          box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);\n          background-color: var(--primary-color);\n        }\n        .thumbnail {\n          overflow: hidden;\n        }\n        img {\n          width: 100%;\n          height: 350px;\n          object-fit: cover;\n          object-position: center;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          transition: 1s;\n        }\n        img:hover {\n          transform: scale(105%); \n          overflow: hidden;\n        }\n        .movie-info {\n          color: var(--white);\n          background-color: var(--primary-color);\n          align-items: center;\n          padding: 8px 16px 16px;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        .movie-info h2 {\n          width: 150px;\n          font-size: 18px;\n          margin-top: 0;\n        }\n        .movie-info span {\n          padding: 4px 8px;\n          border-radius: 7px;\n          font-weight: bold;\n          font-size: 15px;\n          background-color: var(--background);\n        }\n        .movie-info span.green {\n          color: lime;\n        }\n        .movie-info span.orange {\n          color: orange;\n        }\n        .movie-info span.red {\n          color: red;\n        }\n        .overview {\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: var(--white);\n          color: var(--primary-color);\n          padding: 16px;\n          margin: 10px;\n          max-height: 100%;\n          transform: translateY(120%);\n          transition: transform 0.3s ease-in;\n          cursor: pointer;\n        }\n        .overview p {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 10; /* number of lines to show */\n        }\n        .movie:hover .overview {\n          transform: translateY(0);\n        }\n        .overview button {\n          padding: 5px 10px;\n          margin-top: 8px;\n          border-radius: 5px;\n          background-color: var(--primary-color);\n          color: var(--white);\n          border: none;\n          cursor: pointer;\n        }\n        .overview button:hover{\n          background-color: var(--background);\n        }\n        a {\n          color: white;\n          text-decoration: none;\n        }\n        .popup {\n          color: white;\n          position: fixed;\n          padding: 10px;\n          width: 600px;\n          border-radius: 0.5em;\n          top: 55%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          background-color: rgba(100, 111, 212, 0.9);\n          visibility: hidden;\n          opacity: 0;\n          transition: opacity 0.5s, visibility 0s linear 0.5s;\n          z-index: 1;\n        }\n        .popup:target {\n          visibility: visible;\n          opacity: 1;\n          transition-delay: 0s;\n        }\n        .popup-close {\n          position: absolute;\n          padding: 10px;\n          /* max-height: 500px; */\n          border-radius: 0.5em;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          background-color: rgba(255, 255, 255, 0.9);\n        }\n        .popup .close {\n          position: absolute;\n          right: -20px;\n          top: -20px;\n          padding: 0px 5px;\n          color: var(--highlight);\n          transition: color 0.3s;\n          font-size: 24px;\n          line-height: 1.5;\n          font-weight: 700;\n        }\n        .popup .close:hover {\n          color: var(--secondary-color);\n        }\n        .close-popup {\n          background-color: rgba(0, 0, 0, 0.7);\n          cursor: default;\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          opacity: 0;\n          visibility: hidden;\n          transition: opacity 0.5s, visibility 0s linear 0.5s;\n        }\n        .popup:target + .close-popup {\n          opacity: 1;\n          visibility: visible;\n          transition-delay: 0s;\n        }\n        .movie-poster {\n          width: 100%;\n          display: flex;\n        }\n        .movie-poster img {\n          width: 100%;\n          object-fit: cover;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 10px;\n        }\n        .row {\n          display: flex;\n        }\n        .row ul {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          margin-left: 10px;\n        }\n        .row ul li {\n          width: 350px;\n          list-style-type: none;\n          color: var(--primary-color);\n          background-color: var(--white);\n          padding: 5px 10px;\n          margin: 5px;\n          border-radius: 5px;\n        }\n      </style>\n      <div class=\"movie\">\n        <div class=\"thumbnail\">\n          <img src=\"".concat(_data_constant_js__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + this._movie.poster_path, "\" alt=\"").concat(this._movie.title, "\">\n        </div>\n        <div class=\"movie-info\">\n          <h2>").concat(this._movie.title, "</h2>\n          <span class=\"").concat(this.getColor(this._movie.vote_average), "\"><i class=\"fa-solid fa-star\"></i> ").concat(this._movie.vote_average, "</span>\n        </div>\n        <div class=\"overview\">\n          <p>").concat(this._movie.overview, "</p>\n          <button><a href=\"#popup\">See Detail</a></button>\n        </div>\n        \n      </div>\n    ");
    }
  }]);
  return MovieCard;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("movie-card", MovieCard);

/***/ }),

/***/ "./src/script/component/movie-gallery.js":
/*!***********************************************!*\
  !*** ./src/script/component/movie-gallery.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movie_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-card.js */ "./src/script/component/movie-card.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MovieGallery = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MovieGallery, _HTMLElement);
  var _super = _createSuper(MovieGallery);
  function MovieGallery() {
    var _this;
    _classCallCheck(this, MovieGallery);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }
  _createClass(MovieGallery, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      this.shadowDOM.innerHTML = /* html */"\n      <style>\n        .placeholder {\n          font-weight: lighter;\n          color: var(--background);\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n      </style>\n    ";
      this.shadowDOM.innerHTML += /* html */"\n      <h2 class=\"placeholder\">".concat(message, "</h2>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.shadowDOM.innerHTML = "";
      this._movies.forEach(function (movie) {
        var movieCard = document.createElement("movie-card");
        movieCard.movie = movie;
        _this2.shadowDOM.appendChild(movieCard);
      });
    }
  }]);
  return MovieGallery;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("movie-gallery", MovieGallery);

/***/ }),

/***/ "./src/script/component/nav-bar.js":
/*!*****************************************!*\
  !*** ./src/script/component/nav-bar.js ***!
  \*****************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NavBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(NavBar, _HTMLElement);
  var _super = _createSuper(NavBar);
  function NavBar() {
    var _this;
    _classCallCheck(this, NavBar);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }
  _createClass(NavBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = /* html */"\n      <style>\n        @import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n        :host {\n          display: block;\n          background-color: var(--primary-color);\n          color: var(--highlight);\n          display: flex;\n          justify-content: space-between;\n          font-weight: 900;\n          letter-spacing: 1px;\n          box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);\n        }\n        h1{\n          padding: 10px 0px 10px 50px;\n        }\n        ul {\n          display: flex;\n          font-size: 0.9em;\n          margin-right: 50px;\n        }\n        ul li {\n          display: flex;\n          align-items: center;\n          margin-left: 30px;\n        }\n        ul li a {\n          text-decoration: none;\n          text-align: center;\n          color: var(--white);\n          cursor: pointer;\n          transition: 0.5s;\n        }\n        ul li a:hover {\n          color: var(--highlight);\n          transition: 1s;\n        }\n        button {\n          display: none;\n        }\n        /* --------- MEDIA QUERY --------- */\n        @media screen and (max-width: 768px) {\n          h1{\n            padding-left: 40px;\n          }\n          ul li {\n            display: none;\n          }\n          button {\n            display: flex;\n            align-items: center;\n            background-color: transparent;\n            font-size: 24px;\n            padding-right: 40px;\n            color: var(--white);\n            border: none;\n          }\n        }\n        @media screen and (max-width: 335px) {\n          h1{\n            font-size: 27px;\n          }\n          button {\n            font-size: 18px;\n          }\n        }\n      </style>\n      <h1>U-CINEMA</h1>\n      <ul>\n        <li><a href=\"#\">Popular</a></li>\n        <li><a href=\"#\">Now Playing</a></li>\n        <li><a href=\"#\">Upcoming</a></li>\n        <li><a href=\"#\">Top Rated</a></li>\n      </ul>\n      <button id=\"navToggle\"><i class=\"fa-solid fa-ellipsis-vertical\"></i></button>\n    ";
    }
  }]);
  return NavBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("nav-bar", NavBar);

/***/ }),

/***/ "./src/script/component/search-bar.js":
/*!********************************************!*\
  !*** ./src/script/component/search-bar.js ***!
  \********************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var SearchBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SearchBar, _HTMLElement);
  var _super = _createSuper(SearchBar);
  function SearchBar() {
    var _this;
    _classCallCheck(this, SearchBar);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }
  _createClass(SearchBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "value",
    get: function get() {
      return this.shadowDOM.querySelector("#searchInput").value;
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = /* html */"    \n      <style>\n        @import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n          }\n        #searchBar {\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          padding: 0px 0px 0px 36px;\n          display: flex;\n          justify-content: center;\n          width: cover;\n          margin: 65px 32px;\n          border-radius: 50px;\n          background: var(--white);\n        }\n        input {\n          border: none;\n          color: var(--primary-color);\n          background-color: transparent;\n          font-family: \"Poppins\", sans-serif;\n          font-weight: bold;\n          width: 100%;\n        }\n        input:focus {\n          outline: none;\n        }\n        input:focus::placeholder {\n          font-weight: bold;\n          font-family: \"Poppins\", sans-serif;\n        }\n        input::placeholder {\n          color: var(--primary-color);\n          font-weight: normal;\n        }\n        button {\n          cursor: pointer;\n          font-size: 20px;\n          padding: 10px 36px;\n          border-radius: 50px;\n          margin-left: auto;\n          background-color: #4158D0;\n          background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n          color: var(--white);\n          font-weight: bold;\n          border: none;\n          text-transform: uppercase;\n          transition: 1s;\n        }\n        /* --------- MEDIA QUERY --------- */\n        @media screen and (max-width: 400px) {\n          .search-bar button {\n            padding: 10px 12px;\n            border-radius: 30px;\n          }\n        }\n      </style>      \n      <div id=\"searchBar\" class=\"search-bar\">\n        <input class=\"seacrh-input\" placeholder=\"Search Movie Here..\" id=\"searchInput\" />\n        <button id=\"searchButton\" type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button>\n      </div>\n    ";
      this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
  }]);
  return SearchBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("search-bar", SearchBar);

/***/ }),

/***/ "./src/script/component/welcome-text.js":
/*!**********************************************!*\
  !*** ./src/script/component/welcome-text.js ***!
  \**********************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var WelcomeText = /*#__PURE__*/function (_HTMLElement) {
  _inherits(WelcomeText, _HTMLElement);
  var _super = _createSuper(WelcomeText);
  function WelcomeText() {
    var _this;
    _classCallCheck(this, WelcomeText);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }
  _createClass(WelcomeText, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = /* html */"\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n        h2 {\n        font-size: 48px;\n        margin-left: 32px;\n        margin-right: 32px;\n        margin-top: 32px;\n        }\n        p {\n          font-size: 24px;\n          font-weight: 500;\n          margin-left: 32px;\n          margin-right: 32px;\n        }\n        /* --------- MEDIA QUERY --------- */\n        @media screen and (max-width: 768px) {\n          h2 {\n            font-size: 36px;\n          }\n          p {\n            font-size: 20px;\n            font-weight: lighter;\n          }\n        }\n        @media screen and (max-width: 357px) {\n          h2 {\n            font-size: 34px;\n          }\n          p {\n            font-size: 16px;\n            font-weight: lighter;\n          }\n        }\n      </style>\n      <div class=\"welcome\">\n        <h2>Welcome To U-Cinema</h2>\n        <p>Get thousand of movie reference information. Explore Now.</p>\n      </div>\n    ";
    }
  }]);
  return WelcomeText;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("welcome-text", WelcomeText);

/***/ }),

/***/ "./src/script/data/constant.js":
/*!*************************************!*\
  !*** ./src/script/data/constant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "IMG_URL": () => (/* binding */ IMG_URL)
/* harmony export */ });
var API_KEY = "api_key=9466ee7e4e307bf4d40d514d11250c37";
var BASE_URL = "https://api.themoviedb.org/3";
var POPULAR_MOVIE_URL = "/discover/movie?sort_by=popularity.desc&";
var API_URL = "".concat(BASE_URL).concat(POPULAR_MOVIE_URL).concat(API_KEY);
var IMG_URL = "https://image.tmdb.org/t/p/w500";


/***/ }),

/***/ "./src/script/data/data-source.js":
/*!****************************************!*\
  !*** ./src/script/data/data-source.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./src/script/data/constant.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DataSource = /*#__PURE__*/function () {
  function DataSource() {
    _classCallCheck(this, DataSource);
  }
  _createClass(DataSource, null, [{
    key: "showMovies",
    value: function showMovies() {
      return fetch(_constant_js__WEBPACK_IMPORTED_MODULE_0__.API_URL).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        console.log(responseJson.results);
        return responseJson.results;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "searchMovie",
    value: function searchMovie(keyword) {
      return fetch("https://api.themoviedb.org/3/search/movie?api_key=9466ee7e4e307bf4d40d514d11250c37&query=".concat(keyword)).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        var results = responseJson.results;
        if (!results.length) {
          return "".concat(keyword, " is not found");
        }
        return results;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);
  return DataSource;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSource);

/***/ }),

/***/ "./src/script/view/main.js":
/*!*********************************!*\
  !*** ./src/script/view/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_movie_gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/movie-gallery.js */ "./src/script/component/movie-gallery.js");
/* harmony import */ var _component_search_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/search-bar.js */ "./src/script/component/search-bar.js");
/* harmony import */ var _component_search_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_search_bar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_welcome_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/welcome-text.js */ "./src/script/component/welcome-text.js");
/* harmony import */ var _component_welcome_text_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_welcome_text_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_data_source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data-source.js */ "./src/script/data/data-source.js");




var main = function main() {
  var searchBar = document.querySelector("search-bar");
  var movieGallery = document.querySelector("movie-gallery");
  var onButtonSearchClicked = function onButtonSearchClicked() {
    _data_data_source_js__WEBPACK_IMPORTED_MODULE_3__["default"].searchMovie(searchBar.value).then(renderResult)["catch"](fallbackResult);
  };
  var showMovies = function showMovies() {
    _data_data_source_js__WEBPACK_IMPORTED_MODULE_3__["default"].showMovies().then(renderResult)["catch"](fallbackResult);
  };
  var renderResult = function renderResult(results) {
    // akses setter movies pada file movie-gallery.js
    movieGallery.movies = results;
  };
  var fallbackResult = function fallbackResult(message) {
    // akses fungsi renderError() pada file movie-gallery.js
    movieGallery.renderError(message);
  };

  // akses setter clickEvent pada file search-bar.js
  searchBar.clickEvent = onButtonSearchClicked;
  showMovies();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _script_component_nav_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/component/nav-bar.js */ "./src/script/component/nav-bar.js");
/* harmony import */ var _script_component_nav_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_component_nav_bar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _script_data_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/data/constant.js */ "./src/script/data/constant.js");
/* harmony import */ var _script_view_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/view/main.js */ "./src/script/view/main.js");




document.addEventListener("DOMContentLoaded", _script_view_main_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* ----- STICKY SEARCH BAR ----- */
window.onscroll = function () {
  stickyFunction();
};
var searchBar = document.querySelector("search-bar");
var sticky = searchBar.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    searchBar.classList.add("sticky");
  } else {
    searchBar.classList.remove("sticky");
  }
}

/* ----- POP UP MOVIE ----- */
var showPopup = document.querySelector("movie-gallery");
showPopup.addEventListener("click", function () {
  // alert("halo");
  fetch(_script_data_constant_js__WEBPACK_IMPORTED_MODULE_2__.API_URL).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data.results);
    return data.results;
  });
  var popup = document.querySelector("#showPopup");
  popup.innerHTML = /* html */"\n    <div id=\"popup\" class=\"popup\">\n      <a href=\"#\" class=\"close\"><i class=\"fa-solid fa-circle-xmark\"></i></a>\n      <div class=\"row\">\n        <div class=\"movie-poster\">\n          <img src=\"#\" alt=\"Movie Title\">\n        </div>\n        <ul>\n          <li>Movie Title</li>\n          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia doloribus exercitationem cupiditate aspernatur. Natus nihil illum aliquid, culpa quam tempore rerum hic, ex perspiciatis quisquam tenetur ipsum facilis dignissimos nisi?lorem Lorem ipsum dolor sit, amet consectetur \n          </li>\n          <li>Release Date : 08-11-2022</li>\n        </ul>\n      </div>\n    </div>\n    <a href=\"#\" class=\"close-popup\"></a>\n  ";
});
})();

/******/ })()
;