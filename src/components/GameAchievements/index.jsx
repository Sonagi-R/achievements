import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function GameAchievement() {
  const [game, setGame] = useState({});
  const [achievementList, setAchievementList] = useState([])
  const [user_id, setUser_id] = useState('');
  const [user_Steam_id, setUser_Steam_id] = useState('');
  const [app_id, setApp_id] = useState('');
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.user_id === "") {
        navigate("/login")
      }
    }, [localStorage.user_id, navigate])
  useEffect(() => {
    getGameAchievements()
  }, []);
  useEffect(() => {
    console.log("USEEFFECT")
    console.log(achievementList)
  }, [achievementList]);
  const handleSearch = (e) => {
    setFilteredGames(games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  const handleCardFlip = (index) => {
    const allCards = document.querySelectorAll(".flip-card-inner");
      if (!allCards[index].style.transform || allCards[index].style.transform == "none") {
        allCards[index].style.transform = "rotateY(180deg)";
      } else {
        allCards[index].style.transform = "none";
    }
    };
    const getGameAchievements = async () => {
      let options;
      //setUser_id(localStorage.getItem("user_id"));
      //setUser_Steam_id(localStorage.getItem("steam_id"));
      //setApp_id(window.location.pathname.replace("/games/", ""));
      const user_id = localStorage.getItem("user_id");
      const user_Steam_id = localStorage.getItem("steam_id");
      const app_id = window.location.pathname.replace("/games/", "");
      console.log(user_id, user_Steam_id, app_id)
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //headers: { "Accept": "application/json" },
        body: JSON.stringify({
          user_id: user_id,
          app_id: app_id
        }),
      };
      //1. get game
      const response = await fetch(`http://localhost:4000/games`, options);
      const data = await response.json();
      console.log("1", data);
      setGame(data)
      console.log("1", game);
      //2. get achievement
      const achievementResponse = await fetch(`http://localhost:4000/achievements`, options);
      const achievementData = await achievementResponse.json();
      //console.log(achievementData.error);
      if (achievementData.error == undefined) {
        console.log("2 no error", achievementData);
        setAchievementList(achievementData);
        setLoading(true)
        console.log("2 no error", achievementList);
      } else {
        console.log("2 error", achievementData);
        setLoading(false)
        console.log("2 error", achievementList);
      }
    }
    async function syncAchievements() {
      let options;
      const user_id = localStorage.getItem("user_id");
      const user_Steam_id = localStorage.getItem("steam_id");
      const app_id = window.location.pathname.replace("/games/", "");
      /*options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //headers: { "Accept": "application/json" },
        body: JSON.stringify({
          user_id: user_id,
          app_id: app_id
        }),
      };
      //1. get games
      const response = await fetch(`http://localhost:4000/games`, options);
      const data = await response.json();
      console.log(data);*/
      console.log(user_id, user_Steam_id, app_id, game)
      //2. get achievements that user has attained from game
      const getAchievements = await fetch(`http://localhost:4000/steam/achievements/?appid=${app_id}&steamid=${user_Steam_id}`);
      const achievementsData = await getAchievements.json();
      console.log(achievementsData)
      //2.1 get additional info for that achievement (but do not know if user achieved it)
      const achievementInfo = await fetch(`http://localhost:4000/steam/achievementsinfo/${app_id}`);
      const achievementInfoData = await achievementInfo.json();
      console.log(achievementInfoData)
      //3. store achievements
      let achievement_description;
      let currency = 0;
      achievementsData.playerstats.achievements.map(async (achievement, index) => {
        if (achievement.apiname == achievementInfoData.game.availableGameStats.achievements[index].name
          && achievement.achieved == 1) {
          //console.log("yes", achievement.apiname, achievementInfoData.game.availableGameStats.achievements[index].name)
          if (achievementInfoData.game.availableGameStats.achievements[index].description == undefined) {
            achievement_description = "";
          } else {
            achievement_description = achievementInfoData.game.availableGameStats.achievements[index].description;
          }
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              achievement_name: achievementInfoData.game.availableGameStats.achievements[index].displayName,
              description: achievement_description,
              icon: achievementInfoData.game.availableGameStats.achievements[index].icon,
              app_id: app_id,
              user_id: user_id
            }),
          };
          const stashAchievements = await fetch(`http://localhost:4000/achievements/new`, options)
          const storedAchievements = await stashAchievements.json();
          console.log(storedAchievements)
          currency += 200;
          //4. update currency for user
          console.log(currency)
          options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              newCurrency: currency
            }),
          };
          const updateCurrency = await fetch(`http://localhost:4000/users/updatecurrency`, options)
          const currencyData = await updateCurrency.json();
          console.log(currencyData)
        }
      })
    }
    function displayAchievements() {
        return <div>{achievementList.map((achievement) => (
          <div className="achievement">
          <img
            className="d-inline-block"
            src={achievement.icon}
            alt="achievement icon"
          />
          <article>
            <h3 className="d-inline-block">{achievement.achievement_name}</h3>
            <p>{achievement.description}</p>
          </article>
        </div>
        ))}</div>
    }
    return (
      <div>
      <div className="pseudo-background"></div>
      <div className="d-flex justify-content-center">
        <div className="game-container position-relative z-1 d-flex flex-wrap">
          <div className="game-content">
            <img
              className="game-image"
              src={localStorage.background_image}
              alt="picture of the witcher 3 game"
            />
            <h2 className="game-title mb-5">{localStorage.game_name}</h2>
            <div className="game-description">
              <p>
                {localStorage.game_description}
              </p>
            </div>
          </div>

          <div className="achievement-container">
            <h2 className="achievements-header">Achievements</h2>
            <div className="achievement-overflow-scroller">
            { loading ? displayAchievements() : <h2><em>Achievements have not been Synced...</em></h2> }
            </div>
          </div>

        </div>
      </div>
    </div>
    );
}
