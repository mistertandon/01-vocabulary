const elevenShieldRecipe = {
  leatherStrings: 1,
  ironIngot: 2,
  refinedMoonstoned: 3,
};

const elevenGauntletsRecipe = {
  ...elevenShieldRecipe,
  leather: 4,
  refinedMoonstoned: 5,
};

console.log("elevenShieldRecipe: ", elevenShieldRecipe);
console.log("elevenGauntletsRecipe: ", elevenGauntletsRecipe);
