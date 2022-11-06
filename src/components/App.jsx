import React from "react";
import "./../styles/index.scss";
import sword from "./../images/swc-sword.png";
import swordSvg from "./../images/sword.svg";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section>
        <h2>Hello from App</h2>
      </section>
      <section className="hero"></section>
      <main>
        <section>
          <img src={sword} alt="SVG Sword" />
          <img src={swordSvg} alt="PNG Sword" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
