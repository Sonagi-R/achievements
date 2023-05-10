import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

export default function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([])

  useEffect(() => {
    //getAPI();
    syncGames();
  }, []);

  const getAPI = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=db170b4f923142118fbbdc3e17c16422&&platforms=1");
    const data = await response.json();
    console.log(data.results);

    setGames(data.results);
    setFilteredGames(data.results)

    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
    }
  };


  const handleSearch = (e) => {
    setFilteredGames(games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

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
        //1. get games
        const fetchGames = await fetch(`http://localhost:4000/steam/games/${user_Steam_id}`);
        const gameData = await fetchGames.json();
        console.log(gameData.response.games);

        //2. store games
        let gameArr = [];
        let text;
        let simpleName;
        let simpleNameDashed;
        let options;
        let index = 0;
        const operation = await gameData.response.games.map(async (game) => {
            console.log(index)

            text = game.name.split("");
            simpleName = game.name.split("");
            simpleNameDashed = game.name.split("");
            for (let i = 0; i < text.length; i++) {
                simpleName[i] = text[i].replace("™", "");
                simpleName[i] = simpleName[i].replace(":", "");
                simpleName[i] = simpleName[i].replace("®", "");
                simpleName[i] = simpleName[i].replace("©", "");
                simpleName[i] = simpleName[i].replace("®", "");
                simpleName[i] = simpleName[i].replace("'", "");
                simpleNameDashed[i] = simpleName[i].replace(" ", "-");
            }
            simpleName = simpleName.join("");
            simpleNameDashed = simpleNameDashed.join("");
            //simpleName = text.replace("/(™|:|®|©)/", "");
            console.log(simpleName, simpleNameDashed)

            //1.5 get additonal game info
            try {
                const rawrAdditionalInfo = await fetch(`https://api.rawg.io/api/games/${simpleNameDashed}?key=db170b4f923142118fbbdc3e17c16422&platforms=1`);
                const rawrAdditionalData = await rawrAdditionalInfo.json();
                console.log(rawrAdditionalData);

                //2. store games
                options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    //headers: { "Accept": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ 
                    app_id: game.appid, 
                    game_name: game.name,
                    playtime: game.playtime_windows_forever, 
                    user_id: user_id,
                    game_description: rawrAdditionalData.description,
                    genres: rawrAdditionalData.genres,
                    background_image: rawrAdditionalData.background_image  
                    }),
                };
                
                try {
                    const stashGames = await fetch(`http://localhost:4000/games/new`, options);
                    const storedGames = await stashGames.json();
     
                    console.log(storedGames, game.name, index)
                    gameArr.push(storedGames)
                } catch (err) {
                    console.log(err);
                }

            } catch (err) {
                console.log(err);
            }

            index++;
        })
        console.log("gamearr", gameArr)
        setGames(gameArr);
        console.log("games", games)
    }


    /*useEffect(() => {
        syncGames();
    }, [])*/

  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <h2 className="text-start games-container-title">Popular Games</h2>
      {/* might move search bar above first category to avoid it looking to long in current position */
      <div className="position-relative search-container">
        <i className="fa-solid fa-magnifying-glass position-absolute start-0 mt-3 ms-4"></i>
        <input placeholder="Search For a Game" onChange={handleSearch} className="games-search color-black" type="text" />
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
            {filteredGames.map((game, index) => (
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
