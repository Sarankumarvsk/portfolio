import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import { useEffect, useState } from "react";
import saran from "../image/saran.png";
import sarankumar from "../image/sarankumar.pdf";
const Hero = () => {
    const roles = [
    "Python Developer",
    "Python Full Stack Developer",
    "Web Developer"
  ];
  const rolesCount = roles.length;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rolesCount);
    }, 3000);

    return () => clearInterval(timer);
  });
    return (
        <div className="hero-container" id="home">
            <div className="hero-content">
                <h1 className="hero-heading">
                    Hi, I'm <span className="highlight">SARANKUMAR V</span>
                </h1>
                <h1 className="hero-role fade-anim hero-description">
              {roles[index]}
            </h1>
               
                <div className="hero-btns">
                   <a href={sarankumar} download className='btn-secondary'>Resume</a>
                    <Link to="contact" smooth={true} duration={500} className="btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </div>
            <div className="hero-img-wrapper">
                <div className="hero-img-placeholder">
                    <div className="profile-circle">
                        <img src={saran} alt="Saran" className='myimage'/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
