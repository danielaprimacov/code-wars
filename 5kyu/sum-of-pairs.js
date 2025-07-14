function sumPairs(ints, s) {
  const seen = new Set();
  for (let i = 0; i < ints.length; i++) {
    const v = ints[i];
    const need = s - v;
    if (seen.has(need)) {
      return [need, v];
    }
    seen.add(v);
  }
  // no pair found
  return undefined;
}