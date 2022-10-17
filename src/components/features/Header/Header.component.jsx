import './Header.css';
import React from "react"

export default function Header() {
    return ( 
        <>
        <section className='header'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>GURU DD</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='user'>
            <i className="fa fa-user icon" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </>
    );
};