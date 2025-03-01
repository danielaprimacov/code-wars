function lastDayIsFriday(initialYear, endYear = initialYear) {
  let countFridays = 0;

  for (let year = initialYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      let lastDay = new Date(year, month + 1, 0);
      if (lastDay.getDay() === 5) {
        countFridays++;
      }
    }
  }

  return countFridays;
}
