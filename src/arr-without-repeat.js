let arr = [1, 2, 2, 3, 4, 4, 5];

function withoutRepeat(data) {
  let resultArr = [];
  for (let i = 0; i < data.length; i++) {
    let currentItem = data[i];
    let count = 0;
    for (let j = 0; j < data.length; j++) {
      if (currentItem === data[j]) {
        count++;
      }
    }
    if (count === 1) {
      resultArr.push(currentItem);
    }
  }
  return resultArr;
}

console.log(withoutRepeat(arr));

function withoutRepeat2(data) {
  let resultArr = [];
  const obj = {};
  for (let i = 0; i < data.length; i++) {
    let currentItem = data[i];
    if (!(currentItem in obj)) {
      obj[currentItem] = 1;
    } else {
      obj[currentItem] += 1;
    }
  }
  const keys = Object.keys(obj);
  keys.forEach((keys) => {
    if (obj[keys] === 1) {
      resultArr.push(keys);
    }
  });
  return resultArr;
}

console.log(withoutRepeat2(arr));

