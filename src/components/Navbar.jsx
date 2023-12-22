import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">mix master</span>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/newsletter">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
