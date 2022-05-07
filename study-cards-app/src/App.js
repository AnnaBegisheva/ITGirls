import { Routes, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/MainPage";
import Table from "./components/Table";
import TrainingPage from "./components/TrainingPage";
import Vocabulary from "./components/Vocabulary";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage/>}>
        <Route index element={<Table />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="vocabulary" element={<Vocabulary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
