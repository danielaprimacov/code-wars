function countDevelopers(list) {
  // your awesome code here :)
  const sortedList = list.filter(developer => developer.continent === "Europe" && developer.language === "JavaScript");
  return sortedList.length;
}