import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

export default function Games() {
  const [games, setGames] = useState([]);

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

  return (
    <>

        <h1 className="text-center">Dashboard</h1>
      <h2 className="text-center">Popular Games</h2>
      <div className="row games-main">
        <div className="col-2">
          <h2 className="category-header">Categories</h2>
          <div className="game-category">Action</div>
          <div className="game-category">Adventure</div>
          <div className="game-category">Platform</div>
          <div className="game-category">Puzzle</div>
          <div className="game-category">Shooter</div>
          <div className="game-category">RPG</div>
      </div>
      <div className="col-10">
        <div className="games-container my-5">
          {games.map((game) => (
            <div className="card p-0 game-card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={game.background_image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">
                  {game.genres.map((genre) => (
                    <span>{genre.name} </span>
                  ))}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    </>
  );
}
