function palendrom(str) {
  let revetseStr = str.toLocaleLowerCase().split("").reverse().join("");
  return revetseStr === str;
}
console.log(palendrom("заказ"));
