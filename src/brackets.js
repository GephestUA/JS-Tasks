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
