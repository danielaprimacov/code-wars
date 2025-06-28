
function dirReduc(arr) {
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST:  'WEST',
    WEST:  'EAST'
  };
  
  const stack = [];
  
  for (const dir of arr) {
    // If the last direction on the stack is the opposite of the current,
    // pop it (they cancel); otherwise push the current.
    if (stack.length && opposite[dir] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
  
  return stack;
}