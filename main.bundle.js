"use strict";
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["main"],{

/***/ "./src/AboutUs.js":
/*!************************!*\
  !*** ./src/AboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.png */ "./src/about.png");


const AboutUs = (content_div) => {

    const aboutPage = document.createElement("div")
    aboutPage.className = "about-page"

    const heading = document.createElement("h3")
    heading.textContent = "About US"

    const image = document.createElement("img")
    image.src = _about_png__WEBPACK_IMPORTED_MODULE_0__
    image.alt = "About Image"
    image.width = 500

    aboutPage.appendChild(heading)
    aboutPage.appendChild(image)
    content_div.appendChild(aboutPage)
    
    // return content_div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg");


const Contact = (content_div) => {
    const contactPage = document.createElement("div")
    contactPage.className = "about-page"

    const heading = document.createElement("h3")
    heading.textContent = "About US"

    const image = document.createElement("img")
    image.src = _contact_jpg__WEBPACK_IMPORTED_MODULE_0__
    image.alt = "Contact Us"
    image.width = 500

    contactPage.appendChild(heading)
    contactPage.appendChild(image)
    content_div.appendChild(contactPage)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage.js */ "./src/loadpage.js");
/* harmony import */ var _AboutUs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.js */ "./src/AboutUs.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/nav.js");





const index = () => {
    const content_div = document.createElement("div")
    content_div.className = "content"

    const {main_page, about_us, contact_us } = (0,_nav__WEBPACK_IMPORTED_MODULE_3__["default"])(content_div)
    ;(0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content_div)

    main_page.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        ;(0,_loadpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content_div)
    }

    about_us.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        ;(0,_AboutUs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(content_div)
    }

    contact_us.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        ;(0,_Contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])(content_div)
    }
    return content_div
}


document.body.appendChild(index())

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


const loadpage = (content_div) => {
    // console.log("Error")

    const main_page = document.createElement("div")
    main_page.className = "main-page"

    const heading = document.createElement("h3")
    heading.textContent = "The Sandwich shop"

    const image = document.createElement("img")
    image.src = _sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__
    image.alt = "Sandwich Image"
    image.width = 500

    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    p1.textContent = "Best sandwiches in the word"
    p2.textContent = "We also sell pastrys and bread if you fancy."
    p3.textContent = "Visit us at local shop near you."

    main_page.appendChild(heading)
    main_page.appendChild(image)
    main_page.appendChild(p1)
    main_page.appendChild(p2)
    main_page.appendChild(p3)
    content_div.appendChild(main_page)

    // return content_div 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadpage);

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nav = (content_div) => {
    
    const nav_div = document.createElement("div")
    nav_div.className = "nav"

    const main_page = document.createElement("button")
    const about_us = document.createElement("button")
    about_us.className = 'about'
    const contact_us = document.createElement("button")

    main_page.textContent = "Menu"
    about_us.textContent = "About Us"
    contact_us.textContent = "Contact"

    nav_div.appendChild(main_page)
    nav_div.appendChild(about_us)
    nav_div.appendChild(contact_us)
    content_div.appendChild(nav_div)

    main_page.onmouseenter = (e) => (main_page.style.cursor = "pointer")
    about_us.onmouseenter = (e) => (about_us.style.cursor = "pointer")
    contact_us.onmouseenter = (e) => (contact_us.style.cursor = "pointer")

    return { main_page, about_us, contact_us }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

/***/ }),

