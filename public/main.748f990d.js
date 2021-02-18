/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
let data = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'James'
    },
    {
        id: 3,
        name: 'Jimmy'
    },
    {
        id: 4,
        name: 'Thomas'
    },
]


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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");



// We declare variables

let people = _data__WEBPACK_IMPORTED_MODULE_0__.data;

let container = document.createElement('div');
let body = document.querySelector('body');
let input = document.createElement('input');
let btn = document.createElement('button');

// Specifics for elements

btn.textContent = 'Reset'
container.classList.add('container');

// Body append elements

body.appendChild(container);
body.appendChild(input);
body.appendChild(btn);

// Functions

function removeKids(){
    Array.from(container.childNodes).forEach(el => {
        el.parentNode.removeChild(el);
    });
}

function reset(){
    removeKids();

    _data__WEBPACK_IMPORTED_MODULE_0__.data.forEach(element => {    
        let el = document.createElement('div');
        el.classList.add('person');
        el.textContent = element.name;
        container.appendChild(el);
    });
}

// Events

let passData = function (elem, val) {

    // Create a new event
    var event = new CustomEvent('data');

    // Dispatch the event
    elem.dispatchEvent(event);

};

window.addEventListener('data', e => {
    console.log(e)
})

//Append element for each person in db 

people.forEach(element => {
    let el = document.createElement('div');
    el.classList.add('person');
    el.textContent = element.name;
    container.appendChild(el);
});

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        let filtered = 
            people.filter(n => {
                return n.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(input.value.toLowerCase());
            });
        
        removeKids();

        passData(window, filtered);
    
        filtered.forEach(element => {
            let el = document.createElement('div');

            el.classList.add('person');
        
            el.textContent = element.name;
        
            container.appendChild(el);
        })

        input.value = ''
    }
})

btn.addEventListener('click', () => {
    reset();
});

input.addEventListener('keydown', e => {
    if(e.key == 'Escape'){
        reset();
    }
})
})();

/******/ })()
;
//# sourceMappingURL=main.748f990d.js.map