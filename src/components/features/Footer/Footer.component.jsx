import './Footer.css';
import React from "react"

export default function Footer() {
    return ( 
        <>
        <section className='footer'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>GURU DD</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <a href="http://github.com/BatelHaiylo"><i className='fab fa-github icon'></i></a>
            <a href="http://www.linkedin.com/in/batel-haiylo/"><i className='fab fa-linkedin icon'></i></a>
          </div>
        </div>
      </section>
    </>
    );
};