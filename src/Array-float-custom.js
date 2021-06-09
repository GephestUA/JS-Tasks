let arr = [1, 2, [3, 4, [5, 6]]];

function arrFloat(data) {
  let result = [];
  data.forEach((el) => {
    if (Array.isArray(el)) {
      result = [...result, ...arrFloat(el)];
    } else {
      result = [...result, el];
    }
  });
  return result;
}

console.log(arrFloat(arr));

let arr = [1, 2, [3, 4, [5, 6]]];

function arrFloat(data) {
  const stack = [...data];
  let result = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}

console.log(arrFloat(arr));
