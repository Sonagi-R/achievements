import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import { ThemeProvider, UserProvider, themes } from "./context";
import * as Pages from "./pages";

function App() {

  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Pages.homePage />} />
              <Route path="/games" element={<Pages.gamesPage />} />
              <Route path="/games/:id" element={<Pages.gameAchievmentPage />} />
              <Route path="/achievements/:id" element={<Pages.achievementPage />} />
              <Route path="/achievements" element={<Pages.achievementsPage />} />
              <Route path="/store" element={<Pages.storePage />} />
              <Route path="/leaderboard" element={<Pages.leaderboardPage />} />
              <Route path="/register" element={<Pages.registerPage />} />
              <Route path="/login" element={<Pages.loginPage />} />
            </Route>
            <Route path="/landing" element={<Pages.landingPage />} />
            <Route path={"/*"} element={<Navigate to={"/"} />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
