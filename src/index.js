import { render } from "react-dom";
import "./styles/index.scss";

render(<h1>Hello from React</h1>, document.getElementById("root"));

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
