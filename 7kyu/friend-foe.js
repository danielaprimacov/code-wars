function friend(friends){
  //your code here
  return friends.filter(name => typeof name === 'string' && name.length === 4);
}