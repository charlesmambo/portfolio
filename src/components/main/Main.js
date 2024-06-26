import React, { useState } from 'react';
import styles from './Main.css';
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
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCopy } from "react-icons/fa6";
import Project from '../projects/Project';
import Contact from '../contact/Contact';


function Main() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const [showCallDiv, setShowCallDiv] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); 
    setShowCallDiv(!showCallDiv);
  };

  const handleCopyClick = () => {
    const phoneNumber = '+276 232-86152';
    navigator.clipboard.writeText(phoneNumber)
    .then(() => {
      console.log('Phone number copied to clipboard!');
      setTimeout(() => {
        setShowCallDiv(false);
      }, 2000); // Hide after 2 seconds
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };


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
                  <li className='email'>
                    <a href="#" className="folder-link" onClick={toggleContactForm}>
                        <MdOutlineEmail className="folder-icon" />
                        Email Me
                    </a>
                </li>
                <li>
                    <a href='#' className='folder-link' onClick={handleClick}>
                      <FaPhone className='folder-icon' />
                      Call Me
                    </a>
                  </li>
                  {showCallDiv && (
                    <div className='call-div'>
                      <p className='call-txt'>+276 232-86152</p>
                      <p onClick={handleCopyClick} style={{ cursor: 'pointer' }}>
                      <FaCopy className='call-txt cal-icon' />
                    </p>
                    </div>
                  )}
                  <li>
                    <a href='https://web.whatsapp.com/' className='folder-link'>
                    <FaWhatsapp  className='folder-icon'/>
                    WhatsApp Me
                    </a>
                </li>
                </ul>
               </div>


           </div>

           {/* MAIN COMPONENTS DISPLAY */}
           <div className='components-container'>
             <div className='nav-componennts'>
               <ul className='nav-components-items'>
                   <li>
                  <a href='' >Home</a>
                 </li>
                 <li>
                 <MdOutlineArrowRightAlt  className='arrow-icon-container adjust-520'/>
                 </li>
                   <li>
                  <a href='' className='adjust-520'>Projects</a>
                 </li>
                 <li>
                 <MdOutlineArrowRightAlt  className='arrow-icon-container adjust-520 adjust-desktop-view'/>
                 </li>
                   <li>
                  <a href='' className='adjust-520 adjust-desktop-view'>About Me</a>
                 </li>
                 <li>
                 <MdOutlineArrowRightAlt  className='arrow-icon-container adjust-520 adjust-desktop-view'/>
                 </li>
                   <li>
                  <a href='' className='adjust-520 adjust-desktop-view'>My Skills</a>
                 </li>

                 {/*Hidden. Drop Down Navbar */}
                  <li>
                  <a href='' ><GiHamburgerMenu  className='hamburger-icon'/></a>

                  <ul className='hidden-drop-down-navbar'>
                  <li>
                  <a href='' >Projects</a>
                 </li>
                 <li>
                  <a href='' >About Me</a>
                 </li>
                 <li>
                  <a href='' >My Skills</a>
                 </li>
                  </ul>
                  </li>
                  
                 
               </ul>
             </div>

             {/* main actavities display */}
             <div className='main-mirror'>
             <Project toggleContactForm={toggleContactForm} showContactForm={showContactForm} />
             </div>
           </div>
        </div>

        {/* SOCIAL ICONS LINK */}
        <div className='social-icons'>
          <ul className='social-icons-item'>
            <li>
                <a href='https://www.linkedin.com/in/charles-mambo-932aa221b/' >
                <FaLinkedin />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/cmwebtechs/'>
                <FaSquareInstagram />
                </a>
            </li>
            <li>
                <a href='https://www.facebook.com/profile.php?id=100072474335119'>
                <FaFacebookSquare />
                </a>
            </li>
            <li>
                <a href='https://x.com/CmTechs'>
                <BsTwitterX />
                </a>
            </li>
            <li>
                <a href='https://www.frontendmentor.io/profile/charlesmambo'>
                <SiFrontendmentor />
                </a>
            </li>
            <li>
                <a href='https://github.com/charlesmambo'>
                <FaGithubSquare />
                </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Main