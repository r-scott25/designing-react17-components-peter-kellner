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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nfunction Session(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            props.title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nconst IndexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = speaker;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"contain-fit\",\n                                    src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                    width: \"300\",\n                                    alt: \"\".concat(first, \" \").concat(last)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"speaker-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between mb-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-truncate w-200\",\n                                            children: [\n                                                first,\n                                                \" \",\n                                                last\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                bio,\n                                                \" \",\n                                                company,\n                                                \" \",\n                                                twitterHandle,\n                                                \" \",\n                                                favorite\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sessionBox card h-250\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                                    title: sessions[0].title,\n                                    room: sessions[0].room.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 15\n                    }, this)\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rache\\\\OneDrive\\\\Rachel\\\\WebDevelopment\\\\pluralsight\\\\designing-react17-components-peter-kellner\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBc0M7QUFFdEMsU0FBU0MsUUFBUUMsS0FBSyxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOztZQUNYRixNQUFNRyxLQUFLO1lBQUM7MEJBQUMsOERBQUNDOzs7Ozs7Ozs7OztBQUd2QjtLQU5TTDtBQVFULE1BQU1NLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUosV0FBVTtrQkFDYiw0RUFBQ0k7WUFBSUosV0FBVTtzQkFDWkosa0RBQVEsQ0FBQyxTQUFVVSxPQUFPLEVBQUU7Z0JBQzNCLE1BQU0sRUFDSkMsR0FBRSxFQUNGQyxJQUFHLEVBQ0hDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxTQUFRLEVBQ1JDLGNBQWEsRUFDYkMsUUFBTyxFQUNQQyxTQUFRLEVBQ1QsR0FBR1I7Z0JBRUoscUJBQ0UsOERBQUNGO29CQUVDSixXQUFVOzhCQUVWLDRFQUFDSTt3QkFBSUosV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFJSixXQUFVOzBDQUNiLDRFQUFDZTtvQ0FDQ2YsV0FBVTtvQ0FDVmdCLEtBQUssbUJBQXNCLE9BQUhULElBQUc7b0NBQzNCVSxPQUFNO29DQUNOQyxLQUFLLEdBQVlSLE9BQVRELE9BQU0sS0FBUSxPQUFMQzs7Ozs7Ozs7Ozs7MENBR3JCLDhEQUFDTjtnQ0FBSUosV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUFJSixXQUFVO2tEQUNiLDRFQUFDbUI7NENBQUduQixXQUFVOztnREFDWFM7Z0RBQU07Z0RBQUVDOzs7Ozs7Ozs7Ozs7a0RBR2IsOERBQUNOO2tEQUNDLDRFQUFDZ0I7O2dEQUNFWjtnREFBSTtnREFBRUs7Z0RBQVE7Z0RBQUVEO2dEQUFjO2dEQUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl2Qyw4REFBQ1A7Z0NBQUlKLFdBQVU7MENBQ2IsNEVBQUNIO29DQUFRSSxPQUFPYSxRQUFRLENBQUMsRUFBRSxDQUFDYixLQUFLO29DQUFFb0IsTUFBTVAsUUFBUSxDQUFDLEVBQUUsQ0FBQ08sSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzttQkF6QjdEZjs7Ozs7WUErQlg7Ozs7Ozs7Ozs7O0FBSVI7TUFyRE1KO0FBdUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAge3Byb3BzLnRpdGxlfSA8c3Ryb25nPjwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBiaW8sXHJcbiAgICAgICAgICAgIGZpcnN0LFxyXG4gICAgICAgICAgICBsYXN0LFxyXG4gICAgICAgICAgICBmYXZvcml0ZSxcclxuICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcclxuICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgc2Vzc2lvbnMsXHJcbiAgICAgICAgICB9ID0gc3BlYWtlcjtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgICAgICAgPFNlc3Npb24gdGl0bGU9e3Nlc3Npb25zWzBdLnRpdGxlfSByb29tPXtzZXNzaW9uc1swXS5yb29tLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb24iLCJwcm9wcyIsInNwYW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsInN0cm9uZyIsIkluZGV4UGFnZSIsImRpdiIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDMiLCJwIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});