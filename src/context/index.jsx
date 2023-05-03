import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");

  return (
    <UserContext.Provider value={{ user_id, setUser_id, username, setUsername, password, setPassword, email, setEmail }}>
      {children}
    </UserContext.Provider>
  )
}

export const user = () => useContext(UserContext)