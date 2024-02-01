import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
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
          {props.beforeLoginButtonsVisible && (
            <>
              <button className='login-btn'>
                <NavLink to='/login' className='link'>Login</NavLink>
              </button>
              <button className='signup-btn'>
                <NavLink to='/signup' className='link'>Sign Up</NavLink>
              </button>
            </>
          )}
          {props.afterLoginButtonsVisible && (
            <>
              <button className='logout-btn' onClick={props.logoutClickHandler}>
                <NavLink to='/logout' className='link'>Log out</NavLink>
              </button>
              <button className='dashboard-btn'>
                <NavLink to='/dashboard' className='link'>Dashboard</NavLink>
              </button>
            </>
          )}
        </div>
        </div>
      </div>
  )
}

export default Navbar