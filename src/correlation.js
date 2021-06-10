Function.prototype.curry = function (...arg) {
  const currying = (fn, ...arg) =>
    fn.length <= arg.length ? fn(...arg) : (...others) => currying(fn, ...arg, ...others);
  return currying(this, ...arg);
};

function qwe(a, b, c) {
  return a + b + c;
}

console.log(qwe.curry(1, 2)(3));
