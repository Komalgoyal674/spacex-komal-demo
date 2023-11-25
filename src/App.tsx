import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rockets from "./pages/Rockets/Rockets";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
