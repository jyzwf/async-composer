module.exports = fns =>
  fns.reduce((a, b) => (...args) => {
    const t = a(...args);
    if (t && typeof t === "object" && typeof t.then === "function") {
      return t.then(r => b(r));
    } else {
      return b(t);
    }
  });
