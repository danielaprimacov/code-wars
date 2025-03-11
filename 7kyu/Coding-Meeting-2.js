function greetDevelopers(list) {
  // thank you for checking out my kata :)
 return list.map(developer => ({
   ...developer,
   greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`   
 }));
}