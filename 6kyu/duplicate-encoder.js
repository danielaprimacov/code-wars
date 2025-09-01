function duplicateEncode(word) {
  const lower = word.toLowerCase();
  const counts = Object.create(null);

  for (const ch of lower) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  let out = '';
  for (const ch of lower) {
    out += counts[ch] === 1 ? '(' : ')';
  }
  return out;
}