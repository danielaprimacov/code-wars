function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  for(let i = 0; i < list.length; i++) {
    if(list[i].language !== list[0].language) return false; 
  }
  return true;
}