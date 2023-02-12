/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_17_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../firebase.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_17_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_www_gstatic_com_firebasejs_9_17_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n// Import the functions you need from the SDKs you nee\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyD2VV0-kWrRKNbaPZLhtmBXzqHIPDDXh0Y\",\r\n  authDomain: \"animalfarm-92073.firebaseapp.com\",\r\n  projectId: \"animalfarm-92073\",\r\n  storageBucket: \"animalfarm-92073.appspot.com\",\r\n  messagingSenderId: \"346073066136\",\r\n  appId: \"1:346073066136:web:fa39cf50e9c3ad05fa3eed\"\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,https_www_gstatic_com_firebasejs_9_17_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../firebase.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);\r\nconsole.log(https_www_gstatic_com_firebasejs_9_17_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)\r\ndocument.addEventListener(\"DOMContentLoaded\", event => {\r\n    const app = firebase.app();\r\n  \r\n})\r\n  \r\nfunction googleLogin() {\r\n    const provider = new firebase.auth.GoogleAuthProvider();\r\n  \r\n    firebase.auth().signInWithPopup(provider)\r\n        .then(result => {\r\n            const user = result.user;\r\n            location.href = 'main.html';\r\n            console.log(user)\r\n        })\r\n        .catch(console.log)\r\n  }\r\n\r\n  window.addEventListener('DOMContentLoaded', event => {\r\n\r\n    // Toggle the side navigation\r\n    const sidebarToggle = document.body.querySelector('#sidebarToggle');\r\n    if (sidebarToggle) {\r\n        // Uncomment Below to persist sidebar toggle between refreshes\r\n        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {\r\n        //     document.body.classList.toggle('sb-sidenav-toggled');\r\n        // }\r\n        sidebarToggle.addEventListener('click', event => {\r\n            event.preventDefault();\r\n            document.body.classList.toggle('sb-sidenav-toggled');\r\n            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));\r\n        });\r\n    }\r\n});\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBGO0FBQzlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzR0FBYTtBQUN6QjtBQUNBLGFBQWEsZ0pBQU87QUFDcEIsWUFBWSxrR0FBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hbHMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS4xNy4xL2ZpcmViYXNlLWFwcC5qc1wiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlLmpzXCI7XHJcblxyXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVcclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RDJWVjAta1dyUktOYmFQWkxodG1CWHpxSElQRERYaDBZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJhbmltYWxmYXJtLTkyMDczLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJhbmltYWxmYXJtLTkyMDczXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJhbmltYWxmYXJtLTkyMDczLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzQ2MDczMDY2MTM2XCIsXHJcbiAgYXBwSWQ6IFwiMTozNDYwNzMwNjYxMzY6d2ViOmZhMzljZjUwZTljM2FkMDVmYTNlZWRcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnNvbGUubG9nKGluaXRpYWxpemVBcHApXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGZpcmViYXNlLmFwcCgpO1xyXG4gIFxyXG59KVxyXG4gIFxyXG5mdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgXHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdtYWluLmh0bWwnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XHJcblxyXG4gICAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cclxuICAgIGNvbnN0IHNpZGViYXJUb2dnbGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyVG9nZ2xlJyk7XHJcbiAgICBpZiAoc2lkZWJhclRvZ2dsZSkge1xyXG4gICAgICAgIC8vIFVuY29tbWVudCBCZWxvdyB0byBwZXJzaXN0IHNpZGViYXIgdG9nZ2xlIGJldHdlZW4gcmVmcmVzaGVzXHJcbiAgICAgICAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYnxzaWRlYmFyLXRvZ2dsZScpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzYi1zaWRlbmF2LXRvZ2dsZWQnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzYi1zaWRlbmF2LXRvZ2dsZWQnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJywgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;