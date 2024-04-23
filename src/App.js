import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
      </Routes>
    </Router>
  );
}

export default App;
