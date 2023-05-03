import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/store'>Store</NavLink>
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
