import React, { useState, useEffect } from 'react'
import styles from './Footer.css'
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineFolderView } from "react-icons/ai";


function Footer() {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          const timerID = setInterval(() => tick(), 1000);
      
          return () => {
            clearInterval(timerID);
          };
        }, []);
      
        const tick = () => {
          setTime(new Date());
        };

  return (
    <footer>
        <ul className='footer-icon'>
        <li>
         <FaLaptopCode className='pc-icon'/> 
        </li>
        <li className='view'>
        <AiOutlineFolderView className='view-icon'/>
        </li>
        </ul>

        <p className='footer-text'>©Copyright - 2024 -  
             <span className='styled-text footer-styled-text'>C</span>harles<span className='styled-text footer-styled-text'>T</span>heAwe<span className='styled-text footer-styled-text'>D</span>eveloper
        </p>

        <div className='time'>
           <p>{time.toLocaleDateString()}</p>
            <p>{time.toLocaleTimeString()}</p>
        </div>
        
    </footer>
  )
}

export default Footer