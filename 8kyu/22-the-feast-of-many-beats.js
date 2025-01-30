function feast(beast, dish) {
//your function here
 return ((beast.slice(0,1)=== dish.slice(0,1))&&(beast.slice(-1)===dish.slice(-1)))?true:false;
}