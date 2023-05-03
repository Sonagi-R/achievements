import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <>
          <NavLink to="/" id="logo" className="nav-component"><i className="fa-brands fa-steam fa-2xl steam"></i></NavLink>
          <NavLink to="/" id="logo" className="nav-component active-nav"><i className="fa-solid fa-trophy fa-2xl trophy"></i></NavLink>
          <NavLink to="/" id="logo" className="nav-component"><i className="fa-solid fa-cart-shopping fa-2xl cart"></i></NavLink>
      <Outlet />
    </>
  );
}
