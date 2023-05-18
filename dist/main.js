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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// moduel for creating the contact page\r\nconst createContactPage = () =>{\r\n    const content = document.querySelector('#content');\r\nconst pageContent = document.createElement('div');\r\npageContent.classList.add('page-content');\r\n\r\nconst form = document.createElement('form');\r\nform. classList.add('contact-form');\r\n\r\nconst headingInput = document.createElement('input');\r\nheadingInput. type = 'text';\r\nheadingInput.placeholder =  'Enter heading';\r\nform. appendChild(headingInput);\r\n\r\nconst addressInput = document.createElement('input');\r\naddressInput.type = 'text';\r\naddressInput.placeholder = 'Enter address';\r\nform. appendChild(addressInput);\r\n\r\nconst phoneInput = document.createElement('input');\r\nphoneInput.type = 'text';\r\nphoneInput.placeholder = 'Enter phone';\r\nform.appendChild(phoneInput);\r\n\r\n const submitButton = document.createElement('input');\r\n submitButton. type = 'submit';\r\n submitButton. value = 'Submit';\r\nform.appendChild(submitButton);\r\n\r\npageContent.appendChild(form);\r\n content. appendChild(pageContent);\r\n};\r\n\r\nfunction clearContent(){\r\n    const content =document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\"#.page-content\");\r\n    if(pageContent) {\r\n        content.removeChild(pageContent);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\r\n\r\n// load page\r\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//module for creating the menu page\r\nconst createMenuPage = () => {\r\n  const content = document.querySelector(\"#content\");\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.classList.add(\"page-content\");\r\n\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Our Menu\";\r\n\r\n  const menuList = document.createElement(\"ul\");\r\n  const menuItem1 = document.createElement(\"li\");\r\n  menuItem1.textContent = \"Pomodoro\";\r\n  const menuItem2 = document.createElement(\"li\");\r\n  menuItem2.textContent = \"Bolognesa\";\r\n  const menuItem3 = document.createElement(\"li\");\r\n  menuItem3.textContent = \"Alfredo\";\r\n  menuList.appendChild(menuItem1);\r\n  menuList.appendChild(menuItem2);\r\n  menuList.appendChild(menuItem3);\r\n\r\n  pageContent.appendChild(heading);\r\n  pageContent.appendChild(menuList);\r\n  content.appendChild(pageContent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\r\n\r\n\r\nfunction initialLoad () {\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant_page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () =>\r\n{\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.createElement(\"div\");\r\n    pageContent.classList.add('page-content');\r\n\r\n    //create adn append image element\r\n    const image = document.createElement('img');\r\n    image.src = \"https://media.vanityfair.com/photos/624db93288fcf914e1a594bc/master/w_1600%2Cc_limit/Steven%2520Joyce-JOS2021050D00077.jpg\";\r\n    image.height = '300';\r\n    pageContent.appendChild(image);\r\n\r\n    //Create and append headline element\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = 'Welcome to our restaurant!';\r\n    pageContent.appendChild(headline);\r\n\r\n    //Create and append copy element\r\n    const copy = document.createElement('p');\r\n    copy.textContent = 'We serve the best food in town, Come and taste';\r\n    pageContent.appendChild(copy)\r\n\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant_page/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst createTabs = () => {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  // Create the three divs\r\n\r\n  const div1 = document.createElement(\"button\");\r\n  const div2 = document.createElement(\"button\");\r\n  const div3 = document.createElement(\"button\");\r\n\r\n  // Set ids for the divs\r\n  div1.setAttribute(\"id\", \"home-btn\");\r\n  div2.setAttribute(\"id\", \"menu-bth\");\r\n  div3.setAttribute(\"id\", \"contact-btn\");\r\n\r\n  // Set classes for the divs\r\n  div1.classList.add(\"tab\");\r\n  div2.classList.add(\"tab\");\r\n  div3.classList.add(\"tab\");\r\n\r\n  // Set text content for the tabs\r\n  div1.textContent = \"Home\";\r\n  div2.textContent = \"Menu\";\r\n  div3.textContent = \"Contact\";\r\n\r\n  // Append the divs to the content div\r\n  content.appendChild(div1);\r\n  content.appendChild(div2);\r\n  content.appendChild(div3);\r\n\r\n  div1.addEventListener(\"click\", () => {\r\n      clearContent();\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  div2.addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  div3.addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  function clearContent(){\r\n    const content =document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\".page-content\");\r\n    if(pageContent) {\r\n        content.removeChild(pageContent);\r\n    }\r\n}\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/tabs.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;