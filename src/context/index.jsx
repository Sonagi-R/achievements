import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const ThemeContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");
  const [steamId, setSteamId] = useState("");

  return (
    <UserContext.Provider value={{ user_id, setUser_id, username, setUsername, password, setPassword, email, setEmail, steamId, setSteamId }}>
      {children}
    </UserContext.Provider>
  )
}

export const user = () => useContext(UserContext)

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('themeMode')) || "light");

  const lightTheme = {
    backgroundColor: "#DBE9EE",
    color: "#000",
    buttonColor: "#fff",
  };
  
  const darkTheme = {
    backgroundColor: "#0D1225",
    color: "#fff",
    buttonColor: "#15F4EA",
  };

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  let theme = themeMode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem('themeMode', JSON.stringify(themeMode))
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const themes = () => useContext(ThemeContext)