import Plan from './components/Plan';
import './App.css';
import data from './components/plans.json';
import themeA from "./assets/unlim300.module.css";
import themeB from "./assets/unlim450.module.css";
import themeC from "./assets/unlim550.module.css";
import themeD from "./assets/unlim1000.module.css";

function App() {
  const themes = [themeA, themeB, themeC, themeD];
  return (
    <div className="App">
      <header className="App-header">
        Наши тарифы
      </header>
      <div className="plans">
        {
          data.map((plan, i) =>
          <Plan title={plan.title} price={plan.price} speed={plan.speed} theme={themes[i]} isSelected={plan.isSelected}></Plan>
          )
        }
      </div>
    </div>
  );
}

export default App;
