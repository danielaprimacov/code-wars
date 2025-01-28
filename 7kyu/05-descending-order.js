function descendingOrder(n) {
  //...
  // Convert the number to a string, split it into an array of digits
  let num = n.toString().split("");
  
  // Sort the array in descending order
  num.sort((a, b) => b - a);
  
  // Join the sorted digits and convert back to a number
  return parseInt(num.join(""));
}

console.log(descendingOrder(1201));
