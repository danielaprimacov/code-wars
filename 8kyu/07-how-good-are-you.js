function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;
  for (const points of classPoints) {
    sum += points;
  }
  sum += yourPoints;
  let averagePoints = sum / classPoints.length;
  if (averagePoints > yourPoints) return false;
  else return true;
}