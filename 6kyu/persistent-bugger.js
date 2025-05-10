function persistence(num) {
   //code me
  let count = 0;

  while (num >= 10) {
    // Split into digits, convert to numbers, multiply them together
    num = String(num)
      .split('')
      .map(d => Number(d))
      .reduce((product, digit) => product * digit, 1);
    count++;
  }

  return count;
}