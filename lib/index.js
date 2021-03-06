"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (fns) {
  return fns.reduce(function (a, b) {
    return function () {
      var t = a.apply(void 0, arguments);

      if (t && _typeof(t) === "object" && typeof t.then === "function") {
        return t.then(function (r) {
          return b(r);
        });
      } else {
        return b(t);
      }
    };
  });
};