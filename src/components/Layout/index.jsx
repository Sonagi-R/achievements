import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'

export default function Layout() {
  return (
    <>
        <nav>
            <NavLink to='/' className="nav-component"><i className="fa-brands fa-steam fa-2xl steam" title='steam'></i></NavLink>
            <NavLink to='/login' className="nav-component active-nav"><i className="fa-solid fa-trophy fa-2xl trophy" title='trophy'></i></NavLink>
            <NavLink to='/store' className="nav-component"><i className="fa-solid fa-cart-shopping fa-2xl cart" title='cart'></i></NavLink>
        </nav>
        <main>
        <Outlet />
        </main>
        <footer>
            <p>This is the Footer, whats up!</p>
        </footer>
    </>
  )
}
