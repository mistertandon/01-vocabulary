import React from "react";
import "./../styles/index.scss";
import Recipes from "./Recipes";
// import "./styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h2>Hello from App</h2>
        </section>
        <section>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
