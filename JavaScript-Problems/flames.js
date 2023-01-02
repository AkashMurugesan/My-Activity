const boy = "naruto".replace(new RegExp(" ", "g"), "").toLowerCase();
let girl = "hinata".replace(new RegExp(" ", "g"), "").toLowerCase();
let difCount = boy.length + girl.length;
let flames = "flames";

boy.split("").forEach((letter) => {
  if (girl.includes(letter)) {
    girl = girl.replace(letter, "");
    difCount = difCount - 2;
  }
});

const leftRotateAndRemove = (str, pos) => {
  const rotatedString = str.substring(pos, str.length) + str.substring(0, pos);
  return rotatedString.substring(1);
};

for(let i = 0; i < 5; i++) {
  canceledLetterIndex = difCount % flames.length ? (difCount % flames.length) - 1 : flames.length - 1;
  flames = leftRotateAndRemove(flames, canceledLetterIndex);
}
console.log(flames);
