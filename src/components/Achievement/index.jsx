import React from "react";
import "./index.css";

export default function Achievement() {
  return (
    <div>
      <div className="pseudo-background"></div>
      <div className="d-flex justify-content-center">
        <div className="game-container position-relative z-1 d-flex flex-wrap">
          <img
            className="game-image"
            src="https://thumbnails.pcgamingwiki.com/a/a4/The_Witcher_3_Wild_Hunt_-_cover.jpg/300px-The_Witcher_3_Wild_Hunt_-_cover.jpg"
            alt="picture of the witcher 3 game"
          />
          <h2 className="game-title mb-5">The Witcher 3</h2>
          <div className="change-game"><i class="fa-solid fa-circle-left fa-2xl"></i><i class="fa-solid fa-circle-right fa-2xl ms-3"></i></div>
          <button className="play-on-steam" href="#">Play on Steam<i className="fa-brands fa-steam fa-2xl steam ms-3" title='steam'></i></button>
          <div className="achievement-container">
            <h2>Achievements</h2>
            <div className="achievement">
              <img
                className="d-inline-block"
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/292030/6078587189483353f06f48d0eefdaaa0791e9e13.jpg"
                alt="achievement icon"
              />
              <article>
                <h3 className="d-inline-block">Lilac and Gooseberries</h3>
                <p>Find Yennefer of Vengerberg.</p>
              </article>
            </div>
            <div className="achievement">
              <img
                className="d-inline-block"
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/292030/07bae88f1ee9b856ddfc1d8e28ae7eedd4bcde95.jpg"
                alt="achievement icon"
              />
              <article>
                <h3 className="d-inline-block">A Friend in Need</h3>
                <p>Find and free Dandelion.</p>
              </article>
            </div>
            <div className="achievement">
              <img
                className="d-inline-block"
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/292030/652e39d4e750183a390a4e9f2f99018c1b335a20.jpg"
                alt="achievement icon"
              />
              <article>
                <h3 className="d-inline-block">Necromancer</h3>
                <p>Help Yennefer extract information from Skjall's body.</p>
              </article>
            </div>
            <div className="achievement">
              <img
                className="d-inline-block"
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/292030/dd53b81dd01f0e5e192a3dd74f3be85d2d352887.jpg"
                alt="achievement icon"
              />
              <article>
                <h3 className="d-inline-block">Environmentally Unfriendly</h3>
                <p>Kill 50 opponents using the environment e.g. swamp gas, insects or objects.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
