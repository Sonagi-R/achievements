import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import { UserProvider } from "./context";
import * as Pages from "./pages";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Pages.homePage />} /> 
            <Route path="/games" element={<Pages.gamesPage />} />
            <Route path="/achievements/:id" element={<Pages.achievementPage />} />
            </Route>
            <Route path="/landing" element={<Pages.landingPage />} />
            <Route path="/register" element={<Pages.registerPage />} />
            <Route path="/login" element={<Pages.loginPage />} />
          <Route path={"/*"} element={<Navigate to={"/"} />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
