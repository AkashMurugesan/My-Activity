const inp = ["flower", "flow", "flight"];
// const inp = ["dog", "racecar", "car"];
let commonPrefix = inp[0];
inp.forEach((word) => {
  let comTemp = "";
  for (let i = 0; i < commonPrefix.length; i++) {
    if (commonPrefix[i] === word[i]) {
      comTemp += commonPrefix[i];
    } else {
      commonPrefix = comTemp;
      break;
    }
  }
});
console.log(commonPrefix);


// best solution
var longestCommonPrefix = function (strs) {

  // Take first word as prefix
  let prefix = strs[0];

  // Compare with remaining words
  for (let i = 1; i < strs.length; i++) {

    while (strs[i].startsWith(prefix) === false) {

      // Remove last character
      prefix = prefix.slice(0, -1);

      // If prefix becomes empty
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};
