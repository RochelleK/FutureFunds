
import { Route, Routes, useResolvedPath } from "react-router-dom";
import './App.css';
import CaculatorContainer from "./components/CaculatorContainer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calc" element={<CaculatorContainer />} />
      </Routes>
    </div>
  );
}

export default App;
