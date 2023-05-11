import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Achievements() {
  const [recentGameData, setRecentGameData] = useState({});
  const [achievementList, setAchievementList] = useState([]);
  const navigate = useNavigate();
  // const recentGame = "final-fantasy-vii-remake"
  const user_steam_id = localStorage.getItem("steam_id");
  const user_id = localStorage.getItem("user_id");

  async function getRecentGame() {
    const response = await fetch(`http://localhost:4000/steam/recent/${user_steam_id}`);
    const recentGameid = response.response.games[0].appid;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        user_id: user_id,
        app_id: recentGameid,
      }),
    };

    const achievements = await fetch(`http://localhost:4000/achievements/`, options);
    const achievementData = await achievements.json();
    setAchievementList(achievementData);

    let text;
    let simpleName;
    let simpleNameDashed;

    text = recentGameName.split("");
    simpleName = recentGameName.split("");
    simpleNameDashed = recentGameName.split("");
    simpleName = text.replace("™", "");
    simpleName = simpleName.replace(":", "");
    simpleName = simpleName.replace("®", "");
    simpleName = simpleName.replace("©", "");
    simpleName = simpleName.replace("®", "");
    simpleName = simpleName.replace("'", "");
    simpleNameDashed = simpleName.replace(" ", "-");
    simpleName = simpleName.join("");
    simpleNameDashed = simpleNameDashed.join("");

    const res = await fetch(`https://api.rawg.io/api/games/${simpleNameDashed}?key=db170b4f923142118fbbdc3e17c16422&platforms=1`);
    const data = await res.json();
    console.log(data);
    setRecentGameData(data);
    console.log(recentGameData);
  }

  const handleAchievementLink = (app_id, game_description, game_name, genres, background_image) => {
    localStorage.setItem("game_description", game_description);
    localStorage.setItem("game_name", game_name);
    localStorage.setItem("genres", genres);
    localStorage.setItem("background_image", background_image);
    window.location.assign(`/games/${app_id}`);
  };
  useEffect(() => {
    getRecentGame();
  }, []);

  useEffect(() => {
    if (localStorage.user_id === "") {
      navigate("/login");
    }
  }, [localStorage.user_id, navigate]);

  return (
    <div className="row">
      <div className="primary-column col-2 mt-2">
        <h2 className="pb-3">Achievements</h2>
        <div className="achievement-categories d-flex flex-column">
          <h4 className="achievement-category achievement-category-active">
            <i className="fa-solid fa-clock mx-4"></i>Most Recent
          </h4>
          <h4 className="achievement-category">
            <i className="fa-solid fa-gamepad mx-4"></i>Most Played
          </h4>
          <h4 className="achievement-category">
            <i className="fa-solid fa-star mx-4"></i>Highest Score
          </h4>
          <h4 className="achievement-category">
            <i className="fa-solid fa-star-half-stroke mx-4"></i>Lowest Score
          </h4>
        </div>
      </div>
      <div className="secondary-column col-2 d-flex flex-column align-items-center gap-2">
        <div className="logo-container">
          <i className="fa-brands fa-fantasy-flight-games fa-8x"></i>
        </div>
        <div className="panel d-flex ps-5 align-items-center justify-content-around">
          <i className="fa-solid fa-fire fa-2x"></i>
          <h4>15 Days</h4>
        </div>
        <div className="d-flex gap-5 justify-content-around">
          <p>On Fire</p>
          <p>Streak</p>
        </div>
        <h5>Bounties</h5>
        <div className="challenges panel d-flex align-items-center">
          <i className="fa-regular fa-star-half-stroke me-3"></i>
          <h4 className="challenges-text">Get 100% achievements in a game!</h4>
          <h4 className="challenges-score">500</h4>
        </div>
        <div className="challenges panel d-flex align-items-center">
          <i className="fa-regular fa-star-half-stroke me-3"></i>
          <h4 className="challenges-text">SpeedRun Sonic Generations!</h4>
          <h4 className="challenges-score">350</h4>
        </div>
        <div className="challenges panel d-flex align-items-center challenge-complete">
          <i className="fa-solid fa-star me-3"></i>
          <h4 className="challenges-text">Play 1 hour of a game you haven't played!</h4>
          <h4 className="challenges-score">150</h4>
        </div>
      </div>
      <div className="col-7 d-flex flex-column align-items-center">
        <div className="row d-flex justify-content-around gap-5 mb-4">
          <div className="metric-container card">
            <p className="card-title">Total Achievement Points</p>
            <p className="card-text">23,500</p>
          </div>
          <div className="metric-container card">
            <p className="card-title">Lifetime Achievement Score</p>
            <p className="card-text">7,400</p>
          </div>
          <div className="metric-container card">
            <p className="card-title">Achievement Score</p>
            <p className="card-text">5,400</p>
          </div>
        </div>
        <div className="recent-game row d-flex flex-column align-items-center gap-2">
          <div className="recent-game-image-container">
            <div className="card recent-game-image d-flex flex-column align-items-center">
              {/* <h2 className="card-title">Final Fantasy 7 Remake</h2> */}
              <h2>{recentGameData.name}</h2>
              <p className="card-text">{recentGameData.released}</p>
              <button className="recent-game-button">View Game Page</button>
            </div>
          </div>
          <div className="recent-game-details">
            <div className="overflow-scroller">
              <div className="panel mb-3">
                <div className="achievement-icon">{achievementList[0].icon}</div>
                <div className="achievement-name">{achievementList[0].achievement_name}</div>
                <div className="achievement-description">{achievementList[0].description}</div>
              </div>
              <div className="panel mb-3">
                <div className="achievement-icon">{achievementList[1].icon}</div>
                <div className="achievement-name">{achievementList[1].achievement_name}</div>
                <div className="achievement-description">{achievementList[1].description}</div>
              </div>
              <div className="panel mb-3">
                <div className="achievement-icon">{achievementList[2].icon}</div>
                <div className="achievement-name">{achievementList[2].achievement_name}</div>
                <div className="achievement-description">{achievementList[2].description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
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
*/
