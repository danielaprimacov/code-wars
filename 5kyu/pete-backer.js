function cakes(recipe, available) {
   // For each ingredient in the recipe, compute how many times
  // we can use what's available (floor of available / needed)
  const counts = Object.keys(recipe).map(ingredient => {
    const required = recipe[ingredient];
    const onHand  = available[ingredient] || 0;
    return Math.floor(onHand / required);
  });
  // The total cakes is limited by the scarcest ingredient
  return Math.min(...counts);
}