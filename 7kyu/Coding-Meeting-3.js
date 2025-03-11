function isRubyComing(list) {
  // thank you for checking out my kata :)
  const sortedList = list.map(developer => developer.language)
  if(sortedList.includes("Ruby")) return true;
  return false;
}