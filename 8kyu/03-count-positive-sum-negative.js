function countPositivesSumNegatives(input) {
  // your code here
  if(!input || input.length === 0) {
    return [];
  }
  let posSum = 0;
  let negSum = 0;
  for (const element of input) {
    if(element > 0) {
      posSum++;
    } else if (element < 0) {
      negSum += element;
    }
  }
  return [posSum, negSum];
}