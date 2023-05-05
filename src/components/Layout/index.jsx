import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("");

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
