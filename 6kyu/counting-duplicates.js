function duplicateCount(text) {
  const freq = {};
  for (const ch of text.toLowerCase()) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return Object.values(freq).filter(n => n > 1).length;
}