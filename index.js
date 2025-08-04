(function (global) {
  function greet(name) {
    return `Hello, ${name}!`;
  }

  function add(a, b) {
    return a + b;
  }

  // Export for browser
  global.MyLibrary = { greet, add };

  // Export for Node.js
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { greet, add };
  }
})(typeof window !== "undefined" ? window : global);
