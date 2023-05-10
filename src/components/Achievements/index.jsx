import React from "react";
import "./index.css";

export default function Achievements() {
  return (
    <div className="row">
      <div className="col-3">
        <h2>Dashboard</h2>
        <h2>Text 1</h2>
        <h2>Text 2</h2>
        <h2>Text 3</h2>
        <h2>Text 4</h2>
      </div>
      <div className="col-2 d-flex flex-column align-items-center gap-2">
        <div className="logo-container">
          <i className="fa-brands fa-fantasy-flight-games fa-8x"></i>
        </div>
        <div className="panel d-flex ps-5 align-items-center"><i class="fa-solid fa-biohazard fa-2x"></i></div>
        <div className="d-flex gap-5">
          <p>Next Rank</p>
          <p>Progression</p>
        </div>

        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
      </div>
      <div className="col d-flex flex-column align-items-center">
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
            <div className="recent-game-image">
              <h2>Final Fantasy 7 Remake</h2>
            </div>
          </div>
          <div className="recent-game-details">
            <div className="overflow-scroller">
              <div className="panel mb-3">safdafdaffd</div>
              <div className="panel mb-3">dasdsad</div>
              <div className="panel mb-3">fdgdfgdgdf</div>
              <div className="panel mb-3">weqeqeq</div>
              <div className="panel mb-3">asfafaf</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
