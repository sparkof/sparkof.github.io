"use strict";

function pow(a, n) {
  var result = a;
  if (a == 0) return 0;
  if (n > 0) {
    for (var i = 1; i < n; i++) {
      result *= a;
    }
    return result;
  } else if (n < 0) {
    for (var i = -1; i > n; i--) {
      result *= a;
    }
    return 1 / result;
  }
  return 1;
};

try {
  module.exports = pow;
} catch (e) {};