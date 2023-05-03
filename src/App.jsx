import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import * as Pages from "./pages";
import Nav from "./layout/nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Pages.homePage />} />
            {/* <Route path="/achievements/:id" element={<Pages.achievementPage />} /> */}
            <Route path="/register" element={<Pages.registerPage />} />
            <Route path="/login" element={<Pages.loginPage />} />
        </Route>
        <Route path={'/*'} element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
