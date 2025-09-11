function count(string) {
  const res = {};
  for (const ch of string) {
    res[ch] = (res[ch] || 0) + 1;
  }
  return res;
}
