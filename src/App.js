import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendaceContainer from "./Components/Container/AttendaceContainer";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AttendaceContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
