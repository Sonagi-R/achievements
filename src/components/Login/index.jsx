import React from "react";
import '../Register/index.css';
import { user } from "../../context";

export default function Login() {
  const { username, setUsername, email, setEmail, password, setPassword, user_id, setUser_id, steamId, setSteamId } = user();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const loginUser = async () => {
      let options;
      options = {
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
      options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        //headers: { "Accept": "application/json" },
        credentials: "include"
      };
      const user = await fetch("http://localhost:4000/users/current", options);
      const userdata = await user.json();
      if (user.ok) {
        console.log(userdata)
      setSteamId(userdata.steam_id);
      setUser_id(userdata.user_id);
      localStorage.setItem("user_id", userdata.user_id);
        localStorage.setItem("steam_id", userdata.steam_id);
        window.location.assign("/games")
      }
      //getAllData([userdata.user_id, userdata.steam_id]);
      //getAllData(data.steam_id);
      //localStorage.setItem("userId", data.userid);
      //localStorage.setItem("steamId", data.steam_id);
      // return [userdata.user_id, userdata.steam_id];
    };
    const userdata = await loginUser();
    console.log(userdata)
    getAllData(userdata);
  }
  const getAllData = async (userData) => {
    const userId = userData[0];
    const userSteamId = userData[1];
    //const userId = localStorage.getItem("userId");
    //const userSteamId = localStorage.getItem("steamId");
    console.log(userId, userSteamId)
    let options;
    //1. get games
    const games = await fetch(`http://localhost:4000/steam/games/${userSteamId}`);
    const gamesData = await games.json();
    console.log(gamesData);
    gamesData.response.games.map(async (gameObject) => {
      console.log(gameObject)
      //2. store games
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
      const stashGames = await fetch(`http://localhost:4000/games/new`, options);
      const storedGames = await stashGames.json();
      console.log(storedGames)
      //3. get achievements
      options = {
        method: "GET",
        credentials: "include"
      };
      const getAchievements = await fetch(`http://localhost:4000/steam/achievements/?appid=${gameObject.appid}&steamid=${userSteamId}`);
      const achievementsData = await getAchievements.json();
      console.log(achievementsData)
      if ('achievements' in achievementsData.playerstats) {
        achievementsData.playerstats.achievements.map( async (achievementObject) => {
          //4. store achievements
          console.log(achievementObject.apiname)
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              achievement_name: achievementObject.apiname,
              description: "description",
              icon: "description",
              app_id: gameObject.appid,
              user_id: userId
            }),
          };
          const stashAchievements = await fetch(`http://localhost:4000/achievements/new`, options)
          const storedAchievements = await stashAchievements.json();
          console.log(storedAchievements)
        })
        console.log("true")
      } else {
        console.log("false")
      }
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
    /*const achievements = await fetch(`http://localhost:4000/steam/achievements/${userSteamId}`);
    const achievementsData = await achievements.json();
    console.log(achievementsData);*/
  }
  return (
    <div className="d-flex mb-5 flex-column" id="login-page">
      <h1 className="logo-title mb-5">Achievements</h1>
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