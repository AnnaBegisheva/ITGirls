import React, { useState } from "react";
import Plan from './components/Plan';
import './App.css';
import data from './components/plans.json';
import themeA from "./assets/unlim300.module.css";
import themeB from "./assets/unlim450.module.css";
import themeC from "./assets/unlim550.module.css";
import themeD from "./assets/unlim1000.module.css";

function App() {
  const themes = [themeA, themeB, themeC, themeD];
  const [selected, setSelected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Наши тарифы
      </header>
      <div className="plans">
        {
          data.map((plan, i) =>
          <Plan title={plan.title} price={plan.price} speed={plan.speed} theme={themes[i]} selected={selected === i} onClick={() => setSelected(i)}></Plan>
          )
        }
      </div>
    </div>
  );
}

export default App;
