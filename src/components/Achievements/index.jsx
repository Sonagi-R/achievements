import React, { useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Achievements() {
  const navigate = useNavigate();

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
            <i class="fa-solid fa-clock mx-4"></i>Most Recent
          </h4>
          <h4 className="achievement-category">
            <i class="fa-solid fa-gamepad mx-4"></i>Most Played
          </h4>
          <h4 className="achievement-category">
            <i class="fa-solid fa-star mx-4"></i>Highest Score
          </h4>
          <h4 className="achievement-category">
            <i class="fa-solid fa-star-half-stroke mx-4"></i>Lowest Score
          </h4>
        </div>
      </div>
      <div className="secondary-column col-2 d-flex flex-column align-items-center gap-2">
          <div className="logo-container">
          <i className="fa-brands fa-fantasy-flight-games fa-8x"></i>
          </div>
        <div className="panel d-flex ps-5 align-items-center justify-content-around">
          <i class="fa-solid fa-fire fa-2x"></i>
          <h4>15 Days</h4>
        </div>
        <div className="d-flex gap-5 justify-content-around">
          <p>On Fire</p>
          <p>Streak</p>
        </div>

        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
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
              <h2 className="card-title">Final Fantasy 7 Remake</h2>
              <p className="card-text">07/05/2023</p>
              <button className="recent-game-button">View Game Page</button>
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
