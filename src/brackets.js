function bracketsFilter(brackets) {
  let bracketsArr = [];

  for (let index = 0; index < brackets.length; index++) {
    if (brackets[index] === "(") {
      bracketsArr.push(brackets[index]);
    } else {
      let lastIndex = bracketsArr.pop();

      if (!lastIndex) {
        return false;
      }
    }
  }
  if (bracketsArr.length) {
    return false;
  }
  return true;
}

console.log(bracketsFilter("(())"));

function bracketsFilterBig(data) {
  let bracketsArr = [];
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let index = 0; index < data.length; index++) {
    let brackets = data[index];
    if (brackets === "(" || brackets === "[" || brackets === "{") {
      bracketsArr.push(brackets);
    } else {
      let lastIndex = bracketsArr.pop();

      if (brackets !== obj[lastIndex]) {
        return false;
      }
    }
  }
  if (bracketsArr.length) {
    return false;
  }
  return true;
}

console.log(bracketsFilterBig("{(())}"));
