function getFirstPython(list) {
  // Thank you for checking out my kata :)
  const sortedList = list.filter(
    (developer) => developer.language === "Python"
  );

  if (sortedList.length === 0) return "There will be no Python developers";

  return `${sortedList[0].firstName}, ${sortedList[0].country}`;
}
