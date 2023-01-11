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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            title: sessions[0].title,\n            room: sessions[0].room.name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 19\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nconst IndexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = speaker;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                                    id: id,\n                                    first: first,\n                                    last: last\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 16\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                                    ...speaker\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 16\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBc0M7QUFFdEMsU0FBU0MsUUFBUSxLQUFlLEVBQUU7UUFBakIsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBZjtJQUNmLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOztZQUNiSDtZQUFNOzBCQUFDLDhEQUFDSTs7b0JBQU87b0JBQU9IOzs7Ozs7Ozs7Ozs7O0FBRzdCO0tBTlNGO0FBUVQsU0FBU00sU0FBUyxLQUFVLEVBQUU7UUFBWixFQUFDQyxTQUFRLEVBQUMsR0FBVjtJQUNoQixxQkFDRSw4REFBQ0M7UUFBSUosV0FBVTtrQkFDRCw0RUFBQ0o7WUFDQ0MsT0FBT00sUUFBUSxDQUFDLEVBQUUsQ0FBQ04sS0FBSztZQUN4QkMsTUFBTUssUUFBUSxDQUFDLEVBQUUsQ0FBQ0wsSUFBSSxDQUFDTyxJQUFJOzs7Ozs7Ozs7OztBQUkvQztNQVRTSDtBQVdULFNBQVNJLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFDLEdBQWxCO0lBQ3BCLHFCQUNFLDhEQUFDTDtRQUFJSixXQUFVO2tCQUNmLDRFQUFDVTtZQUNDVixXQUFVO1lBQ1ZXLEtBQUssbUJBQXNCLE9BQUhKLElBQUc7WUFDM0JLLE9BQU07WUFDTkMsS0FBSyxHQUFZSixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0FBSXZCO01BWFNIO0FBYVQsTUFBTVEsWUFBWSxJQUFNO0lBQ3RCLHFCQUNFLDhEQUFDVjtRQUFJSixXQUFVO2tCQUNiLDRFQUFDSTtZQUFJSixXQUFVO3NCQUNaTCxrREFBUSxDQUFDLFNBQVVxQixPQUFPLEVBQUU7Z0JBQzNCLE1BQU0sRUFDSlQsR0FBRSxFQUNGVSxJQUFHLEVBQ0hULE1BQUssRUFDTEMsS0FBSSxFQUNKUyxTQUFRLEVBQ1JDLGNBQWEsRUFDYkMsUUFBTyxFQUNQakIsU0FBUSxFQUNULEdBQUdhO2dCQUVKLHFCQUNFLDhEQUFDWjtvQkFFQ0osV0FBVTs7c0NBRVYsOERBQUNJOzRCQUFJSixXQUFVOzs4Q0FDZCw4REFBQ007b0NBQWFDLElBQUlBO29DQUFJQyxPQUFPQTtvQ0FBT0MsTUFBTUE7Ozs7Ozs4Q0FDMUMsOERBQUNZO29DQUFxQixHQUFHTCxPQUFPOzs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDZDs0QkFBU0MsVUFBVUE7Ozs7Ozs7bUJBUGpCSTs7Ozs7WUFZWDs7Ozs7Ozs7Ozs7QUFJUjtNQWxDTU87QUFvQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7c2Vzc2lvbnN9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Nlc3Npb25zWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb209e3Nlc3Npb25zWzBdLnJvb20ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgIDxpbWdcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBiaW8sXHJcbiAgICAgICAgICAgIGZpcnN0LFxyXG4gICAgICAgICAgICBsYXN0LFxyXG4gICAgICAgICAgICBmYXZvcml0ZSxcclxuICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcclxuICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgc2Vzc2lvbnMsXHJcbiAgICAgICAgICB9ID0gc3BlYWtlcjtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfS8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwibmFtZSIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJJbmRleFBhZ2UiLCJtYXAiLCJzcGVha2VyIiwiYmlvIiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});