function abbrevName(name){
    // code away
  let sepName = name.split(" ");
  return  sepName[0].slice(0,1).toUpperCase() + "." + sepName[1].slice(0,1).toUpperCase()
}