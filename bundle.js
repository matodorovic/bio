/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/loadJson.js":
/*!****************************!*\
  !*** ./src/js/loadJson.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadJsonData)\n/* harmony export */ });\n/* harmony import */ var _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies/renderMovies.js */ \"./src/js/movies/renderMovies.js\");\n\r\n\r\n;\r\n\r\nclass loadJsonData {\r\n    async loadCurrentMovies() {\r\n        const res = await fetch(\"./src/jsonData/currentMovies.json\")\r\n        const data = await res.json();\r\n        return data.map(mv => new _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mv)); \r\n    }\r\n\r\n    async loadUpcomingMovies() {\r\n        const res = await fetch(\"./src/jsonData/upcomingMovies.json\")\r\n        const data = await res.json();\r\n        return data.map(mv => new _movies_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mv)); \r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/loadJson.js?");

/***/ }),

/***/ "./src/js/movies/renderMovies.js":
/*!***************************************!*\
  !*** ./src/js/movies/renderMovies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movie)\n/* harmony export */ });\n\r\n\r\nclass Movie {\r\n    constructor (data) {\r\n        this.title = data.title;\r\n        this.rating = data.rating;\r\n        this.description = data.description;\r\n        this.posterUrl = data.posterUrl;\r\n        this.releaseDate = data.releaseDate; \r\n    }\r\n\r\n    render() {\r\n        const movieCard = document.createElement(\"li\");\r\n        movieCard.className = \"movieCard-item\";\r\n\r\n        const poster = document.createElement(\"img\");\r\n        poster.className =\"movieCard-poster\";\r\n        poster.src = this.posterUrl; \r\n        movieCard.append(poster)\r\n\r\n        this.movieCard = movieCard; \r\n\r\n        return movieCard; \r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/movies/renderMovies.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loadJson.js */ \"./src/js/loadJson.js\");\n\r\n\r\n;\r\n//You can use this to see if the render functions are workin, but it can easily be changed to render three movies for each section.  \r\n\r\n\r\n(async () => {\r\n    const jData = new _loadJson_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n            \r\n    const current = await jData.loadCurrentMovies(); \r\n    current.slice(2, 5).forEach(Movie => //add slice before forEach here to only show 3 movies\r\n        document.querySelector(\".current-movieList\").append(Movie.render())); \r\n\r\n    const upcoming = await jData.loadUpcomingMovies();\r\n    upcoming.slice(2, 5).forEach(Movie =>   //add slice before forEach here to only show 3 movies\r\n        document.querySelector(\".upcoming-movieList\").append(Movie.render())); \r\n\r\n    //popular movies will be sorted depending on rating later with a rating filter, but we will show three random movies for now. \r\n    current.slice(0, 3).forEach(Movie =>   //add slice on forEach here to only show 3 movies\r\n            document.querySelector(\".popular-movieList\").append(Movie.render())); \r\n      \r\n  })(); \r\n\r\n\r\n\r\n    \n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/pages/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/index.js");
/******/ 	
/******/ })()
;