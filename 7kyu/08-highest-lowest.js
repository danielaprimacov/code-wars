function highAndLow(numbers) {
  // ...
  let numArray = numbers.split(" ").map(Number); // Convert to an array of numbers
  let maxValue = Math.max(...numArray);
  let minValue = Math.min(...numArray);
  
  return `${maxValue} ${minValue}`;
}

console.log(highAndLow("1 2 3 4 5"));