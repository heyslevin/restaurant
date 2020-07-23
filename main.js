/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _tab1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.js */ \"./src/tab1.js\");\n/* harmony import */ var _tabAbout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabAbout.js */ \"./src/tabAbout.js\");\n/* harmony import */ var _tabContact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabContact.js */ \"./src/tabContact.js\");\n\n\n\n\n\n\n\n\n\n//Query Selector\n\nlet container = document.querySelector(\"#content\")\n\nObject(_pageload_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_tab1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\t//Selector\n\tvar tabs = document.querySelectorAll(\".tab\");\n\tvar tabcontent = document.querySelector(\".tabcontent\");\n\n\t//Tab Object\n\t// var tabAbout = ` \n\t// \t<h1>Our Story</h1>\n\t// \t<p>We started from the bottom, now we're here</p>\n\n\n\t// \t`;\n\n\t//Add event listener\n\n\t\t// tabs.forEach((tab)=> {\n\t\t// \ttab.addEventListener(\"click\", () => {\n\t\t// \t\talert(\"works\");\n\t\t// \t});\n\t\t// });\n\n\tfor (let i = 0; i < tabs.length; i++) {\n\t\ttabs[i].setAttribute(\"data-id\",i)\n\t\ttabs[i].addEventListener(\"click\",function(){\n\t\t\ttabSelector(i)});\n\t};\n\n\tfunction tabSelector(i) {\n\t\tswitch(i) {\n\t\t\tcase 0 :\n\t\t\t\t// tabcontent.innerHTML = tabAbout;\n\t\t\t\tObject(_tabAbout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tabcontent);\n\t\t\t\tbreak;\n\t\t\tcase 1 :\n\t\t\t\tObject(_tabContact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tabcontent);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\talert(\"noContent\");\n\t\t}\n\t}\n\n\n\n\n//HTML Content\n\ncontainer.innerhtml = \"tits\";\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pageload = () => {\n\n\t//Selector\n\tconst content = document.querySelector(\"#content\");\n\tconst tabButton = document.querySelector('[dataset-num=\"one\"]');\n\n\t//New objects\n\tconst title = document.createElement(\"h1\");\n\tconst bodytext = document.createElement(\"p\");\n\tconst image = document.createElement(\"img\");\n\n\tconst tabContainer = document.createElement(\"tabContainer\");\n\tconst tab = document.createElement(\"tab\");\n\tconst tabContent = document.createElement(\"tabContent\");\n\n\t//Fill objects \n\timage.setAttribute(\"src\",\"https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2016/09/08/5c000b235a2c1100017751e0/1239x697.jpg\");\n\ttitle.textContent = \"The best Restaurant\";\n\tbodytext.textContent = \"There is tasty food, and all that good stuff here. Don't miss the totopos bro.\"\n\n\t//Append\n\t// content.appendChild(image);\n\tcontent.appendChild(title);\n\tcontent.appendChild(bodytext);\n\n\ttabContainer.appendChild(tab);\n\ttabContainer.appendChild(tab);\n\ttabContainer.appendChild(tab);\n\n\tcontent.appendChild(tabContainer);\n\n\n\n\t//Tab Functions Loaders\n\tfunction tab1content() {\n\t\talert(\"yes\");\n\n\t}\n\t\n\n\t// //Event\n\t// tabButton.addEventListener(\"click\",tab1content)\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageload);\n\n\n\n//# sourceURL=webpack:///./src/pageload.js?");

/***/ }),

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tab1 = () => {\n\t\n\t\n\tconst content = document.querySelector(\"#content\");\n\n\tcontent.innerHTML += `\n\n\t\t\t<div class=\"contentbox\">\n\t\t\t\t<div class=\"tabscontainer\">\n\n\t\t\t\t\t<div class=\"tab\" data-id=\"0\">\n\t\t\t\t\t\tZero\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"tab\" data-id=\"1\">\n\t\t\t\t\t\tOne\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"tab\" data-id=\"2\">\n\t\t\t\t\t\tTwo\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"tab\" data-id=\"3\">\n\t\t\t\t\t\tThree\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"tabcontent\">\n\t\t\t\t\t\t\t<p>Hello there</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t`;\n\t\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tab1);\n\n\n//# sourceURL=webpack:///./src/tab1.js?");

/***/ }),

/***/ "./src/tabAbout.js":
/*!*************************!*\
  !*** ./src/tabAbout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabAbout(tabcontent) {\n\t\ttabcontent.innerHTML = ` \n\t\t<h1>Our Story</h1>\n\t\t<p>We started from the bottom, now we're here</p>\n\n\n\t\t`;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabAbout);\n\n//# sourceURL=webpack:///./src/tabAbout.js?");

/***/ }),

/***/ "./src/tabContact.js":
/*!***************************!*\
  !*** ./src/tabContact.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabContact(tabcontent) {\n\t\ttabcontent.innerHTML = ` \n\t\t<h1>Call us Bitch</h1>\n\t\t<p>We got a phone. If you want it so bad find it.</p>\n\n\n\t\t`;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabContact);\n\n//# sourceURL=webpack:///./src/tabContact.js?");

/***/ })

/******/ });