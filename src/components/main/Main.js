import React from 'react';
import styles from './Main.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Main() {
  return (
    <div className='main-container'>
        <div className='main-box'>
           <div className='sidebar'>
               <div className='sidebar-icons'>
                    <ul className='sidebar-items'>
                        <li>
                        <IoMdHome className='home-icon'/> 
                        </li>
                        <li>
                        <FaCircle  className='sidebar-icon'/>
                        </li>
                        <li>
                        <FaCircle className='sidebar-icon'/>
                        </li>
                    </ul>
               </div>

               {/* FOLDERS  */}
               <div className='folders-container'>
                    <p className='folder-title'>Folders</p>
                    <ul className='folder-list'>
                        <li>
                            <a href='' className='folder-link'>
                            <FaRegFolderOpen className='folder-icon'/> 
                            Projects
                            </a>
                        </li>
                        <li>
                            <a href='' className='folder-link'>
                            <FaRegFolderOpen className='folder-icon'/> 
                            Blog
                            </a>
                        </li>
                        <li>
                            <a href='' className='folder-link'>
                            <FaRegFolderOpen className='folder-icon'/>
                            My Skills
                            </a>
                        </li>
                    </ul>
               </div>

               {/* FILES / ABOUT ME */}
               <div className='files'>
                  <p className='folder-title'>Files</p>
                  <ul className='folder-list'>
                  <li>
                    <a href='' className='folder-link'>
                    <FaRegFile  className='folder-icon'/>
                    About Me
                    </a>
                </li>
                </ul>
               </div>

               {/* FILES / CONTACT ME */}
               <div className='contact'>
                  <p className='folder-title'>Contact</p>
                  <ul className='folder-list'>
                  <li>
                    <a href='' className='folder-link'>
                    <MdOutlineEmail  className='folder-icon'/>
                    Email Me
                    </a>
                </li>
                  <li>
                    <a href='' className='folder-link'>
                    <FaPhone  className='folder-icon'/>
                    Call Me
                    </a>
                </li>
                  <li>
                    <a href='' className='folder-link'>
                    <FaWhatsapp  className='folder-icon'/>
                    WhatsApp Me
                    </a>
                </li>
                </ul>
               </div>


           </div>

           {/* MAIN COMPONENTS DISPLAY */}
           <div className='components-container'>
             hey im here
           </div>
        </div>

        {/* SOCIAL ICONS LINK */}
        <div className='social-icons'>
          <ul>
            <li>
                <a href=''>
                <FaLinkedin />
                </a>
            </li>
            <li>
                <a href=''>
                <FaSquareInstagram />
                </a>
            </li>
            <li>
                <a href=''>
                <FaFacebookSquare />
                </a>
            </li>
            <li>
                <a href=''>
                <BsTwitterX />
                </a>
            </li>
            <li>
                <a href=''>
                <SiFrontendmentor />
                </a>
            </li>
            <li>
                <a href=''>
                <FaGithubSquare />
                </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Main