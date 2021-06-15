function sum(a) {
  let summ = a;
  function f(b) {
    if (b) {
      summ += b;
      return f;
    } else return summ;
  }
  return f;
}

console.log(sum(3)(4)(5)(8)());
