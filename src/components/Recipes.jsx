import { useState } from "react";
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

const Recipes = () => {
  const [recipe, setRecipe] = useState(elevenShieldRecipe);
  return (
    <div className="recipe--cntr">
      <div>
        <button onClick={() => setRecipe(elevenShieldRecipe)}>
          Eleven Shield
        </button>
        <button onClick={() => setRecipe(elevenGauntletsRecipe)}>
          Eleven Gauntlets
        </button>
      </div>
      <div>
        <ul>
          {Object.keys(recipe).map((item) => (
            <li key={item}>
              {item}:{recipe[item]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
