import './Header.css';
import React from "react"

export default function Header() {
    return ( 
        <>
        <section className='header'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
        </div>
      </section>
    </>
    );
};