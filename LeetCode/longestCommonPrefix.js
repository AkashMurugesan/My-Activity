// const inp = ["flower", "flow", "flight"];
const inp = ["dog", "racecar", "car"];

let commonPrefix = inp[0];
inp.forEach((word) => {
  const len =
    commonPrefix.length > word.length ? word.length : commonPrefix.length;
  let comTemp = "";
  for (let i = 0; i < len; i++) {
    if (commonPrefix[i] === word[i]) {
      comTemp += commonPrefix[i];
    } else {
      commonPrefix = comTemp;
      break;
    }
  }
});
console.log(commonPrefix);
