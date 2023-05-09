import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

export default function Games() {
  const [games, setGames] = useState([]);
  //const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=db170b4f923142118fbbdc3e17c16422&&platforms=1");
    const data = await response.json();
    console.log(data.results);

    setGames(data.results);

    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
    }
  };
  
  const handleCardFlip = (index) => {
    const allCards = document.querySelectorAll(".flip-card-inner");
    console.log(allCards[1].style.transform);
      if (!allCards[index].style.transform || allCards[index].style.transform == "none") {
        allCards[index].style.transform = "rotateY(180deg)";
      } else {
        allCards[index].style.transform = "none";
      }
    };

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

    /*useEffect(() => {
        syncGames();
    }, [])*/

  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <h2 className="text-start games-container-title">Popular Games</h2>
      {/* might move search bar above first category to avoid it looking to long in current position */}

      <button onClick={syncGames}>Sync Your Games</button>
          {gamesData && Array.isArray(gamesData) &&
            gamesData.map((game) => (
            <div className="flashcard" key={game.name}>
                <img src="https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg" alt="" />
                <title>{game.name}</title>
                <p>{game.name}</p>
            </div>
          ))}
      
      <div className="position-relative search-container">
        <i className="fa-solid fa-magnifying-glass position-absolute start-0 mt-3 ms-4"></i>
        <input placeholder="Search For a Game" className="games-search color-black" type="text" />
      </div>
      <div className="row games-main">
        <div className="col-2 text-start">
          <div className="mb-5 mt-4">
            <h2 className="category-header">New Releases</h2>
            <div className="game-category ps-4">Action</div>
            <div className="game-category ps-4">Adventure</div>
            <div className="game-category ps-4">Platform</div>
            <div className="game-category ps-4">Puzzle</div>
            <div className="game-category ps-4">Shooter</div>
            <div className="game-category ps-4">RPG</div>
          </div>

          <div className="mb-5">
            <h2 className="category-header">Categories</h2>
            <div className="game-category ps-4">Action</div>
            <div className="game-category ps-4">Adventure</div>
            <div className="game-category ps-4">Platform</div>
            <div className="game-category ps-4">Puzzle</div>
            <div className="game-category ps-4">Shooter</div>
            <div className="game-category ps-4">RPG</div>
          </div>

          <div>
            <h2 className="category-header">Categories</h2>
            <div className="game-category ps-4">Action</div>
            <div className="game-category ps-4">Adventure</div>
            <div className="game-category ps-4">Platform</div>
            <div className="game-category ps-4">Puzzle</div>
            <div className="game-category ps-4">Shooter</div>
            <div className="game-category ps-4">RPG</div>
          </div>
        </div>
        <div className="col-10">
          <div className="games-container my-5">
            {games.map((game, index) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="card p-0 game-card flip-card-front" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={game.background_image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{game.name}</h5>
                      <p className="card-text">
                        {game.genres.map((genre) => (
                          <span>{genre.name} </span>
                        ))}
                      </p>
                      <button
                        onClick={() => {
                          handleCardFlip(index);
                        }}
                        className="btn btn-primary"
                      >
                        Flip Card
                      </button>
                    </div>
                  </div>
                  <div className="card flip-card-back">
                    <h1 className="card-header">Game Title</h1>
                    <p className="card-text">Achievement 1</p>
                    <p className="card-text">Achievement 2</p>
                    <button
                      onClick={() => {
                        handleCardFlip(index);
                      }}
                      className="btn btn-primary"
                    >
                      Flip Card
                    </button>
                    <a
                      href="/achievements/2"
                      className="btn btn-primary mt-2"
                    >
                      View Game Page
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
