function correct(string) {
  return string.replace(/[501]/g, (ch) => ({ 5: "S", 0: "O", 1: "I" }[ch]));
}
