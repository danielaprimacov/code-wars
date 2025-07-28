function areYouPlayingBanjo(name) {
  // Check if the first character is 'R' or 'r'
  const firstLetter = name.charAt(0).toLowerCase();
  if (firstLetter === 'r') {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}