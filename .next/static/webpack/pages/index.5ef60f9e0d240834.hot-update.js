"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), todoItem = ref[0], setTodoItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"hjdsa\",\n        \"bajdhs\"\n    ]), items = ref1[0], setItems = ref1[1];\n    var handleAdd = function() {\n        if (todoItem) {\n            setItems([\n                todoItem\n            ].concat(_toConsumableArray(items)));\n            setTodoItem(\"\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: todoItem,\n                        onChange: function(e) {\n                            return setTodoItem(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAdd,\n                        children: \" Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: items.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: items\n                    }, void 0, false, {\n                        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ampa/todo/todo-app/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"30pjbA8O2+QA/TWFK7krQHv1t3c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFckJDLElBQUksR0FBRSxDQUFDOzs7SUFDZCxHQUFLLENBQTBCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFuQ0UsUUFBUSxHQUFnQkYsR0FBWSxLQUEzQkcsV0FBVyxHQUFJSCxHQUFZO0lBQzNDLEdBQUssQ0FBb0JBLElBR3ZCLEdBSHVCQSwrQ0FBUSxDQUFDLENBQUM7UUFDakMsQ0FBTztRQUNQLENBQVE7SUFDVixDQUFDLEdBSE1JLEtBQUssR0FBYUosSUFHdkIsS0FIV0ssUUFBUSxHQUFJTCxJQUd2QjtJQUVGLEdBQUssQ0FBQ00sU0FBUyxHQUFHLFFBQ25CLEdBRHdCLENBQUM7UUFDdEIsRUFBRSxFQUFDSixRQUFRLEVBQUMsQ0FBQztZQUNYRyxRQUFRLENBQUMsQ0FBQ0g7Z0JBQUFBLFFBQVE7WUFBVSxDQUFDLENBQXBCLE1BQW9CLG9CQUFORSxLQUFLO1lBQzVCRCxXQUFXLENBQUMsQ0FBRTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hJLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQVE7Ozs7Ozt3RkFDWEQsQ0FBRzs7Z0dBQ0RFLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxLQUFLLEVBQUVULFFBQVE7d0JBQUVVLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUdWLE1BQU0sQ0FBTkEsV0FBVyxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OztnR0FDNUVJLENBQU07d0JBQUNMLElBQUksRUFBQyxDQUFRO3dCQUFDTSxPQUFPLEVBQUVWLFNBQVM7a0NBQUUsQ0FBSTs7Ozs7Ozs7Ozs7O3dGQUUvQ1csQ0FBRTswQkFDQWIsS0FBSyxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO2tDQUNkLE1BQU0sK0RBQUxDLENBQUU7a0NBQUVoQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEIsQ0FBQztHQTdCUUgsSUFBSTtLQUFKQSxJQUFJO0FBK0JiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gSG9tZSgpe1xuICBjb25zdCBbdG9kb0l0ZW0sc2V0VG9kb0l0ZW1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShbXG4gICAgXCJoamRzYVwiLFxuICAgIFwiYmFqZGhzXCJcbiAgXSlcblxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PntcbiAgICBpZih0b2RvSXRlbSl7XG4gICAgICBzZXRJdGVtcyhbdG9kb0l0ZW0sIC4uLml0ZW1zXSk7XG4gICAgICBzZXRUb2RvSXRlbShcIlwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ub2RvIEFwcDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dG9kb0l0ZW19IG9uQ2hhbmdlPXsoZSk9PnNldFRvZG9JdGVtKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQWRkfT4gQWRkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSk9PihcbiAgICAgICAgICA8bGk+e2l0ZW1zfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJ0b2RvSXRlbSIsInNldFRvZG9JdGVtIiwiaXRlbXMiLCJzZXRJdGVtcyIsImhhbmRsZUFkZCIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});