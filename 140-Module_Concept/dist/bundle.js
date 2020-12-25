/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n//commonjs modules-> https://nodejs.org/docs/latest/api/modules.html#modules_module\n//es6 modules-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules\n// const msg1=require(\"./person\");\n// console.log(msg1);\n// msg1();\n//----------------------\n// const msg=require(\"./person\");\n// console.log(msg);\n// msg();\n// const msg=require(\"./person\");\n// console.log(msg);\n// msg.msg1();\n// msg.msg2();\n//----------------------\n// const person=require(\"./person\");\n// console.log(person);\n// console.log(person.fullName());\n//----------------------ES6 Modules-----\n// import {name,getName} from \"./person\";\n// console.log(name);\n// getName();\n// import {person} from \"./person\";\n// console.log(person);\n// console.log(person.fullName());\n//-----------------------\n// import * as p1 from \"./person\";\n// console.log(p1.name);\n// p1.getName();\n// console.log(p1.person);\n// console.log(p1.person.fullName());\n//-----------------------\n// import {Person} from \"./person\";\n// const p1=new Person(\"mehmet\",\"özen\");\n// console.log(p1);\n// console.log(p1.name);\n// console.log(p1.surname);\n// console.log(p1.getFullName());\n//-----------------------\n// import Person from \"./person\";\n// const p1=new Person(\"mehmet\",\"özen\");\n// console.log(p1);\n// console.log(p1.name);\n// console.log(p1.surname);\n// console.log(p1.getFullName());\n//-----------------------\n\nconsole.log(_person__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://webpack-usage/./src/app.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// module.exports=function msg1() {\n//     console.log(\"msg1 calıştı\");\n// }\n//----------------------\n// module.exports=function msg1() {\n//     console.log(\"msg1 calıştı\");\n// }\n// module.exports=function msg2() {\n//     console.log(\"msg2 calıştı\");\n// }\n//----------------------\n// module.exports.msg1=function msg1() {\n//     console.log(\"msg1 calıştı\");\n// }\n// module.exports.msg2=function msg2() {\n//     console.log(\"msg2 calıştı\");\n// }\n//----------------------\n// module.exports = {\n//     name: \"Mert\",\n//     surname: \"Özen\",\n//     fullName: function() {\n//         console.log(this.name+\" \"+this.surname);\n//     }\n// }\n//----------------------ES6 Modules-----\n// export const name=\"Mert\";\n// export function getName() {\n//     console.log(\"Ad:\"+name);\n// }\n// export const person={\n//     name:\"Mert\",\n//     surname:\"Özen\",\n//     fullName:function() {\n//         return this.name+\" \"+this.surname;\n//     }\n// }\n///-----------------------------\n// export const name=\"Mert\";\n// export function getName() {\n//     console.log(\"Ad:\"+name);\n// }\n// export const person={\n//     name:\"Mert\",\n//     surname:\"Özen\",\n//     fullName:function() {\n//         return this.name+\" \"+this.surname;\n//     }\n// }\n///-----------------------------\n// export class Person{\n//     constructor(_name,_surname){\n//         this.name=_name;\n//         this.surname=_surname\n//     }\n//     getFullName(){\n//         return this.name+\" \"+this.surname;\n//     }\n// }\n//----------------------\n// export default class Person{\n//     constructor(_name,_surname){\n//         this.name=_name;\n//         this.surname=_surname\n//     }\n//     getFullName(){\n//         return this.name+\" \"+this.surname;\n//     }\n// }\n//----------------------\nvar randomStringArray = [\"a\", \"b\", \"c\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomStringArray);\n\n//# sourceURL=webpack://webpack-usage/./src/person.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;