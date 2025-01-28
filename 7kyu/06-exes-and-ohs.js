function XO(str) {
  //code here
  let xCount = 0,
    oCount = 0;
  str = str.toLowerCase();
  for (const char of str) {
    if (char === "x") xCount++;
    else if (char === "o") oCount++;
  }
  return xCount === oCount;
}

console.log(XO("xXoO"));
