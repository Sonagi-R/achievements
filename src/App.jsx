import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import * as Pages from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.landingPage />} />
        <Route path="/achievements/:id" element={<Pages.achievementPage />} />
        <Route path="/home" element={<Pages.homePage />} />
        <Route path="/register" element={<Pages.registerPage />} />
        <Route path="/login" element={<Pages.loginPage />} />
      </Routes>
    </>
  );
}

export default App;
