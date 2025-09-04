function findSmallestInt(arr) {
  let min = arr[0];
  for(const i of arr) {
    if(min > i) {
      min = i;
    }
  }
  return min;
}