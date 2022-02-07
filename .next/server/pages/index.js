"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: todoItem , 1: setTodoItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAdd = ()=>{\n        if (todoItem) {\n            setItems([\n                todoItem,\n                ...items\n            ]);\n            setTodoItem(\"\");\n        }\n    };\n    const handleDelete = (todo)=>{\n        const updated = items.filter((item)=>todoItem.indexOf(item) != todoItem.indexOf(todo)\n        );\n        setItems(updated);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: todoItem,\n                        onChange: (e)=>setTodoItem(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAdd,\n                        children: \" Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: items.length >= 1 ? items.map((todo, idx)=>{\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 19\n                    }, this));\n                }) : 'Enter Item'\n            }, void 0, false, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7U0FFckJDLElBQUksR0FBRSxDQUFDO0lBQ2QsS0FBSyxNQUFFQyxRQUFRLE1BQUNDLFdBQVcsTUFBSUgsK0NBQVEsQ0FBQyxDQUFFO0lBQzFDLEtBQUssTUFBRUksS0FBSyxNQUFDQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXBDLEtBQUssQ0FBQ00sU0FBUyxPQUFRLENBQUM7UUFDdEIsRUFBRSxFQUFDSixRQUFRLEVBQUMsQ0FBQztZQUNYRyxRQUFRLENBQUMsQ0FBQ0g7Z0JBQUFBLFFBQVE7bUJBQUtFLEtBQUs7WUFBQSxDQUFDO1lBQzdCRCxXQUFXLENBQUMsQ0FBRTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0ksWUFBWSxJQUFJQyxJQUFJLEdBQUksQ0FBQztRQUM3QixLQUFLLENBQUNDLE9BQU8sR0FBR0wsS0FBSyxDQUFDTSxNQUFNLEVBQUNDLElBQUksR0FBSVQsUUFBUSxDQUFDVSxPQUFPLENBQUNELElBQUksS0FBR1QsUUFBUSxDQUFDVSxPQUFPLENBQUNKLElBQUk7O1FBQ2xGSCxRQUFRLENBQUNJLE9BQU87SUFDbEIsQ0FBQztJQUVELE1BQU0sNkVBQ0hJLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQVE7Ozs7Ozt3RkFDWEQsQ0FBRzs7Z0dBQ0RFLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxLQUFLLEVBQUVmLFFBQVE7d0JBQUVnQixRQUFRLEdBQUdDLENBQUMsR0FBR2hCLFdBQVcsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Z0dBQzVFSSxDQUFNO3dCQUFDTCxJQUFJLEVBQUMsQ0FBUTt3QkFBQ00sT0FBTyxFQUFFaEIsU0FBUztrQ0FBRSxDQUFJOzs7Ozs7Ozs7Ozs7d0ZBRS9DaUIsQ0FBRTswQkFVQW5CLEtBQUssQ0FBQ29CLE1BQU0sSUFBRyxDQUFDLEdBQUVwQixLQUFLLENBQUNxQixHQUFHLEVBQUVqQixJQUFJLEVBQUNrQixHQUFHLEdBQUcsQ0FBQztvQkFDdkMsTUFBTSw2RUFBRUMsQ0FBRTs7NEJBQVluQixJQUFJO3dHQUFFYSxDQUFNO2dDQUFDQyxPQUFPLEdBQUdILENBQUMsR0FBSSxDQUFDO29DQUNqREEsQ0FBQyxDQUFDUyxjQUFjO29DQUNoQnJCLFlBQVksQ0FBQ0MsSUFBSTtnQ0FDbkIsQ0FBQzswQ0FBRSxDQUFNOzs7Ozs7O3VCQUhPa0IsR0FBRzs7Ozs7Z0JBSXJCLENBQUMsSUFBRyxDQUFZOzs7Ozs7Ozs7Ozs7QUFLekIsQ0FBQztBQUVELGlFQUFlekIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBIb21lKCl7XG4gIGNvbnN0IFt0b2RvSXRlbSxzZXRUb2RvSXRlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PntcbiAgICBpZih0b2RvSXRlbSl7XG4gICAgICBzZXRJdGVtcyhbdG9kb0l0ZW0sIC4uLml0ZW1zXSk7XG4gICAgICBzZXRUb2RvSXRlbShcIlwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT57XG4gICAgY29uc3QgdXBkYXRlZCA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHRvZG9JdGVtLmluZGV4T2YoaXRlbSkhPXRvZG9JdGVtLmluZGV4T2YodG9kbykpXG4gICAgc2V0SXRlbXModXBkYXRlZCk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ub2RvIEFwcDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dG9kb0l0ZW19IG9uQ2hhbmdlPXsoZSk9PnNldFRvZG9JdGVtKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQWRkfT4gQWRkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAgey8qIHtpdGVtcy5tYXAoKGl0ZW0pPT4oXG4gICAgICAgICAgPGxpIGtleT17aXRlbX0+e2l0ZW19PGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBoYW5kbGVEZWxldGUoaXRlbSlcbiAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICApKX0gKi99XG4gICAgICAgXG5cbiAgICAgICB7XG4gICAgICAgICBpdGVtcy5sZW5ndGggPj0xPyBpdGVtcy5tYXAoKHRvZG8saWR4KT0+e1xuICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PntcbiAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcbiAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cbiAgICAgICAgIH0pOiAnRW50ZXIgSXRlbSdcbiAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInRvZG9JdGVtIiwic2V0VG9kb0l0ZW0iLCJpdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlQWRkIiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZWQiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXhPZiIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJsaSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();