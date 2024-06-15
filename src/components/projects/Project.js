import React, { useState } from 'react';
import styles from './Project.css';
import img1 from '../assets/slug.png';
import img2 from '../assets/img5.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img6.png';
import img6 from '../assets/img7.png';

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of project images
  const projects = [
    { image: img1, link: 'https://slugsixmusicstream.netlify.app/' },
    { image: img2, link: 'https://react-bookmark-landing-page.netlify.app/' },
    { image: img3, link: 'https://res-landing-page.vercel.app/' },
    { image: img4, link: 'https://papaya-sherbet-f1eac9.netlify.app/' },
    { image: img5, link: 'https://cosmic-dasik-92fea3.netlify.app/' },
    { image: img6, link: 'https://rainbow-entremet-137b69.netlify.app/' }
  ];

  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <div
          className='project'
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <img src={project.image} alt={`Project ${index + 1}`} className='project-image' />
            {hoveredIndex === index && <div className='view-btn'>view</div>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
