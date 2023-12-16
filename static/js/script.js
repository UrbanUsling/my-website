/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.ts":
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
/***/ (() => {

eval("\nwindow.onload = function () {\n    var filePath = 'static/textfiles/villkor.txt';\n    var outputElement = document.getElementById('termsOutput');\n    // Check if the output element is present before trying to set text content\n    if (outputElement) {\n        fetch(filePath)\n            .then(response => response.text())\n            .then(text => {\n            outputElement.textContent = text;\n        })\n            .catch(error => {\n            console.error('Error reading file:', error);\n        });\n    }\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    // Get elements\n    var termsLink = document.getElementById(\"termsLink\");\n    var iframeContainer = document.getElementById(\"iframeContainer\");\n    // Check if the elements are present before trying to add event listeners\n    if (termsLink && iframeContainer) {\n        // Add click event listener to the \"Terms and Conditions\" link\n        termsLink.addEventListener(\"click\", function (event) {\n            event.preventDefault(); // Prevent the default link behavior\n            // Show the iframe container\n            if (iframeContainer.style) {\n                iframeContainer.style.display = \"block\";\n            }\n            // Set the iframe source\n            var iframe = iframeContainer.querySelector('iframe'); // Use querySelector on iframeContainer\n            if (iframe) {\n                iframe.src = \"/terms\";\n            }\n        });\n    }\n});\nwindow.enableSubmit = function () {\n    // Get the checkbox and submit button elements\n    var checkbox = document.getElementById(\"exampleCheck1\");\n    var submitButton = document.getElementById(\"submitButton\");\n    // Enable or disable the submit button based on the checkbox state\n    if (submitButton) {\n        submitButton.disabled = !checkbox.checked;\n    }\n};\nfunction submitForm() {\n    // Get the form and iframe elements\n    var form = document.getElementById(\"myForm\");\n    var iframeContainer2 = document.getElementById(\"iframeContainer2\");\n    // Check if the elements are present before trying to hide/show\n    if (form && iframeContainer2) {\n        // Hide the form\n        form.style.display = \"none\";\n        // Show the iframe container\n        if (iframeContainer2.style) {\n            iframeContainer2.style.display = \"block\";\n        }\n    }\n    // Set the iframe source\n    var iframe = iframeContainer2 === null || iframeContainer2 === void 0 ? void 0 : iframeContainer2.querySelector('iframe');\n    if (iframe) {\n        iframe.src = \"/confirmation\";\n    }\n}\n\n\n//# sourceURL=webpack://my-website/./src/home.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.ts"]();
/******/ 	
/******/ })()
;