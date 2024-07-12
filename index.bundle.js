"use strict";
(self["webpackChunkodin_todos"] = self["webpackChunkodin_todos"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/custom.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/custom.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* styling for button list */


/* tag content */

#tag-content {
    flex-direction: column;
    overflow: scroll;
}

#tag-content > div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    & > input {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        width: 10%;
    }
}

#list-content {
    gap: 5px;
}`, "",{"version":3,"sources":["webpack://./src/custom.css"],"names":[],"mappings":"AAAA,4BAA4B;;;AAG5B,gBAAgB;;AAEhB;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB;QACI,kCAAkC;QAClC,YAAY;QACZ,UAAU;IACd;AACJ;;AAEA;IACI,QAAQ;AACZ","sourcesContent":["/* styling for button list */\r\n\r\n\r\n/* tag content */\r\n\r\n#tag-content {\r\n    flex-direction: column;\r\n    overflow: scroll;\r\n}\r\n\r\n#tag-content > div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: start;\r\n    & > input {\r\n        background-color: rgba(0, 0, 0, 0);\r\n        border: none;\r\n        width: 10%;\r\n    }\r\n}\r\n\r\n#list-content {\r\n    gap: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    --nav-content-width: 90%;
    font-family: "Roboto", sans-serif;
}

/* Font Face */
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
}


body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    height: 100vh;
}

/* To Do UI Wrap */

.ToDo-UI {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 3fr;
}

/* Navigation */

header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--nav-content-width);
    height: 95%;
    border-radius: 10px;
    background-color: #f3f4f6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--nav-content-width);
    margin-top: 10px;
}

#hamburger > div{
    width: 1.5vw;
    height: 3px;
    background-color: black;
    margin: 6px 0;
}

#hamburger:hover {
    cursor: pointer;
}

#menu {
    font-weight: bold;
    font-size: 1.4em;
}

#search-bar {
    margin-top: 10px;
    height: 2vh;
    width: 20vw;
    padding: 5px;
    font-size: 1rem;
}

.nav-card {
    border-bottom: 1px solid #cbd5e1;
    width: var(--nav-content-width);
    height: 150px;
    margin: 15px;
    overflow: hidden;
  }
  
  .nav-title {
    font-weight: bolder;
    font-size: 0.9rem;
  }
  
  .nav-content {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-rows: auto;
    height: calc(100% - 15px);
  }
  
  .content-sect {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: small;
    border-radius: 10px;
    cursor: pointer;
  }

  /* Task sect */
  
  input[type="radio"] {
    display: none;
  }
  
  input[type="radio"]:checked + label {
    background-color: #e5e5e5;
    color: black;
    font-weight: bold;
  }
  
  .content-sect:hover {
    background-color: #f0f0f0;
  }

  .nav-icon {
    width: 15px;
    height: 15px;
  }

  /* main and container */

  main {
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  /* Sticky container stuff */
  .stickyContainer {
    display: grid;
    width: 95%;
    max-height: 85vh;
    grid-template-columns: repeat(3 , 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-rows: auto;
    overflow-y: scroll;
    gap: 15px;
  }

  .Card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1px;
    border-radius: 10px;
    min-height: 245px;
    align-self: center;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  #includeCard {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f5;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    & > img {
      width: 25%;
      height: 25%;
    }
  }

  #includeCard:hover {
    background: rgba(241, 245, 249, 0.959);
  }

  #includeCard:active {
    background: rgba(241, 245, 249, 0.904);
    top: 2px;
  }

  /* form */

  /* Modal styles */

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scrolling if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 25%; /* Could be more or less, depending on screen size */
}

.modal-content h2 {
  margin-top: 0;
  font-weight: bold;
  color: #333;
}

.contact-form {
  margin: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}

.contact-form input, .contact-form select, .contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

.contact-form input[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form input[type="submit"]:hover {
  background-color: #3e8e41;
}

.close {
  order: 1;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover, .close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* To-do list styles */

.contact-form {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-form li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.contact-form li:last-child {
  border-bottom: none;
}

.contact-form label {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

.contact-form input, .contact-form select, .contact-form textarea {
  width: 50%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  resize: none;
}

.contact-form input[type="submit"] {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.show {
  display: block;
}

/* Project Folder */

.projectFolder {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    --nav-content-width: 90%;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Font Face */\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n}\r\n\r\n/* To Do UI Wrap */\r\n\r\n.ToDo-UI {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    gap: 5px;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n/* Navigation */\r\n\r\nheader{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: var(--nav-content-width);\r\n    height: 95%;\r\n    border-radius: 10px;\r\n    background-color: #f3f4f6;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n.nav-top {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: var(--nav-content-width);\r\n    margin-top: 10px;\r\n}\r\n\r\n#hamburger > div{\r\n    width: 1.5vw;\r\n    height: 3px;\r\n    background-color: black;\r\n    margin: 6px 0;\r\n}\r\n\r\n#hamburger:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#menu {\r\n    font-weight: bold;\r\n    font-size: 1.4em;\r\n}\r\n\r\n#search-bar {\r\n    margin-top: 10px;\r\n    height: 2vh;\r\n    width: 20vw;\r\n    padding: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.nav-card {\r\n    border-bottom: 1px solid #cbd5e1;\r\n    width: var(--nav-content-width);\r\n    height: 150px;\r\n    margin: 15px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .nav-title {\r\n    font-weight: bolder;\r\n    font-size: 0.9rem;\r\n  }\r\n  \r\n  .nav-content {\r\n    display: grid;\r\n    grid-template-rows: repeat(4, 1fr);\r\n    grid-auto-rows: auto;\r\n    height: calc(100% - 15px);\r\n  }\r\n  \r\n  .content-sect {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    font-size: small;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /* Task sect */\r\n  \r\n  input[type=\"radio\"] {\r\n    display: none;\r\n  }\r\n  \r\n  input[type=\"radio\"]:checked + label {\r\n    background-color: #e5e5e5;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .content-sect:hover {\r\n    background-color: #f0f0f0;\r\n  }\r\n\r\n  .nav-icon {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n\r\n  /* main and container */\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 100%;\r\n  }\r\n\r\n  /* Sticky container stuff */\r\n  .stickyContainer {\r\n    display: grid;\r\n    width: 95%;\r\n    max-height: 85vh;\r\n    grid-template-columns: repeat(3 , 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n    grid-auto-rows: auto;\r\n    overflow-y: scroll;\r\n    gap: 15px;\r\n  }\r\n\r\n  .Card {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 1px;\r\n    border-radius: 10px;\r\n    min-height: 245px;\r\n    align-self: center;\r\n    overflow: hidden;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  }\r\n\r\n  #includeCard {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #f4f4f5;\r\n    outline: none;\r\n    position: relative;\r\n    -webkit-transition: all 0.3s;\r\n    -moz-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n    & > img {\r\n      width: 25%;\r\n      height: 25%;\r\n    }\r\n  }\r\n\r\n  #includeCard:hover {\r\n    background: rgba(241, 245, 249, 0.959);\r\n  }\r\n\r\n  #includeCard:active {\r\n    background: rgba(241, 245, 249, 0.904);\r\n    top: 2px;\r\n  }\r\n\r\n  /* form */\r\n\r\n  /* Modal styles */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scrolling if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 25%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.modal-content h2 {\r\n  margin-top: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n.contact-form {\r\n  margin: 20px;\r\n}\r\n\r\n.contact-form label {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n.contact-form input, .contact-form select, .contact-form textarea {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.contact-form input[type=\"submit\"] {\r\n  background-color: #4CAF50;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-form input[type=\"submit\"]:hover {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.close {\r\n  order: 1;\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover, .close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* To-do list styles */\r\n\r\n.contact-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.contact-form li {\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.contact-form li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.contact-form label {\r\n  display: inline-block;\r\n  width: 100px;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n\r\n.contact-form input, .contact-form select, .contact-form textarea {\r\n  width: 50%;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ccc;\r\n  resize: none;\r\n}\r\n\r\n.contact-form input[type=\"submit\"] {\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n/* Project Folder */\r\n\r\n.projectFolder {\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/custom.css":
/*!************************!*\
  !*** ./src/custom.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./custom.css */ "./node_modules/css-loader/dist/cjs.js!./src/custom.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calendarLayout.js":
/*!*******************************!*\
  !*** ./src/calendarLayout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
const CalendarComponent = () => {
    const CalendarLayout = document.createElement('div');
    CalendarLayout.classList.add('calendarContainer');

    return {
        CalendarLayout
    }
}

/***/ }),

/***/ "./src/cardInfo.js":
/*!*************************!*\
  !*** ./src/cardInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardData: () => (/* binding */ cardData)
/* harmony export */ });
function cardData(title, message, priority, taskOrProject) {
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexDirection = 'column';
    cardContainer.style.justifyContent = 'center';
    cardContainer.style.alignItems = 'center';
  
    const titleElem = document.createElement('h3');
    titleElem.className = 'card-title';
    titleElem.innerText = title;
    titleElem.style.fontWeight = 'bold';
    titleElem.style.fontSize = '18px';
    titleElem.style.marginBottom = '8px';
    titleElem.style.textDecoration = 'underline';
  
    const messageElem = document.createElement('p');
    messageElem.className = 'card-message';
    messageElem.innerText = message;
    messageElem.style.fontSize = '16px';
    messageElem.style.color = '#666';
    messageElem.style.marginBottom = '16px';
    messageElem.style.textAlign = 'center';
    messageElem.style.overflowY = 'scroll';
    messageElem.style.maxHeight = '100px';
  
    const taskOrProjectElem = document.createElement('p');
    taskOrProjectElem.className = 'card-task-or-project';
    taskOrProjectElem.innerText = (taskOrProject === "None") ? 'Task' : 'Project';
    taskOrProjectElem.style.fontSize = '14px';
    taskOrProjectElem.style.color = '#999';
    taskOrProjectElem.style.fontStyle = 'italic';
  
    cardContainer.appendChild(titleElem);
    cardContainer.appendChild(messageElem);
    cardContainer.appendChild(taskOrProjectElem);
  
    return {
      cardContainer,
      titleElem,
      messageElem,
      taskOrProjectElem,
      priority
    };
  }

/***/ }),

/***/ "./src/createSticky.js":
/*!*****************************!*\
  !*** ./src/createSticky.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateForm: () => (/* binding */ generateForm),
/* harmony export */   generateSticky: () => (/* binding */ generateSticky)
/* harmony export */ });
/* harmony import */ var _initEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initEvents */ "./src/initEvents.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _cardInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardInfo.js */ "./src/cardInfo.js");
/* harmony import */ var _images_folder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/folder.png */ "./src/images/folder.png");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");






function generateForm(){

    /* in generate sticky prob gonna have to add the prompt functionality here so */
    const currentModal = new _modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal();
    
    document.querySelector('.container').appendChild(currentModal);
    (0,_initEvents__WEBPACK_IMPORTED_MODULE_0__.selectionEvent)();

    // might have to call generateSticky here? or inside submit button event listener inside of the modal
}

function generateSticky(generateCard) {
    const stickyContainer = document.querySelector('.stickyContainer');
    const title = document.querySelector('#TITLE');
    const taskOrProject = document.querySelector('#Project');
    const priority = document.querySelector('#Priority').value;
    const message = document.querySelector('#Message');
  
    let cardColor;
    switch (priority) {
      case 'High':
        cardColor = 'red';
        break;
      case 'Medium':
        cardColor = 'orange';
        break;
      case 'Low':
        cardColor = 'green';
        break;
      default:
        cardColor = 'gray';
    }
  
    generateCard.style.borderLeft = `8px solid ${cardColor}`;

    const currentData = (0,_cardInfo_js__WEBPACK_IMPORTED_MODULE_2__.cardData)(title.value, message.value, priority, taskOrProject.value);

    if(taskOrProject.value === "Project"){
      const projectFolderImg = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.getImage)(_images_folder_png__WEBPACK_IMPORTED_MODULE_3__, 30, 30); 
      generateCard.classList.add('projectFolder');
      generateCard.appendChild(currentData.titleElem);
      generateCard.appendChild(currentData.messageElem);
      generateCard.appendChild(currentData.taskOrProjectElem);
      generateCard.appendChild(projectFolderImg);
    }else{
      generateCard.appendChild(currentData.cardContainer);
      generateCard.classList.add('stickyTask');
    }

    stickyContainer.appendChild(generateCard);
  }




/***/ }),

/***/ "./src/dataHandler.js":
/*!****************************!*\
  !*** ./src/dataHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteData: () => (/* binding */ NoteData)
/* harmony export */ });

class NoteData {
    constructor(container , includeCard){
        this.container = container;
        this.includeCard = includeCard;
        this.agenda = [];
        this.readStickyContainer()
    }

    readStickyContainer(){
        const submitBtn = document.getElementById('submitForm');

        submitBtn.addEventListener('click', ()=>{
            this.container.childNodes.forEach(element => {
                if (element.id === "includeCard") return;

                if (element === this.container.lastChild) { this.agenda.push(element); console.log(this.agenda); } ;
            });
        });
    }

    NotePriority(card){
        console.log(card);
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.css */ "./src/custom.css");
/* harmony import */ var _initEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEvents.js */ "./src/initEvents.js");




function component() {
    (0,_initEvents_js__WEBPACK_IMPORTED_MODULE_2__.initializeEvents)();
}

component();



/***/ }),

/***/ "./src/initEvents.js":
/*!***************************!*\
  !*** ./src/initEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeEvents: () => (/* binding */ initializeEvents),
/* harmony export */   selectionEvent: () => (/* binding */ selectionEvent)
/* harmony export */ });
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");



const initializeEvents = () => {
    const container = document.querySelector('.container');
    let activeComponent = null; // Track the currently active component

    document.querySelectorAll('.content-sect').forEach(item => {
        item.addEventListener('click', (event) => {
            const component = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])().changeTitle(event.target.textContent);
            const existingComponent = container.querySelector(`[data-component="${component}"]`);

            // Hide all components
            container.querySelectorAll('[data-component]').forEach(el => {
                el.style.display = 'none';
            });

            if (existingComponent) {
                // If the component node already exists, show it
                if(existingComponent.className === "stickyContainer"){
                    existingComponent.style.display = 'grid';
                }else{
                    existingComponent.style.display = 'block';
                }
            } else {
                // If the component node doesn't exist, create and append it
                const componentNode = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getComponent)(component);
                componentNode.dataset.component = component;
                container.appendChild(componentNode);
            }

            // Update activeComponent to the current component
            activeComponent = component;
            event.stopImmediatePropagation();
        });
    });

    document.getElementById('createList').addEventListener('click', ()=>{
        // add something here
        console.log('');
    })

}

const selectionEvent = () => {
    const projectSelect = document.querySelector('#Project');
    const formTitle = document.querySelector('#formTitle');
    const text = document.querySelector('.text-message');

    projectSelect.addEventListener('change', (event) => {
        formTitle.innerText = (event.target.value === 'None') ? 'Task' : 'Project';
        text.innerText = (event.target.value === 'None') ? 'Message' : 'Description';
    });
}


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _createSticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSticky */ "./src/createSticky.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
// modal.js



class Modal {
  static instance = null;

  constructor(type) {
    if (Modal.instance) {
      Modal.instance.modalElement.remove();
      Modal.instance = null;
    }

    Modal.instance = this;
    this.type = type;
    return this.createModal();
  }

  createModal() {
    const modalElement = document.createElement("div");
    modalElement.id = this.type;
    modalElement.className = "modal";

    const modalContentElement = document.createElement("div");
    modalContentElement.className = "modal-content";

    const contactFormElement = document.createElement("div");
    contactFormElement.className = "contact-form";

    const closeButtonElement = document.createElement("a");
    closeButtonElement.className = "close";
    closeButtonElement.innerHTML = "&times;";
    closeButtonElement.addEventListener("click", () => {
      modalElement.classList.toggle('show');
    });

    const formElement = document.createElement("form");
    formElement.action = "/";

    const formFields = [
      { label: "Title*", type: "text", placeholder: "Title" }, // gotta grab this value
      { label: "Project", type: "select", options: ["None", "Project"] },
      { label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
      { label: "Due Date", type: "Date", placeholder: "DueDate" }, // gotta grab this value
    ];

    const formFieldElements = formFields.map((field) => {
      const labelElement = document.createElement("label");
      labelElement.innerHTML = field.label;

      let inputElement;
      if (field.type === "select") {
        inputElement = document.createElement("select");
        inputElement.id = field.label;
        field.options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.text = option;
          inputElement.appendChild(optionElement);
        });
      } else {
        inputElement = document.createElement("input");
        inputElement.type = field.type;
        inputElement.name = "name";
        inputElement.id = field.placeholder.toUpperCase();
        inputElement.placeholder = field.placeholder;
      }

      const fieldElement = document.createElement("div");
      fieldElement.appendChild(labelElement);
      fieldElement.appendChild(inputElement);

      return fieldElement;
    });

    const messageContainer = document.createElement("div");

    const messageElement = document.createElement("span");
    messageElement.innerHTML = "Message";
    messageElement.classList.add('text-message');

    const textareaElement = document.createElement("textarea");
    textareaElement.id = 'Message'
    textareaElement.rows = 4;
    textareaElement.maxLength = 500;

    const submitButtonElement = document.createElement("button");
    submitButtonElement.addEventListener('click', (event)=>{
      event.preventDefault();
      (0,_createSticky__WEBPACK_IMPORTED_MODULE_0__.generateSticky)((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createCard)());
      this.hide();
    });
    submitButtonElement.type = "submit";
    submitButtonElement.id = "submitForm";
    submitButtonElement.innerHTML = "Submit";

    formElement.appendChild(this.createHeadingElement(this.type));
    formFieldElements.forEach((element) => formElement.appendChild(element));
    formElement.appendChild(messageContainer);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(textareaElement);
    messageContainer.appendChild(submitButtonElement);
    messageContainer.style.display = "flex";
    messageContainer.style.flexDirection = "column";
    messageContainer.style.alignItems = "center"

    contactFormElement.appendChild(closeButtonElement);
    contactFormElement.appendChild(formElement);

    modalContentElement.appendChild(contactFormElement);

    modalElement.appendChild(modalContentElement);

    document.body.appendChild(modalElement);

    return this.modalElement = modalElement;
  }

  createHeadingElement(type) {
    const headingElement = document.createElement("h2");
    headingElement.id = "formTitle";
    headingElement.innerHTML = type === "Project"? "Project" : "Task";
    return headingElement;
  }

  show() {
    this.modalElement.style.display = "block";
   }
 
  hide() {
     this.modalElement.style.display = "none";
  }

}

  

/***/ }),

/***/ "./src/stickyLayout.js":
/*!*****************************!*\
  !*** ./src/stickyLayout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StickyComponent: () => (/* binding */ StickyComponent)
/* harmony export */ });
/* harmony import */ var _createSticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSticky */ "./src/createSticky.js");
/* harmony import */ var _dataHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataHandler */ "./src/dataHandler.js");
/* harmony import */ var _images_Plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Plus.png */ "./src/images/Plus.png");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _cardInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardInfo */ "./src/cardInfo.js");






const StickyComponent = () => {
    // prob put data here 
    (0,_createSticky__WEBPACK_IMPORTED_MODULE_0__.generateForm)();

    const stickyLayout = document.createElement('div');
    stickyLayout.classList.add('stickyContainer');

    const includeCard = document.createElement('div');
    includeCard.classList.add('Card');
    includeCard.id = 'includeCard';
    stickyLayout.appendChild(includeCard);
    includeCard.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getImage)(_images_Plus_png__WEBPACK_IMPORTED_MODULE_2__));

    const currentData = new _dataHandler__WEBPACK_IMPORTED_MODULE_1__.NoteData(stickyLayout, includeCard);

    const priorityHandler = () => {
        const submitBtn = document.querySelector('#submitForm');

        submitBtn.addEventListener('click', (e) => {
            const title = document.querySelector('#TITLE');
            const taskOrProject = document.querySelector('#Project');
            const message = document.querySelector('#Message');
            const priority = document.querySelector('#Priority').value;
            const currentCardData = (0,_cardInfo__WEBPACK_IMPORTED_MODULE_4__.cardData)(title.value, message.value, priority, taskOrProject.value);
            //console.log(currentCardData.priority);
            currentData.NotePriority(currentCardData.priority);
            e.stopPropagation();
        });
    };

    includeCard.onclick = () => { 
        document.querySelector('.modal').classList.toggle('show');
        priorityHandler();
    };

    return {
        stickyLayout
    }
}

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


function Tabs(){
    const upcoming = document.getElementById('Upcoming');
    const today = document.getElementById('Today');
    const calendar = document.getElementById('Calendar');
    const stickyWall = document.getElementById('StickyWall');
    return {
        upcoming,
        today,
        calendar,
        stickyWall,
        changeTitle(choice){
            const title = document.getElementById('tab-title');

            switch(choice){
                case 'Upcoming':
                    return title.textContent = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.labelForControl)(this.upcoming).innerText;
                case 'Today':
                    return title.textContent = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.labelForControl)(this.today).innerText;
                case 'Calendar':
                    return title.textContent = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.labelForControl)(this.calendar).innerText;
                case 'Sticky Wall':
                    return title.textContent = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.labelForControl)(this.stickyWall).innerText;
                default:
                    title.textContent = undefined;
            }
        }
    }
}


/***/ }),

/***/ "./src/todayLayout.js":
/*!****************************!*\
  !*** ./src/todayLayout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodayComponent: () => (/* binding */ TodayComponent)
/* harmony export */ });
const TodayComponent = () => {
    const TodayLayout = document.createElement('div');
    TodayLayout.classList.add('todayContainer');

    return {
        TodayLayout
    }
}

/***/ }),

/***/ "./src/upcomingLayout.js":
/*!*******************************!*\
  !*** ./src/upcomingLayout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingComponent: () => (/* binding */ UpcomingComponent)
/* harmony export */ });
const UpcomingComponent = () => {
    const UpcomingLayout = document.createElement('div');
    UpcomingLayout.classList.add('upcomingContainer');

    return {
        UpcomingLayout
    }
}

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   getComponent: () => (/* binding */ getComponent),
/* harmony export */   getImage: () => (/* binding */ getImage),
/* harmony export */   labelForControl: () => (/* binding */ labelForControl)
/* harmony export */ });
/* harmony import */ var _calendarLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarLayout */ "./src/calendarLayout.js");
/* harmony import */ var _stickyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stickyLayout */ "./src/stickyLayout.js");
/* harmony import */ var _todayLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todayLayout */ "./src/todayLayout.js");
/* harmony import */ var _upcomingLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcomingLayout */ "./src/upcomingLayout.js");






function labelForControl(el){
    let idVal = el.id;
    const labels = document.querySelectorAll('label');
    for( var i = 0; i < labels.length; i++ ) {
        if (labels[i].htmlFor == idVal)
             return labels[i];
     }
}

function getComponent(component){
    switch(component){
        case 'Upcoming':
            return (0,_upcomingLayout__WEBPACK_IMPORTED_MODULE_3__.UpcomingComponent)().UpcomingLayout
        case 'Today':
            return (0,_todayLayout__WEBPACK_IMPORTED_MODULE_2__.TodayComponent)().TodayLayout
        case 'Calendar':
            return (0,_calendarLayout__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent)().CalendarLayout
        case 'Sticky Wall':
            return (0,_stickyLayout__WEBPACK_IMPORTED_MODULE_1__.StickyComponent)().stickyLayout
        default:
            title.textContent = undefined;
    }
}

function getImage(image , w , h){
    const CurrentImage = new Image(w , h);
    CurrentImage.src = image;

    return CurrentImage;
}

function createCard(){
    const newCard = document.createElement('div');
    newCard.classList.add('Card');

    return newCard;
}



/***/ }),

/***/ "./src/images/Plus.png":
/*!*****************************!*\
  !*** ./src/images/Plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Plus.png";

/***/ }),

/***/ "./src/images/folder.png":
/*!*******************************!*\
  !*** ./src/images/folder.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/folder.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLGFBQWEsTUFBTSxzQkFBc0IsdUJBQXVCLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssWUFBWSx5QkFBeUIsV0FBVyxZQUFZLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9B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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHFEO0FBQ0o7QUFDRjtBQUNNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0VBQWlCO0FBQ3BDO0FBQ0EsbUJBQW1CLDREQUFjO0FBQ2pDO0FBQ0EsbUJBQW1CLGtFQUFpQjtBQUNwQztBQUNBLG1CQUFtQiw4REFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb3MvLi9zcmMvY3VzdG9tLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy9jdXN0b20uY3NzPzQ0NjUiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9zcmMvY2FsZW5kYXJMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy9jYXJkSW5mby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vc3JjL2NyZWF0ZVN0aWNreS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vc3JjL2RhdGFIYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy9pbml0RXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy9zdGlja3lMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL29kaW4tdG9kb3MvLi9zcmMvdG9kYXlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2Rvcy8uL3NyYy91cGNvbWluZ0xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9zLy4vc3JjL3V0aWxpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3R5bGluZyBmb3IgYnV0dG9uIGxpc3QgKi9cclxuXHJcblxyXG4vKiB0YWcgY29udGVudCAqL1xyXG5cclxuI3RhZy1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4jdGFnLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgJiA+IGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbGlzdC1jb250ZW50IHtcclxuICAgIGdhcDogNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3VzdG9tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7OztBQUc1QixnQkFBZ0I7O0FBRWhCO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsaW5nIGZvciBidXR0b24gbGlzdCAqL1xcclxcblxcclxcblxcclxcbi8qIHRhZyBjb250ZW50ICovXFxyXFxuXFxyXFxuI3RhZy1jb250ZW50IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3RhZy1jb250ZW50ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgJiA+IGlucHV0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnRlbnQge1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIC0tbmF2LWNvbnRlbnQtd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBGb250IEZhY2UgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogVG8gRG8gVUkgV3JhcCAqL1xyXG5cclxuLlRvRG8tVUkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbn1cclxuXHJcbi8qIE5hdmlnYXRpb24gKi9cclxuXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IHZhcigtLW5hdi1jb250ZW50LXdpZHRoKTtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xyXG59XHJcblxyXG4ubmF2LXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiB2YXIoLS1uYXYtY29udGVudC13aWR0aCk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jaGFtYnVyZ2VyID4gZGl2e1xyXG4gICAgd2lkdGg6IDEuNXZ3O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbn1cclxuXHJcbiNoYW1idXJnZXI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbiNzZWFyY2gtYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJ2aDtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ubmF2LWNhcmQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICB3aWR0aDogdmFyKC0tbmF2LWNvbnRlbnQtd2lkdGgpO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAubmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50LXNlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLyogVGFzayBzZWN0ICovXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudC1zZWN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgfVxyXG5cclxuICAubmF2LWljb24ge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAvKiBtYWluIGFuZCBjb250YWluZXIgKi9cclxuXHJcbiAgbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLyogU3RpY2t5IGNvbnRhaW5lciBzdHVmZiAqL1xyXG4gIC5zdGlja3lDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuQ2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNDVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG4gIH1cclxuXHJcbiAgI2luY2x1ZGVDYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaW5jbHVkZUNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0NSwgMjQ5LCAwLjk1OSk7XHJcbiAgfVxyXG5cclxuICAjaW5jbHVkZUNhcmQ6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMC45MDQpO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgfVxyXG5cclxuICAvKiBmb3JtICovXHJcblxyXG4gIC8qIE1vZGFsIHN0eWxlcyAqL1xyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogMjUlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGlucHV0LCAuY29udGFjdC1mb3JtIHNlbGVjdCwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBvcmRlcjogMTtcclxuICBjb2xvcjogI2FhYTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsIC5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVG8tZG8gbGlzdCBzdHlsZXMgKi9cclxuXHJcbi5jb250YWN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBsaSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBpbnB1dCwgLmNvbnRhY3QtZm9ybSBzZWxlY3QsIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IEZvbGRlciAqL1xyXG5cclxuLnByb2plY3RGb2xkZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixpQ0FBaUM7QUFDckM7O0FBRUEsY0FBYztBQUNkO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEpBQTBKO0FBQzlKOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUiw4QkFBOEI7QUFDbEM7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFB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QUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICAtLW5hdi1jb250ZW50LXdpZHRoOiA5MCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9udCBGYWNlICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG8gRG8gVUkgV3JhcCAqL1xcclxcblxcclxcbi5Ub0RvLVVJIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2aWdhdGlvbiAqL1xcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1uYXYtY29udGVudC13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IHZhcigtLW5hdi1jb250ZW50LXdpZHRoKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hhbWJ1cmdlciA+IGRpdntcXHJcXG4gICAgd2lkdGg6IDEuNXZ3O1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogNnB4IDA7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAydmg7XFxyXFxuICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jYXJkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmQ1ZTE7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1uYXYtY29udGVudC13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdi10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnQtc2VjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBUYXNrIHNlY3QgKi9cXHJcXG4gIFxcclxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnQtc2VjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWljb24ge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogbWFpbiBhbmQgY29udGFpbmVyICovXFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogU3RpY2t5IGNvbnRhaW5lciBzdHVmZiAqL1xcclxcbiAgLnN0aWNreUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMgLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW5jbHVkZUNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmID4gaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMjUlO1xcclxcbiAgICAgIGhlaWdodDogMjUlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW5jbHVkZUNhcmQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDAuOTU5KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpbmNsdWRlQ2FyZDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDAuOTA0KTtcXHJcXG4gICAgdG9wOiAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBmb3JtICovXFxyXFxuXFxyXFxuICAvKiBNb2RhbCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gIHdpZHRoOiAyNSU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGgyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIGlucHV0LCAuY29udGFjdC1mb3JtIHNlbGVjdCwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRvLWRvIGxpc3Qgc3R5bGVzICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZm9ybSBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWZvcm0gbGk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIGlucHV0LCAuY29udGFjdC1mb3JtIHNlbGVjdCwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdCBGb2xkZXIgKi9cXHJcXG5cXHJcXG4ucHJvamVjdEZvbGRlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1c3RvbS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IENhbGVuZGFyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgQ2FsZW5kYXJMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIENhbGVuZGFyTGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyQ29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBDYWxlbmRhckxheW91dFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhcmREYXRhKHRpdGxlLCBtZXNzYWdlLCBwcmlvcml0eSwgdGFza09yUHJvamVjdCkge1xyXG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgY2FyZENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcbiAgICBjYXJkQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICBjYXJkQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICBcclxuICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZUVsZW0uY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gICAgdGl0bGVFbGVtLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgdGl0bGVFbGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICB0aXRsZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMThweCc7XHJcbiAgICB0aXRsZUVsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzhweCc7XHJcbiAgICB0aXRsZUVsZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcclxuICBcclxuICAgIGNvbnN0IG1lc3NhZ2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVzc2FnZUVsZW0uY2xhc3NOYW1lID0gJ2NhcmQtbWVzc2FnZSc7XHJcbiAgICBtZXNzYWdlRWxlbS5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgbWVzc2FnZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XHJcbiAgICBtZXNzYWdlRWxlbS5zdHlsZS5jb2xvciA9ICcjNjY2JztcclxuICAgIG1lc3NhZ2VFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxNnB4JztcclxuICAgIG1lc3NhZ2VFbGVtLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgbWVzc2FnZUVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICBtZXNzYWdlRWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAnMTAwcHgnO1xyXG4gIFxyXG4gICAgY29uc3QgdGFza09yUHJvamVjdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrT3JQcm9qZWN0RWxlbS5jbGFzc05hbWUgPSAnY2FyZC10YXNrLW9yLXByb2plY3QnO1xyXG4gICAgdGFza09yUHJvamVjdEVsZW0uaW5uZXJUZXh0ID0gKHRhc2tPclByb2plY3QgPT09IFwiTm9uZVwiKSA/ICdUYXNrJyA6ICdQcm9qZWN0JztcclxuICAgIHRhc2tPclByb2plY3RFbGVtLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xyXG4gICAgdGFza09yUHJvamVjdEVsZW0uc3R5bGUuY29sb3IgPSAnIzk5OSc7XHJcbiAgICB0YXNrT3JQcm9qZWN0RWxlbS5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcclxuICBcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW0pO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3JQcm9qZWN0RWxlbSk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJkQ29udGFpbmVyLFxyXG4gICAgICB0aXRsZUVsZW0sXHJcbiAgICAgIG1lc3NhZ2VFbGVtLFxyXG4gICAgICB0YXNrT3JQcm9qZWN0RWxlbSxcclxuICAgICAgcHJpb3JpdHlcclxuICAgIH07XHJcbiAgfSIsImltcG9ydCB7IHNlbGVjdGlvbkV2ZW50IH0gZnJvbSBcIi4vaW5pdEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBjYXJkRGF0YSB9IGZyb20gXCIuL2NhcmRJbmZvLmpzXCI7XHJcbmltcG9ydCBmb2xkZXJJbWcgZnJvbSAnLi9pbWFnZXMvZm9sZGVyLnBuZyc7XHJcbmltcG9ydCB7IGdldEltYWdlIH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGb3JtKCl7XHJcblxyXG4gICAgLyogaW4gZ2VuZXJhdGUgc3RpY2t5IHByb2IgZ29ubmEgaGF2ZSB0byBhZGQgdGhlIHByb21wdCBmdW5jdGlvbmFsaXR5IGhlcmUgc28gKi9cclxuICAgIGNvbnN0IGN1cnJlbnRNb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3VycmVudE1vZGFsKTtcclxuICAgIHNlbGVjdGlvbkV2ZW50KCk7XHJcblxyXG4gICAgLy8gbWlnaHQgaGF2ZSB0byBjYWxsIGdlbmVyYXRlU3RpY2t5IGhlcmU/IG9yIGluc2lkZSBzdWJtaXQgYnV0dG9uIGV2ZW50IGxpc3RlbmVyIGluc2lkZSBvZiB0aGUgbW9kYWxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RpY2t5KGdlbmVyYXRlQ2FyZCkge1xyXG4gICAgY29uc3Qgc3RpY2t5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0aWNreUNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVElUTEUnKTtcclxuICAgIGNvbnN0IHRhc2tPclByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdCcpO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJpb3JpdHknKS52YWx1ZTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTWVzc2FnZScpO1xyXG4gIFxyXG4gICAgbGV0IGNhcmRDb2xvcjtcclxuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcclxuICAgICAgY2FzZSAnSGlnaCc6XHJcbiAgICAgICAgY2FyZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ01lZGl1bSc6XHJcbiAgICAgICAgY2FyZENvbG9yID0gJ29yYW5nZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0xvdyc6XHJcbiAgICAgICAgY2FyZENvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjYXJkQ29sb3IgPSAnZ3JheSc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZW5lcmF0ZUNhcmQuc3R5bGUuYm9yZGVyTGVmdCA9IGA4cHggc29saWQgJHtjYXJkQ29sb3J9YDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGNhcmREYXRhKHRpdGxlLnZhbHVlLCBtZXNzYWdlLnZhbHVlLCBwcmlvcml0eSwgdGFza09yUHJvamVjdC52YWx1ZSk7XHJcblxyXG4gICAgaWYodGFza09yUHJvamVjdC52YWx1ZSA9PT0gXCJQcm9qZWN0XCIpe1xyXG4gICAgICBjb25zdCBwcm9qZWN0Rm9sZGVySW1nID0gZ2V0SW1hZ2UoZm9sZGVySW1nLCAzMCwgMzApOyBcclxuICAgICAgZ2VuZXJhdGVDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb2xkZXInKTtcclxuICAgICAgZ2VuZXJhdGVDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnREYXRhLnRpdGxlRWxlbSk7XHJcbiAgICAgIGdlbmVyYXRlQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50RGF0YS5tZXNzYWdlRWxlbSk7XHJcbiAgICAgIGdlbmVyYXRlQ2FyZC5hcHBlbmRDaGlsZChjdXJyZW50RGF0YS50YXNrT3JQcm9qZWN0RWxlbSk7XHJcbiAgICAgIGdlbmVyYXRlQ2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9sZGVySW1nKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBnZW5lcmF0ZUNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudERhdGEuY2FyZENvbnRhaW5lcik7XHJcbiAgICAgIGdlbmVyYXRlQ2FyZC5jbGFzc0xpc3QuYWRkKCdzdGlja3lUYXNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RpY2t5Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZCk7XHJcbiAgfVxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgTm90ZURhdGEge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyICwgaW5jbHVkZUNhcmQpe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZUNhcmQgPSBpbmNsdWRlQ2FyZDtcclxuICAgICAgICB0aGlzLmFnZW5kYSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVhZFN0aWNreUNvbnRhaW5lcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVhZFN0aWNreUNvbnRhaW5lcigpe1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtJyk7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBcImluY2x1ZGVDYXJkXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5jb250YWluZXIubGFzdENoaWxkKSB7IHRoaXMuYWdlbmRhLnB1c2goZWxlbWVudCk7IGNvbnNvbGUubG9nKHRoaXMuYWdlbmRhKTsgfSA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIE5vdGVQcmlvcml0eShjYXJkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJkKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vY3VzdG9tLmNzcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVFdmVudHMgfSBmcm9tICcuL2luaXRFdmVudHMuanMnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgaW5pdGlhbGl6ZUV2ZW50cygpO1xyXG59XHJcblxyXG5jb21wb25lbnQoKTtcclxuXHJcbiIsImltcG9ydCBUYWJzIGZyb20gJy4vdGFicy5qcyc7XHJcbmltcG9ydCB7IGdldENvbXBvbmVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFjdGl2ZUNvbXBvbmVudCA9IG51bGw7IC8vIFRyYWNrIHRoZSBjdXJyZW50bHkgYWN0aXZlIGNvbXBvbmVudFxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LXNlY3QnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gVGFicygpLmNoYW5nZVRpdGxlKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQ29tcG9uZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXBvbmVudD1cIiR7Y29tcG9uZW50fVwiXWApO1xyXG5cclxuICAgICAgICAgICAgLy8gSGlkZSBhbGwgY29tcG9uZW50c1xyXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29tcG9uZW50XScpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgbm9kZSBhbHJlYWR5IGV4aXN0cywgc2hvdyBpdFxyXG4gICAgICAgICAgICAgICAgaWYoZXhpc3RpbmdDb21wb25lbnQuY2xhc3NOYW1lID09PSBcInN0aWNreUNvbnRhaW5lclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbXBvbmVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb21wb25lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29tcG9uZW50IG5vZGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGFuZCBhcHBlbmQgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5vZGUgPSBnZXRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE5vZGUuZGF0YXNldC5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhY3RpdmVDb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlTGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAvLyBhZGQgc29tZXRoaW5nIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0Jyk7XHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVRpdGxlJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtbWVzc2FnZScpO1xyXG5cclxuICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IChldmVudC50YXJnZXQudmFsdWUgPT09ICdOb25lJykgPyAnVGFzaycgOiAnUHJvamVjdCc7XHJcbiAgICAgICAgdGV4dC5pbm5lclRleHQgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnTm9uZScpID8gJ01lc3NhZ2UnIDogJ0Rlc2NyaXB0aW9uJztcclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIG1vZGFsLmpzXHJcbmltcG9ydCB7IGdlbmVyYXRlU3RpY2t5IH0gZnJvbSBcIi4vY3JlYXRlU3RpY2t5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcclxuXHJcbmNsYXNzIE1vZGFsIHtcclxuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICBpZiAoTW9kYWwuaW5zdGFuY2UpIHtcclxuICAgICAgTW9kYWwuaW5zdGFuY2UubW9kYWxFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBNb2RhbC5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgTW9kYWwuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb2RhbEVsZW1lbnQuaWQgPSB0aGlzLnR5cGU7XHJcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9kYWxDb250ZW50RWxlbWVudC5jbGFzc05hbWUgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdEZvcm1FbGVtZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdC1mb3JtXCI7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xyXG4gICAgY2xvc2VCdXR0b25FbGVtZW50LmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xyXG4gICAgY2xvc2VCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybUVsZW1lbnQuYWN0aW9uID0gXCIvXCI7XHJcblxyXG4gICAgY29uc3QgZm9ybUZpZWxkcyA9IFtcclxuICAgICAgeyBsYWJlbDogXCJUaXRsZSpcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIgfSwgLy8gZ290dGEgZ3JhYiB0aGlzIHZhbHVlXHJcbiAgICAgIHsgbGFiZWw6IFwiUHJvamVjdFwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJOb25lXCIsIFwiUHJvamVjdFwiXSB9LFxyXG4gICAgICB7IGxhYmVsOiBcIlByaW9yaXR5XCIsIHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl0gfSxcclxuICAgICAgeyBsYWJlbDogXCJEdWUgRGF0ZVwiLCB0eXBlOiBcIkRhdGVcIiwgcGxhY2Vob2xkZXI6IFwiRHVlRGF0ZVwiIH0sIC8vIGdvdHRhIGdyYWIgdGhpcyB2YWx1ZVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBmb3JtRmllbGRFbGVtZW50cyA9IGZvcm1GaWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBmaWVsZC5sYWJlbDtcclxuXHJcbiAgICAgIGxldCBpbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiKSB7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuaWQgPSBmaWVsZC5sYWJlbDtcclxuICAgICAgICBmaWVsZC5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gb3B0aW9uO1xyXG4gICAgICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQudHlwZSA9IGZpZWxkLnR5cGU7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50Lm5hbWUgPSBcIm5hbWVcIjtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuaWQgPSBmaWVsZC5wbGFjZWhvbGRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9IGZpZWxkLnBsYWNlaG9sZGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmaWVsZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBmaWVsZEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcclxuICAgICAgZmllbGRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XHJcblxyXG4gICAgICByZXR1cm4gZmllbGRFbGVtZW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9IFwiTWVzc2FnZVwiO1xyXG4gICAgbWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGV4dC1tZXNzYWdlJyk7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGV4dGFyZWFFbGVtZW50LmlkID0gJ01lc3NhZ2UnXHJcbiAgICB0ZXh0YXJlYUVsZW1lbnQucm93cyA9IDQ7XHJcbiAgICB0ZXh0YXJlYUVsZW1lbnQubWF4TGVuZ3RoID0gNTAwO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZ2VuZXJhdGVTdGlja3koY3JlYXRlQ2FyZCgpKTtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgIHN1Ym1pdEJ1dHRvbkVsZW1lbnQudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b25FbGVtZW50LmlkID0gXCJzdWJtaXRGb3JtXCI7XHJcbiAgICBzdWJtaXRCdXR0b25FbGVtZW50LmlubmVySFRNTCA9IFwiU3VibWl0XCI7XHJcblxyXG4gICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkaW5nRWxlbWVudCh0aGlzLnR5cGUpKTtcclxuICAgIGZvcm1GaWVsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VDb250YWluZXIpO1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhRWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIlxyXG5cclxuICAgIGNvbnRhY3RGb3JtRWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgY29udGFjdEZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcclxuXHJcbiAgICBtb2RhbENvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtRWxlbWVudCk7XHJcblxyXG4gICAgbW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsQ29udGVudEVsZW1lbnQpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVIZWFkaW5nRWxlbWVudCh0eXBlKSB7XHJcbiAgICBjb25zdCBoZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGhlYWRpbmdFbGVtZW50LmlkID0gXCJmb3JtVGl0bGVcIjtcclxuICAgIGhlYWRpbmdFbGVtZW50LmlubmVySFRNTCA9IHR5cGUgPT09IFwiUHJvamVjdFwiPyBcIlByb2plY3RcIiA6IFwiVGFza1wiO1xyXG4gICAgcmV0dXJuIGhlYWRpbmdFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgIH1cclxuIFxyXG4gIGhpZGUoKSB7XHJcbiAgICAgdGhpcy5tb2RhbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiAgZXhwb3J0IHtNb2RhbH0iLCJpbXBvcnQgeyBnZW5lcmF0ZUZvcm0gfSBmcm9tICcuL2NyZWF0ZVN0aWNreSc7XHJcbmltcG9ydCB7IE5vdGVEYXRhIH0gZnJvbSAnLi9kYXRhSGFuZGxlcic7XHJcbmltcG9ydCBwbHVzSW1nIGZyb20gJy4vaW1hZ2VzL1BsdXMucG5nJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICcuL3V0aWxpdGllcyc7XHJcbmltcG9ydCB7IGNhcmREYXRhIH0gZnJvbSAnLi9jYXJkSW5mbyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3RpY2t5Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvYiBwdXQgZGF0YSBoZXJlIFxyXG4gICAgZ2VuZXJhdGVGb3JtKCk7XHJcblxyXG4gICAgY29uc3Qgc3RpY2t5TGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGlja3lMYXlvdXQuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Q29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaW5jbHVkZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluY2x1ZGVDYXJkLmNsYXNzTGlzdC5hZGQoJ0NhcmQnKTtcclxuICAgIGluY2x1ZGVDYXJkLmlkID0gJ2luY2x1ZGVDYXJkJztcclxuICAgIHN0aWNreUxheW91dC5hcHBlbmRDaGlsZChpbmNsdWRlQ2FyZCk7XHJcbiAgICBpbmNsdWRlQ2FyZC5hcHBlbmRDaGlsZChnZXRJbWFnZShwbHVzSW1nKSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudERhdGEgPSBuZXcgTm90ZURhdGEoc3RpY2t5TGF5b3V0LCBpbmNsdWRlQ2FyZCk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRGb3JtJyk7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RJVExFJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPclByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJpb3JpdHknKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhcmREYXRhID0gY2FyZERhdGEodGl0bGUudmFsdWUsIG1lc3NhZ2UudmFsdWUsIHByaW9yaXR5LCB0YXNrT3JQcm9qZWN0LnZhbHVlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50Q2FyZERhdGEucHJpb3JpdHkpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0YS5Ob3RlUHJpb3JpdHkoY3VycmVudENhcmREYXRhLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaW5jbHVkZUNhcmQub25jbGljayA9ICgpID0+IHsgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIHByaW9yaXR5SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0aWNreUxheW91dFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbGFiZWxGb3JDb250cm9sIGFzIGxhYmVsIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJzKCl7XHJcbiAgICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdVcGNvbWluZycpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVG9kYXknKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NhbGVuZGFyJyk7XHJcbiAgICBjb25zdCBzdGlja3lXYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N0aWNreVdhbGwnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBjb21pbmcsXHJcbiAgICAgICAgdG9kYXksXHJcbiAgICAgICAgY2FsZW5kYXIsXHJcbiAgICAgICAgc3RpY2t5V2FsbCxcclxuICAgICAgICBjaGFuZ2VUaXRsZShjaG9pY2Upe1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItdGl0bGUnKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaChjaG9pY2Upe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZS50ZXh0Q29udGVudCA9IGxhYmVsKHRoaXMudXBjb21pbmcpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RvZGF5JzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGl0bGUudGV4dENvbnRlbnQgPSBsYWJlbCh0aGlzLnRvZGF5KS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDYWxlbmRhcic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlLnRleHRDb250ZW50ID0gbGFiZWwodGhpcy5jYWxlbmRhcikuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU3RpY2t5IFdhbGwnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZS50ZXh0Q29udGVudCA9IGxhYmVsKHRoaXMuc3RpY2t5V2FsbCkuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgVG9kYXlDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBUb2RheUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9kYXlMYXlvdXQuY2xhc3NMaXN0LmFkZCgndG9kYXlDb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFRvZGF5TGF5b3V0XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgVXBjb21pbmdDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBVcGNvbWluZ0xheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVXBjb21pbmdMYXlvdXQuY2xhc3NMaXN0LmFkZCgndXBjb21pbmdDb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFVwY29taW5nTGF5b3V0XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NhbGVuZGFyTGF5b3V0XCI7XHJcbmltcG9ydCB7IFN0aWNreUNvbXBvbmVudCB9IGZyb20gXCIuL3N0aWNreUxheW91dFwiO1xyXG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gXCIuL3RvZGF5TGF5b3V0XCI7XHJcbmltcG9ydCB7IFVwY29taW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vdXBjb21pbmdMYXlvdXRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBsYWJlbEZvckNvbnRyb2woZWwpe1xyXG4gICAgbGV0IGlkVmFsID0gZWwuaWQ7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xyXG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsc1tpXS5odG1sRm9yID09IGlkVmFsKVxyXG4gICAgICAgICAgICAgcmV0dXJuIGxhYmVsc1tpXTtcclxuICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudChjb21wb25lbnQpe1xyXG4gICAgc3dpdGNoKGNvbXBvbmVudCl7XHJcbiAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gVXBjb21pbmdDb21wb25lbnQoKS5VcGNvbWluZ0xheW91dFxyXG4gICAgICAgIGNhc2UgJ1RvZGF5JzpcclxuICAgICAgICAgICAgcmV0dXJuIFRvZGF5Q29tcG9uZW50KCkuVG9kYXlMYXlvdXRcclxuICAgICAgICBjYXNlICdDYWxlbmRhcic6XHJcbiAgICAgICAgICAgIHJldHVybiBDYWxlbmRhckNvbXBvbmVudCgpLkNhbGVuZGFyTGF5b3V0XHJcbiAgICAgICAgY2FzZSAnU3RpY2t5IFdhbGwnOlxyXG4gICAgICAgICAgICByZXR1cm4gU3RpY2t5Q29tcG9uZW50KCkuc3RpY2t5TGF5b3V0XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlKGltYWdlICwgdyAsIGgpe1xyXG4gICAgY29uc3QgQ3VycmVudEltYWdlID0gbmV3IEltYWdlKHcgLCBoKTtcclxuICAgIEN1cnJlbnRJbWFnZS5zcmMgPSBpbWFnZTtcclxuXHJcbiAgICByZXR1cm4gQ3VycmVudEltYWdlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCl7XHJcbiAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoJ0NhcmQnKTtcclxuXHJcbiAgICByZXR1cm4gbmV3Q2FyZDtcclxufVxyXG5cclxuZXhwb3J0IHtsYWJlbEZvckNvbnRyb2wgLCBnZXRDb21wb25lbnQsIGdldEltYWdlLCBjcmVhdGVDYXJkfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=