function openOrSenior(data){
  // ...
  let output = [];
  for(const member of data) {
    (member[0] >= 55 && member[1] > 7) ? output.push('Senior') : output.push('Open')
  }
  return output;
}