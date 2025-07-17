function getCount(str) {
  const matches = str.match(/[aeiou]/gi) || [];
  return matches.length;
}
