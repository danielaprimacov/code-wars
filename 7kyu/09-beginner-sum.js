function getSum(a, b) {
  //Good luck!
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
}

console.log(getSum(5, -1));
