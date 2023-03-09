import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Budget from "./components/Items/Budget";
import CaculatorContainer from "./components/CaculatorContainer";
import Home from "./components/Home";
import ItemsHome from "./components/Items/ItemsHome";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TestPage from "./components/TestPage";
function App() {
  const [user, setUser] = useState(null);
  const [yourBudget, setYourBudget] = useState([]);

  // useEffect(() => {
    // auto-login
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setUser(user);
  //       });
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   // auto-login
  //   const getUser = async () => {
  //     let req = await fetch("/me");
  //     let res = await req.json();
  //     console.log("res", res);
  //     setUser(res);
  //   };
  //   getUser();
  // }, []);

  useEffect(() => {
    // hardcoded login
    fetch("/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calc" element={<CaculatorContainer user={user} />} />
        <Route
          path="/signin"
          element={<SignIn setUser={setUser} user={user} />}
        />
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} user={user} />}
        />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/nav2" element={<NavBar2 setUser={setUser} />} />
        <Route
          path="/items"
          element={
            <ItemsHome
              user={user}
              yourBudget={yourBudget}
              setYourBudget={setYourBudget}
            />
          }
        />
        <Route path="/test" element={<TestPage />} />
        <Route
          path="/budget"
          element={
            <Budget
              user={user}
              yourBudget={yourBudget}
              setYourBudget={setYourBudget}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
