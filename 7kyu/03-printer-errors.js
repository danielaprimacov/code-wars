function printerError(s) {
  // your code
  let numError = 0;
  for (const char of s) {
  if (!/^[A-Ma-m]+$/.test(char)) numError++;
  }
  return numError.toString() + "/" + s.length.toString();
}