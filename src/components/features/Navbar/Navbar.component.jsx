import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../Header/Header.component"
import "./Navbar.css"

export default function Navbar() {
  const [click, setClick] = useState(false)

  return (
    <>
      <Header />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/courses'>All Courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/community'>Community</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/account'>Account</Link></li>
          </ul>
          <div className='start'>
            <div className='button'>
              <Link to='/courses' className="nav-link">GET CERTIFICATE</Link>
              </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
};