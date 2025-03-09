function namesSorter(departmentsArray) {
  let arr = [].concat(...departmentsArray);

  arr.sort((a, b) => a.length - b.length || (a > b ? 1 : -1));

  return arr;
}
