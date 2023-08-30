"use strict";
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage.js */ "./src/loadpage.js");


const component = () => {
    return (0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

document.body.appendChild(component())


/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandwich.jpg */ "./src/sandwich.jpg");


const loadpage = () => {
    // console.log("Error")
    const content_div = document.createElement("div")
    content_div.className = "content"

    const heading = document.createElement("h3")
    heading.textContent = "The Sandwich shop"

    const image = document.createElement("img")
    image.src = _sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__
    image.alt = "Sandwich Image"

    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    p1.textContent = "Best sandwiches in the word"
    p2.textContent = "We also sell pastrys and bread if you fancy."
    p3.textContent = "Visit us at local shop near you."

    content_div.appendChild(heading)
    content_div.appendChild(image)
    content_div.appendChild(p1)
    content_div.appendChild(p2)
    content_div.appendChild(p3)

    return content_div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadpage);

/***/ }),

/***/ "./src/sandwich.jpg":
/*!**************************!*\
  !*** ./src/sandwich.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2730fa0b2826b7eb7a56.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQTtBQUNBLFdBQVcsd0RBQVE7QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvbG9hZHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRwYWdlIGZyb20gJy4vbG9hZHBhZ2UuanMnXHJcblxyXG5jb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZHBhZ2UoKVxyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxyXG4iLCJpbXBvcnQgU2FuZHdpY2ggZnJvbSAnLi9zYW5kd2ljaC5qcGcnXHJcblxyXG5jb25zdCBsb2FkcGFnZSA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRXJyb3JcIilcclxuICAgIGNvbnN0IGNvbnRlbnRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGVudF9kaXYuY2xhc3NOYW1lID0gXCJjb250ZW50XCJcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgU2FuZHdpY2ggc2hvcFwiXHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBpbWFnZS5zcmMgPSBTYW5kd2ljaFxyXG4gICAgaW1hZ2UuYWx0ID0gXCJTYW5kd2ljaCBJbWFnZVwiXHJcblxyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIHAxLnRleHRDb250ZW50ID0gXCJCZXN0IHNhbmR3aWNoZXMgaW4gdGhlIHdvcmRcIlxyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIldlIGFsc28gc2VsbCBwYXN0cnlzIGFuZCBicmVhZCBpZiB5b3UgZmFuY3kuXCJcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCJWaXNpdCB1cyBhdCBsb2NhbCBzaG9wIG5lYXIgeW91LlwiXHJcblxyXG4gICAgY29udGVudF9kaXYuYXBwZW5kQ2hpbGQoaGVhZGluZylcclxuICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgY29udGVudF9kaXYuYXBwZW5kQ2hpbGQocDEpXHJcbiAgICBjb250ZW50X2Rpdi5hcHBlbmRDaGlsZChwMilcclxuICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKHAzKVxyXG5cclxuICAgIHJldHVybiBjb250ZW50X2RpdlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkcGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=