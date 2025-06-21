function scramble(str1, str2) {
  // Quick reject if str1 is shorter than str2
  if (str1.length < str2.length) return false;

  // Build frequency map for str1
  const freq = new Array(26).fill(0);
  for (let ch of str1) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  // For each letter in str2, decrement the count.
  // If any letter runs out, we can't form str2.
  for (let ch of str2) {
    const idx = ch.charCodeAt(0) - 97;
    if (freq[idx] === 0) return false;
    freq[idx]--;
  }

  return true;
}
