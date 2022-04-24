import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Character from "./pages/character/character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container-title">
          <h1>Star wars characters</h1>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
