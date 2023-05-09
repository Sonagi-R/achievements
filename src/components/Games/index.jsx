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
      <h2 className="text-start games-container-title">Popular Games</h2>
      {/* might move search bar above first category to avoid it looking to long in current position */}
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
