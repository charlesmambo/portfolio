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
  const projects = [img1, img2, img3, img4, img5, img6];

  return (
    <div className='projects-container'>
      {projects.map((image, index) => (
        <div
          className='project'
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href=''>
            <img src={image} alt={`Project ${index + 1}`} className='project-image' />
            {hoveredIndex === index && <div className='view-btn'>view</div>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
