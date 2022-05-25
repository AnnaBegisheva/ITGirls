import { Routes, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/MainPage";
import Table from "./components/Table";
import TrainingPage from "./components/TrainingPage";
import data from "./assets/data.json";
import Vocabulary from "./components/Vocabulary";
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage/>}>
        <Route index element={<Table />} />
        <Route path="training" element={<TrainingPage data={data}/>} />
        <Route path="vocabulary" element={<Vocabulary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
