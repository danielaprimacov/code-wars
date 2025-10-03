function countSheeps(sheep) {
  if (!Array.isArray(sheep)) return 0;
  return sheep.reduce((count, s) => count + (s === true ? 1 : 0), 0);
}
