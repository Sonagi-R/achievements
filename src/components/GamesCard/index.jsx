import React from "react";
import { useState, useEffect } from "react";

export default function GamesCard() {
  const [games, setGames] = useState([]);
  const [synced, setSynced] = useState(false)

  return (
        <div className="games-container my-5">
            {games.map((game, index) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="card p-0 game-card flip-card-front" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={game.background_image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{game.game_name}</h5>
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
                    <h1 className="card-header">{game.game_name}</h1>
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
  );
}
