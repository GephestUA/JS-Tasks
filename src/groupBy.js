const groupBy = (arr, callback) => {
  const result = {};
  arr.forEach((element) => {
    let resultAfretCallback = callback(element);
    result[resultAfretCallback]
      ? result[resultAfretCallback].push(element)
      : (result[resultAfretCallback] = [element]);
  });
  console.log(result);
};

groupBy([6.1, 6.2, 7.1, 7.5], Math.ceil);
