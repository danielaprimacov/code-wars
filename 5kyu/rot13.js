function rot13(message) {
  return message.replace(/[A-Za-z]/g, ch => {
    const code = ch.charCodeAt(0);
    const base = code >= 97 ? 97 : 65; // a..z or A..Z
    return String.fromCharCode(((code - base + 13) % 26) + base);
  });
}