import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <img src="https://files.codingninjas.in/new_cn_logo-29829.svg" alt="" />
        </div>
        <div className="nav-menu">
          <ul type="none" className='list'>
            <li>
                <NavLink to='/' className='link'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className='link'>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className='link'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="auth">
          <div className="auth-btns">
            <button>
                <NavLink to='/login' className='link'>Log in</NavLink>
            </button>
            <button>
                <NavLink to='/signup' className='link'>Sign Up</NavLink>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Navbar