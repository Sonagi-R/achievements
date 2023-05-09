import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { themes } from "../../context";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("");
  const { theme, toggleTheme } = themes();

  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.color;
    // document.querySelector('h1').style.color = theme.color;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme.backgroundColor]);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [useNavigate()]);

  return (
    <>
      <nav>
        {currentPage == "/" ? (
          <>
            <NavLink to="/games" className="nav-component">
              <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
            </NavLink>
            <NavLink to="/" className="nav-component active-nav">
              <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
            </NavLink>
            <NavLink to="/store" className="nav-component">
              <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
            </NavLink>
          </>
        ) : (
          ""
        )}

        {currentPage == "/games" ? (
          <>
            <NavLink to="/" className="nav-component">
              <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
            </NavLink>
            <NavLink to="/games" className="nav-component active-nav">
              <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
            </NavLink>
            <NavLink to="/store" className="nav-component">
              <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
            </NavLink>
          </>
        ) : (
          ""
        )}
        {currentPage == "/store" ? (
          <>
            <NavLink to="/" className="nav-component active-nav">
              <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
            </NavLink>
            <NavLink to="/store" className="nav-component active-nav">
              <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
            </NavLink>
            <NavLink to="/games" className="nav-component active-nav">
              <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
            </NavLink>
          </>
        ) : (
          ""
        )}
        {theme.backgroundColor == '#0D1225' ?<button className="toggle-button" onClick={toggleTheme}><i className="toggle-circle"></i></button>: <button className="toggle-button-light" onClick={toggleTheme}><i className="toggle-circle-light"></i></button>}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>This is the Footer, whats up!</p>
      </footer>
    </>
  );
}