/***/ "./src/about.png":
/*!***********************!*\
  !*** ./src/about.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfee0eeb21f245efc91c.png";

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13b798d6ec4d62e3e4d2.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNuQnFCO0FBQ0Y7QUFDQTtBQUNYO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQyxFQUFFLGdEQUFHO0FBQ2xELElBQUkseURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDbEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9BYm91dFVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9Db250YWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL25hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWJvdXRpbWcgZnJvbSAnLi9hYm91dC5wbmcnXHJcblxyXG5jb25zdCBBYm91dFVzID0gKGNvbnRlbnRfZGl2KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYWJvdXRQYWdlLmNsYXNzTmFtZSA9IFwiYWJvdXQtcGFnZVwiXHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVVNcIlxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgaW1hZ2Uuc3JjID0gYWJvdXRpbWdcclxuICAgIGltYWdlLmFsdCA9IFwiQWJvdXQgSW1hZ2VcIlxyXG4gICAgaW1hZ2Uud2lkdGggPSA1MDBcclxuXHJcbiAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZylcclxuICAgIGFib3V0UGFnZS5hcHBlbmRDaGlsZChpbWFnZSlcclxuICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKGFib3V0UGFnZSlcclxuICAgIFxyXG4gICAgLy8gcmV0dXJuIGNvbnRlbnRfZGl2XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0VXMiLCJpbXBvcnQgY29udGFjdGltZyBmcm9tICcuL2NvbnRhY3QuanBnJ1xyXG5cclxuY29uc3QgQ29udGFjdCA9IChjb250ZW50X2RpdikgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWN0UGFnZS5jbGFzc05hbWUgPSBcImFib3V0LXBhZ2VcIlxyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFib3V0IFVTXCJcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGltYWdlLnNyYyA9IGNvbnRhY3RpbWdcclxuICAgIGltYWdlLmFsdCA9IFwiQ29udGFjdCBVc1wiXHJcbiAgICBpbWFnZS53aWR0aCA9IDUwMFxyXG5cclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpXHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChpbWFnZSlcclxuICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0IiwiaW1wb3J0IGxvYWRwYWdlIGZyb20gJy4vbG9hZHBhZ2UuanMnXHJcbmltcG9ydCBBYm91dFVzIGZyb20gJy4vQWJvdXRVcy5qcydcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0LmpzJ1xyXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRlbnRfZGl2LmNsYXNzTmFtZSA9IFwiY29udGVudFwiXHJcblxyXG4gICAgY29uc3Qge21haW5fcGFnZSwgYWJvdXRfdXMsIGNvbnRhY3RfdXMgfSA9IG5hdihjb250ZW50X2RpdilcclxuICAgIGxvYWRwYWdlKGNvbnRlbnRfZGl2KVxyXG5cclxuICAgIG1haW5fcGFnZS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBjb250ZW50X2Rpdi5yZW1vdmVDaGlsZChjb250ZW50X2Rpdi5jaGlsZE5vZGVzWzFdKVxyXG4gICAgICAgIGxvYWRwYWdlKGNvbnRlbnRfZGl2KVxyXG4gICAgfVxyXG5cclxuICAgIGFib3V0X3VzLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnRfZGl2LnJlbW92ZUNoaWxkKGNvbnRlbnRfZGl2LmNoaWxkTm9kZXNbMV0pXHJcbiAgICAgICAgQWJvdXRVcyhjb250ZW50X2RpdilcclxuICAgIH1cclxuXHJcbiAgICBjb250YWN0X3VzLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnRfZGl2LnJlbW92ZUNoaWxkKGNvbnRlbnRfZGl2LmNoaWxkTm9kZXNbMV0pXHJcbiAgICAgICAgQ29udGFjdChjb250ZW50X2RpdilcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZW50X2RpdlxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmRleCgpKSIsImltcG9ydCBTYW5kd2ljaCBmcm9tICcuL3NhbmR3aWNoLmpwZydcclxuXHJcbmNvbnN0IGxvYWRwYWdlID0gKGNvbnRlbnRfZGl2KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkVycm9yXCIpXHJcblxyXG4gICAgY29uc3QgbWFpbl9wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbWFpbl9wYWdlLmNsYXNzTmFtZSA9IFwibWFpbi1wYWdlXCJcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgU2FuZHdpY2ggc2hvcFwiXHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBpbWFnZS5zcmMgPSBTYW5kd2ljaFxyXG4gICAgaW1hZ2UuYWx0ID0gXCJTYW5kd2ljaCBJbWFnZVwiXHJcbiAgICBpbWFnZS53aWR0aCA9IDUwMFxyXG5cclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiQmVzdCBzYW5kd2ljaGVzIGluIHRoZSB3b3JkXCJcclxuICAgIHAyLnRleHRDb250ZW50ID0gXCJXZSBhbHNvIHNlbGwgcGFzdHJ5cyBhbmQgYnJlYWQgaWYgeW91IGZhbmN5LlwiXHJcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiVmlzaXQgdXMgYXQgbG9jYWwgc2hvcCBuZWFyIHlvdS5cIlxyXG5cclxuICAgIG1haW5fcGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKVxyXG4gICAgbWFpbl9wYWdlLmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgbWFpbl9wYWdlLmFwcGVuZENoaWxkKHAxKVxyXG4gICAgbWFpbl9wYWdlLmFwcGVuZENoaWxkKHAyKVxyXG4gICAgbWFpbl9wYWdlLmFwcGVuZENoaWxkKHAzKVxyXG4gICAgY29udGVudF9kaXYuYXBwZW5kQ2hpbGQobWFpbl9wYWdlKVxyXG5cclxuICAgIC8vIHJldHVybiBjb250ZW50X2RpdiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZHBhZ2U7IiwiY29uc3QgbmF2ID0gKGNvbnRlbnRfZGl2KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG5hdl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBuYXZfZGl2LmNsYXNzTmFtZSA9IFwibmF2XCJcclxuXHJcbiAgICBjb25zdCBtYWluX3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBjb25zdCBhYm91dF91cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGFib3V0X3VzLmNsYXNzTmFtZSA9ICdhYm91dCdcclxuICAgIGNvbnN0IGNvbnRhY3RfdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG4gICAgbWFpbl9wYWdlLnRleHRDb250ZW50ID0gXCJNZW51XCJcclxuICAgIGFib3V0X3VzLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiXHJcbiAgICBjb250YWN0X3VzLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcclxuXHJcbiAgICBuYXZfZGl2LmFwcGVuZENoaWxkKG1haW5fcGFnZSlcclxuICAgIG5hdl9kaXYuYXBwZW5kQ2hpbGQoYWJvdXRfdXMpXHJcbiAgICBuYXZfZGl2LmFwcGVuZENoaWxkKGNvbnRhY3RfdXMpXHJcbiAgICBjb250ZW50X2Rpdi5hcHBlbmRDaGlsZChuYXZfZGl2KVxyXG5cclxuICAgIG1haW5fcGFnZS5vbm1vdXNlZW50ZXIgPSAoZSkgPT4gKG1haW5fcGFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIilcclxuICAgIGFib3V0X3VzLm9ubW91c2VlbnRlciA9IChlKSA9PiAoYWJvdXRfdXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCIpXHJcbiAgICBjb250YWN0X3VzLm9ubW91c2VlbnRlciA9IChlKSA9PiAoY29udGFjdF91cy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIilcclxuXHJcbiAgICByZXR1cm4geyBtYWluX3BhZ2UsIGFib3V0X3VzLCBjb250YWN0X3VzIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9