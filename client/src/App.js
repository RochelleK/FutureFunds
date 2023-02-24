
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import CaculatorContainer from "./components/CaculatorContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {

  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calc" element={<CaculatorContainer />} />
        <Route
          path="/signin"
          element={<SignIn setUser={setUser} user={user} />}
        />
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} user={user} />}
        />
        <Route path="/nav" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
