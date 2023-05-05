import React from "react";
import '../Register/index.css'
import { user } from "../../context";

export default function Login() {
  const { username, setUsername, email, setEmail, password, setPassword } = user();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

 async function handleSubmit(e) {
    e.preventDefault();

    const loginUser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //headers: { "Accept": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
          username: username, 
          password: password 
        }),
      };

      const res = await fetch("http://localhost:4000/users/login", options);
      const data = await res.json();
      setUsername(data.username);
      console.log(data.user_id, data.steam_id)
      //getAllData(data.steam_id);

      return [data.user_id, data.steam_id];
    };

    const userData = await loginUser();
    getAllData(userData);
  }

  const getAllData = async (userData) => {
    //console.log("steam_id", steamId)
    const userId = userData[0];
    const userSteamId = userData[1];
    let options;

    const games = await fetch(`http://localhost:4000/steam/games/${userSteamId}`);
    const gamesData = await games.json();
    console.log(gamesData);
    gamesData.response.games.map(async (gameObject) => {
      console.log(gameObject)
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //headers: { "Accept": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
          app_id: gameObject.appid, 
          game_name: gameObject.name,
          playtime: gameObject.playtime_windows_forever, 
          user_id: userId  
        }),
      };
      const stashGames = await fetch(`http://localhost:4000/games/new`, options)
    })

    /*options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //headers: { "Accept": "application/json" },
      credentials: "include",
      body: JSON.stringify({ 
        app_id: gamesData.response.games.appid, 
        game_name: gamesData.response.games.name,
        playtime: gamesData.response.games.playtime_windows_forever, 
        user_id: userSteamId  
      }),
    };
    const stashGames = await fetch(`http://localhost:4000/games/${userSteamId}`);*/

    const achievements = await fetch(`http://localhost:4000/steam/achievements/${userSteamId}`);
    const achievementsData = await achievements.json();
    console.log(achievementsData);
    
  }

  return (
    <div className="d-flex mb-5 flex-column" id="login-page">
      <h1 className="logo-title mb-5">Achievement</h1>
      <h2 className="mb-5">Login</h2>
      <form className="d-flex justify-content flex-column">
        <input onChange={usernameHandler} type="text" placeholder="Username" className="mt-2 form-entry"></input>
        <input onChange={passwordHandler} type="password" placeholder="Password" className="mt-2 form-entry"></input>
        <button type="submit" onClick={handleSubmit} className="mt-2 form-entry form-submit">
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}
