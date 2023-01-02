const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let primary = 0;
let secondary = arr.length - 1;
let val1 = 0;
let val2 = 0;
arr.forEach((outer) => {
  outer.forEach((inner, index) => {
    if (index === primary) {
      val1 += inner;
    }
    if (index === secondary) {
      val2 += inner;
    }
  });
  primary++;
  secondary--;
});
console.log(Math.abs(val1 - val2));
