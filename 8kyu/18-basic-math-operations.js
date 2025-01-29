function basicOp(operation, value1, value2){
  //Code
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  return operations[operation] ? operations[operation](value1, value2) : "Invalid operation";
}