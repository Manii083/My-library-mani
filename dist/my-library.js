(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyLibrary = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var myLib;
	var hasRequiredMyLib;

	function requireMyLib () {
		if (hasRequiredMyLib) return myLib;
		hasRequiredMyLib = 1;
		function greet(name) {
		  return `Hello, ${name}!`;
		}

		function add(a, b) {
		  return a + b;
		}

		myLib = { greet, add };
		return myLib;
	}

	var myLibExports = requireMyLib();
	var index = /*@__PURE__*/getDefaultExportFromCjs(myLibExports);

	return index;

}));
