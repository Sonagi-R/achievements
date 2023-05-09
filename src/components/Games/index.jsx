import React, { useState, useEffect } from "react";
import "./index.css";

import { user } from "../../context";

export default function Games() {
    const [gamesData, setGamesData] = useState([]);

    async function syncGames() {
        const user_id = localStorage.getItem("user_id");
        const user_Steam_id = localStorage.getItem("steam_id");
        console.log(user_id, user_Steam_id)
        const games = await fetch(`http://localhost:4000/steam/games/${user_Steam_id}`);
        const gameData = await games.json();
        console.log(gameData);
        console.log(gameData.response.games);
        setGamesData(gameData.response.games);
    }  

    useEffect(() => {
        syncGames();
    }, [])

  return (
        <div className="games-container">
        <button onClick={syncGames}>Sync Your Games</button>
          {gamesData && Array.isArray(gamesData) &&
            gamesData.map((game) => (
            <div className="flashcard" key={game.name}>
                <img src="https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg" alt="" />
                <title>{game.name}</title>
                <p>{game.name}</p>
            </div>
          ))}

          <div className="game">
              <img src="https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://gaming-cdn.com/images/products/2419/616x353/batman-arkham-knight-pc-game-steam-cover.jpg?v=1649319361" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://prod.assets.earlygamecdn.com/images/csgo-2.jpg?mtime=1678019572" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://rocketleague.media.zestyio.com/seasonylogostime.jpg?width=1440&optimize=high" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DivinityOriginalSin2DefinitiveEdition_image1600w.jpg" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://image.api.playstation.com/vulcan/img/cfn/113075PxnarzRek4cRpjrRWSpLfrcBd23B5e_Yj2azms6nWYKmySv4h3a22G5_R1CM4BQUmSRD6oOArDROKv041NUkgun78-.png" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://i.ytimg.com/vi/qyeDBQow1bI/maxresdefault.jpg" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
          <div className="game">
              <img src="https://assets-prd.ignimgs.com/2022/01/05/rayman-3-button-1641344567706.jpg" alt="" />
              <title></title>
              <p>Random Text</p>
          </div>
        </div>
  );
}