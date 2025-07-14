function isBalanced(s, caps) {
   var map = {}, open = '', close = '', stack = [], i, ch, top;
  // build opener/closer lists and mapping
  for (i = 0; i < caps.length; i += 2) {
    open  += caps[i];
    close += caps[i+1];
    map[caps[i+1]] = caps[i];
  }
  // scan the string
  for (i = 0; i < s.length; i++) {
    ch  = s[i];
    top = stack[stack.length - 1];
    // opener (including toggled identicals)
    if (open.indexOf(ch) > -1 && (close.indexOf(ch) < 0 || top !== ch)) {
      stack.push(ch);
    }
    // closer
    else if (close.indexOf(ch) > -1) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  // balanced if nothing left open
  return stack.length === 0;
}