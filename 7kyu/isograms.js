function isIsogram(str) {
  const a = str.toLowerCase().split("").sort();
  for (let i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) return false;
  }
  return true;
}
