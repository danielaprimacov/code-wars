function anagramCounter(wordsArray) {
  let sortedArray = wordsArray.map((word) => word.split("").sort().join(""));
  let counter = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] === sortedArray[j]) counter++;
    }
  }
  return counter;
}
