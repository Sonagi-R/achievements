import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { themes, user } from "../../context";
import logo from '../../assets/logo.png'

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("");
  const { theme, toggleTheme } = themes();
  const [currency, setCurrency] = useState();

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

  useEffect(() => {
    getCurrency();
  }, []);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [useNavigate()]);


  const handleLogout = async() => {
    await fetch("http://localhost:4000/users/logout", {credentials: "include"})
    localStorage.user_id = ""
    localStorage.steam_id = ""
    localStorage.username = ""
    window.location.assign("/login")
  }

  const getCurrency = async () => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    };
    const response = await fetch("http://localhost:4000/users/current", options)
    const data = await response.json();
    setCurrency(data.currency);
    console.log(data)
  }

  return (
    <>
      <nav className="d-flex justify-content-between align-items-start">
        <h2 className="nav-logo"><img src={logo}/></h2>
        {currentPage == "/achievements" ? (
          <>
            <div className="nav-links">
              <NavLink to="/games" className="nav-component">
                <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
              </NavLink>
              <NavLink to="/achievements" className="nav-component active-nav">
                <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
              </NavLink>
              <NavLink to="/store" className="nav-component">
                <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
              </NavLink>
            </div>
            <div className="nav-right d-flex gap-3">
              <h2>{currency}¢</h2>
              <h2>{localStorage.username}</h2>
              <button onClick={handleLogout} id="logout">Logout</button>
            </div>
          </>
        ) : (
          ""
        )}

        {currentPage == "/games" ? (
          <>
            <div className="nav-links">
            <NavLink to="/achievements" className="nav-component">
              <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
            </NavLink>
            <NavLink to="/games" className="nav-component active-nav">
              <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
            </NavLink>
            <NavLink to="/store" className="nav-component">
              <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
              </NavLink>
            </div>
            <div className="nav-right d-flex gap-3">
              <h2>{currency}¢</h2>
              <h2>{localStorage.username}</h2>
              <button onClick={handleLogout} id="logout">Logout</button>
            </div>
          </>
        ) : (
          ""
        )}
        {currentPage == "/store" ? (
          <>
            <div className="nav-links">
            <NavLink to="/achievements" className="nav-component">
              <i className="fa-brands fa-steam fa-2xl steam" title="steam"></i>
            </NavLink>
            <NavLink to="/store" className="nav-component active-nav">
              <i className="fa-solid fa-cart-shopping fa-2xl cart" title="cart"></i>
            </NavLink>
            <NavLink to="/games" className="nav-component">
              <i className="fa-solid fa-trophy fa-2xl trophy" title="trophy"></i>
              </NavLink>
            </div>
            <div className="nav-right d-flex gap-3">
              <h2>{currency}¢</h2>
              <h2>{localStorage.username}</h2>
              <button onClick={handleLogout} id="logout">Logout</button>
            </div>
          </>
        ) : (
          ""
        )}
        {theme.backgroundColor == "#0D1225" ? (
          <button className="toggle-button" onClick={toggleTheme}>
            <i className="toggle-circle"></i>
          </button>
        ) : (
          <button className="toggle-button-light" onClick={toggleTheme}>
            <i className="toggle-circle-light"></i>
          </button>
        )}
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
