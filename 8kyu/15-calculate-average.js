function findAverage(array) {
  // your code here
  let sum = 0;
  for(const num of array)  {
    sum += num;
  }
  return array.length !=0 ? sum/array.length : 0;
}