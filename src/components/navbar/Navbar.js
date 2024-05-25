import React from 'react'
import styles from './Navbar.css'
import img  from '../assets/char.jpg'
import { FaPhone } from "react-icons/fa";


function Navbar() {
  return (
    <div className='nav-container'>
       <nav>
        <div className='logo-container'>
          <img src={img} alt='charless picture' />
          <p className='logo-text'>
            <span className='styled-text'>C</span>harles<span className='styled-text'>T</span>heAwe<span className='styled-text'>D</span>eveloper</p>
        </div>

         <div className='box'>
            <p className='intro-text'>
              Self-taught Front-end Developer
            </p>
            <a className='contact-link' href='' >
               <FaPhone className='contact-icon'/>
            </a>
         </div>
        
       </nav>
    </div>
  )
}

export default Navbar